# Technical baseline — 2026-10-04

Target: https://www.clydralab.com/. Observation time is recorded in each machine-readable artifact.

## Measured facts

- HTTP crawl: 17 existing canonical candidate pages + one unknown-path control. Homepage returns 200; all 16 real deep routes return Vercel 404 on direct request. Control returns 404 correctly. `http-crawl.json` records status, headers, SHA256, redirect chains, metadata and user-agent tests.
- robots.txt, sitemap.xml, sitemap_index.xml and llms.txt return 404.
- Homepage initial HTML is an empty React root. Title exists. Description, canonical, robots metadata, Open Graph, H1 and JSON-LD absent.
- Chrome rendered homepage screenshot and DOM are captured. `homepage-desktop-cdp.png`, `homepage-rendered.html`, `rendered-summary.json`. Rendered homepage has nine separate H1 elements, 79 image elements, 36 lazy-loaded images and 23 internal-link instances.
- HTTPS apex redirects 308 to HTTPS www. HTTP www redirects once to HTTPS www; HTTP apex redirects twice via HTTPS apex. Canonical www preference is inferred from existing live redirect policy.
- Homepage requests using Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot user-agent strings return 200. This checks UA-string routing only, not verified crawler IPs or the full WAF policy. Deep pages remain unavailable on direct requests.
- Chrome resource timing body sizes: repeated Works texture PNG 2,605,234 bytes; pricing PNG 1,172,242; tiny hero portrait 897,551; tiny hero landscape 182,356; JS 519,783 decoded and 170,032 transferred. These are network snapshot facts, not Core Web Vitals.
- Initial HTML links Google Fonts and globals.css also imports the same families; source duplication confirmed.

## Toolkit execution and measurement limitations

Claude SEO checkout 2.4.1 source scripts were used with system Python while parent managed setup was still in progress. Doctor repeatedly reports managed environment missing / browser not ready; no claim of validated managed runtime.

- `google-auth-status.json`: no GSC/GA4 OAuth or service-account credentials; no PSI/CrUX API key.
- `backlink-auth-status.json`: no Bing/Moz/Keywords Everywhere credentials. Common Crawl public access and local verification are available, no cached domains.
- `drift-baseline.json`: successful raw-HTML baseline ID 1, 200 status, missing description/canonical/schema/OG/H1, CWV deliberately skipped. SQLite original location: user .cache/claude-seo/drift/baselines.db.
- `pagespeed-toolkit.json` and direct raw PSI responses: mobile and desktop fail HTTP 429 shared API quota. No lab or field performance score was produced from PSI.
- `sitemap-discovery.json.stderr` and `agentic.json.stderr`: direct source execution fails because system Python lacks lxml. Independent HTTP discovery and UA checks remain valid.
- Lighthouse CLI fallback was started via npx in the sibling working directory, with installed Chrome and no app dependency changes. Dependency download was slow; result must be checked before claiming metrics.

## Limits

No indexed-page count, actual keyword position, organic clicks/impressions, CTR, conversions, backlink count, AI citations or CWV field data can be established without authenticated sources. Missing data is unavailable, not zero.

Screenshot covers homepage desktop viewport only. Offscreen lazy images with `complete=false` are not proven broken images. Source/runtime secrets were excluded from this summary.
`nLighthouse mobile fallback finished with NO_FCP and null performance score. Desktop fallback was stopped after a prolonged measurement run. Raw mobile diagnostic is preserved; no valid measured CWV/performance score is claimed.
