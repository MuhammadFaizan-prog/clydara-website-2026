# Product Requirements Document (PRD)

## 1. Product Summary
**Product**: Clydara Agency Clone
**Reference**: [https://clydara.framer.website/](https://clydara.framer.website/)
**Goal**: Pixel-perfect, high-performance web reproduction of the Clydara agency portfolio landing page with interactive GSAP animations, responsive design tokens, and smooth user flow.

## 2. Target Users
- Founders and business leaders seeking custom AI, SaaS, web development, and branding agencies.
- Design enthusiasts and engineering teams inspecting portfolio deliverables.

## 3. Scope & Included Sections
- **Sticky Navigation**: Brand logo, navigation menu (`Works`, `Services`, `About`, `Blog`), pill CTA button (`Contact`), scroll-triggered blur background, mobile drawer.
- **Hero Section**: Eyebrow trust indicator with 3-avatar stack, multi-line typography with inline pill image embeds and highlighted cyan phrases, subheadline with keyword highlights, primary CTA, and perspective dashboard mockup banner.
- **Logo Ticker & Service Tags**: Infinite marquee of partner/tech logos and horizontal service pills.
- **About Section**: Parentheses branding element `( )`, scrubbed word-by-word opacity reveal on scroll, categorized service tags.
- **Selected Works / Portfolio**: Dark themed case study carousel with Lehar Resorts, VNTNR, JKM Solutions, laptop mockup preview, metadata (Year, Role, Services), and active dots.
- **Services Breakdown**: Tabbed interactive service details (`Web Design`, `Brand Design`, `Dashboards`), feature checklists, and looping text ribbon.
- **Founders & Leadership**: Biography for Mr. Rohan Baig, career timeline (2025–Present, 2022–Present, 2020–Present), styled portrait with floating social action pills.
- **Values / Core Pillars**: Clean bordered layout with Innovations, Creativity, Performance, Partnership, and Growth.
- **Work With Us (CTA)**: High-converting card prompting users to get started.
- **Testimonials & Metrics**: 50+ Projects Delivered, 98% Client satisfaction, 10+ Industries Served, with horizontal case study cards.
- **Footer**: Giant metallic CLYDARA wordmark, categorical navigation columns, copyright, and smooth Back-to-Top trigger.

## 4. Acceptance Criteria
1. Visual fidelity matches reference layout across 1440px+, 1024px, 810px, and mobile viewports.
2. All animations (GSAP ScrollTrigger, load sequences, marquee scrolls) run smoothly at 60fps.
3. Clean zero-error build and typecheck with TypeScript and Vite.
