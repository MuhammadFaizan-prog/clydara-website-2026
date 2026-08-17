import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from './BlogPage'
import FAQ from '../components/FAQ/FAQ'
import './BlogDetailPage.css'
import './BlogPage.css'

interface ArticleDetail {
  heroRow1: { prefix: string; pill: string; accent: string }
  heroRow2: { pill: string; suffix: string }
  featuredImg: string
  tags: string
  date: string
  lead: string
  sections: {
    title: string
    paragraphs: string[]
    calloutTitle?: string
    calloutItems?: string[]
  }[]
  faqs: { q: string; a: string }[]
}

const articleDetailsMap: Record<string, ArticleDetail> = {
  'custom-software-vs-saas': {
    heroRow1: {
      prefix: 'Custom Software',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'vs SaaS:',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Which Is Right?',
    },
    featuredImg: 'https://framerusercontent.com/images/tonaJUlOftK1OdSSpIwLkRiWT4.png?width=2288&height=974',
    tags: 'Custom Software, SaaS, Business Strategy',
    date: '30th May 2025',
    lead: 'Custom software vs SaaS is not simply a technology choice. It is a decision about speed, ownership, operating leverage, risk, and how closely your systems should match the way your business creates value.',
    sections: [
      {
        title: 'Custom Software vs SaaS: The Strategic Trade-Off',
        paragraphs: [
          'Most companies begin with SaaS for good reasons. A SaaS platform is available immediately, spreads development costs across many customers, and usually includes hosting, updates, support, and basic security. For a startup validating demand, buying software can preserve capital and keep the team focused on customers.',
          'The problem appears when a tool designed for an average workflow becomes the operating system for a business that is no longer average. Businesses typically outgrow SaaS when teams create spreadsheets, manual approvals, duplicate data entry, or fragile integrations to compensate for missing functionality.',
          'Custom software development takes the opposite approach. A software development company designs the product around your processes, integrations, permissions, data model, and growth plan. That creates more control and differentiation, but it also introduces discovery, delivery, maintenance, security, and product-management responsibilities.',
        ],
        calloutTitle: 'Key Takeaways for Founders',
        calloutItems: [
          'Buy commodity capabilities (email, generic CRM, basic accounting).',
          'Build the proprietary workflows that make your company uniquely defensible.',
          'Quantify ROI across a 3-5 year timeline rather than looking only at first-year build cost.',
        ],
      },
      {
        title: 'Total Cost of Ownership & ROI: What the Numbers Actually Say',
        paragraphs: [
          'A build vs buy software comparison should include total cost of ownership. SaaS costs include licenses, usage tiers, premium support, implementation partners, add-ons, integration platforms, data storage, migration fees, and the labor required to work around limitations.',
          'Custom software has higher upfront costs: discovery, UX design, architecture, engineering, quality assurance, deployment, and security. However, the marginal cost per additional user or transaction is virtually zero, and your company owns 100% of the resulting intellectual property.',
        ],
      },
      {
        title: 'Scalability, Architecture & Ownership Risks',
        paragraphs: [
          'Scalability means more than server capacity. SaaS scales operationally because the vendor manages infrastructure, but it may not scale functionally: permission models, workflows, reporting, and integrations often become restrictive.',
          'With custom software, you control the roadmap and data model. Protect that ownership with documented architecture, automated tests, infrastructure access, source-control ownership, and modern cloud deployment pipelines.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is custom software always more expensive than SaaS?',
        a: 'Upfront, usually yes. Over time, custom software can be significantly more economical when per-seat SaaS costs, manual workarounds, and integration bottlenecks become substantial.',
      },
      {
        q: 'When should a startup build custom software?',
        a: 'Build when the capability is central to your differentiation, existing tools cannot support your workflow, and the expected business value justifies long-term ownership.',
      },
      {
        q: 'How long does custom software development take?',
        a: 'A focused MVP typically takes 6 to 12 weeks. Phased delivery allows you to launch the core workflow first, then scale iteratively based on real user feedback.',
      },
    ],
  },
  'is-mern-still-worth-it-2026': {
    heroRow1: {
      prefix: 'Is MERN',
      pill: 'https://framerusercontent.com/images/fXkEtDrUaMJaQ5o6xEuGLn1PBA.jpg?width=1024&height=1024',
      accent: 'Still Worth It',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/uKMtELWjwXKRRO31gDwrfD0ULZk.jpg?width=1400&height=933',
      suffix: 'in 2026?',
    },
    featuredImg: 'https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?width=916&height=1140',
    tags: 'Full-Stack Development, MERN Stack, Tech Architecture',
    date: '12th Feb 2026',
    lead: 'The MERN stack (MongoDB, Express, React, Node.js) has powered millions of modern web applications. In 2026, with serverless, Next.js, and TypeScript dominating, is MERN still the right choice for high-growth startups?',
    sections: [
      {
        title: 'The Evolution of Full-Stack JavaScript in 2026',
        paragraphs: [
          'JavaScript across the full stack continues to be an unstoppable advantage. Single-language codebases reduce context switching, enable shared TypeScript types between front-end and back-end, and allow small engineering teams to ship features with incredible velocity.',
          'Modern MERN has evolved into modern Next.js + Node + Document DB architectures, delivering edge rendering, instant API routes, and enterprise-grade resilience.',
        ],
        calloutTitle: 'Why MERN Continues to Dominate in 2026',
        calloutItems: [
          'End-to-end TypeScript unification from UI components to database schemas.',
          'Massive open-source ecosystem with battle-tested libraries for auth, payments, and AI integrations.',
          'Vast talent pool making hiring and onboarding quick and cost-effective.',
        ],
      },
      {
        title: 'Performance & Database Scalability Considerations',
        paragraphs: [
          'MongoDB Atlas and modern caching layers like Redis allow document databases to handle tens of millions of daily operations. For relational complexities, modern hybrid architectures easily combine PostgreSQL with document caching.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should new startups choose MERN or Next.js in 2026?',
        a: 'Modern MERN incorporates Next.js as the React framework layer, giving you the best of server-side rendering, SEO, and robust Node backend APIs.',
      },
      {
        q: 'Is MongoDB suitable for complex enterprise SaaS?',
        a: 'Yes. MongoDB Atlas offers ACID transactions, horizontal sharding, vector search for AI, and SOC2 compliance suitable for enterprise workloads.',
      },
    ],
  },
  'ai-integration-for-startups': {
    heroRow1: {
      prefix: 'AI Integration',
      pill: 'https://framerusercontent.com/images/9nS18NxRNZgZN2Nke02tqLS9eNE.jpg?width=826&height=371',
      accent: 'for Startups:',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/WxH5CFA7400s3OucSYNbyQr0.jpg?width=299&height=168',
      suffix: 'Where To Begin?',
    },
    featuredImg: 'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140',
    tags: 'Artificial Intelligence, Automation, Startups',
    date: '18th Feb 2026',
    lead: 'AI integration is no longer an experimental gimmick—it is a core productivity driver. The challenge for founders is cutting through the noise and deploying AI where it generates tangible ROI.',
    sections: [
      {
        title: 'Where Startups Should Actually Begin with AI',
        paragraphs: [
          'Begin with repetitive operational friction: customer support triaging, automated data extraction from documents, semantic knowledge-base search, and intelligent lead qualification.',
          'Rather than building massive foundation models from scratch, integrate fine-tuned LLMs and RAG (Retrieval-Augmented Generation) pipelines into your existing product interfaces.',
        ],
        calloutTitle: 'High-Impact AI Use Cases for 2026',
        calloutItems: [
          'RAG pipelines connecting proprietary business data to conversational AI agents.',
          'Automated document parsing, invoice reconciliation, and CRM data enrichment.',
          'Context-aware user onboarding and personalized user workflow recommendations.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to integrate AI into an existing SaaS?',
        a: 'Using modern API providers (OpenAI, Anthropic, Gemini) with vector databases, custom AI integrations can be built in weeks with modest cloud token costs.',
      },
    ],
  },
  'agency-vs-in-house-developers': {
    heroRow1: {
      prefix: 'Agency vs',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'In-House Devs:',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Which Makes Sense?',
    },
    featuredImg: 'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140',
    tags: 'Team Scaling, Hiring, Startup Growth',
    date: '5th Mar 2026',
    lead: 'Hiring full-time engineers takes months and huge capital overhead. Partnering with an agile agency gets you a senior multi-disciplinary team on day one.',
    sections: [
      {
        title: 'A Founder’s Decision Framework for Development Teams',
        paragraphs: [
          'Early-stage startups need speed, multi-disciplinary expertise (UI/UX, frontend, backend, DevOps, AI), and cost flexibility. Building an in-house team requires recruiting, salaries, benefits, and management overhead.',
          'A specialized digital agency provides an assembled team of senior designers and full-stack engineers ready to execute immediately.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we transition the codebase to our in-house team later?',
        a: 'Absolutely. A great development partner writes clean, well-documented code with automated tests and CI/CD pipelines for seamless handover.',
      },
    ],
  },
  'saas-development-cost': {
    heroRow1: {
      prefix: 'How Much',
      pill: 'https://framerusercontent.com/images/fXkEtDrUaMJaQ5o6xEuGLn1PBA.jpg?width=1024&height=1024',
      accent: 'Does It Cost To',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/uKMtELWjwXKRRO31gDwrfD0ULZk.jpg?width=1400&height=933',
      suffix: 'Build SaaS?',
    },
    featuredImg: 'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140',
    tags: 'SaaS Pricing, Cost Estimation, MVP Development',
    date: '20th Apr 2026',
    lead: 'A transparent SaaS development cost breakdown for seed-stage MVPs, mid-scale platforms, and enterprise solutions in 2026.',
    sections: [
      {
        title: 'Understanding the Cost Breakdown of Modern SaaS',
        paragraphs: [
          'SaaS development costs are determined by scope, architectural complexity, integrations, and compliance requirements. A focused MVP typically ranges from $10k to $30k, while complex enterprise platforms require phased sprints.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the fastest way to reduce SaaS development costs?',
        a: 'Narrow your MVP scope to the single core workflow that solves the customer’s immediate problem, and use battle-tested auth and payment providers.',
      },
    ],
  },
  'startup-website-mistakes': {
    heroRow1: {
      prefix: 'Why Most Startup',
      pill: 'https://framerusercontent.com/images/9nS18NxRNZgZN2Nke02tqLS9eNE.jpg?width=826&height=371',
      accent: 'Websites Never',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/WxH5CFA7400s3OucSYNbyQr0.jpg?width=299&height=168',
      suffix: 'Generate Leads',
    },
    featuredImg: 'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140',
    tags: 'Conversion Optimization, Web Design, Lead Generation',
    date: '10th May 2026',
    lead: 'A technical and conversion-focused guide to fixing startup website mistakes that kill trust and conversion rates.',
    sections: [
      {
        title: 'The Real Reasons Startup Websites Fail to Convert',
        paragraphs: [
          'Vague value propositions, slow load speeds, unoptimized mobile layouts, and cluttered CTA buttons drive visitors away in seconds. High-converting websites focus on clarity, instant speed, and compelling proof.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How fast should a modern startup website load?',
        a: 'Under 1.5 seconds. Fast load times dramatically increase conversion rates and search rankings.',
      },
    ],
  },
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0]
  const article = articleDetailsMap[post.id] || articleDetailsMap['custom-software-vs-saas']
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="blog-detail-page">
      {/* Blog Detail Hero Card */}
      <section className="blog-detail-hero-card">
        <div className="blog-detail-hero-container">
          <Link to="/blog" className="blog-back-btn">
            ← Back to all articles
          </Link>

          <div className="blog-detail-headline-wrap">
            <div className="blog-detail-headline-row">
              <h1 className="blog-detail-h1 blog-dark">{article.heroRow1.prefix}</h1>
              <div className="hero-pill-img hero-pill-1">
                <img src={article.heroRow1.pill} alt="Article pill" />
              </div>
              <h1 className="blog-detail-h1 blog-accent">{article.heroRow1.accent}</h1>
            </div>
            <div className="blog-detail-headline-row">
              <div className="hero-pill-img hero-pill-2">
                <img src={article.heroRow2.pill} alt="Article pill 2" />
              </div>
              <h1 className="blog-detail-h1 blog-dark">{article.heroRow2.suffix}</h1>
            </div>
          </div>

          <p className="blog-detail-sub">{post.excerpt}</p>
        </div>
      </section>

      {/* Main Article Content Wrap */}
      <div className="blog-detail-content-wrap">
        {/* Featured Hero Image */}
        <div className="blog-detail-featured-img-wrap">
          <img
            src={article.featuredImg || post.image}
            alt={post.title}
            className="blog-detail-featured-img"
          />
        </div>

        {/* Metadata Badges */}
        <div className="blog-detail-meta-row">
          <div className="blog-detail-tags-group">
            <span className="blog-meta-pill">
              ✦ {article.tags}
            </span>
            <span className="blog-meta-pill">
              📅 {article.date || post.date}
            </span>
          </div>

          <span className="blog-meta-pill pill-light">
            ⏱️ {post.readTime}
          </span>
        </div>

        {/* Article Body */}
        <article className="blog-article-body">
          <p className="blog-article-lead">{article.lead}</p>

          {article.sections.map((sec, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 className="blog-article-h2">{sec.title}</h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="blog-article-p">{p}</p>
              ))}

              {sec.calloutTitle && (
                <div className="blog-callout-card">
                  <h4>✦ {sec.calloutTitle}</h4>
                  {sec.calloutItems && (
                    <ul className="blog-callout-list">
                      {sec.calloutItems.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Article Specific FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="blog-faqs-section">
              <h2 className="blog-article-h2" style={{ marginBottom: '24px' }}>
                Frequently Asked Questions
              </h2>
              {article.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="blog-faq-item"
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                >
                  <div className="blog-faq-question">
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '20px', color: '#00aeef' }}>
                      {openFaq === fIdx ? '−' : '+'}
                    </span>
                  </div>
                  {openFaq === fIdx && (
                    <p className="blog-faq-answer">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      </div>

      {/* More Articles Section */}
      <section className="more-articles-section">
        <div className="more-articles-header">
          <p className="more-articles-eyebrow">(Next Project)</p>
          <h2 className="more-articles-heading">More Articles</h2>
        </div>

        <div className="blog-posts-grid">
          {relatedPosts.map((rPost) => (
            <Link
              key={rPost.id}
              to={`/blog/${rPost.id}`}
              className="blog-post-card"
            >
              <div className="blog-post-img-wrap">
                <img
                  src={rPost.image}
                  alt={rPost.title}
                  className="blog-post-img"
                  loading="lazy"
                />
              </div>

              <div className="blog-post-content">
                <div className="blog-post-title-row">
                  <h3 className="blog-post-title">{rPost.title}</h3>
                  <span className="blog-post-read-badge">{rPost.readTime}</span>
                </div>
                <p className="blog-post-excerpt">{rPost.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global FAQ & Footer */}
      <FAQ />
    </main>
  )
}
