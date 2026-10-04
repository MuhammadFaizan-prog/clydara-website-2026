# Clydara search and AI distribution execution report

Date: 4 October 2026. Canonical site: https://www.clydralab.com/. Repository: MuhammadFaizan-prog/clydara-website-2026. This extends SEO-AEO-GEO-MASTER-REPORT.md; it does not repeat completed submissions. The business is an English-language software/design agency with global project enquiries as its conversion goal. Country-specific expansion is conditional on actual customer demand.

## Verified execution and limits

- Google sitemap processing changed from **Couldn't fetch** to **Success, 17 discovered pages**. Evidence: `seo/evidence/google-sitemap-success.png`. The earlier Google failure is historical, not the current result. Homepage indexing was previously confirmed; discovery of 17 URLs does not prove all 17 are indexed.
- Yandex property was added and ownership verified through a deployed public meta tag. Its sitemap is in the **processing queue**, not confirmed indexed. Evidence: `seo/evidence/yandex-sitemap-submitted.png`.
- Seznam's official add-URL form accepted https://www.clydralab.com/. Evidence: `seo/evidence/seznam-submitted.png`. Indexing remains unverified.
- Naver ownership is verified and its authenticated dashboard accepted the canonical sitemap. The submitted list shows sitemap.xml with registration timestamp 26.10.05 02:18:58 Korea time. Evidence: `seo/evidence/naver-sitemap-submitted.png`. The owner confirmed RSS was saved after browser control disconnected during submission; an independent RSS receipt screenshot was not captured.
- Existing shared IndexNow notifications cover participating engines including Naver, Seznam, Yandex, Bing, Amazon and Yep. A notification accepted by one endpoint is shared; this does not prove individual indexing. No unnecessary duplicate calls were added. Deployment 4118cae correctly submitted no unchanged page URLs (GitHub run 37217507690).
- Live HTTP testing made **120 requests across 15 crawler identities and eight resources**, all passed. `seo/evidence/discovery-http.json` records timestamps, statuses, canonicals, content types and sizes. These are simulated User-Agent requests from ordinary client IPs, not verified provider-IP visits.
- RSS publishes the six existing guides, with canonical identifiers and no invented publication dates. It is discoverable from both server HTML and client navigation. Existing matching Markdown and llms.txt are retained.
- Standard UTM campaign labels survive analytics sanitization. Arbitrary query parameters and referrer search queries remain stripped. `discovery_platform` identifies recognized referring domains without confusing lookalike hosts. Analytics still requires consent. This changes measurement capability, not traffic volume.
- A daily GitHub Actions accessibility monitor and an active weekly Codex monitoring heartbeat are configured. Monitoring records failures; it does not automatically alter production or resubmit unchanged URLs.
- Build and 19 SEO tests pass. Analytics module checks pass for consent, deduplication, campaign preservation, query removal and domain-boundary classification. Lint has the same two existing component-export warnings. Production HTML and ownership tags are verified.

No social profiles were created or edited. No backlinks, reviews, clients, credentials, office locations, volumes, ranking gains or AI citations were invented. No training-specific robots policy or security protection was altered.

## Platform status matrix

Types: **A** direct official webmaster/submission; **B** crawler discovery; **C** provider-dependent product/browser; **D** conditional market/vertical. An engine can use more than one mechanism. **U** below means unmeasured, not zero. **UA pass** means simulated HTTP tests only. WAF status stays **PARTIAL** because actual verified crawler-IP requests and static CDN access logs are not established.

| Platform | Priority | Type | Account | Ownership Verified | Sitemap Submitted | URL/API Submission | Bot Allowed | WAF Allowed | Indexed | AI Citation | Traffic Detected | Action Needed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Google Search | 1 | A | Existing | VERIFIED | VERIFIED: Success, 17 | Previously accepted; no duplicate requests | VERIFIED: UA pass | PARTIAL | Homepage verified; others NEEDS MONITORING | U | U | Monitor existing property |
| Google AI Overviews / AI Mode | 1 | B/C | Existing GSC | Same site | Google sitemap | NO DIRECT SUBMISSION | Googlebot UA pass; snippet allowed | PARTIAL | Eligibility depends on individual indexing | NEEDS MONITORING | U | Measure actual AI report and citations |
| Google Discover / Chrome content discovery | 1 | B/C | Existing GSC | Same site | Google sitemap | NO DIRECT SUBMISSION | Googlebot UA pass | PARTIAL | Homepage indexed; guide eligibility unconfirmed | NOT APPLICABLE | U | Original editorial evidence and suitable images |
| Gemini | 1 | C | No publishing account needed | NOT APPLICABLE | No independent sitemap endpoint documented | NO DIRECT SUBMISSION | Google discovery accessible; training policy preserved | PARTIAL | Product-specific retrieval U | NEEDS MONITORING | U | Test actual search-enabled answers |
| Bing / Copilot / Edge | 1 | A/C | Existing | VERIFIED previously | COMPLETED: processing | Existing requests and IndexNow | bingbot UA pass | PARTIAL | NEEDS MONITORING | AI Performance U | U | Existing property monitoring only |
| Yahoo | 2 | C | NOT APPLICABLE | Bing property | Via Bing | NO DIRECT SUBMISSION: official route is Bing | Upstream bingbot pass | PARTIAL | U | U | U | Observe actual Yahoo results |
| DuckDuckGo | 2 | B/C | NOT APPLICABLE | NOT APPLICABLE | Existing sitemap discovery / Bing upstream | NO DIRECT SUBMISSION | DuckDuckBot UA pass | PARTIAL | U | U | U | Check real result surfaces |
| DuckAssist | 2 | B | NOT APPLICABLE | NOT APPLICABLE | Discovery | NO DIRECT SUBMISSION | DuckAssistBot UA pass | PARTIAL | U | NEEDS MONITORING | U | Separate answer citations from classic results |
| Brave Search / Ask Brave / Leo | 2 | A/B/C | NOT APPLICABLE | NOT APPLICABLE | Crawl discovery | Homepage accepted previously | Googlebot rules accessible; no invented Brave UA | PARTIAL | U | NEEDS MONITORING | U | Keep prior accepted receipt; no repeated submission |
| Yandex | 2 | A | Signed in | VERIFIED | COMPLETED: processing queue | Shared IndexNow | Existing wildcard allow | PARTIAL | NEEDS MONITORING | U | U | Monitor processing |
| Naver | 2 | A | Signed in | VERIFIED | COMPLETED: listed in dashboard | Shared IndexNow accepted; RSS saved per owner confirmation | Yeti UA pass | PARTIAL | NEEDS MONITORING | U | U | Capture RSS receipt when browser reconnects; monitor crawling |
| Seznam | 2 | A/B | Public form | NOT APPLICABLE to public form | robots sitemap discovery | COMPLETED: official homepage form; shared IndexNow | SeznamBot UA pass | PARTIAL | NEEDS MONITORING | U | U | Separate receipt from inclusion |
| Qwant | 2 | B | NOT APPLICABLE | NOT APPLICABLE | robots sitemap discovery | NO DIRECT SUBMISSION documented | Qwantbot UA pass | PARTIAL | U | U | U | Diagnose real results; support only if issue persists |
| EUSP | 2 | B/C | NOT APPLICABLE | NOT APPLICABLE | Qwant discovery | NO DIRECT SUBMISSION documented | Qwantbot UA pass | PARTIAL | U | U | U | Monitor actual regional provider |
| Ecosia | 2 | C | NOT APPLICABLE | NOT APPLICABLE | Provider-dependent | NO DIRECT SUBMISSION documented | Google/Bing/Qwant routes pass | PARTIAL | U | U | U | Identify results provider per session |
| Mojeek | 2 | B | NOT APPLICABLE | NOT APPLICABLE | Linked web discovery | NO DIRECT SUBMISSION | MojeekBot UA pass | PARTIAL | U | NOT APPLICABLE | U | Build useful crawlable references; no spam add form |
| Kagi | 2 | B/C | Search account required for query tests | NOT APPLICABLE | Multiple search sources | NO DIRECT SUBMISSION documented | Existing public HTML accessible | PARTIAL | U | U | U | Do not place commercial agency in noncommercial Small Web |
| Applebot / Safari / Siri / Spotlight | 1–2 | B/C | NOT APPLICABLE | NOT APPLICABLE | Crawl discovery | NO DIRECT SUBMISSION for ordinary site | Applebot UA pass | PARTIAL | U | U | U | Verify real Applebot IPs if logs become available |
| Apple Intelligence | 2 | C | NOT APPLICABLE | NOT APPLICABLE | Product-dependent | NO DIRECT SUBMISSION documented | Search access separate from Applebot-Extended | PARTIAL | U | NEEDS MONITORING | U | No model-training policy change |
| ChatGPT Search / OpenAI browser surfaces | 1 | B/C | Query session needed | NOT APPLICABLE | Crawl discovery | NO DIRECT SUBMISSION for rankings | OAI-SearchBot / ChatGPT-User UA pass | PARTIAL | U | NEEDS MONITORING | U | Real citation baseline and verified IP logs |
| Claude Search | 1 | B | Query session needed | NOT APPLICABLE | Crawl discovery | NO DIRECT SUBMISSION documented | Claude-SearchBot / Claude-User UA pass | PARTIAL | U | NEEDS MONITORING | U | Search policy separate from ClaudeBot |
| Perplexity / Comet | 1 | B/C | Query session may require sign-in | NOT APPLICABLE | Crawl discovery | NO DIRECT SUBMISSION documented | PerplexityBot / Perplexity-User UA pass | PARTIAL | U | NEEDS MONITORING | U | Test actual sourced answers |
| You.com | 2 | B/C | API credentials unavailable | NOT APPLICABLE | Crawl/search API ecosystem | NO DIRECT SUBMISSION documented | Existing public content accessible; provider-IP test U | PARTIAL | U | U | U | Use authorized API; do not bypass UI automation restrictions |
| Grok | 2 | C | Query session unavailable | NOT APPLICABLE | No publisher endpoint established | NO DIRECT SUBMISSION documented | Public content accessible; no invented Grok crawler | PARTIAL | U | U | U | Current docs establish web search, not a publisher console |
| Mistral Le Chat | 2 | C | Query session unavailable | NOT APPLICABLE | Provider-dependent | NO DIRECT SUBMISSION documented | Public content accessible | PARTIAL | U | U | U | Verify product's actual cited sources |
| Meta AI | 2 | C | Query session unavailable | NOT APPLICABLE | Mechanism not verified | No official publisher endpoint established | Official crawler documentation inaccessible in research tool | PARTIAL | U | U | U | Do not guess crawler policy or enable training |
| Phind | 2 | C | Query session unavailable | NOT APPLICABLE | Provider not established by current primary docs | No official publisher endpoint found | Unverified dedicated bot | PARTIAL | U | U | U | Research coverage remains PARTIAL |
| Poe | 2 | C | Bot/model session-dependent | NOT APPLICABLE | Third-party bot-dependent | NO DIRECT SUBMISSION documented | Varies by selected bot/provider | PARTIAL | U | U | U | Do not treat Poe as one independent search index |
| Chrome / Firefox | 2 | C | NOT APPLICABLE | NOT APPLICABLE | Chosen search provider | NO DIRECT SUBMISSION to browser itself | Relevant provider checks above | PARTIAL | U | U | U | No default-engine changes or extensions |
| Opera / Opera AI / Neon | 2 | C | Product-dependent | NOT APPLICABLE | Chosen search / AI providers | NO DIRECT SUBMISSION to browser itself | Relevant provider routes | PARTIAL | U | U | U | No unnecessary installation |
| Baidu | 3 | A/D | BLOCKED — AUTH REQUIRED if expansion pursued | Unverified | Not submitted | Official resources platform evaluated | Existing wildcard policy retained | PARTIAL | U | U | U | No verified Chinese market/language; defer account work |
| Yep / Amazonbot | 3 | B/C | NOT APPLICABLE | IndexNow proof deployed | Shared notification mechanism | Existing IndexNow coverage | Wildcard retained; dedicated IP test U | PARTIAL | U | U | U | Shared acceptance does not establish product citations |
| Maps / merchants / news / jobs | Conditional | D | NOT APPLICABLE without qualification | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | Not changed | Not changed | U | U | U | No fake offices, feeds, reviews or job content |

## Current official mechanisms and evidence

Research used official sources on 4 October 2026. Lack of a documented endpoint means none was established in this research, not proof that a service could never introduce one.

- Google AI eligibility: [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Indexed, snippet-eligible content and ordinary useful SEO remain prerequisites. Google announced dedicated generative-AI Search/Discover performance reporting, with worldwide rollout noted in the [current announcement](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports?hl=en). Actual data availability for this new property remains unconfirmed; do not manufacture an AI report.
- [Discover guidance](https://developers.google.com/search/docs/appearance/google-discover): no separate submission or required special schema. Large representative images are recommended. Existing guide images use 916px-wide variants; a 1200px editorial-image improvement is still needed, without inventing original evidence or blindly cropping vertical artwork.
- [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) and [June visibility additions](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/): citation reports are distinct from rankings and ordinary clicks. Their actual property data has not been exported.
- [Yahoo's official route](https://help.yahoo.com/kb/search-for-mobile-web/submit-website-yahoo-search-sln2217.html) is Bing Webmaster Tools; no separate redundant Yahoo submission was attempted.
- DuckDuckGo uses [multiple sources including Bing and its crawler](https://duckduckgo.com/duckduckgo-help-pages/results/sources). [DuckAssistBot](https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot) retrieves for AI answers, separate from DuckDuckBot and model training.
- [Brave's crawler documentation](https://search.brave.com/help/brave-search-crawler) says it does not advertise a distinct UA and follows Googlebot crawlability. The prior official form receipt is retained; no fictitious BraveBot identity was added.
- [IndexNow FAQ](https://www.indexnow.org/faq) lists shared participating endpoints. [Seznam's official FAQ](https://o-seznam.cz/napoveda/vyhledavani/nejcastejsi-dotazy/) documents its public add form and IndexNow. Its [RSS guidance](https://o-seznam.cz/napoveda/vyhledavani/seznambot/rss-kanaly/) supports adding a genuinely useful guide feed.
- [Yandex sitemap guidance](https://yandex.com/support/webmaster/en/controlling-robot/sitemap) and [ownership guidance](https://yandex.com/support/webmaster/en/service/rights) govern the verified property. No Yandex Metrica or paid security product was installed.
- [Naver Search Advisor](https://searchadvisor.naver.com/) and [crawler/firewall guide](https://searchadvisor.naver.com/guide/seo-basic-firewall) establish ownership tools, Yeti crawling and IndexNow support. No Korean content or business identity was fabricated.
- [Qwant indexing](https://help.qwant.com/hc/en-us/articles/49002658519569-How-Qwant-Indexes-the-Web), [crawler verification](https://help.qwant.com/hc/en-us/articles/51146433634833-The-Qwant-bot-QwantBot-and-the-robots-txt-file), and [missing-result diagnostics](https://help.qwant.com/hc/en-us/articles/49027002807313-Why-Doesn-t-My-Site-Appear-in-Qwant-Search-Results) establish discovery/diagnosis, not a public guaranteed-inclusion product. [Ecosia's current provider guide](https://support.ecosia.org/article/579-search-results-providers) lists Google, Bing and EUSP, depending on session/location. Do not infer all Ecosia results are Bing.
- [MojeekBot](https://www.mojeek.com/bot.html) respects crawl/index directives; [official Mojeek submission explanation](https://blog.mojeek.com/2015/03/how-to-submit-your-site-to-mojeek.html) describes link discovery rather than a URL add form. [Current official staff discussion](https://community.mojeek.com/t/how-can-i-add-my-website-to-mojeek-search-results/1192) was also consulted. [Kagi sources](https://help.kagi.com/kagi/search-details/search-sources.html) explain its multiple-source approach and specialist own indexes.
- [Applebot documentation](https://support.apple.com/en-ie/119829) distinguishes search discovery, user requests and Applebot-Extended model-training opt-out. Safari/Siri/Spotlight are discovery surfaces, not ordinary-site webmaster portals.
- [OpenAI bots](https://developers.openai.com/api/docs/bots), [Anthropic bots](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), and [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) establish separate search, training and user-fetch policies. User-initiated retrieval is not identical to autonomous crawling.
- [You search API](https://you.com/resources/you-com-web-search-api), [You terms](https://you.com/msa), [Grok web search](https://docs.x.ai/developers/tools/web-search), [Mistral search features](https://help.mistral.ai/en/articles/316384-what-are-the-features-and-limitations-of-le-chat-free), and [Poe FAQs](https://help.poe.com/hc/en-us/articles/19944206309524-Poe-FAQs) do not establish a generic website-ranking submission mechanism. No paid API was purchased.
- [Firefox search settings](https://support.mozilla.org/en-US/kb/change-your-default-search-settings-firefox) and [Opera's current browser connectors](https://blogs.opera.com/news/2026/04/opera-new-browser-connector-brings-claude-and-chatgpt-into-the-browser/) establish browser/provider choices. [Baidu's official resources platform](https://ziyuan.baidu.com/viptools) was evaluated, but a China-specific rollout is not justified by known business evidence.

## Crawler policy and verification matrix

The unchanged robots file says `User-agent: *` / `Allow: /` and references the XML sitemap. There were no explicit training-agent rules to override. No WAF allowlist based only on a spoofable UA was created. For a claimed real crawler request, match the request source IP against current official published CIDRs or perform reverse DNS **and then forward-confirm the IP**, according to that provider's documentation. Public ranges can change; fetch them at verification time.

| Provider | Search/discovery | User retrieval | Model training | Real request verification | Execution |
|---|---|---|---|---|---|
| OpenAI | OAI-SearchBot | ChatGPT-User | GPTBot | Official `openai.com/searchbot.json` and separate user/training lists | Search/user UA pass; no training change |
| Anthropic | Claude-SearchBot | Claude-User | ClaudeBot | Current `claude.com/crawling/bots.json` plus official documentation | Search/user UA pass; no training change |
| Perplexity | PerplexityBot | Perplexity-User | Not treated as training permission | Current provider IP lists linked from official crawler guide | Both UA pass; actual source-IP access U |
| Apple | Applebot | Provider-specific user fetch | Applebot-Extended controls training reuse | Official ranges or reverse/forward `*.applebot.apple.com` verification | Applebot UA pass; no training change |
| DuckDuckGo | DuckDuckBot, DuckAssistBot | Answer retrieval varies | DuckAssist is documented separately from training | Official crawler/IP lists including `duckduckgo.com/duckassistbot.json` | Both UA pass |
| Qwant | Qwantbot | Product-specific | Policy unchanged | Official ranges or reverse/forward `*.qwant.com` | UA pass |
| Mojeek | MojeekBot | Not separately established | Policy unchanged | Official bot page/IP list or reverse/forward `*.mojeek.com` | UA pass |
| Naver | Yeti | Product-specific | Policy unchanged | Current official firewall and verification instructions | UA pass |
| Seznam | SeznamBot | Product-specific | Policy unchanged | Current SeznamBot documentation | UA pass |
| Brave | No distinct advertised UA | Leo/Ask product retrieval varies | Policy unchanged | Do not invent UA/IP identification | Googlebot-rule eligibility only |

Vercel runtime logs returned no records in the available window. Static CDN crawler visits cannot be inferred from missing runtime logs. Active firewall-config retrieval returned `SeawallConfig not found` (404); that is not evidence of a universally open WAF. Raw access-log/IP proof remains **PARTIAL**. When logs exist, preserve sanitized counts, dates, paths, agent and verification outcome locally; do not publish raw visitors' IPs or authentication data.

## AI citation and search baseline

`seo/ai-query-set.json` defines **24 realistic questions** across branded discovery, software/SaaS comparison, technology selection, development budgets, AI implementation, agency selection and lead conversion. These are mapped to existing pages; no thin keyword pages were created. Results must record engine, locale/session, date, cited URL, linked citation versus unlinked brand mention, and competitor domains. One answer does not establish stable market share.

Public research queries for the exact domain, the Clydara software brand and site-scoped SaaS/AI found the canonical homepage and existing Clutch/Manifest profiles. The research search tool is not a reproducible Google/Bing ranking or an AI-product citation benchmark. Results included different founding-year statements across existing profiles (2024 versus 2023); these were not copied into site schema or 'corrected' without business evidence. No existing branding profiles were edited.

The actual Perplexity product was opened for baseline testing. Search-engine/AI sessions can require authentication, product access or CAPTCHA. Untested question/engine pairs stay blank and are **NEEDS MONITORING**, never reported as zero citations or a ranking failure. Official access eligibility, successful synthetic fetches and llms.txt are not evidence that a generated answer cited the site.

## Measurement and monitoring

- Existing GA4 property and lead conversion remain intact. The new page-view parameter `discovery_platform` recognizes ChatGPT, Perplexity, Claude, Bing, Google, DuckDuckGo, Brave, Yandex, Qwant, Ecosia, Naver, Seznam, Kagi, Mojeek, Yahoo, You, Mistral and Grok domain boundaries. Missing referrer = `unknown`; unrecognized valid domain = `other`. It does not pretend to identify the browser or distinguish Copilot from ordinary Bing based only on bing.com.
- Preserve safe `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` values; limit length and accepted label characters. Referrer query strings and arbitrary URL query parameters are not sent. Do not place personal data in campaign labels. GA4 collection still begins only after consent; no enhanced-measurement form data is enabled.
- Native GA4 source/medium reporting can use preserved campaign attribution. To report the custom parameter in standard explorations, register **event-scoped** custom dimension `Discovery platform` → `discovery_platform` in the existing property; dashboard registration is pending. No historical backfill is claimed.
- Daily GitHub workflow `discovery-monitor.yml`: 05:20 UTC / 10:20 Pakistan time; 120 resource/identity checks, failure exit code, 30-day dated artifacts, manual dispatch. It tests accessibility, not actual indexing or citation.
- Weekly Codex heartbeat `clydara-search-and-ai-discovery-monitoring`: Monday 10:00 local time; checks authenticated webmaster/analytics reports where accessible, saved query set, competitor citations, pipeline receipts and official crawler changes. Notifications only for meaningful changes or owner action. No automatic ranking-driven code changes.
- Compare 7-, 28- and 90-day intervals after adequate collection: indexed URLs, organic and AI referrals, queries, clicks, impressions, CTR, leads, page performance, citations and referring domains. Baseline historic traffic/citation data are unavailable; test visits are excluded from claims of commercial growth.

## Remaining work and verification instructions

| Priority | Evidence | Expected impact | Implementation / owner action | Verification |
|---|---|---|---|---|
| LOW | Naver RSS saved per owner confirmation; independent receipt screenshot unavailable | Improves evidence completeness | Capture feed.xml submitted-list receipt when browser reconnects | Saved RSS screenshot; later crawl/index report remains separate |
| HIGH | Actual crawler-IP/log evidence unavailable | Resolve selective CDN/WAF blocks if present | Obtain static access logs/edge security diagnostics; validate official source IPs before scoped changes | Real verified crawler requests return200 and retrieve canonical content |
| HIGH | Per-product citation and first-party historical metrics unavailable | Measure qualified discovery rather than guess | Run saved questions in real search-enabled sessions; export authorized report aggregates | Dated linked citations, referrals and enquiries; no fake zeros |
| HIGH | Existing mobile lab perf26 and large JS bundle | Improve user experience and conversion | Profile production interactions; split large route/animation code when stable; improve genuine LCP resources | Repeat equivalent lab run and later CrUX field data; no regressions |
| HIGH | Site evidence lacks original client outcomes | Improve commercial trust and citation worthiness | Obtain approved measurable project outcomes and methodologies; enrich current portfolio/guide pages | Visible sourced facts, qualified leads, actual cited passages |
| MEDIUM | Event parameter exists; custom dimension not registered | Easier AI/referral reporting | Register event-scoped GA4 dimension in existing property | New consented page views populate exploration after processing |
| MEDIUM | Guide OG images use916px variants | Better Discover preview suitability | Use genuine representative1200px+ editorial images, avoid blind vertical crops | Live OG/schema image, actual size/content, Discover reports |
| MEDIUM | Yandex sitemap queued; new properties need processing | Establish actual index inclusion | Monitor; inspect meaningful pages when processing completes | Portal indexed/processed result, not just submitted state |
| MEDIUM | Meta/Phind primary mechanisms incompletely verified | Avoid obsolete platform assumptions | Revisit current official documentation and product UI when available | Published official mechanism with dated source |
| LOW | Baidu/vertical market qualification absent | Avoid wasted irrelevant distribution effort | Revisit only with verified target-market/product eligibility | Real business/language eligibility and official property receipts |

## Top 10 traffic opportunities

This is a qualitative prioritization, not a forecast or invented keyword-volume report. Potential/competition are professional estimates; current nonbranded visibility and AI citation share remain unmeasured. High commercial intent and global English relevance take precedence over easy obscure-engine submissions.

| Rank | Opportunity / existing destination | Potential traffic | Intent | Competition | Cost | Indexability | AI citation opportunity | Geography |
|---|---|---|---|---|---|---|---|---|
|1|Google discovery of services and portfolio |Highest channel priority |High |High |Low–medium |17crawlableURLs; indexing monitor |Useful proof |Global English |
|2|SaaS scope/cost guide to qualified enquiry |High relative relevance |High |High |Medium: first-party examples |Crawlable, indexing U |Clear budgeting criteria |Global English |
|3|Custom software versus SaaS build/buy |High relative relevance |High |High |Medium: real decision examples |Crawlable, indexing U |Comparison passages |Global English |
|4|Startup AI integration and evaluation |High relative relevance |High |High |Medium: validated pilot evidence |Crawlable, indexing U |Primary-source-supported guidance |Global English |
|5|ChatGPT/Perplexity/Claude sourced answers |Meaningful emerging channel |Mixed–high |High |Medium: original evidence |Accessible; citations U |Directly relevant guide questions |Global English |
|6|Bing/Copilot commercial discovery |Meaningful secondary channel |High |High |Low–medium |Existing submissions |Bing AI citation reports |Global English |
|7|Agency versus in-house delivery decisions |Moderate |High |High |Medium |Crawlable, indexing U |Tradeoff criteria |Global English |
|8|Existing portfolio proof for branded searches |Moderate, qualified |High |Lower branded |Medium: approved outcomes |Crawlable |Specific verifiable projects |Global English |
|9|Brave/DDG/Qwant/Ecosia discovery |Secondary incremental |Mixed |Variable |Low marginal technical cost |Provider dependent |Relevant answer snippets |Global / selected European markets |
|10|Website lead-generation diagnosis |Moderate |Problem-aware |High |Medium: concrete examples |Crawlable, indexing U |Answer-friendly checks |Global English |

## Top 10 quick wins

1. Google sitemap Success now recorded; monitor discovered URLs becoming indexed.
2. Yandex ownership verified and XML submitted; await processing.
3. Seznam official homepage receipt saved; shared IndexNow retained.
4. Naver ownership and XML submission verified; six-guide RSS saved per owner confirmation.
5. Live HTML/Markdown/robots tests across15crawler identities passed.
6. Preserve platform-supplied standard campaign labels while discarding arbitrary queries.
7. Keep RSS alternate discovery after client hydration as well as in initial HTML.
8. Register the prepared GA4 discovery-platform dimension.
9. Daily failure-detecting checks and weekly report/citation monitoring are configured.
10. Use existing commercial/guide pages as the24question map; obtain original client evidence before expanding content.

## Standards and deliberate exclusions

llms.txt and Markdown are navigation aids, not ranking or citation guarantees. No OpenAI/Claude/Perplexity 'AI indexing submission' endpoint was invented. WebMCP and emerging agent protocols are evaluated as proposals/product capabilities, not universal requirements. This ordinary agency site has no authenticated agent API, product catalog or transactional machine interface requiring speculative `.well-known` catalogs, A2A, commerce or OAuth documents. Existing human enquiry behavior and consent remain the supported conversion path. No obsolete sitemap ping endpoints, Google Indexing API for ordinary pages, browser extensions, paid indexing products or auto-outreach were used.

The expanded success condition remains **PARTIAL** while actual index/citation measurement, independent RSS screenshot and verified provider-IP access evidence are outstanding. Completed work and blocked work are intentionally distinguishable.
