# podcasts.selfdriven.institute

entityOS factory Lambda that reads `resources/podcasts` from
[selfdriven-foundation/selfdriven-institute](https://github.com/selfdriven-foundation/selfdriven-institute/tree/main/resources/podcasts)
and serves a player for it. Adding or removing a file in that folder updates the site within `cacheSeconds`; no redeploy.

```
podcasts/
├── lambda/
│   ├── infrastructurefactory-podcasts.js   ← route, listing, page, feed, JSON, audio proxy
│   ├── index.js                            ← bootstrap: env → _settings, Promise bridge, util-end
│   ├── page.html                           ← template ({{DATA}}, {{COUNT}}, {{LIBRARY_GB}}, {{FEED_URL}}, {{REPO_URL}}, {{YEAR}}, {{UPDATED}})
│   ├── assets/css/style.css                ← verbatim copy of selfdriven.institute's docs/assets/css/style.css
│   ├── assets/css/podcasts.css             ← podcast-only additions (cards, player, hero waveform)
│   ├── assets/img/                         ← institute wordmark, round favicon, white footer logo
│   ├── package.json
│   └── events/                             ← lambda-local test events
└── deploy/
    ├── infrastructurefactory-podcasts-deploy.js
    ├── deploy.js
    ├── settings.json
    └── package.json
```

## Deploy

```
cd lambda && npm install --omit=dev
cd ../deploy && npm install && node deploy.js
```

`settings.json` uses `"prompt"` for the AWS keys and the GitHub token. Set `infrastructure.aws.access.id` to `"default-chain"` to use `AWS_PROFILE`/SSO instead. Leave the GitHub token blank to run unauthenticated (60 requests/hr per IP, shared across Lambda IPs).

Pipeline (idempotent, safe to re-run):

| Step | Methods |
|---|---|
| 1 | `deploy-zip` (archiver, uploaded directly as `ZipFile`, ~2.6 MB, so no deploy bucket) |
| 2–3 | `deploy-iam-role-check` → `-create` (basic execution only; the Lambda calls no AWS services) |
| 4–6 | `deploy-lambda-check` → `-create` \| `-update` (code, then config/env, with waiters) |
| 7–8 | `deploy-apigw-check` → `-create` (HTTP API quick-create: `$default` route + auto-deploy) + invoke permission |
| 9–10 | `deploy-acm-check` → `-request` → `-describe` → `-dns-validate` → `-poll` |
| 11–12 | `deploy-apigw-domain-check` → `-create`, `deploy-apigw-mapping-check` |
| 13 | `deploy-route53-record` (A/AAAA alias) |

If `selfdriven.institute` isn't a Route 53 zone in the account, the ACM validation record and the final CNAME are printed for manual entry instead. If the certificate is still pending after 40 × 15 s, the run exits 408. Re-run once DNS has propagated.

## Lambda routes

| Route | Method |
|---|---|
| `/` | `util-aws-podcasts-page-serve` |
| `/feed.xml` | `util-aws-podcasts-feed-serve` |
| `/episodes.json` | `util-aws-podcasts-episodes-serve` |
| `/audio/<file>` | `util-aws-podcasts-audio-serve` → `-audio-range-get` |
| `/assets/*` | `util-aws-podcasts-asset-serve` (only files bundled in `lambda/assets`) |
| `/favicon.ico` | 302 to the round logo |
| `/health`, `/robots.txt` | inline in `util-aws-podcasts-route` |

All listing routes chain through `util-aws-podcasts-listing-get` with `{ next: '<method>' }`. It caches the listing in scope `podcasts` across warm invocations and serves the stale listing if GitHub errors.

### Why the audio proxy

GitHub raw serves `.m4a` as `application/octet-stream`, which Safari and iOS won't play, and the files (35–48 MB) exceed the Lambda response limit. Each `Range` request gets up to `chunkBytes` (3.5 MB) from GitHub with the correct type. Requests without a range (downloads, podcast apps) get a 302 to raw GitHub. Only files in the current listing are proxied.

If traffic grows, sync the folder to S3 (with `Content-Type: audio/mp4`) behind CloudFront and have `/audio/` redirect there. Don't put CloudFront directly in front of this proxy: it expects full-object responses from origin and will mishandle the truncated 206s.

### Folder conventions

- Title comes from the filename: `_` becomes a space, `Don_t` becomes `Don't`, `Kepler_s` becomes `Kepler's`.
- An image with the same base name as an episode becomes its artwork.
- Unmatched files (currently `AlphaGenome_Executable_Biology.pdf`) are listed under "Also in this folder".
- Episode dates come from one GraphQL query per 100 files (latest commit touching each file, which for audio is the commit that added it). The page and RSS feed list newest first, and the page has a sort control (newest, oldest, A–Z, Z–A). GraphQL needs `GITHUB_TOKEN`; without it the page offers A–Z and Z–A only and the feed has no `pubDate`. If the query fails, the previous dates are kept.

## Lambda environment

Set by the deploy from `settings.json`: `SITE_URL`, `REPO_OWNER`, `REPO_NAME`, `REPO_BRANCH`, `REPO_PATH`, `GITHUB_TOKEN`, `CACHE_SECONDS`, `CHUNK_BYTES`.

## Look and feel

The page uses the selfdriven.institute house style: the same header and footer as the main site (links point back to https://selfdriven.institute), Space Grotesk and DM Sans, and the main site's stylesheet. When the main site's `docs/assets/css/style.css` changes, copy it over `lambda/assets/css/style.css` and redeploy. Keep podcast-specific rules in `podcasts.css`.
