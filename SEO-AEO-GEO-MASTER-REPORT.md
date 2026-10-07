# Clydara SEO, AEO and GEO execution report

Execution date: 4 October 2026, Asia/Karachi. Canonical website: https://www.clydralab.com/. Repository: MuhammadFaizan-prog/clydara-website-2026. Starting production commit: d28ce4e. Status below separates implementation, deployment, submission and indexing; unfinished items are not represented as completed.

## Business and scope

Clydara is a development and design agency, not a SaaS product vendor or an ecommerce store. The existing services cover websites, custom SaaS and business software, CRM/dashboard workflows, AI integration/automation, and branding/design. The principal conversion is a project enquiry through /contact. English and an international startup/business audience are inferred from visible content; no verified office/service-area evidence supports local landing pages or LocalBusiness markup. Pakistan-specific targeting, additional languages and regional accounts require actual business justification.

This implementation preserves the site's design, existing URLs, project facts, prices, legal text and EmailJS configuration. It creates no keyword doorway pages, reviews, backlinks, invented statistics or business locations. Existing personal expertise and client-project claims were not independently verified and were not amplified into schema endorsements.

## Original evidence and baseline

- Vercel's connected project identifies the framework as Vite, Node 24 and the production domains www.clydralab.com/clydralab.com. The apex HTTPS domain redirects permanently to www. Preview hosts have deployment protection; no security protections were weakened.
- The initial homepage response was HTTP 200 with 915 bytes of app-shell HTML, one generic title, and no main content, canonical, meta description or JSON-LD.
- All **16 valid deep URLs** returned Vercel HTTP 404 on direct requests, although the client-side router knew those routes. There are **17 canonical pages**: eight fixed routes, six articles and three project pages. The eighteenth baseline test URL was deliberately invalid.
- robots.txt, sitemap.xml and llms.txt returned 404. Firecrawl mapping discovered only the homepage; this is a third-party discovery observation, not a total index count.
- An isolated Chrome desktop render showed nine fragmented homepage H1 elements, existing usable navigation and real visible content. Initial network evidence included a roughly 898 KB tiny hero photograph, a 2.61 MB project overlay image and a 1.17 MB pricing background. These are measured response body sizes in that capture, not field performance metrics.
- The starting JS bundle was about 519.8 KB decoded / 166.6 KB gzip at build time. Google Fonts CSS was requested in index.html and imported again in globals.css.
- Public search research finds the branded homepage. Exact indexed-page count, target rankings, organic traffic, GSC clicks/impressions/CTR/position, Bing performance, referring domains and AI citations are **unavailable**, not zero.
- Public PageSpeed API attempts returned HTTP 429 quota errors. A mobile Lighthouse attempt reported NO_FCP; a failed performance run is not a measured CWV improvement. Chrome resource captures and any successful lab runs are reported separately from real-user CrUX data.
- User-agent-string probes for Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot and PerplexityBot received homepage HTTP 200. Spoofed user-agent tests cannot establish access from real provider IP addresses or prove crawler visits; CDN/WAF logs remain unverified.

Machine-readable evidence and Chrome captures are preserved in the execution workspace's seo-working directory. Selected sanitized evidence is stored under seo/evidence. No private account credentials or service-account files belong in the report.

## Toolkit execution and limits

Inspected the latest supplied public Claude SEO repository at ff87fcee0734845d3f59128c8c905799ee2298da, version 2.4.1: README, CHANGELOG, AGENTS, current installer/plugin manifests, orchestration skills, specialist agents and scripts. Installed and enabled the official Claude Code plugin through its marketplace; the network marketplace clone failed with an EBUSY lock, so the reviewed local checkout was registered through the supported local-marketplace path.

Explicit managed setup and doctor were invoked before relying on the runtime. Final doctor output confirms ready=true for the core runtime, Python 3.13 and plugin 2.4.1; browser_ready=false. The managed Chromium download repeatedly timed out, so browser checks use installed Chrome independently. After core setup, canonical launcher agentic_check, sitemap_discovery and drift_baseline ran successfully against production. Agent-readiness reports six pass checks, information/N/A for optional proposals; sitemap discovery verifies the declared XML. Drift snapshots record absent metadata before and present metadata after, without CWV data. Some source-script diagnostics were attempted separately by the technical specialist using available Python; these are labelled fallback diagnostics, not successful managed-runtime command runs. Missing lxml affected sitemap/agentic helpers. Full site evidence was independently collected through HTTP, Chrome, build-output assertions and source inspection.

| Current workflow | Applied equivalent / result |
|---|---|
| audit, technical, page | Sitewide raw/rendered evidence, 17-page initial HTML assertions, direct-route/404/canonical checks |
| content, content-brief, cluster, sxo | Agency intent map, six article clusters, service decision guidance, conversion links, deliberate related guides |
| schema | Conservative entity graph with visible-content matching; JSON parsing and relationship checks |
| geo, agentic | Passage clarity/citations, crawl accessibility, real HTML, concise llms.txt and matching Markdown copies |
| sitemap, images | Exact canonical inventory and XML generation; measured oversized-image requests reduced |
| backlinks | Credential-presence diagnostics and legitimate authority plan; no fabricated backlink inventory |
| google, bing | Eligibility/account-access checks; sitemap submission requires verified properties; ordinary pages excluded from Google Indexing API |
| drift | Baseline snapshot diagnostic retained; comparison requires successful later capture, not an assumed improved score |
| firecrawl | Connected map call returned only the homepage at baseline |
| dataforseo, ahrefs, seranking, profound | No usable provider credentials/measurements established; no paid subscriptions or fabricated vendor data |
| local, maps, hreflang, ecommerce, programmatic | Not applicable to evidenced agency model, single language and 17 existing pages |
| competitor-pages | Research informed improvements to existing guides; no copied comparison pages or unverified competitor claims |
| unlighthouse | Evaluated local lab measurement; failed/unavailable runs remain diagnostics |

## Implemented website changes

### Crawlability and initial HTML

The existing build now emits a complete HTML document for every canonical route, a real 404 document and matching public Markdown copies. Vite's server module loader renders the actual React components; synchronous rendering emits the actual page content, without loading placeholders or bot-specific duplicates. The same content is used for browser hydration. Client navigation remains supported.

Vercel clean-URL configuration serves generated documents at existing extensionless URLs and normalizes trailing slashes. Unknown article/project slugs display the actual not-found page rather than another real article/project. Live HTTP validation now confirms17 canonical200 responses, unknown404 responses and308 clean-URL/trailing-slash redirects. The first deployment used Vercel’s default vite build and omitted prerendering; explicit buildCommand npm run build fixed this in2697fd0.

### Metadata, schema and on-page semantics

Every canonical page has a unique title/description, absolute self-canonical, indexable robots directive, Open Graph/social metadata and one coherent H1. Metadata is also updated after client navigation, with stale route JSON-LD removed. Query parameters do not create canonical variants.

The graph uses stable Organization and WebSite IDs, WebPage/AboutPage/ContactPage/CollectionPage nodes, BlogPosting for the six actual articles and Service for the four visible offerings. Authors use names already supplied by the website and now displayed on the articles. Exact publication days are omitted because only month/year was supplied. There are no invented ratings, review snippets, office addresses, affiliations or precise publication dates. No FAQPage/HowTo rich-result claims are made. Structural validity does not guarantee Google rich-result eligibility.

### AEO, GEO, content and internal links

/services now explains which service fits which requirement, what affects scope, and what information to supply for an enquiry. Existing detailed question/answer guides remain, with clear attribution and relevant primary-source references. Articles link contextually to services, the team and contact, and their related-guide selections follow the topic map. The former article footer labelled “Next Project” now describes related reading accurately. No content mass generation or new thin keyword pages was used.

The build-versus-buy/team/cost cluster supports /services; the MERN/AI cluster supports technology selection and AI implementation; the website-conversion guide supports web-development enquiries. Sources support the technical discussion rather than inventing endorsements or measured client results.

### Crawl files and agent navigation

sitemap.xml contains exactly the 17 canonical, indexable URLs, excluding unknown routes, redirects, query variants and Markdown duplicates. lastmod is omitted where no trustworthy per-page meaningful-update provenance exists; fake “today” timestamps are not emitted on every build. robots.txt points to the sitemap and retains existing unrestricted public-page access. No training-specific permission was added or removed.

llms.txt follows the current proposal's concise site summary and links to authoritative company pages, guides and policies. Matching Markdown pages come from visible main content, with canonical HTML attribution. HTML links use describedby and alternate text/markdown relationships. This is an agent navigation aid, not a ranking signal or citation guarantee. WebMCP and speculative agent catalogs were not added because this informational agency site does not require a new transactional agent interface.

### Performance and conversion safety

Removed the duplicate Google Fonts CSS import, added a Framer asset preconnection, used verified Framer scale-down-to CDN variants for two hero photos and two decorative textures, preserving assets and aspect ratios. The animations and visible design remain. The final bundle is 539.23 KB / 172.53 KB gzip, modestly larger than baseline due to metadata and useful content. An attempted route-splitting approach was removed after static checks detected streamed loading placeholders; initial content and effective image variants remain the measured improvements. Width/height query changes alone saved no bytes; controlled browser-header comparisons and real Chrome loads verified scale-down-to variants instead: portrait1,149,975→34,514 bytes, landscape208,052→19,420 bytes, Works texture2,605,234→495,494 bytes, Pricing texture1,172,242→809,162 bytes. Total3,776,913 bytes saved(73.55% across those four resources), with inspected desktop/mobile composition and usable resolution. Initial prerendered content is available before JavaScript. Lab scores and field CWV are reported only when valid measurements exist.

The EmailJS handler, service/template/public-key values and actual enquiry flow remain in place. Browser QA intercepts sending requests to test pending, accepted and rejected states without sending customer-like mail. A mock accepted response does not establish inbox delivery or EmailJS dashboard variable/recipient configuration.

### IndexNow

A protocol verification key is generated and served as its required public ownership file. It is a public IndexNow proof value, **not a private EmailJS/API credential**; its literal value is excluded from reports. Builds compare per-page content hashes with the previous production manifest. Automatic notification runs only after a successful production deployment and verifies the exact live revision, canonical content and ownership file. Only changed/new URLs are submitted; deleted URLs require verified 404/410. If the prior snapshot cannot be established, the workflow fails safely instead of repeatedly submitting unchanged pages.

IndexNow HTTP 200 means receipt; 202 means pending key validation. Neither means indexing or ranking. Sitemap submission inside Google/Bing webmaster accounts is a separate action.

## Platform status

Production5235b69 is verified live, including four effective image variants and published ownership tags. IndexNow workflow37207954091 succeeded and received HTTP202 for17URLs at14:05:50UTC(19:05:50Asia/Karachi). Brave’s official form confirmed homepage submitted. Google and Bing URL-prefix ownership are verified; both sitemaps were submitted. Google shows couldn’t fetch despite valid public HTTP200 XML; Bing shows Processing. Google homepage is indexed and passes its live crawl test; homepage/services indexing requests were accepted. Bing services live test is indexable and its request was accepted. Final local Chrome QA passed: desktop/mobile layouts, hydration, navigation metadata and intercepted EmailJS200/503/network failures. No real email was sent.

| PLATFORM | ACTION | VERIFIED | SUBMITTED | INDEXED/STATUS | NOTES |
|---|---|---|---|---|---|
| Google Search Console | HTML ownership verified; sitemap submitted; homepage/services inspected | Yes, canonical URL-prefix | Yes, successful receipt | Sitemap couldn’t fetch; homepage indexed, services unknown/requested | Valid live XML17URLs; one justified retry still pending fetch; no false success claim |
| Google Search | Live homepage crawl and indexing requests | Google live test: can be indexed | Homepage/services requests accepted | Homepage indexed; services not yet indexed | No Google Indexing API use; requests not repeated |
| Bing Webmaster Tools | Meta ownership verified; sitemap submitted; services inspected | Yes; live services indexable | Sitemap and services request accepted | Sitemap Processing; services not yet indexed | Stored indexing disallowed result contradicted by fresh live pass; two decorative empty-alt notices retained appropriately |
| IndexNow participants | Verify ownership; automatic changed-page notifications | Live proof and SHA verified | Initial17URLs HTTP202; later6changedURLs HTTP200 | Received/key validated; index unknown | Bing, Yandex, Seznam, Naver, Yep, InternetArchive, Amazonbot participating; shared protocol receipt is not individual index proof |
| Brave Search | Official submit-url form | Success shown | Homepage accepted | Index status unknown | Screenshot receipt saved; no bulk resubmission |
| Yandex / Naver | Assess market relevance | Not relevant to evidenced target market | No account created | Not applicable | No Russian/Korean target market established |
| ChatGPT Search | OAI-SearchBot eligibility | UA-string baseline 200; live/IP checks qualified | No official direct URL ranking submission used | Citations unknown | GPTBot training is separate |
| Claude search | Claude-SearchBot eligibility | UA-string baseline 200; live/IP checks qualified | No fabricated submission | Citations unknown | ClaudeBot training is separate |
| Perplexity | PerplexityBot eligibility and useful cited content | UA-string baseline 200; live/IP checks qualified | No fabricated submission | Citations unknown | Actual crawler traffic/logs unverified |
| Google Analytics 4 | Account/property/web stream created; consent-based tracking | Stream and live contact page_view received; Search Console linked | Not a search submission | Realtime test: 1 active user / 1 contact page_view; no organic growth claim | Optional sharing and automatic enhanced measurement disabled; manual canonical page views and accepted enquiry events |
| CrUX / backlink / AI measurement | Baseline access | Field/vendor data unavailable | N/A | Unknown, not zero | New Bing reports require processing; no invented growth |

## Page-level implementation and intent map

All paths below are relative to https://www.clydralab.com. Shared changes mean initial HTML, one H1, unique metadata/canonical/schema, sitemap inclusion and Markdown representation. All17HTMLpages are verified live. Account inspection confirms homepage indexed, services not yet indexed; other per-page index statuses remain unknown.

| URL | TARGET INTENT | PRIMARY TOPIC | CHANGES | SCHEMA | INTERNAL LINKS | INDEX STATUS |
|---|---|---|---|---|---|---|
| / | Commercial | Development/design agency | Shared; hero image requests and fonts optimized | Organization, WebSite, WebPage | Existing navigation/services/work/contact | Homepage indexed in Search Console |
| /services | Transactional | Software/service scope | Shared; direct solution-fit and briefing guidance | WebPage, four Services | Portfolio, build/buy, cost, AI, team-model guides, contact | Google not indexed/request accepted; Bing live indexable/request accepted |
| /about | Branded/trust | Team and delivery approach | Shared | AboutPage | Existing founders/portfolio/navigation | Unknown |
| /contact | Transactional | Project enquiry | Shared; EmailJS preserved | ContactPage | Existing navigation | Unknown |
| /works | Commercial investigation | Development portfolio | Shared; existing URLs retained | CollectionPage | Three project pages | Unknown |
| /works/archin | Commercial investigation | Lehar Resorts project | Shared; invalid-slug fallback removed | WebPage | Portfolio/contact/navigation | Unknown |
| /works/vntnr | Commercial investigation | JKM Globals project | Shared; invalid-slug fallback removed | WebPage | Portfolio/contact/navigation | Unknown |
| /works/aeorim | Commercial investigation | JKM Solutions project | Shared; invalid-slug fallback removed | WebPage | Portfolio/contact/navigation | Unknown |
| /blog | Informational | Founder software decisions | Shared | CollectionPage | Six guides | Unknown |
| /blog/custom-software-vs-saas | Commercial investigation | Build versus buy | Shared; author/month, references, topic links | BlogPosting, WebPage | Cost/team/AI guides, services/about/contact | Unknown |
| /blog/is-mern-still-worth-it-2026 | Informational | Technology selection | Shared; author/month, references, topic links | BlogPosting, WebPage | AI/build-buy/cost guides, services/about/contact | Unknown |
| /blog/ai-integration-for-startups | Solution-aware | Useful AI pilot | Shared; author/month, references, topic links | BlogPosting, WebPage | MERN/cost/build-buy guides, services/about/contact | Unknown |
| /blog/agency-vs-in-house-developers | Commercial investigation | Delivery team choice | Shared; author/month, references, topic links | BlogPosting, WebPage | Build-buy/cost/website guides, services/about/contact | Unknown |
| /blog/saas-development-cost | Commercial investigation | SaaS budget scope | Shared; author/month, references, topic links | BlogPosting, WebPage | Build-buy/team/AI guides, services/about/contact | Unknown |
| /blog/startup-website-mistakes | Problem-aware | Qualified website enquiries | Shared; author/month, references, topic links | BlogPosting, WebPage | Team/MERN/build-buy guides, services/about/contact | Unknown |
| /privacy-policy | Branded/trust | Data policy | Shared; legal substance preserved | WebPage | Existing navigation/footer | Unknown |
| /terms-and-condition | Branded/trust | Project terms | Shared; legal substance preserved | WebPage | Existing navigation/footer | Unknown |

## Validation and before/after measurement

Final synchronous build, type checks and all 18 SEO assertions pass. Oxlint reports the two pre-existing component-export warnings in BlogPage and Works. Automated assertions check 17 complete documents, unique titles/descriptions, one H1 each, canonicals, JSON-LD parsing/visible authors, valid internal routes, matching Markdown, sitemap inventory and noindex 404 output. They are not substitutes for Google rich-result tests, rendered mobile QA or live HTTP verification.

| Measure | Before | After / status |
|---|---|---|
| Valid deep pages on direct HTTP | 0/16; all 404 | 16/16 deep pages now HTTP200 with actual initial content |
| Canonical pages in sitemap | No sitemap | 17 generated and live HTTP200 |
| Initial main content | Absent | Present in17 verified production documents |
| Unique descriptions / canonicals | Absent | 17/17 local assertions |
| Homepage H1s | 9 fragmented | 1 local assertion |
| JSON-LD | Absent | 17 route graphs parse locally |
| robots / llms / sitemap | HTTP 404 | All three live HTTP200 |
| Organic clicks, impressions, traffic, rankings | Unavailable | Unavailable until verified measurement access and time accrue |
| Lab performance | PSI quota error; mobile LH NO_FCP | One local mobile simulation: performance26, SEO100, accessibility93; FCP4.8s, LCP15.5s, TBT4,820ms, CLS0.002; CPU warning and uncompressed local server; no field/pass claim |
| Field LCP / INP / CLS | No usable CrUX data | Not measured |
| AI mentions/citations | No recorded query sample | Not measured |

## Remaining work, priority and verification

### Closed critical issue

**Production crawl verification and deployment: verified2697fd0.** Evidence: baseline deep-route 404s and generated documents. Expected impact: users/crawlers can request existing content directly. Implementation: deploy through the connected Vercel Git workflow; fetch all 17 routes and unknown paths, inspect canonicals/main content, and render important pages. Failure test: any valid route still404, placeholder HTML, hydration regression or unknown route200. Saved live-http-validation.json closes the route/status issue; desktop/mobile Chrome QA and subsequent changes remain separately recorded.

### CRITICAL

**No unresolved sitewide crawl blocker found in the current 17-route HTTP validation.** Google sitemap processing still needs follow-through below; verified URL-prefix properties cover all current canonical URLs. Optional domain-wide DNS verification remains unavailable without DNS access.

### HIGH

**Google sitemap fetch status.** Evidence: successful submission receipt but dashboard says couldn’t fetch; live XML returns200/application/xml with17validURLs using ordinary/Googlebot/Bingbot UA probes. Homepage Google live test succeeds. One justified retry did not clear the dashboard status. Expected impact: complete sitemap discovery. Implementation: allow platform processing, inspect Google crawl/log details when available, verify actual provider requests and resubmit only if a diagnosed issue is corrected; retain sitemap in robots and internal links meanwhile. Verification: Search Console status Success with17discoveredURLs. Vercel active firewall-config read returned config-not-found; this does not prove every platformIP has access.

**Confirm enquiry delivery.** Evidence: integration code exists, but template variables and recipient dashboard settings were not inspected. Expected impact: organic enquiries arrive with name/email/message and reply address. Implementation: inspect actual EmailJS template fields/recipient in its authenticated dashboard; send one clearly identified owner-authorized test. Verification: accepted request plus email history and recipient inbox. Mock tests verify UI logic only.

**First-party measurement follow-through.** Evidence: Google/Bing properties and GA4 web stream now exist, but search history and postdeployment growth have not accrued. Expected impact: distinguish crawl recovery from actual search/conversion outcomes. Implementation: use the created verified properties and consent-based GA4 integration; track accepted contact requests without form data, distinguish UI tests from real enquiries, and review matched28-day query/landing-page reports. Verification: test event and 28-day branded/nonbranded landing-page reports. Never report missing data as zero.

**Performance follow-through.** Evidence: oversized image bytes, failed PSI/Lighthouse measurements and eagerly animated text. Expected impact: faster loading with stable UI. Implementation: obtain successful comparable mobile/desktop lab captures, tune LCP prioritization and offscreen images where evidence warrants, then measure CrUX/real-user INP when sufficient data exists. Verification: successful matched tests, request sizes, no design regressions, and p75 field measures. Reduced byte requests alone do not prove passed CWV.

### MEDIUM

**Company contact/social identity.** Evidence: generic x.com/linkedin.com/dribbble.com footer links, info@clydara.com differs from clydralab.com and connected EmailJS mailbox. Expected impact: clearer entity and support identity. Implementation: owner supplies verified official profile URLs and confirms mailbox delivery; update visible profiles first, then appropriate sameAs/contact facts. Verification: links resolve to actual company profiles and a mailbox test succeeds. No addresses were guessed.

**Evidence-rich case studies and commercial terms.** Evidence: project descriptions/50+ app and expo claims lack independent verification in this run; discount reference price/end date not established. Expected impact: useful unique citation material and buyer confidence. Implementation: obtain client-approved scope, constraints, public project links, methodology and measured outcomes; verify time-limited offer terms. Verification: accessible evidence and owner/client approval. Do not fabricate metrics or rewrite legal terms without facts.

**Accessibility and crawler-IP checks.** Evidence: baseline Lighthouse diagnostic flags low-contrast cyan text and heading-order concerns; user-agent-only probes cannot prove true-provider IP access. Expected impact: readable UI and reliable discovery. Implementation: review color contrast without replacing brand/style indiscriminately, repair substantive heading-order gaps, inspect Vercel firewall rules and actual verified bot logs. Verification: successful accessibility tests plus approved bot-IP/log evidence. No blanket firewall exemptions.

### LOW

**Future content and legitimate authority.** Evidence: current six guides cover major buying decisions but no validated first-party benchmark or original case-study dataset. Expected impact: differentiated information that is worth citing/linking. Implementation: publish one substantial approved case study, a scope-estimation methodology, and useful technical implementation evidence; pursue actual client attribution, founder portfolio links, relevant industry contributions and qualified company listings. Verification: genuine referral links, qualified enquiries, GSC query growth and documented AI query samples over time. No mass outreach, paid guarantees or spam directories.

**Regional platforms and additional standards.** Evidence: no Korean/Russian focus, commerce model or agent-transaction requirement. Expected impact conditional on future business relevance. Implementation: revisit Naver/Yandex/local/merchant/WebMCP only when actual market/product facts justify them. Verification: eligible market demand and official current requirements. No pointless account creation.

## Measurement plan

Annotate the actual deployment date in owner reporting. Compare 28-day pre/post periods when available, separating branded/nonbranded queries, page intent, organic landing sessions and successful enquiry conversions. Monitor valid-page crawl/index status, GSC/Bing sitemap processing, redirects, canonical selection, p75 LCP/INP/CLS, and real referring domains. Track identifiable ChatGPT/Perplexity/Claude referrals with referral limitations; record AI citation query/platform/date samples rather than claiming a universal AI ranking. Indexing and growth can take time; submission, indexing and ranking remain separate outcomes.

## Sources and research

- [Claude SEO repository and current workflows](https://github.com/AgriciDaniel/claude-seo)
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google structured data and Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google AI search features](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Search documentation updates](https://developers.google.com/search/updates)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Indexing API scope](https://developers.google.com/search/apis/indexing-api/v3/using-api)
- [OpenAI search and training crawlers](https://developers.openai.com/api/docs/bots)
- [Anthropic crawler purposes](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity crawler guidance](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [llms.txt proposal](https://llmstxt.org/)
- [IndexNow protocol documentation](https://www.indexnow.org/documentation)
- [Vercel Git deployments](https://vercel.com/docs/git)
- [React application guidance](https://react.dev/learn/creating-a-react-app), [Node event-loop guidance](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop), [Express production security](https://expressjs.com/en/advanced/best-practice-security/), [AI evaluation guidance](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests), [AWS pricing](https://aws.amazon.com/pricing/), [Stripe subscription architecture](https://docs.stripe.com/billing/subscriptions/overview).

Separate research evidence in seo-working/research.md distinguishes direct business competitors from SERP competitors. Competitor pages were evaluated for service scope, case-study proof and founder decision content; they were not copied. Search snippets are a point-in-time discovery sample and no invented search volume/ranking data was assigned.


## Changed files and evidence

Implementation changes: index.html; package.json; vercel.json; src/App.tsx; src/main.tsx; src/entry-server.tsx; src/seo/site.ts; src/seo/Seo.tsx; src/pages/NotFoundPage.tsx; AboutPage, BlogPage, BlogDetailPage, ContactPage, ServicesPage, WorkDetailPage, WorksPage and SeoContent.css; Hero, Works, Pricing components; globals.css; scripts/prerender.mjs, scripts/seo.test.mjs, scripts/indexnow.mjs, scripts/live-check.mjs, scripts/analytics.test.mjs; src/seo/analytics.ts, src/seo/ConsentAnalytics.tsx; .github/workflows/indexnow.yml; seo/indexnow.json. Evidence under seo/evidence preserves baseline, research, schema policy, toolkit readiness/live checks, HTTP validation, Chrome assertions, effective-image measurements and submission receipts. Public ownership proof tags are intended to be published; no private authentication credential is committed.


## All 34 phases: actual execution status

This is an execution record, not a claim that traffic has already grown. Complete website checks and submissions are distinct from pending platform processing, business evidence and measurement over time.

| Phase | Status | Evidence / limitation |
|---|---|---|
|1 Business understanding |Executed |Agency services, existing portfolio, founder guides, enquiry conversion; global English inference |
|2 Baseline |Technical baseline captured; first-party history pending |Raw/rendered crawl, resources, drift snapshot; new accounts cannot manufacture historical reports |
|3 Competitors/SERP |Public search research executed; rank/citation coverage incomplete |research.md separates business and SERP competitors; no invented localized top10 or AI mention counts |
|4 Topic architecture |Implemented for existing pages |Intent/page map and six guide clusters; no keyword-volume invention |
|5 Technical crawl |Implemented and verified production |17 canonical200s; real main content; unknown404;308normalization |
|6 Sitemap/robots |Implemented and verified production |Canonical inventory17, declared XML, toolkit sitemap validation |
|7 On-page |Implemented |Unique metadata, oneH1, visible authors, coherent navigation |
|8 AEO |Existing answers retained and improved |Service decision criteria, guide context and useful sources; no thin FAQ dump |
|9 GEO |Implemented useful clarity/citations |Primary technical references, passage context, visible attribution; unique client data still requires company evidence |
|10 Trust |Audited; authors improved |About/contact/legal pages retained; verified official mailbox/socials and client proof remain needed |
|11 Schema |Implemented and parsed |Stable conservative entity graph matching visible facts; no invented ratings/dates |
|12 Images/video |Image fixes measured; video N/A |Four effective variants3.777MB saved; visual/resolution checks; no meaningful site video |
|13 Performance |Partial practical fixes |Fonts duplication removed, real HTML, CDN image savings; local mobile perf26 indicates more work; no fieldCWV pass claim |
|14 AI crawler policy |Audited and preserved |Wildcard access; search/training separated; actual providerIP/CDNlogs not established |
|15 Agent readiness |Implemented and checked |llms.txt, matching Markdown, alternate links; optional transaction/catalog protocolsN/A |
|16 Google submission |Verified and submitted; sitemap Success |Canonical URL-prefix verified; homepage indexed/live indexable; accepted requests retained; latest sitemap Success with17discovered URLs |
|17 Bing/IndexNow |Verified, sitemap submitted, indexing request accepted |Bing sitemap Processing; services live indexable; IndexNow initial202; subsequent200 for6image-changed and17GA4-changed URLs |
|18 Yandex |Ownership verified; sitemap submitted |Authenticated owner confirmed via public meta tag; sitemap processing queue; shared IndexNow retained |
|19 Naver/regional |Naver ownership and sitemap verified; Seznam accepted |Naver RSS saved per owner confirmation; Seznam official homepage receipt; no fabricated Korean targeting |
|20 ChatGPT Search |Discovery eligibility audited |Public HTML/robots accessible via ordinary probes; no fictitious submission endpoint |
|21 Claude Search |Discovery eligibility audited |Search vs training purposes researched; no guarantee of citations |
|22 Perplexity/other |Access/authority work; Brave accepted homepage |Primarycrawler guidance, useful content; no paid guaranteedAIindexing |
|23 Entity footprint |Audited, incomplete owner facts |Brand/source consistency; generic social URLs and mailbox discrepancy require verified replacements |
|24 LocalSEO |N/A based on current evidence |No verified physical/service-area location; no fake office/maps profile |
|25 Ecommerce |N/A |Agency model, no product catalog/merchant feed |
|26 Backlinks |Research and legitimate strategy; quantitative baseline unavailable |No provider credential or genuine customer evidence; no fake links/outreach |
|27 Content gap implementation |Existing services/guides materially improved |Scope guidance, author/source context, CTA/cluster links; evidence-rich case studies require company/client data |
|28 Internal links |Implemented and validated |Knownroute inventory assertions, service/guide/contact relationships |
|29 Development safety |Executed |Dedicated branch, source review, type/build/lint18tests, desktop/mobileQA, preserved contact behavior |
|30 Deploy |Connected Git deployment executed |2697fd0 repaired build; 5235b69 images/proofs and 0c641b3 GA4 verified live, all17 routes200 |
|31 Postdeploy submissions |Executed Google/Bing/IndexNow/Brave/Yandex/Naver/Seznam |Google sitemap Success; Bing/Yandex processing; Naver sitemap listed; RSS owner-confirmed; no indexing guarantee |
|32 Validation |HTTP/Chrome/toolkit executed |Status/canonical/schema/content/navigation/form mocks; platformindex data pending |
|33 Measurement |Verified properties, GA4 web stream and drift established; growth pending |Consent-based page/accepted enquiry measurement; no historical growth, fieldCWV or AI citations invented |
|34 Report |Produced and updated with execution evidence |This report plus sanitized machine evidence; unfinished work has priority/impact/verification |

## Work toward qualified traffic after indexing

Prioritize qualified project enquiries rather than raw visitor count. Start with the existing build-versus-buy, development budget and team-selection guides linked to services/contact. Once reporting processes, review which nonbranded queries produce impressions, map them to the existing intent architecture, improve passages that genuinely answer those queries, and measure contact conversion. The next substantial content should be a client-approved implementation case study with constraints, actual delivery decisions and verified results, then a transparent scope/budget methodology. Backlinks should come from actual client attribution, founder technical work and relevant industry contributions. These require truthful business evidence; creating false claims or bulk directory listings cannot substitute for it.

## GA4 collection implementation

Created the Clydara Analytics account, Clydara website property and HTTPS web stream after explicit agreement approval. The public measurement identifier belongs in the browser tag; no Measurement Protocol private secret was created. Optional account sharing is disabled. Enhanced measurement is turned off to prevent duplicated React Router views and unintended form/site-search capture. Basic consent blocks tag loading until Allow analytics; Decline leaves the contact form usable. Preferences can reopen/withdraw consent. Only known canonical pages, sanitized referrer paths and accepted EmailJS generate_lead events are sent; form names/emails/messages and URL query strings are excluded. Local/preview origins do not collect. Unit stubs verify consent, single tag, two route views, no duplicate, one accepted lead and withdrawal. Live/browser/report receipt is separate evidence and does not prove organic enquiries or growth.

Sources: [Google SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [manual page-view duplication guidance](https://developers.google.com/analytics/devguides/collection/ga4/views), [basic consent](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic).

## Final measurement and submission receipt

On 2026-10-04, GA4 Realtime displayed 1 active user, 1 page_view for the live Contact Clydara page, first_visit and session_start. This was the consented validation visit, not acquired organic traffic. The verified canonical Search Console property is linked to the web stream. generate_lead was saved as a key event using the existing code-triggered accepted-contact event, once per event, without an invented default revenue value. No real enquiry was submitted for this validation; actual inbox delivery and real lead receipt remain unverified. ga4-realtime.png preserves the received page view.

The GA4 deployment IndexNow workflow 37214114847 returned200 accepted=true for17 meaningfully changed rendered documents at revision0c641b3. This confirms notification receipt, not indexing. A final documentation-only push does not justify another indexing request for unchanged content. Live HTTP evidence records the application revision before that documentation-only commit. Google sitemap processing remains Couldn’t fetch; Bing remains Processing. These require platform processing and further diagnosis, rather than claims of successful indexing.

## Google Search Console follow-through (2026-10-04, 20:58 PKT onward)

The authenticated Google Inspection Tool smartphone successfully fetched the exact submitted sitemap URL at20:58:08 PKT with Crawl allowed=Yes and Page fetch=Successful. Both Manual actions and Security issues reports say No issues detected. The valid1255-byte XML still contains17 canonical URLs, returns200 application/xml and has no blocking response header. The existing sitemap was resubmitted after this diagnostic; Google displayed Sitemap submitted successfully. Processing still has not been demonstrated as Success, so live fetching and sitemap processing remain separate states. No sitemap URL indexing request was made; a sitemap is a discovery resource, not a commercial landing page.

Evidence: google-sitemap-live-fetch.png, google-sitemap-resubmitted.png, google-followup.json. Google recommends its live sitemap test for fetch diagnosis and may retry transient failures: https://support.google.com/webmasters/answer/7451001.

Contact was unknown to Google; its new indexing request was accepted into the priority crawl queue. About was also unknown; Google returned a submission error and then a live-test service error asking to try again in a few hours. About remains200, canonical and indexable in live HTTP checks and is included in the sitemap. Its manual request is not reported as accepted. Page indexing report is still Processing data, check again in a day or so. The already accepted homepage/services requests were not repeated.

## Expanded distribution follow-through (2026-10-04)

The latest Google sitemap report is **Success with17discovered URLs**, superseding the historical fetch failure above. Yandex ownership is verified and its sitemap is queued. Naver ownership and sitemap registration are verified in the authenticated dashboard; RSS was saved according to owner confirmation after browser control disconnected. Seznam accepted the canonical homepage through its official form. These receipts do not establish indexing, ranking or traffic growth.

See [SEARCH-AI-DISTRIBUTION-REPORT.md](SEARCH-AI-DISTRIBUTION-REPORT.md) for the complete platform matrix, current official discovery mechanisms, crawler/search-versus-training policy, monitoring, remaining work and traffic priorities. Live accessibility monitoring passed120synthetic requests across15crawler identities/eight resources. Daily GitHub run37218166282 succeeded; weekly monitoring is active. Production4118cae includes public ownership tags, six-guide RSS and sanitized campaign/referral measurement, with19SEO checks and analytics checks passing. Actual provider-IP access, historical growth, AI citation baseline and GA4 custom-dimension registration remain unverified or pending.


## Production and discovery update — 7 October 2026

Commit **bdb42f2** is deployed and verified:17 canonical pages,30 built assets and six discovery resources passed live checks; an unknown URL returned404/noindex. The owner-selected public email **clydara1@gmail.com** is now present on contact/privacy/terms pages. IndexNow accepted those three changed URLs at200 in [workflow37661273585](https://github.com/MuhammadFaizan-prog/clydara-website-2026/actions/runs/37661273585). No unchanged pages were resubmitted.

Route asset splitting reduced measured initial JavaScript21–27% and CSS41–73% across home/services/contact while preserving fully rendered initial HTML. Build/type-check,20 SEO checks, desktop navigation/direct contact loading and a390pxcontact layout check passed. Existing console/lint warnings are documented; no updated field-CWV score or inbox receipt is claimed.

Actual branded answers in ChatGPT, Gemini, DuckAssist and Ask Brave cited the canonical website. Claude initially confused the company; Perplexity/Grok cited directories without a first-party linked answer citation. Brave classic and Ecosia search inclusion were observed. Qwant/Yahoo/Mojeek had no results for the supported tested queries. See [SEARCH-ENGINE-VISIBILITY-RECORD.md](SEARCH-ENGINE-VISIBILITY-RECORD.md), `seo/evidence/ai-search-baseline.json` and the expanded distribution report for dates, queries, source links and limits. These observations do not demonstrate traffic growth, stable ranking or nonbranded citation share. Prior phase rows and dated receipts remain historical; this update supersedes any earlier statement that no actual AI citation baseline exists.


Additional checks on 8 October: Kagi showed five first-party pages and a linked Quick Answer. Mistral's current Vibe interface and Poe's Assistant also cited the website and repeated the corrected email. Poe Sonar was blocked by points; Yep failed to load results; the tested Phind entrypoint returned a deployment404. These statuses are documented separately rather than reported as indexing failures. See the dated visibility register.


## Copilot check and owner exclusions — 8 October 2026

Copilot completed the natural branded question in an Auto/Temporary Chat session. It mixed the agency directory profile with the unrelated clydara.com contact details and did not cite the canonical site. A separate explicit-URL diagnostic reported retrieval failure. These are recorded product outcomes, not proof of a robots or WAF block; other products successfully cited the site and live HTTP validation passed. Both screenshots are retained in the visibility register. Investigate provider-specific retrieval through authorized logs and compare future answers rather than weakening security or repeatedly requesting unchanged URLs.

Meta AI is **owner-skipped and untested** after its login reached a recovery/security check. No credential changes or CAPTCHA completion were performed. Seven tested products have shown first-party branded citations; sustained nonbranded traffic, ranking growth and provider-IP evidence remain unmeasured.
