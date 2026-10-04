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

Explicit managed setup and doctor were invoked before relying on the runtime. Final doctor output confirms ready=true for the core runtime, Python 3.13 and plugin 2.4.1; browser_ready=false. The managed Chromium download repeatedly timed out, so browser checks use installed Chrome independently. Some source-script diagnostics were attempted separately by the technical specialist using available Python; these are labelled fallback diagnostics, not successful managed-runtime command runs. Missing lxml affected sitemap/agentic helpers. Full site evidence was independently collected through HTTP, Chrome, build-output assertions and source inspection.

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

Vercel clean-URL configuration serves generated documents at existing extensionless URLs and normalizes trailing slashes. Unknown article/project slugs display the actual not-found page rather than another real article/project. Live HTTP status verification is still required after deployment; source configuration is not proof of a production fix.

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

Removed the duplicate Google Fonts CSS import, added a Framer asset preconnection, reduced oversized hero/thumbnail/background image request dimensions while preserving assets and aspect ratios. The animations and visible design remain. The final bundle is 536.94 KB / 171.83 KB gzip, modestly larger than baseline due to metadata and useful content. An attempted route-splitting approach was removed after static checks detected streamed loading placeholders; smaller images and initial content remain the measured improvements. Initial prerendered content is available before JavaScript. Lab scores and field CWV are reported only when valid measurements exist.

The EmailJS handler, service/template/public-key values and actual enquiry flow remain in place. Browser QA intercepts sending requests to test pending, accepted and rejected states without sending customer-like mail. A mock accepted response does not establish inbox delivery or EmailJS dashboard variable/recipient configuration.

### IndexNow

A protocol verification key is generated and served as its required public ownership file. It is a public IndexNow proof value, **not a private EmailJS/API credential**; its literal value is excluded from reports. Builds compare per-page content hashes with the previous production manifest. Automatic notification runs only after a successful production deployment and verifies the exact live revision, canonical content and ownership file. Only changed/new URLs are submitted; deleted URLs require verified 404/410. If the prior snapshot cannot be established, the workflow fails safely instead of repeatedly submitting unchanged pages.

IndexNow HTTP 200 means receipt; 202 means pending key validation. Neither means indexing or ranking. Sitemap submission inside Google/Bing webmaster accounts is a separate action.

## Platform status

Final receipt/status evidence will be updated after live deployment and submission. Final local Chrome QA passed: desktop/mobile layouts, hydration, navigation metadata and intercepted EmailJS200/503/network failures. No real email was sent.

| PLATFORM | ACTION | VERIFIED | SUBMITTED | INDEXED/STATUS | NOTES |
|---|---|---|---|---|---|
| Google Search Console | Create/verify property; submit sitemap; inspect priority URLs | Not yet established | Pending owner-property access | Unknown | User says not previously submitted; account sign-in/ownership required |
| Google Search | Crawl eligibility and canonical HTML | Local checks passed; live pending | No Indexing API use | Homepage publicly discoverable; exact index unknown | Ordinary agency pages are not Indexing API eligible |
| Bing Webmaster Tools | Create/verify property and submit sitemap | Not yet established | Pending owner-property access | Unknown | Import from GSC is possible only after GSC verification |
| IndexNow participants | Serve verification file; notify changed pages | Implemented; live pending | Pending live verification | No index status claim | One compatible request avoids duplicate per-engine notification |
| Yandex / Naver | Assess market relevance | Not relevant to evidenced target market | No account created | Not applicable | No Russian/Korean target market established |
| ChatGPT Search | OAI-SearchBot eligibility | UA-string baseline 200; live/IP checks qualified | No official direct URL ranking submission used | Citations unknown | GPTBot training is separate |
| Claude search | Claude-SearchBot eligibility | UA-string baseline 200; live/IP checks qualified | No fabricated submission | Citations unknown | ClaudeBot training is separate |
| Perplexity | PerplexityBot eligibility and useful cited content | UA-string baseline 200; live/IP checks qualified | No fabricated submission | Citations unknown | Actual crawler traffic/logs unverified |
| GA4 / CrUX / backlink / AI measurement | Access and baseline | Credentials/field data unavailable | Not applicable | Unknown, not zero | No tracker added without an existing measurement ID and privacy context |

## Page-level implementation and intent map

All paths below are relative to https://www.clydralab.com. Shared changes mean initial HTML, one H1, unique metadata/canonical/schema, sitemap inclusion and Markdown representation. Live/index status will be updated after deployment.

| URL | TARGET INTENT | PRIMARY TOPIC | CHANGES | SCHEMA | INTERNAL LINKS | INDEX STATUS |
|---|---|---|---|---|---|---|
| / | Commercial | Development/design agency | Shared; hero image requests and fonts optimized | Organization, WebSite, WebPage | Existing navigation/services/work/contact | Homepage publicly discoverable; exact index unknown |
| /services | Transactional | Software/service scope | Shared; direct solution-fit and briefing guidance | WebPage, four Services | Portfolio, build/buy, cost, AI, team-model guides, contact | Unknown |
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
| Valid deep pages on direct HTTP | 0/16; all 404 | Implementation produces 16 documents; live pending |
| Canonical pages in sitemap | No sitemap | 17 generated; live pending |
| Initial main content | Absent | Present in 17 generated documents |
| Unique descriptions / canonicals | Absent | 17/17 local assertions |
| Homepage H1s | 9 fragmented | 1 local assertion |
| JSON-LD | Absent | 17 route graphs parse locally |
| robots / llms / sitemap | HTTP 404 | Generated; live pending |
| Organic clicks, impressions, traffic, rankings | Unavailable | Unavailable until verified measurement access and time accrue |
| Lab performance | PSI quota error; mobile LH NO_FCP | No valid improvement claim until successful matching test |
| Field LCP / INP / CLS | No usable CrUX data | Not measured |
| AI mentions/citations | No recorded query sample | Not measured |

## Remaining work, priority and verification

### CRITICAL

**Production crawl verification and deployment.** Evidence: baseline deep-route 404s and generated documents. Expected impact: users/crawlers can request existing content directly. Implementation: deploy through the connected Vercel Git workflow; fetch all 17 routes and unknown paths, inspect canonicals/main content, and render important pages. Failure test: any valid route still404, placeholder HTML, hydration regression or unknown route200. This item closes only with saved live evidence.

**Google/Bing account ownership.** Evidence: user says platforms were not submitted; no configured first-party API credentials and browser-owner access not yet established. Expected impact: legitimate sitemap submission, crawl diagnostics and measurable baseline. Implementation: owner signs in to Search Console and Bing, adds the actual domain/URL-prefix property, verifies through authorized DNS/HTML method, then submits /sitemap.xml. Verification: property verified, sitemap success/processing receipt and priority URL inspection. Minimal handoff is an authenticated owner session or the exact supplied verification token; never invent one. Search Console verification may require DNS access. Continue site work independently.

### HIGH

**Confirm enquiry delivery.** Evidence: integration code exists, but template variables and recipient dashboard settings were not inspected. Expected impact: organic enquiries arrive with name/email/message and reply address. Implementation: inspect actual EmailJS template fields/recipient in its authenticated dashboard; send one clearly identified owner-authorized test. Verification: accepted request plus email history and recipient inbox. Mock tests verify UI logic only.

**Establish first-party measurement.** Evidence: no usable GSC/Bing/GA4 credentials/measurement ID. Expected impact: distinguish crawl recovery from actual search/conversion outcomes. Implementation: verify properties, authorize read-only reporting, identify existing analytics setup and consent requirements, track successful contact submissions without copying message text into analytics. Verification: test event and 28-day branded/nonbranded landing-page reports. Never report missing data as zero.

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
