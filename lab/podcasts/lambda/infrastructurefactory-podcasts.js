/*
    podcasts.selfdriven.institute — Lambda factory

    Lists resources/podcasts from selfdriven-foundation/selfdriven-institute on GitHub
    and serves a player page, an RSS feed, a JSON listing and a range-aware audio proxy.

    Routes
        GET  /                  util-aws-podcasts-page-serve
        GET  /feed.xml          util-aws-podcasts-feed-serve
        GET  /episodes.json     util-aws-podcasts-episodes-serve
        GET  /audio/:file       util-aws-podcasts-audio-serve   (Range → 206 chunk, none → 302 to raw GitHub)
        HEAD /audio/:file       util-aws-podcasts-audio-serve
        GET  /health, /robots.txt, /favicon.ico

    Every route that needs the listing goes through util-aws-podcasts-listing-get,
    which caches in scope 'podcasts' across warm invocations and chains to param.next.
*/

var entityos = require('entityos');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

module.exports =
{
    VERSION: '1.0.0',

    init: function (param)
    {
        // ── 1. Settings ─────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-get-settings',
            code: function ()
            {
                const settings = entityos.get({ scope: '_settings' });

                return {
                    owner:        _.get(settings, 'podcasts.github.owner', 'selfdriven-foundation'),
                    repo:         _.get(settings, 'podcasts.github.repo', 'selfdriven-institute'),
                    branch:       _.get(settings, 'podcasts.github.branch', 'main'),
                    path:         _.get(settings, 'podcasts.github.path', 'resources/podcasts'),
                    token:        _.get(settings, 'podcasts.github.token', ''),
                    siteURL:      _.trimEnd(_.get(settings, 'podcasts.siteURL', 'https://podcasts.selfdriven.institute'), '/'),
                    chunkBytes:   _.toNumber(_.get(settings, 'podcasts.chunkBytes', 3670016)),
                    cacheSeconds: _.toNumber(_.get(settings, 'podcasts.cacheSeconds', 600))
                };
            }
        });

        // ── 2. Router ───────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-route',
            code: function ()
            {
                const event = entityos.get({ scope: '_event' });

                const method = (_.get(event, 'requestContext.http.method')
                    || _.get(event, 'httpMethod')
                    || 'GET').toUpperCase();

                const rawPath = _.get(event, 'rawPath')
                    || _.get(event, 'requestContext.http.path')
                    || _.get(event, 'path')
                    || '/';

                console.log('[podcasts] ' + method + ' ' + rawPath);

                if (method !== 'GET' && method !== 'HEAD')
                {
                    entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Method not allowed', status: 405 }));
                }
                else if (rawPath === '/favicon.ico')
                {
                    entityos.invoke('util-end', { statusCode: 204, headers: {}, body: '' });
                }
                else if (rawPath === '/robots.txt')
                {
                    entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'User-agent: *\nAllow: /\n', status: 200 }));
                }
                else if (rawPath === '/health')
                {
                    entityos.invoke('util-end', entityos.invoke('util-response-json', { body: { ok: true }, status: 200 }));
                }
                else if (rawPath === '/' || rawPath === '/index.html')
                {
                    entityos.invoke('util-aws-podcasts-listing-get', { next: 'util-aws-podcasts-page-serve' });
                }
                else if (rawPath === '/feed.xml')
                {
                    entityos.invoke('util-aws-podcasts-listing-get', { next: 'util-aws-podcasts-feed-serve' });
                }
                else if (rawPath === '/episodes.json')
                {
                    entityos.invoke('util-aws-podcasts-listing-get', { next: 'util-aws-podcasts-episodes-serve' });
                }
                else if (_.startsWith(rawPath, '/audio/'))
                {
                    let name;
                    try { name = decodeURIComponent(rawPath.substring('/audio/'.length)); }
                    catch (err) { name = undefined; }

                    if (name == undefined || name === '')
                    {
                        entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Not found', status: 404 }));
                        return;
                    }

                    entityos.set({ scope: 'podcasts', context: 'request', value: { method: method, name: name } });
                    entityos.invoke('util-aws-podcasts-listing-get', { next: 'util-aws-podcasts-audio-serve' });
                }
                else
                {
                    entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Not found', status: 404 }));
                }
            }
        });

        // ── 3. GitHub listing (cached across warm invocations) ──────

        entityos.add(
        {
            name: 'util-aws-podcasts-listing-get',
            code: function (param)
            {
                const next = _.get(param, 'next');
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                const cached = entityos.get({ scope: 'podcasts', context: 'listing' });
                const cachedAt = entityos.get({ scope: 'podcasts', context: 'listingAt' }) || 0;

                if (cached != undefined && (Date.now() - cachedAt) < podcasts.cacheSeconds * 1000)
                {
                    entityos.invoke(next);
                    return;
                }

                const url = 'https://api.github.com/repos/' + podcasts.owner + '/' + podcasts.repo
                    + '/contents/' + podcasts.path + '?ref=' + encodeURIComponent(podcasts.branch);

                const headers = { 'accept': 'application/vnd.github+json', 'user-agent': 'podcasts.selfdriven.institute' };
                if (podcasts.token) { headers.authorization = 'Bearer ' + podcasts.token; }

                fetch(url, { headers: headers })
                .then(function (response)
                {
                    if (!response.ok)
                    {
                        return response.text().then(function (text)
                        {
                            throw new Error('GitHub ' + response.status + ': ' + text.substring(0, 200));
                        });
                    }
                    return response.json();
                })
                .then(function (items)
                {
                    const listing = entityos.invoke('util-aws-podcasts-listing-build', { items: items });
                    entityos.set({ scope: 'podcasts', context: 'listing', value: listing });
                    entityos.set({ scope: 'podcasts', context: 'listingAt', value: Date.now() });
                    console.log('[podcasts] Listing refreshed: ' + listing.episodes.length + ' episodes, ' + listing.extras.length + ' extras');
                    entityos.invoke(next);
                })
                .catch(function (err)
                {
                    console.error('[podcasts] Listing error:', err.message);

                    if (cached != undefined)
                    {
                        console.log('[podcasts] Serving stale listing');
                        entityos.invoke(next);
                    }
                    else
                    {
                        entityos.invoke('util-end', entityos.invoke('util-response-text',
                        {
                            body: 'Podcast listing is temporarily unavailable.',
                            status: 502
                        }));
                    }
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-listing-build',
            code: function (param)
            {
                const items = _.get(param, 'items', []);
                const audioTypes = entityos.invoke('util-aws-podcasts-audio-types');
                const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

                const files = _.map(_.filter(items, { type: 'file' }), function (item)
                {
                    const dot = item.name.lastIndexOf('.');
                    return {
                        name: item.name,
                        base: dot > 0 ? item.name.substring(0, dot) : item.name,
                        ext:  dot > 0 ? item.name.substring(dot + 1).toLowerCase() : '',
                        size: item.size
                    };
                });

                const episodes = [];
                const extras = [];

                _.each(_.groupBy(files, 'base'), function (group, base)
                {
                    const audio = _.find(group, function (file) { return audioTypes[file.ext] != undefined; });
                    const image = _.find(group, function (file) { return _.includes(imageExtensions, file.ext); });
                    const title = entityos.invoke('util-aws-podcasts-title-get', { base: base });

                    if (audio)
                    {
                        episodes.push(
                        {
                            slug:  base,
                            title: title,
                            file:  audio.name,
                            type:  audioTypes[audio.ext],
                            size:  audio.size,
                            art:   image ? entityos.invoke('util-aws-podcasts-url-raw', { name: image.name }) : null,
                            companions: _.map(_.filter(group, function (file) { return file !== audio && file !== image; }), function (file)
                            {
                                return { name: file.name, url: entityos.invoke('util-aws-podcasts-url-blob', { name: file.name }) };
                            })
                        });
                    }
                    else
                    {
                        _.each(group, function (file)
                        {
                            extras.push(
                            {
                                title: title,
                                name:  file.name,
                                ext:   file.ext,
                                size:  file.size,
                                url:   entityos.invoke('util-aws-podcasts-url-blob', { name: file.name })
                            });
                        });
                    }
                });

                const byTitle = function (a, b) { return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }); };
                episodes.sort(byTitle);
                extras.sort(byTitle);

                return { episodes: episodes, extras: extras, fetchedAt: new Date().toISOString() };
            }
        });

        // ── 4. Listing utilities ────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-audio-types',
            code: function ()
            {
                return { m4a: 'audio/mp4', mp4: 'audio/mp4', aac: 'audio/aac', mp3: 'audio/mpeg', ogg: 'audio/ogg', opus: 'audio/ogg', wav: 'audio/wav' };
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-title-get',
            code: function (param)
            {
                // Don_t → Don't, Kepler_s → Kepler's, then underscores to spaces
                return _.get(param, 'base', '')
                    .replace(/([A-Za-z])_(s|t)(?=_|$)/g, "$1'$2")
                    .replace(/_/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-url-raw',
            code: function (param)
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                return 'https://raw.githubusercontent.com/' + podcasts.owner + '/' + podcasts.repo + '/'
                    + podcasts.branch + '/' + podcasts.path + '/' + encodeURIComponent(_.get(param, 'name'));
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-url-blob',
            code: function (param)
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                return 'https://github.com/' + podcasts.owner + '/' + podcasts.repo + '/blob/'
                    + podcasts.branch + '/' + podcasts.path + '/' + encodeURIComponent(_.get(param, 'name'));
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-episode-public',
            code: function (param)
            {
                const episode = _.get(param, 'episode');

                return {
                    slug:       episode.slug,
                    title:      episode.title,
                    size:       episode.size,
                    type:       episode.type,
                    audio:      '/audio/' + encodeURIComponent(episode.file),
                    source:     entityos.invoke('util-aws-podcasts-url-blob', { name: episode.file }),
                    art:        episode.art,
                    companions: episode.companions
                };
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-escape',
            code: function (param)
            {
                return String(_.get(param, 'text', '')).replace(/[&<>"']/g, function (c)
                {
                    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
                });
            }
        });

        // ── 5. Page ─────────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-page-serve',
            code: function ()
            {
                let htmlPage = entityos.get({ scope: 'podcasts', context: 'htmlPage' });

                if (htmlPage == undefined)
                {
                    try
                    {
                        htmlPage = fs.readFileSync(path.join(__dirname, 'page.html'), 'utf8');
                        entityos.set({ scope: 'podcasts', context: 'htmlPage', value: htmlPage });
                    }
                    catch (err)
                    {
                        console.error('[podcasts] page.html not found:', err.message);
                        entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Page not found.', status: 500 }));
                        return;
                    }
                }

                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                const listing = entityos.get({ scope: 'podcasts', context: 'listing' });

                const data =
                {
                    episodes:  _.map(listing.episodes, function (episode) { return entityos.invoke('util-aws-podcasts-episode-public', { episode: episode }); }),
                    extras:    listing.extras,
                    fetchedAt: listing.fetchedAt
                };

                const repoURL = 'https://github.com/' + podcasts.owner + '/' + podcasts.repo + '/tree/' + podcasts.branch + '/' + podcasts.path;

                // split/join rather than replace() so '$' in data is never treated as a pattern
                const body = htmlPage
                    .split('{{DATA}}').join(JSON.stringify(data).replace(/</g, '\\u003c'))
                    .split('{{REPO_URL}}').join(entityos.invoke('util-aws-podcasts-escape', { text: repoURL }))
                    .split('{{UPDATED}}').join(listing.fetchedAt.substring(0, 16).replace('T', ' '));

                entityos.invoke('util-end', entityos.invoke('util-response-html', { body: body, status: 200 }));
            }
        });

        // ── 6. RSS feed ─────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-feed-serve',
            code: function ()
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                const listing = entityos.get({ scope: 'podcasts', context: 'listing' });
                const esc = function (text) { return entityos.invoke('util-aws-podcasts-escape', { text: text }); };

                const items = _.map(listing.episodes, function (episode)
                {
                    const enclosureType = episode.type === 'audio/mp4' ? 'audio/x-m4a' : episode.type;

                    return '    <item>\n'
                        + '      <title>' + esc(episode.title) + '</title>\n'
                        + '      <guid isPermaLink="false">' + esc(episode.slug) + '</guid>\n'
                        + '      <link>' + esc(podcasts.siteURL + '/#' + encodeURIComponent(episode.slug)) + '</link>\n'
                        + '      <enclosure url="' + esc(entityos.invoke('util-aws-podcasts-url-raw', { name: episode.file })) + '" length="' + episode.size + '" type="' + enclosureType + '"/>\n'
                        + (episode.art ? '      <itunes:image href="' + esc(episode.art) + '"/>\n' : '')
                        + '    </item>';
                }).join('\n');

                const body = '<?xml version="1.0" encoding="UTF-8"?>\n'
                    + '<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">\n'
                    + '  <channel>\n'
                    + '    <title>selfdriven.institute Podcasts</title>\n'
                    + '    <link>' + esc(podcasts.siteURL) + '/</link>\n'
                    + '    <atom:link href="' + esc(podcasts.siteURL) + '/feed.xml" rel="self" type="application/rss+xml"/>\n'
                    + '    <description>Audio conversations from the selfdriven Institute.</description>\n'
                    + '    <language>en-au</language>\n'
                    + '    <itunes:author>selfdriven Foundation</itunes:author>\n'
                    + '    <itunes:explicit>false</itunes:explicit>\n'
                    + items + '\n'
                    + '  </channel>\n'
                    + '</rss>\n';

                entityos.invoke('util-end',
                {
                    statusCode: 200,
                    headers:
                    {
                        'Content-Type':  'application/rss+xml; charset=utf-8',
                        'Cache-Control': 'public, max-age=' + podcasts.cacheSeconds
                    },
                    body: body
                });
            }
        });

        // ── 7. JSON listing ─────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-episodes-serve',
            code: function ()
            {
                const listing = entityos.get({ scope: 'podcasts', context: 'listing' });

                entityos.invoke('util-end', entityos.invoke('util-response-json',
                {
                    body:
                    {
                        fetchedAt: listing.fetchedAt,
                        episodes:  _.map(listing.episodes, function (episode) { return entityos.invoke('util-aws-podcasts-episode-public', { episode: episode }); }),
                        extras:    listing.extras
                    },
                    status: 200
                }));
            }
        });

        // ── 8. Audio range proxy ────────────────────────────────────
        //
        // GitHub raw serves .m4a as application/octet-stream (Safari/iOS won't play it)
        // and files are larger than a Lambda response. Each Range request is answered
        // with up to chunkBytes from GitHub, typed correctly. No Range → 302 to GitHub.

        entityos.add(
        {
            name: 'util-aws-podcasts-audio-serve',
            code: function ()
            {
                const request = entityos.get({ scope: 'podcasts', context: 'request' });
                const listing = entityos.get({ scope: 'podcasts', context: 'listing' });
                const episode = _.find(listing.episodes, { file: _.get(request, 'name') });

                if (episode == undefined)
                {
                    entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Not found', status: 404 }));
                    return;
                }

                const event = entityos.get({ scope: '_event' });
                const rangeHeader = _.get(_.find(_.toPairs(_.get(event, 'headers', {})), function (pair)
                {
                    return _.toLower(pair[0]) === 'range';
                }), '[1]');

                if (request.method === 'HEAD')
                {
                    entityos.invoke('util-end',
                    {
                        statusCode: 200,
                        headers:
                        {
                            'Content-Type':   episode.type,
                            'Content-Length': String(episode.size),
                            'Accept-Ranges':  'bytes',
                            'Cache-Control':  'public, max-age=86400'
                        },
                        body: ''
                    });
                }
                else if (rangeHeader == undefined)
                {
                    entityos.invoke('util-end',
                    {
                        statusCode: 302,
                        headers:
                        {
                            'Location':      entityos.invoke('util-aws-podcasts-url-raw', { name: episode.file }),
                            'Cache-Control': 'public, max-age=3600'
                        },
                        body: ''
                    });
                }
                else
                {
                    entityos.invoke('util-aws-podcasts-audio-range-get', { episode: episode, range: rangeHeader });
                }
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-audio-range-parse',
            code: function (param)
            {
                const total = _.get(param, 'total');
                const match = /^bytes=(\d*)-(\d*)$/.exec(_.trim(_.get(param, 'range', '')));

                if (match == undefined || (match[1] === '' && match[2] === '')) { return undefined; }

                if (match[1] === '')
                {
                    // Suffix range: last N bytes
                    return { start: Math.max(0, total - parseInt(match[2], 10)), end: total - 1 };
                }

                return {
                    start: parseInt(match[1], 10),
                    end:   match[2] === '' ? total - 1 : Math.min(parseInt(match[2], 10), total - 1)
                };
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-audio-range-get',
            code: function (param)
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');
                const episode = _.get(param, 'episode');
                const total = episode.size;
                const range = entityos.invoke('util-aws-podcasts-audio-range-parse', { range: _.get(param, 'range'), total: total });

                if (range == undefined || range.start >= total || range.end < range.start)
                {
                    entityos.invoke('util-end',
                    {
                        statusCode: 416,
                        headers: { 'Content-Range': 'bytes */' + total, 'Accept-Ranges': 'bytes' },
                        body: ''
                    });
                    return;
                }

                // Cap so the base64 body stays under the 6 MB Lambda response limit
                const end = Math.min(range.end, range.start + podcasts.chunkBytes - 1);

                fetch(entityos.invoke('util-aws-podcasts-url-raw', { name: episode.file }),
                {
                    headers: { 'range': 'bytes=' + range.start + '-' + end, 'user-agent': 'podcasts.selfdriven.institute' }
                })
                .then(function (response)
                {
                    if (response.status !== 206 && response.status !== 200)
                    {
                        throw new Error('Upstream ' + response.status);
                    }
                    return response.arrayBuffer();
                })
                .then(function (arrayBuffer)
                {
                    const buffer = Buffer.from(arrayBuffer);

                    entityos.invoke('util-end',
                    {
                        statusCode: 206,
                        isBase64Encoded: true,
                        headers:
                        {
                            'Content-Type':                episode.type,
                            'Content-Length':              String(buffer.length),
                            'Content-Range':               'bytes ' + range.start + '-' + (range.start + buffer.length - 1) + '/' + total,
                            'Accept-Ranges':               'bytes',
                            'Cache-Control':               'public, max-age=86400',
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: buffer.toString('base64')
                    });
                })
                .catch(function (err)
                {
                    console.error('[podcasts] Audio range error:', err.message);
                    entityos.invoke('util-end', entityos.invoke('util-response-text', { body: 'Upstream error', status: 502 }));
                });
            }
        });

        // ── 9. Response helpers ─────────────────────────────────────

        entityos.add(
        {
            name: 'util-response-html',
            code: function (param)
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');

                return {
                    statusCode: _.get(param, 'status', 200),
                    headers:
                    {
                        'Content-Type':           'text/html; charset=utf-8',
                        'Cache-Control':          'public, max-age=' + podcasts.cacheSeconds,
                        'X-Frame-Options':        'DENY',
                        'X-Content-Type-Options': 'nosniff',
                        'Referrer-Policy':        'strict-origin-when-cross-origin'
                    },
                    body: _.get(param, 'body', '')
                };
            }
        });

        entityos.add(
        {
            name: 'util-response-json',
            code: function (param)
            {
                const podcasts = entityos.invoke('util-aws-podcasts-get-settings');

                return {
                    statusCode: _.get(param, 'status', 200),
                    headers:
                    {
                        'Content-Type':  'application/json',
                        'Cache-Control': 'public, max-age=' + podcasts.cacheSeconds
                    },
                    body: JSON.stringify(_.get(param, 'body', {}))
                };
            }
        });

        entityos.add(
        {
            name: 'util-response-text',
            code: function (param)
            {
                return {
                    statusCode: _.get(param, 'status', 200),
                    headers:    { 'Content-Type': 'text/plain; charset=utf-8' },
                    body:       _.get(param, 'body', '')
                };
            }
        });
    }
};
