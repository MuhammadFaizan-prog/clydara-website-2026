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
  { path: '/services', title: 'Web Development, SaaS & AI Integration Services | Clydara', name: 'Services', description: 'Explore Clydara web development, custom SaaS and business software, AI integration, and branding services. Compare scope and discuss your requirements.', intent: 'Transactional: project scope and quotation' },
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
  { path: '/blog/custom-software-vs-saas', title: 'Custom Software vs SaaS: Build or Buy? | Clydara', name: 'Custom Software vs SaaS: Which One Is Right for Your Business?', description: 'Compare custom software and SaaS by workflow fit, ownership, integration, ongoing costs and delivery risk. A practical build-versus-buy guide for founders.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png?width=916&height=1140', intent: 'Commercial investigation: build versus buy' },
  { path: '/blog/is-mern-still-worth-it-2026', title: 'Is MERN Still Worth It in 2026? | Clydara', name: 'Is MERN Still Worth It in 2026?', description: 'Assess MERN in 2026: React, Node.js, Express and MongoDB strengths, limitations, security and architecture tradeoffs for startups and software products.', author: 'Rohan Baig', image: 'https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?width=916&height=1140', intent: 'Informational: technology selection' },
  { path: '/blog/ai-integration-for-startups', title: 'AI Integration for Startups: Where to Begin | Clydara', name: 'AI Integration for Startups: Where Should You Actually Begin?', description: 'Plan startup AI integration around a useful workflow, reliable data, evaluation, security and measurable outcomes. Learn how to scope a practical pilot.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140', intent: 'Solution-aware: AI implementation' },
  { path: '/blog/agency-vs-in-house-developers', title: 'Agency vs In-House Developers: How to Decide | Clydara', name: 'Agency vs In-House Developers: Which One Makes More Sense?', description: 'Compare an agency, an in-house development team and hybrid delivery by product stage, budget, ownership, hiring capacity and long-term maintenance.', author: 'Rohan Baig', image: 'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140', intent: 'Commercial investigation: delivery model' },
  { path: '/blog/saas-development-cost', title: 'SaaS Development Cost: Scope & Budget Guide | Clydara', name: 'How Much Does It Cost to Build a SaaS Platform?', description: 'Understand SaaS development costs across discovery, MVP scope, integrations, billing, infrastructure and maintenance. Build a budget from your requirements.', author: 'Muhammad Faizan', image: 'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140', intent: 'Commercial investigation: SaaS project budget' },
  { path: '/blog/startup-website-mistakes', title: 'Why Startup Websites Fail to Generate Leads | Clydara', name: 'Why Most Startup Websites Never Generate Leads', description: 'Improve positioning, proof, performance and lead measurement on startup websites. Includes a sourced performance measurement example from Clydara’s own site.', author: 'Rohan Baig', dateModified: '2026-10-08', image: 'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140', intent: 'Problem-aware: website conversion' },
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
  }
  const graph: Record<string, unknown>[] = [organization,
    { '@type': 'WebSite', '@id': SITE_ORIGIN + '/#website', url: SITE_ORIGIN + '/', name: 'Clydara', inLanguage: 'en', publisher: { '@id': organization['@id'] } },
    { '@type': page.type || 'WebPage', '@id': url + '#webpage', url, name: page.name, description: page.description, inLanguage: 'en', isPartOf: { '@id': SITE_ORIGIN + '/#website' }, about: { '@id': organization['@id'] } },
  ]
  if (page.author) graph.push({ '@type': 'BlogPosting', '@id': url + '#article', headline: page.name, description: page.description, image: page.image, dateModified: page.dateModified, author: { '@type': 'Person', name: page.author, url: SITE_ORIGIN + '/about' }, publisher: { '@id': organization['@id'] }, mainEntityOfPage: { '@id': url + '#webpage' }, inLanguage: 'en' })
  if (page.path === '/services') {
    for (const name of ['Web Development', 'SaaS & Business Solutions', 'AI Integration & Automation', 'Branding & Creative Design']) {
      graph.push({ '@type': 'Service', name, provider: { '@id': organization['@id'] }, url })
    }
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export function serializeSchema(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
