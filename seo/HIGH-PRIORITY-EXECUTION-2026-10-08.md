# High-priority execution, 8 October 2026

Canonical website: https://www.clydralab.com/. This record supplements the master report and distinguishes observed results, implemented work and blocked verification.

## Implemented

The existing GA4 property 557297474 now has an event-scoped **Discovery platform** custom dimension using the existing `discovery_platform` parameter. The saved row was independently read in the authenticated UI; [screenshot](evidence/ga4-discovery-dimension.png) and [record](evidence/ga4-discovery-dimension.json) are preserved. Newly configured dimensions can require processing before reports populate; historical acquisition and genuine lead growth were not established. See [Google's custom-dimension documentation](https://support.google.com/analytics/answer/14239696).

Homepage avatars now request the existing CDN's actual 64-pixel versions. Portfolio images and the service illustration use responsive 512/1024/original sources, explicit display sizes, lazy loading and asynchronous decoding. Original artwork, page layout, animations, navigation and service tabs are preserved. [CDN byte probes](evidence/responsive-image-bytes.json) and [browser checks](evidence/responsive-image-ui-checks.json) record successful decoding and mobile candidate selection; byte savings are not a claim of passed field Core Web Vitals.

The existing `/blog/custom-software-vs-saas` guide now answers the actual non-branded startup question directly, explains how to trial each option, and includes a 36-month worksheet with transparent illustrative arithmetic. Hypothetical costs are explicitly not market pricing, a quote or customer evidence. No new keyword pages or fabricated cases were published. Existing contextual links to services/contact and BlogPosting schema remain.

| URL | Intent | Change | Schema | Internal links | Index status |
|---|---|---|---|---|---|
| `/` | Development agency | Smaller avatars; responsive portfolio/service images | Existing WebPage/Organization graph | Existing navigation and project links | Homepage previously verified indexed; no fresh indexing claim |
| `/works` | Portfolio investigation | Shared responsive portfolio images | Existing CollectionPage graph | Existing project detail links | Not independently refreshed |
| `/blog/custom-software-vs-saas` | Commercial build/buy investigation | Direct answer, trial criteria, transparent cost worksheet | Existing BlogPosting | Existing services/contact/related guides | Not independently refreshed |

## Production lab baseline

[PageSpeed report](https://pagespeed.web.dev/analysis/https-www-clydralab-com/sfm7qhddi0?form_factor=mobile), captured 8 October at 02:02:06 PKT against production `942953d`, before these image changes. Lighthouse 13.5.0, Chromium 153.0.8010.36.

| Metric | Mobile, Moto G Power / Slow 4G | Desktop, custom throttling |
|---|---|---|
| Performance | 80 | 86 |
| Accessibility | 93 | 94 |
| Best practices / SEO | 100 / 100 | 100 / 100 |
| FCP | 3.187 s | 0.693 s |
| LCP | 3.637 s | 0.793 s |
| Total blocking time | 70 ms | 301 ms |
| CLS | 0 | 0 |
| Speed index | 4.942 s | 1.398 s |
| CrUX | No data | No data |

The prior localhost Lighthouse 12.8.2 score 26 used a different environment and is not a comparable before score. [Machine-readable measurements](evidence/psi-high-priority.json), [mobile screenshot](evidence/psi-mobile-before.png), and [desktop screenshot](evidence/psi-desktop-before.png) are preserved. Agentic browsing passed all three applicable checks, with four not applicable. A matched post-deployment run and sufficient real-user field data are separate verification steps.

## Non-branded discovery baseline

Question: **Should a startup build custom software or buy SaaS?** Tests were performed in the actual product browser interfaces. Google showed a non-personalised-results badge after that mode was selected.

| Product | Observed result | Scope and evidence |
|---|---|---|
| Google classic search | No Clydara canonical result observed | Eight organic guide results inspected; [screenshot](evidence/google-build-buy-baseline.png) |
| Google AI Overviews | No first-party Clydara citation observed | Completed answer for this question/session; same screenshot |
| Brave classic search | No Clydara canonical result observed | First-page guide results, approximately 20; [screenshot](evidence/brave-build-buy-classic.png) |
| Ask Brave | No Clydara mention/citation observed | Completed answer; ten research names displayed, not all source URLs inspected; [screenshot](evidence/brave-build-buy-answer.png) |

These four observations are added to the persistent [visibility baseline](evidence/ai-search-baseline.json), now 29 observations. They do not negate the seven previously observed branded citation products, prove global deindexing, or establish stable ranking/citation share. Other non-branded question/product pairs remain unmeasured.

## Contact delivery: real failure diagnosed

The owner supplied matching EmailJS service/template/public-key screenshots and later signed into its separate account. The live form was exercised with the labelled internal test `CLY-20261008-01`, after declining optional Analytics. The form displayed **Unable to send your message**. No successful delivery or organic enquiry is claimed.

The official [EmailJS history API](https://www.emailjs.com/docs/rest-api/history/) returned HTTP 200. The five most recent records matching that test identifier all returned result 2 and **Gmail_API: Invalid grant. Please reconnect your Gmail account**. Browser action retries produced multiple failed attempts under the same identifier; further sends were stopped. Only matching test result/error/time fields were read out; credentials and unrelated message contents were not saved in Git or public evidence. See [sanitised diagnostic](evidence/emailjs-delivery-test.json) and [failure screenshot](evidence/emailjs-live-test-failed.png).

**Exact remaining action:** in the existing EmailJS Gmail service, reconnect the existing `clydara1@gmail.com` connection. This is an expired/revoked provider authorization, not a service-ID or template-ID code fix. Once reconnection succeeds, run one labelled test and verify both provider history and the intended mailbox, including name, email, message and reply address. Never put the private EmailJS key in the browser bundle. Browser control currently times out when reading the authenticated dashboard; opening it in this chat returned queued. Existing signed-in Gmail does not itself repair EmailJS's saved OAuth grant.

## Current priorities

**CRITICAL — Restore Gmail authorization and verify delivery.** Evidence: real failed UI test and provider error above. Impact: prevent lost enquiries. Implementation/verification: reconnect the existing service, then confirm one accepted request and matching recipient message. Do not modify credentials or claim success from mocks.

**HIGH — Measure qualified non-branded traffic and leads.** Evidence: no first-party result in the sampled commercial question; historical growth remains unmeasured. Impact: connect useful content with prospective customers. Compare matching 28-day GSC query/landing-page periods, GA4 session acquisition and genuine `generate_lead` events. Filter internal tests and examine the new dimension after processing. Configuration and branded answers are not traffic growth.

**HIGH — Publish verified project evidence.** Evidence: existing project descriptions lack independently measured outcomes in this run. Impact: provide useful information competitors and AI answers cannot reproduce from generic guides. Add only client-approved scope, public URLs, constraints, methodology and documented outcomes to existing portfolio pages. Verify evidence and permissions before publishing; no invented metrics or reviews.

**HIGH — Complete comparable performance/field verification.** Evidence: current mobile LCP 3.637 s and desktop TBT 301 ms in lab; CrUX has no data. Impact: loading and responsiveness. Retest the deployed image change in the same PSI environment; investigate remaining render blocking and long tasks only where regressions can be avoided. Verify visual behavior and p75 field metrics when available. Do not compare scores from different environments as causal improvement.

**MEDIUM — Verify actual crawler requests and broader query coverage.** Evidence: successful synthetic user-agent probes cannot prove provider-IP access; other commercial queries remain unmeasured. Inspect verified crawler logs or authenticated platform live tests and extend the fixed query set without confusing product failures with result absence. No blanket bot firewall exemption or paid API purchase is needed to close this documentation gap.

Meta AI remains owner-skipped. Google, Bing, Yandex, Naver, Brave, Seznam and IndexNow submissions retain their existing recorded statuses; unchanged URLs should not be resubmitted merely because report files changed.
