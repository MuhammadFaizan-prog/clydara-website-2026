export const SITE_ORIGIN = 'https://www.clydralab.com'

export interface SeoPage {
  path: string
  title: string
  description: string
  name: string
  type?: string
  image?: string
  author?: string
  dateModified?: string
  intent: string
}

export const pages: SeoPage[] = [
  { path: '/', title: 'Clydara | AI, SaaS & Custom Software Development Agency', name: 'Clydara', description: 'Clydara builds custom websites, SaaS platforms, CRM systems and AI integrations for startups and businesses. Explore our services and discuss your project.', intent: 'Commercial: development agency' },
  { path: '/services', title: 'Custom Web, SaaS & AI Development Services | Clydara', name: 'Services', description: 'Clydara builds websites, custom SaaS platforms, CRM and dashboard systems and AI integrations for startups and growing businesses. See what each service covers.', intent: 'Transactional: project scope and quotation' },
  { path: '/about', title: 'About Clydara | Our Team & Development Approach', name: 'About Clydara', type: 'AboutPage', description: 'Meet the Clydara team and learn how we approach web development, SaaS, business software, AI automation and design for startups and growing businesses.', intent: 'Branded: team and agency trust' },
  { path: '/contact', title: 'Contact Clydara | Discuss Your Software or Website Project', name: 'Contact Clydara', type: 'ContactPage', description: 'Tell Clydara about your website, SaaS, CRM or AI integration project. Share your requirements through our contact form to start a project discussion.', intent: 'Transactional: project enquiry' },
  { path: '/works', title: 'Website & Software Development Portfolio | Clydara', name: 'Our work', type: 'CollectionPage', description: 'Explore Clydara website development and design projects, including Lehar Resorts, JKM Globals and JKM Solutions. View project scope and services.', intent: 'Commercial investigation: portfolio evidence' },
  { path: '/blog', title: 'Software, SaaS & AI Guides for Founders | Clydara', name: 'Founder guides', type: 'CollectionPage', description: 'Practical guides to custom software versus SaaS, MERN, AI integration, development teams, SaaS costs and website lead generation from Clydara.', intent: 'Informational: software decision guides' },
  { path: '/sitemap', title: 'Site Map | Clydara Services, Projects & Guides', name: 'Site map', type: 'CollectionPage', description: 'Find Clydara company information, development services, portfolio projects, software decision guides and policies in one public navigation page.', intent: 'Navigational: discover public pages' },
  { path: '/privacy-policy', title: 'Privacy Policy | Clydara', name: 'Privacy policy', description: 'Read the Clydara privacy policy covering information collection, how information is used, third-party services and your data rights.', intent: 'Branded: privacy and trust' },
  { path: '/terms-and-condition', title: 'Terms and Conditions | Clydara', name: 'Terms and conditions', description: 'Read the Clydara terms and conditions covering project work, responsibilities, payments, intellectual property and confidentiality.', intent: 'Branded: terms and trust' },
  { path: '/works/archin', title: 'Lehar Resorts Website Development | Clydara Portfolio', name: 'Lehar Resorts', description: 'View the Lehar Resorts website project by Clydara, covering full stack development, UI/UX, product design and branding.', intent: 'Commercial investigation: resort website project' },
  { path: '/works/vntnr', title: 'JKM Globals Website Development | Clydara Portfolio', name: 'JKM GLOBALS', description: 'Explore the JKM Globals website project by Clydara, including full stack development, UI/UX, branding and redesign work.', intent: 'Commercial investigation: business website project' },
  { path: '/works/aeorim', title: 'JKM Solutions Website Development | Clydara Portfolio', name: 'JKM solutions', description: 'Explore the JKM Solutions business website project by Clydara, including branding, redesign, development and a scalable website foundation.', intent: 'Commercial investigation: business website project' },
  { path: '/blog/custom-software-vs-saas', title: 'Custom Software vs SaaS: Build, Buy or Hybrid? | Clydara', name: 'Custom Software vs SaaS: Which One Is Right for Your Business?', description: 'Buy SaaS for standard workflows; build custom software when the workflow is your edge and you can fund upkeep. Compare cost, ownership, integration and risk.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png?width=916&height=1140', intent: 'Commercial investigation: build versus buy' },
  { path: '/blog/is-mern-still-worth-it-2026', title: 'Is MERN Still Worth It in 2026? | Clydara', name: 'Is MERN Still Worth It in 2026?', description: 'Assess MERN in 2026: React, Node.js, Express and MongoDB strengths, limitations, security and architecture tradeoffs for startups and software products.', author: 'Rohan Baig', image: 'https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?width=916&height=1140', intent: 'Informational: technology selection' },
  { path: '/blog/ai-integration-for-startups', title: 'AI Integration for Startups: Where to Begin | Clydara', name: 'AI Integration for Startups: Where Should You Actually Begin?', description: 'Plan startup AI integration around a useful workflow, reliable data, evaluation, security and measurable outcomes. Learn how to scope a practical pilot.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140', intent: 'Solution-aware: AI implementation' },
  { path: '/blog/agency-vs-in-house-developers', title: 'Agency vs In-House Developers: How to Decide | Clydara', name: 'Agency vs In-House Developers: Which One Makes More Sense?', description: 'Compare an agency, an in-house development team and hybrid delivery by product stage, budget, ownership, hiring capacity and long-term maintenance.', author: 'Rohan Baig', image: 'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140', intent: 'Commercial investigation: delivery model' },
  { path: '/blog/saas-development-cost', title: 'SaaS Development Cost: Scope & Budget Guide | Clydara', name: 'How Much Does It Cost to Build a SaaS Platform?', description: 'Understand SaaS development costs across discovery, MVP scope, integrations, billing, infrastructure and maintenance. Build a budget from your requirements.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140', intent: 'Commercial investigation: SaaS project budget' },
  { path: '/blog/startup-website-mistakes', title: 'Why Startup Websites Fail to Generate Leads | Clydara', name: 'Why Most Startup Websites Never Generate Leads', description: 'Improve positioning, proof, performance and lead measurement on startup websites. Includes a sourced performance measurement example from Clydara’s own site.', author: 'Rohan Baig', dateModified: '2026-10-08', image: 'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140', intent: 'Problem-aware: website conversion' },
  { path: '/blog/saas-infrastructure-cost', title: "SaaS Infrastructure Cost in 2026, by Stage | Clydara", name: "SaaS Infrastructure Cost in 2026: Monthly Bills by Stage", description: "What hosting, database, auth, email, storage and monitoring cost each month for a SaaS in 2026, from prototype to growth, using vendor pricing pages.", author: 'Clydara', dateModified: '2026-10-14', image: SITE_ORIGIN + '/images/blog/saas-infrastructure-cost-featured.webp', intent: "Commercial investigation: SaaS running costs" },
  { path: '/blog/custom-saas-development-process', title: "Custom SaaS Development Process: How a Build Runs | Clydara", name: "Custom SaaS Development: How a Build Actually Runs", description: "A plain walkthrough of a custom SaaS build: discovery, scoping, design, MVP, QA, launch and iteration, with what you should receive at each stage.", author: 'Clydara', dateModified: '2026-10-14', image: SITE_ORIGIN + '/images/blog/custom-saas-development-process-featured.webp', intent: "Commercial investigation: custom SaaS delivery process" },
  { path: '/blog/saas-vs-custom-software-architecture-firms', title: "SaaS vs Custom Software for Architecture Firms | Clydara", name: "SaaS vs Custom Software for Architecture Firms", description: "When off-the-shelf project, BIM and invoicing tools are enough for an architecture or design studio, and when a custom client portal or workflow tool pays off.", author: 'Clydara', dateModified: '2026-10-14', image: SITE_ORIGIN + '/images/blog/saas-vs-custom-software-architecture-firms-featured.webp', intent: "Commercial investigation: architecture firm software build versus buy" },
  { path: '/blog/nextjs-react-security-update-october-2026', title: "Next.js & React Security Update (Oct 2026): Who Must Patch | Clydara", name: "Next.js and React Security Update, October 2026: Who Needs to Patch", description: "Two critical RCEs and a DoS were fixed in Next.js 16.4.1 and 15.5.28 on 14 Oct 2026. Check if your app is affected, how to patch, and the Next.js 15 end date.", author: 'Clydara', dateModified: '2026-10-15', image: SITE_ORIGIN + '/images/blog/nextjs-react-security-update-october-2026-featured.webp', intent: "Informational: framework security update triage" },
  { path: '/blog/pwnescape-linux-kernel-vm-escape', title: "PwnEscape Linux Kernel Flaw (CVE-2026-99999): Who Must Act | Clydara", name: "PwnEscape: The Linux Kernel Flaw That Leaked Host Memory From a Sandbox", description: "A Linux kernel bug let a VM read host memory on Vercel's live sandboxes. What CVE-2026-99999 is, who must patch, the fixed kernels, and lessons for SaaS.", author: 'Clydara', dateModified: '2026-10-16', image: SITE_ORIGIN + '/images/blog/pwnescape-linux-kernel-vm-escape-featured.webp', intent: "Informational: infrastructure security disclosure explained" },
  { path: '/blog/vercel-deployment-retention-october-23', title: "Vercel Deployment Retention: What Changes Oct 23 | Clydara", name: "Vercel Deployment Retention: What Changes for Pro Teams on 23 October", description: "Vercel deployment retention drops to 30 days for existing Pro teams on 23 Oct. What is deleted, what stays, and what $0.10/GB-month storage means.", author: 'Clydara', dateModified: '2026-10-20', image: SITE_ORIGIN + '/images/blog/vercel-deployment-retention-october-23-featured.webp', intent: "Informational: platform pricing and retention change explained" },
  { path: '/blog/github-actions-lockfile', title: "GitHub Actions Lockfile: How It Works | Clydara", name: "GitHub Actions Lockfile: What It Is and How to Use It", description: "GitHub Actions lockfile (actions.lock) pins workflow dependencies to exact commits. What it blocks, who can use it in public preview, and how to start.", author: 'Clydara', dateModified: '2026-10-21', image: SITE_ORIGIN + '/images/blog/github-actions-lockfile-featured.webp', intent: "Informational: CI supply-chain control explained" },
  { path: '/blog/nodejs-brotli-vulnerability-fix', title: "Node.js Brotli Vulnerability: Fix Guide | Clydara", name: "Node.js Brotli Vulnerability (CVE-2026-111497): Fix Guide", description: "Node.js 22.23.4, 24.22.1 and 26.12.1 fix a Brotli decoder flaw rated high. Who is exposed, how to check your version, and what to do if you can't upgrade.", author: 'Clydara', dateModified: '2026-10-24', image: SITE_ORIGIN + '/images/blog/nodejs-brotli-vulnerability-fix-featured.webp', intent: "Informational: Node.js security patch guidance" },
  { path: '/blog/go-x509-no-valid-chains-built', title: "x509: No Valid Chains Built After Go 1.27.3 | Clydara", name: "x509: No Valid Chains Built After Go 1.27.3: What to Do", description: "Go 1.27.3 and 1.26.10 now reject eight CA keys, so rebuilt programs can fail with x509: no valid chains built. What changed, how to check, what to do.", author: 'Clydara', dateModified: '2026-10-23', image: SITE_ORIGIN + '/images/blog/go-x509-no-valid-chains-built-featured.webp', intent: "Informational: Go TLS error troubleshooting" },
]

// Section names as they appear in the site navigation.
const sectionLabels: Record<string, string> = { blog: 'Blog', works: 'Works' }

// The four service cards on /services, with the same wording the page shows.
export const services = [
  { slug: 'web-development', name: 'Web Development', description: 'We build high-performance, SEO-optimized websites, web applications, and MERN stack solutions with modern UI, responsive design, and engaging user experiences.' },
  { slug: 'saas-business-solutions', name: 'SaaS & Business Solutions', description: 'Custom SaaS platforms, CRM systems, admin dashboards, ERP solutions, and industry-specific software for hotels, restaurants, pharmacies, healthcare, and enterprises.' },
  { slug: 'ai-integration-automation', name: 'AI Integration & Automation', description: 'Enhance your business with AI-powered automation, intelligent workflows, API integrations, chatbots, and smart digital solutions that improve efficiency.' },
  { slug: 'branding-creative-design', name: 'Branding & Creative Design', description: 'Create a memorable brand with logo design, brand identity, UI/UX design, vector artwork, social media creatives, and complete digital marketing assets.' },
]

export function getPage(pathname: string): SeoPage | undefined {
  return pages.find(page => page.path === (pathname.replace(/\/+$/, '') || '/'))
}

export function getSchema(page: SeoPage) {
  const url = SITE_ORIGIN + page.path
  const organization = {
    '@type': 'Organization', '@id': SITE_ORIGIN + '/#organization',
    name: 'Clydara', url: SITE_ORIGIN + '/', description: pages[0].description,
    logo: SITE_ORIGIN + '/clydara-seal.png', email: 'clydara1@gmail.com',
    contactPoint: { '@type': 'ContactPoint', contactType: 'project enquiries', email: 'clydara1@gmail.com', url: SITE_ORIGIN + '/contact' },
    sameAs: ['https://dev.to/clydaralab', 'https://www.behance.net/clydaralab', 'https://dribbble.com/clydara'],
  }
  const graph: Record<string, unknown>[] = [organization,
    { '@type': 'WebSite', '@id': SITE_ORIGIN + '/#website', url: SITE_ORIGIN + '/', name: 'Clydara', inLanguage: 'en', publisher: { '@id': organization['@id'] } },
    { '@type': page.type || 'WebPage', '@id': url + '#webpage', url, name: page.name, description: page.description, inLanguage: 'en', isPartOf: { '@id': SITE_ORIGIN + '/#website' }, about: { '@id': organization['@id'] } },
  ]
  // Guides and case studies sit one level below a section page; describe that path for search results.
  const section = page.path.split('/').filter(Boolean)
  if (section.length === 2 && sectionLabels[section[0]]) {
    const breadcrumbId = url + '#breadcrumb'
    graph[2].breadcrumb = { '@id': breadcrumbId }
    graph.push({
      '@type': 'BreadcrumbList', '@id': breadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
        { '@type': 'ListItem', position: 2, name: sectionLabels[section[0]], item: SITE_ORIGIN + '/' + section[0] },
        { '@type': 'ListItem', position: 3, name: page.name, item: url },
      ],
    })
  }
  if (page.author) graph.push({ '@type': 'BlogPosting', '@id': url + '#article', headline: page.name, description: page.description, image: page.image, dateModified: page.dateModified, author: page.author === 'Clydara' ? { '@type': 'Organization', '@id': organization['@id'], name: 'Clydara', url: SITE_ORIGIN + '/' } : { '@type': 'Person', name: page.author, url: SITE_ORIGIN + '/about' }, publisher: { '@id': organization['@id'] }, mainEntityOfPage: { '@id': url + '#webpage' }, inLanguage: 'en' })
  if (page.path === '/services') {
    for (const service of services) {
      graph.push({ '@type': 'Service', '@id': url + '#' + service.slug, name: service.name, description: service.description, provider: { '@id': organization['@id'] }, url })
    }
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export function serializeSchema(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
