# Live Chrome QA

Captured 2026-10-04T14:07:48.312Z. Tested production revision2697fd0cf9115cf6af8bfca33a4354bbd379f98e at https://www.clydralab.com using isolated installed Chrome CDP session.

All six assertion groups passed: metadata/schema/H1, unknown page behavior, client navigation metadata cleanup, hydration/console errors, horizontal overflow, intercepted EmailJS behavior.

Desktop 1440x1000 and mobile390x844 screenshots visually inspected for homepage, services, custom software vs SaaS guide, contact. Homepage capture waited15 seconds for intro animation; CTA, subtitle and hero panel visible. Other tested representative viewport layouts showed no new clipping/overlap. These are representative viewport checks, not exhaustive full-page visual QA.

EmailJS requests intercepted before submission. Mock200 success,503 and network failure all passed sending status, disabledbutton, duplicate prevention, expected payload fields and correct success/error recovery. No real email delivered.

Production deployment2697fd0 was tested in this run; subsequent image-only change requires its separate image verification. Actual EmailJS delivery/template-variable matching remains unverified.
