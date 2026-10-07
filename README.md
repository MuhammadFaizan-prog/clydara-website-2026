# Clydara website

This repository contains the Clydara development and design agency website at **[www.clydralab.com](https://www.clydralab.com/)**. Clydara provides website development, custom SaaS and business software, AI integration, and branding/design services.

The canonical website domain is **clydralab.com**. Public project enquiries use the contact form or **clydara1@gmail.com**.

## Public website

- [Services and project scope](https://www.clydralab.com/services)
- [Team and development approach](https://www.clydralab.com/about)
- [Portfolio](https://www.clydralab.com/works)
- [Software, SaaS and AI guides](https://www.clydralab.com/blog)
- [Project enquiries](https://www.clydralab.com/contact)

Project scope and pricing are agreed through the website's contact process.

## Development and deployment

The application uses React, TypeScript and Vite. Install the lockfile dependencies with `npm ci`, then use:

```sh
npm run dev
npm run build
npm run test:seo
npm run lint
npm run preview
```

The build generates complete HTML for the canonical routes, Markdown page copies, XML sitemap, RSS feed, robots.txt, llms.txt and a noindex 404 page. Pushes to `main` use the existing automatic deployment. Meaningfully changed canonical URLs are submitted through the shared IndexNow workflow after production verification.

## Execution records

- [SEO, AEO and GEO master report](SEO-AEO-GEO-MASTER-REPORT.md)
- [Search and AI distribution report](SEARCH-AI-DISTRIBUTION-REPORT.md)
- [Machine-readable platform matrix](seo/platform-matrix.json)
- [Observed AI/search baseline](seo/evidence/ai-search-baseline.json)

These records distinguish submission receipts, indexing observations, synthetic crawler tests, actual answer citations and unmeasured traffic. API secrets and private account information must remain outside the repository.
