'use strict';

var entityos = require('entityos');
var factory  = require('./infrastructurefactory-podcasts');

factory.init({});

entityos.add(
{
    name: 'util-end',
    code: function (response)
    {
        const resolve = entityos.get({ scope: 'podcasts', context: '_resolve' });
        if (resolve) { resolve(response); }
    }
});

exports.handler = async function (event)
{
    return new Promise(function (resolve)
    {
        entityos.set({ scope: 'podcasts', context: '_resolve', value: resolve });
        entityos.set({ scope: '_event', value: event });

        entityos.set(
        {
            scope: '_settings',
            value:
            {
                infrastructure:
                {
                    aws:
                    {
                        region: process.env.AWS_REGION || 'ap-southeast-2'
                    }
                },
                podcasts:
                {
                    github:
                    {
                        owner:  process.env.REPO_OWNER  || 'selfdriven-foundation',
                        repo:   process.env.REPO_NAME   || 'selfdriven-institute',
                        branch: process.env.REPO_BRANCH || 'main',
                        path:   process.env.REPO_PATH   || 'resources/podcasts',
                        token:  process.env.GITHUB_TOKEN || ''
                    },
                    siteURL:      process.env.SITE_URL      || 'https://podcasts.selfdriven.institute',
                    chunkBytes:   process.env.CHUNK_BYTES   || 3670016,
                    cacheSeconds: process.env.CACHE_SECONDS || 600
                }
            }
        });

        entityos.invoke('util-aws-podcasts-route');
    });
};
