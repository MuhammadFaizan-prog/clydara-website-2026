# Schema, AI crawler policy and agent readiness evidence

Research date: 2026-10-04 (Asia/Karachi). Audit scope: existing Clydara Vite/React repository; this document does not claim production verification. Parent owns browser, deployment and platform checks. Candidate canonical origin supplied by parent: https://www.clydralab.com, pending parent live confirmation.

## Workflows inspected and applied

Read Claude SEO 2.4.1 skills seo-schema, seo-technical, seo-geo, seo-agentic, seo-sitemap, seo-google and extensions/bing-webmaster/skills/seo-bing. Applied schema matching, server HTML inspection, crawl-resource discovery, bot-purpose separation, agent-readable content priorities, sitemap validation criteria and submission eligibility checks. Toolkit recommendations are guidance; official documentation below takes precedence. No app files, Git state or external accounts changed by this audit.

## Repository evidence

- index.html contains an empty `<div id="root"></div>` with module bootstrap, language en and one generic agency title. No initial content, canonical, description or JSON-LD present at first inspection.
- src/App.tsx uses BrowserRouter routes /, /works, /works/:id, /services, /about, /blog, /blog/:id, /contact, /privacy-policy, /terms-and-condition. No catch-all route at first inspection.
- Initial public directory lists 11 logo/icon assets; no robots.txt, sitemap.xml, llms.txt, Markdown page copies, IndexNow verification file or agent discovery documents.
- `rg` scan found no ld+json or canonical implementation in src/public/index.html. Schema.md is project documentation, not deployed structured data.
- AboutPage visibly describes websites, custom SaaS, AI automation, CRM and branding for businesses; this supports Organization and Service semantics, not software Product/SoftwareApplication selling a named application.
- Footer social links are generic x.com, linkedin.com and dribbble.com root URLs; they are not official company identities and must not become Organization.sameAs.
- Founders contains named founder/person LinkedIn links, but those describe people rather than the company. Use only if identity is actually reviewed; default conservative graph can omit them.
- BlogPage exports six posts with titles, images, authors Muhammad Faizan/Rohan Baig and month-year dates. Exact publication day/time is absent. Do not synthesize January 1 or another date for datePublished. Existing visible authors can support Person nodes by name, without invented credentials.
- ContactPage displays info@clydara.com; screenshot EmailJS service identity is a different address. Do not assume these are interchangeable or change the public address without verification. Conservative Organization node can omit email until mailbox ownership/deliverability is confirmed.
- BlogDetailPage includes meaningful question/answer sections; these are publisher-authored FAQs, not a community Q&A page. Do not use QAPage.

## Recommended conservative entity graph

1. Organization at `${origin}/#organization`: name Clydara, canonical url, description matching visible business services. Optional logo ImageObject using an actual visible, crawlable logo asset with known dimensions. Omit address, awards, aggregateRating, invented locations, client claims and generic social roots.
2. WebSite at `${origin}/#website`: name Clydara, url, publisher organization reference, inLanguage en. No SearchAction because there is no on-site search feature.
3. Per-route WebPage using canonical URL plus `#webpage`, name, description, url, isPartOf website, about organization, inLanguage en. Specialized AboutPage and ContactPage where applicable, CollectionPage for lists. Provider Organization and accurately described Service can describe existing service offering; rich-result eligibility is separate.
4. BreadcrumbList for internal pages only if a matching visible breadcrumb navigation is introduced; names and canonical URLs must match the displayed hierarchy. Blog article chain: Home > Blog > actual article title; work case study chain: Home > Works > actual project title.
5. BlogPosting for each actual article: headline/title, actual article image, description, author Person with actual visible name, publisher organization, mainEntityOfPage referring to route WebPage. Exact datePublished/dateModified omitted until source provenance establishes real dates. dateModified may be introduced with meaningful content changes only when displayed and supported.
6. Portfolio case studies can remain WebPage. Do not fabricate Product, Review, ratings, client revenue statistics or delivery results from decorative testimonial/portfolio copy.

Render metadata and graph in initial HTML wherever build prerendering permits. During client navigation update/remove stale route nodes and metadata. Validate JSON parsing, absolute URL/@id consistency and page-content parity. Schema.org validity and Google rich-result eligibility are different tests; not every legitimate graph type produces a rich result. [Google structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization).

Google's current FAQ documentation redirects to its updates page; the updates record states FAQ rich results are no longer shown. Leave actual FAQs as useful visible content, without promising enhanced Google appearance. [Official documentation updates](https://developers.google.com/search/updates).

## AI crawler policy: search, training and retrieval stay separate

| Provider | Search discovery | Training policy | User-directed retrieval | Recommended action |
|---|---|---|---|---|
| OpenAI | OAI-SearchBot | GPTBot | ChatGPT-User | Ensure search access; preserve existing training decisions. User retrieval is separate and robots rules may not apply. |
| Anthropic | Claude-SearchBot | ClaudeBot | Claude-User | Ensure search access; preserve training decisions. Respect existing explicit retrieval policy. |
| Perplexity | PerplexityBot | Search bot is not for foundation-model training | Perplexity-User | Ensure search access; user fetcher generally ignores robots.txt. |
| Google | Googlebot for Search, including AI search features | Google-Extended controls distinct uses | Other fetchers differ | Preserve training policy; ordinary Search eligibility applies. |

Official sources: [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots), [Anthropic crawler purposes](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

If baseline truly has no robots policy, a default all-public-page allowance plus Sitemap declaration preserves the existing unrestricted crawling behavior; do not silently introduce training blocks or new training-specific permissions. Explicit search-only groups are optional when wildcard access already allows them, but must inherit applicable path restrictions so they do not bypass excluded areas. Do not use robots.txt to protect secrets or as a noindex mechanism.

Test relevant routes and resources with ordinary and search-token user agents, then report only behavior toward those test requests. Spoofed-token HTTP 200 does not prove real provider-IP access or actual crawler visits. OpenAI and Perplexity publish official IP lists; verify bot identities before privileged WAF bypass. Anthropic says it currently uses provider IPs and does not publish stable ranges. Genuine WAF validation requires dashboard configuration/log evidence and can remain explicitly unverified.

## Agent readiness and llms.txt

Priority is initial textual content, named links and form inputs, keyboard access, stable layout, real 404s, reliable form feedback and crawlable internal linking. Parent should validate actual rendered output and conversion states without sending unsolicited email.

A concise /llms.txt can identify Clydara and link canonical services, about, contact, resources and policies. Its purpose is navigation/discovery; it does not guarantee rankings, indexing or citations. Current proposal recommends clean Markdown representations, `rel="alternate" type="text/markdown"` per represented page and `rel="describedby"` for the covering llms.txt. Use matching, maintained text derived from the visible page content; no private paths or sprawling duplicated site text. The proposal requires an H1 site name, with optional summary blockquote and H2 file lists. [Current llms.txt proposal](https://llmstxt.org/).

WebMCP is a W3C Community Group draft, explicitly not a W3C Standard or standards-track document. It is unnecessary for a small agency lead form and can change interaction/security behavior; defer tool registration until a real agent action use case is justified and tested. No fake /.well-known API/OAuth/A2A/UCP files: this site does not expose such public services. [WebMCP draft status](https://webmachinelearning.github.io/webmcp/).

Lighthouse now has an Agentic Browsing category; record its actual pass fraction X/N when available, with skipped/informative audits separate. Do not manufacture a percentage or treat a toolkit Agent-UX heuristic as official Lighthouse score. [Official agentic scoring documentation](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring).

## Sitemap, submission and IndexNow

Sitemap must list only canonical, useful, indexable 200 HTML routes; no fragments, tracking parameters, bogus detail IDs, Markdown duplicates or asset URLs. Lastmod should reflect verifiable meaningful page changes; omit when unknown. Robots Sitemap declaration must name the live canonical-host resource. Re-fetch and parse after deployment.

Google: ordinary agency/blog URLs are not eligible for Google's Indexing API. Only JobPosting or BroadcastEvent embedded in VideoObject are supported. Use sitemap/Search Console/URL Inspection with authentic property access. Keep submitted, indexed and ranked outcomes distinct. [Official Indexing API eligibility](https://developers.google.com/search/apis/indexing-api/v3/quickstart).

IndexNow: publish the verification text file using deployment secrets/build configuration; do not commit a private key or expose it in reports. Verification file must be readable on the exact submitting host. POST host, key, keyLocation and changed urlList to a supported endpoint only after live verification. Protocol supports up to 10,000 URLs per POST, requires ownership key validation and a 200 only proves receipt, not indexing. Automatically notify only new, meaningfully changed or deleted URLs using previous-versus-current content hashes; avoid submitting every unchanged URL on each deploy. If secret configuration unavailable, implement the mechanism and record pending setup/submission; do not pretend it ran. [Official IndexNow protocol](https://www.indexnow.org/documentation).

Webmaster account verification, first-party performance history and URL index status require account ownership/access. Regional properties are justified only by actual served markets; current English agency site evidence does not establish South Korea/Russia targets, so Naver/Yandex account creation is not justified just for a count.

## Remaining priority / verification

| Priority | Evidence and expected impact | Implementation | Verify |
|---|---|---|---|
| HIGH | Initial empty app root with no route metadata; non-JS agents cannot retrieve important text | Build static prerendered routes and correct canonical, unique metadata/graph | Fetch initial HTML for every valid route and compare rendered browser content |
| HIGH | Missing crawl resources at initial checkout | Publish robots/sitemap and truthful graph | Live status/content-type, XML parse, canonical/indexable URL checks |
| HIGH | Missing verified webmaster/performance baseline | Configure verified GSC/Bing with existing accounts | Authenticated property, sitemap processing and inspection evidence |
| MEDIUM | Generic social roots and uncertain public email | Obtain actual company social/profile and mailbox evidence; omit graph claims until then | Link identity and contact delivery verification |
| MEDIUM | Month-only article dates | Record actual publication/edit provenance | Display matches schema, timestamps reflect real meaningful changes |
| LOW | No llms/Markdown aid | Concise proposal-compliant derived resources | Fetch text/markdown, test links and parity; no ranking claims |
| LOW | Optional draft agent APIs absent | Defer until genuine API/tool need | Browser support/security and user-intent review if ever implemented |

No crawler visits, production schema validation, Google/Bing indexation, field CWV improvement, submission success or ranking/citation uplift is established by this research-only document.
