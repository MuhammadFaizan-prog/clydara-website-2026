import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from './BlogPage'
import './BlogDetailPage.css'
import './BlogPage.css'

interface ArticleData {
  heroRow1: { prefix: string; pill: string; accent: string }
  heroRow2: { pill: string; suffix: string }
  subtitle: string
  featuredImg: string
  inlineImg?: string
  tags: string[]
  sections: {
    heading: string
    paragraphs: string[]
    showInlineMetaAndImg?: boolean
  }[]
  faqs: { q: string; a: string }[]
  conclusionHeading?: string
  conclusionParagraphs?: string[]
  checklistHeading?: string
  checklistParagraphs?: string[]
}

const articlesData: Record<string, ArticleData> = {
  'is-mern-still-worth-it-2026': {
    heroRow1: {
      prefix: 'Is MERN',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'Still Worth It',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'in 2026?',
    },
    subtitle:
      'Is MERN still worth it in 2026? For many startups and product teams, yes—but only when React, Node.js, Express, and MongoDB match the product’s data, performance, and operating requirements.',
    featuredImg:
      'https://framerusercontent.com/images/GRXZ2w13Gx0WdTwKKd5DA6nYedo.png?width=2000&height=1333',
    inlineImg:
      'https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?width=916&height=1140',
    tags: ['MERN, React, Web Development', '30th June 2025'],
    sections: [
      {
        heading: 'Why the MERN Stack Remains Relevant',
        paragraphs: [
          'The MERN stack remains relevant because it solves a practical business problem: teams can build a complete web product with JavaScript or TypeScript across the browser, API, and supporting services. React provides a mature interface ecosystem. Node.js supports efficient network applications and a huge package ecosystem. Express offers a lightweight HTTP layer. MongoDB gives teams a flexible document model that can accelerate early product development.',
          'For startups, this shared language reduces context switching and makes it easier to form small, cross-functional teams. Engineers can move between frontend and backend work, reuse validation models, share types, and standardize tooling. That does not mean every JavaScript developer is automatically a strong full stack development engineer. Architecture, databases, security, testing, and operations still require depth. But the stack can reduce organizational friction when the team is intentionally structured.',
          'MERN is not valuable because it is fashionable. It is valuable when the product is interaction-heavy, API-driven, evolving quickly, and supported by a team comfortable with TypeScript and cloud-native delivery. It is less compelling when the application requires heavy relational reporting, CPU-intensive processing, highly specialized runtimes, or strict constraints better served by another ecosystem.',
          'React is still a strong choice because its ecosystem extends far beyond rendering components. Teams can use mature routing, state management, forms, testing, accessibility, design systems, and server-rendering frameworks. The main risk is architectural inconsistency: without conventions, a React codebase can accumulate duplicated state, unnecessary client-side logic, and performance problems. Senior teams define boundaries early, keep data fetching predictable, and avoid installing libraries for problems the platform already solves.',
          'Node.js performs well for I/O-heavy workloads such as APIs, real-time updates, collaboration features, integrations, and background job orchestration. Its event-driven model can handle high concurrency efficiently. CPU-intensive work—video processing, large analytics computations, or complex machine learning—should be isolated in workers or services designed for that workload. Treating Node as universally fast is a mistake; using it for the right workload is the advantage.',
          'Express remains useful because it is small and familiar. In larger systems, teams may prefer more opinionated frameworks, but Express can still power well-structured APIs when routing, validation, authorization, error handling, observability, and dependency boundaries are consistently implemented.',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'Architecture, Security, and Scaling',
        paragraphs: [
          'MongoDB is often praised for flexibility, but flexibility needs governance. A document database is effective when data naturally belongs together, read patterns are known, and schema evolution is frequent. It can be a poor fit for complex relational constraints, ad hoc financial reporting, or workflows that depend heavily on joins. Modern MongoDB supports transactions, indexing, replication, sharding, and managed scaling, yet those features do not replace data modeling.',
          'Design collections around access patterns. Avoid unbounded arrays, monitor index size, define validation, and plan tenant isolation. Teams should test realistic query volume before assuming horizontal scaling will solve inefficient access. For many SaaS products, a relational database may be the better primary store while MongoDB supports selected document-heavy workloads. “MERN” should not become a rule that prevents sound architecture.',
          'API architecture should be explicit. Use versioned contracts, request validation, structured errors, rate limits, pagination, idempotency for important writes, and correlation IDs for tracing. REST remains suitable for many products; GraphQL can help complex clients but introduces schema governance and caching decisions. Event-driven patterns are useful for decoupling notifications, billing, search indexing, and integrations, but they require durable queues, retries, dead-letter handling, and observability.',
          'Security begins with threat modeling, not a package. Validate every request, apply least privilege, protect secrets, patch dependencies, and log sensitive operations. Prevent injection by using safe database APIs and validation. Configure CORS narrowly. Add content security policy, secure cookies, CSRF protection where relevant, and rate limits around authentication and expensive endpoints.',
          'Authentication can use managed identity providers or a carefully implemented internal service. Managed providers reduce risk for social login, multifactor authentication, password recovery, and enterprise single sign-on. Authorization remains your responsibility. Model roles and permissions around resources and actions, enforce them on the server, and test them independently of the interface.',
          'Deployment should be repeatable. A practical pipeline runs linting, type checks, unit tests, integration tests, dependency scanning, and production builds before deployment. Use separate environments and controlled configuration. Database migrations or data transformations need rollback plans. Feature flags can separate deployment from release.',
          'Docker provides consistent packaging and simplifies local and production parity. Kubernetes becomes valuable when service count, traffic patterns, isolation, and operational maturity justify it. For an early startup with one API, Kubernetes may add more complexity than resilience. Managed containers or serverless platforms can be the better economic choice.',
        ],
      },
      {
        heading: 'Use Cases, 2026 Decision Guide, and FAQs',
        paragraphs: [
          'MERN works well for SaaS dashboards, marketplaces, collaboration tools, customer portals, workflow systems, real-time applications, and integration-heavy platforms. A project-management startup can use React for a responsive workspace, Node and Express for APIs and webhooks, MongoDB for flexible project documents, Redis for caching and queues, and object storage for files. The architecture is broader than the four-letter acronym, and that is healthy.',
          'A commerce analytics product might use React and Node but choose PostgreSQL for transactional and reporting integrity. That is also a successful outcome. Modern engineering favors fit over ideological purity.',
          'Before choosing MERN, ask: Does the team have production TypeScript experience? Are primary workloads I/O-bound? Does the data fit a document model? Can the organization operate the system securely? Are hiring and maintainability favorable in the target market? Is there a clear testing, monitoring, and deployment approach?',
          'For 2026, add supply-chain security, runtime observability, performance budgets, accessibility, and AI-assisted development governance to the checklist. AI coding tools can accelerate implementation, but generated code still needs review, tests, dependency controls, and architectural consistency.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is MERN still worth it for startups?',
        a: 'Yes, particularly for interactive, API-driven products that need fast iteration and can benefit from one typed language across the stack.',
      },
      {
        q: 'Is MongoDB required?',
        a: 'No. React and Node work well with PostgreSQL, MySQL, or specialized stores. Choose the database around data integrity and query patterns.',
      },
      {
        q: 'Can Node.js handle enterprise traffic?',
        a: 'Yes, when services are designed for asynchronous workloads, scaled appropriately, monitored, and protected from blocking operations.',
      },
      {
        q: 'Is Express outdated?',
        a: 'It remains stable and widely understood. Teams wanting stronger conventions may select another Node framework, but Express is still viable.',
      },
      {
        q: 'Should every MERN app use Kubernetes?',
        a: 'No. Kubernetes is an operational platform, not a quality badge. Adopt it when scale and service complexity justify the cost.',
      },
      {
        q: 'How should a MERN application be secured?',
        a: 'Use strong identity, server-side authorization, validation, secret management, dependency scanning, encrypted transport, audit logging, and continuous patching.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'MERN is still worth it when it aligns with your product, people, data, and operating model. Its ecosystem and hiring market remain strong, but the best 2026 implementations are pragmatic: TypeScript-first, secure by design, observable, automated, and willing to use a different database or service where appropriate.',
      'Clydara designs and builds modern web platforms around business requirements rather than stack trends. If you need a scalable React and Node product, architecture review, or full web development partner, contact Clydara to plan the right delivery path.',
    ],
    checklistHeading: 'Production checklist for a MERN product',
    checklistParagraphs: [
      'Establish a TypeScript standard across client, API, shared schemas, and background workers. Shared types can reduce contract mistakes, but server-side validation must remain authoritative because browser input cannot be trusted. Define folder boundaries, dependency rules, error conventions, and testing expectations before the team grows.',
      'Build observability into the first production release. Capture structured logs, request traces, service metrics, database performance, queue depth, and user-impacting errors. Alerts should represent customer risk rather than every technical anomaly. A fast Node service that fails silently is not production-ready.',
      'Plan resilience around external dependencies. Use timeouts, retries with backoff, circuit breaking where appropriate, and idempotency for payment or webhook processing. Put slow or unreliable work behind queues. Document recovery procedures and test database restoration instead of assuming backups are valid.',
      'Review architecture at clear thresholds: material traffic growth, enterprise security requirements, new geographic regions, or a rapid increase in engineering headcount. Do not split a healthy application into microservices for appearance. Modular boundaries inside a well-operated service often provide the best startup economics until independent scaling or ownership is genuinely required.',
    ],
  },
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
    subtitle:
      'Custom software vs SaaS is not simply a technology choice. It is a decision about speed, ownership, operating leverage, risk, and how closely your systems should match the way your business creates value.',
    featuredImg:
      'https://framerusercontent.com/images/tonaJUlOftK1OdSSpIwLkRiWT4.png?width=2288&height=974',
    inlineImg:
      'https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png?width=916&height=1140',
    tags: ['Custom Software, SaaS, Business Strategy', '30th May 2025'],
    sections: [
      {
        heading: 'Custom Software vs SaaS: The Strategic Trade-Off',
        paragraphs: [
          'Most companies begin with SaaS for good reasons. A SaaS platform is available immediately, spreads development costs across many customers, and usually includes hosting, updates, support, and basic security. For a startup validating demand, buying software can preserve capital and keep the team focused on customers. The problem appears when a tool designed for an average workflow becomes the operating system for a business that is no longer average.',
          'Businesses typically outgrow SaaS when teams create spreadsheets, manual approvals, duplicate data entry, or fragile integrations to compensate for missing functionality. At that point, the subscription is only one part of the cost. The larger cost is operational friction: staff time, inconsistent data, delayed reporting, avoidable errors, and decisions constrained by a vendor’s roadmap.',
          'Custom software development takes the opposite approach. A software development company designs the product around your processes, integrations, permissions, data model, and growth plan. That creates more control and differentiation, but it also introduces discovery, delivery, maintenance, security, and product-management responsibilities. The right question is not “Which option is cheaper today?” It is “Which option creates the best risk-adjusted return over the period that matters to us?”',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'Total Cost of Ownership & ROI: What the Numbers Actually Say',
        paragraphs: [
          'A build vs buy software comparison should include total cost of ownership. SaaS costs include licenses, usage tiers, premium support, implementation partners, add-ons, integration platforms, data storage, migration fees, and the labor required to work around limitations. Pricing often rises with headcount, contacts, transactions, or API volume. A tool that looks inexpensive at 10 employees can become a significant operating expense at 200.',
          'Custom software has higher upfront costs. Discovery, UX design, architecture, engineering, quality assurance, deployment, and security must be funded before the system produces a return. Ongoing costs include cloud infrastructure, monitoring, maintenance, dependency upgrades, and feature development. However, the marginal cost per additional user or transaction can be lower, and the business owns the resulting intellectual property.',
        ],
      },
      {
        heading: 'Scalability, Architecture & Ownership Risks',
        paragraphs: [
          'Scalability also means more than server capacity. SaaS scales operationally because the vendor manages infrastructure, backups, releases, and incident response. But it may not scale functionally: permission models, workflows, reporting, and integrations can become restrictive. Custom software can be designed for your expected transaction volume, regions, compliance requirements, and organizational structure, but only if the architecture and operating practices are sound.',
          'Ownership changes the risk profile. With SaaS, you depend on pricing changes, product decisions, uptime, export capabilities, and the vendor’s long-term health. With custom software, you control the roadmap and data model, yet you are responsible for continuity.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is custom software always more expensive than SaaS?',
        a: 'Upfront, usually yes. Over time, custom software can be more economical when per-seat costs, manual work, integration complexity, or lost revenue become substantial.',
      },
      {
        q: 'When should a startup build custom software?',
        a: 'Build when the capability is central to differentiation, existing tools cannot support the workflow, and the expected business value justifies long-term ownership.',
      },
      {
        q: 'How long does custom software development take?',
        a: 'A focused MVP may take several months. Complex platforms require phased delivery. Discovery should produce a realistic roadmap before a fixed commitment.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'Choose SaaS when speed, standardization, and low ownership overhead matter most. Choose custom software when your workflow, data, integrations, or customer experience create strategic value that generic tools cannot support.',
      'Clydara helps founders evaluate build vs buy, define the right architecture, and deliver custom platforms without unnecessary complexity. Contact Clydara to discuss the business case for your software.',
    ],
    checklistHeading: 'Implementation notes for founders',
    checklistParagraphs: [
      'Before approving custom development, document the current workflow with real users. Measure how often exceptions occur, which systems own each record, and where approvals or handoffs stall. This prevents the new platform from simply digitizing a broken process.',
      'Run a structured SaaS evaluation in parallel. Use realistic data and complete an end-to-end scenario rather than relying on a sales demonstration. Test exports, permissions, API limits, audit history, mobile behavior, and support response.',
      'If custom software wins, deliver it incrementally. Start with one team or workflow, integrate with the systems that remain, and compare the result with the baseline. Track adoption, processing time, error rate, and customer impact.',
    ],
  },
  'ai-integration-for-startups': {
    heroRow1: {
      prefix: 'AI Integration',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'for Startups:',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Where To Begin?',
    },
    subtitle:
      'A practical roadmap for useful, secure, measurable AI adoption in modern software and operations.',
    featuredImg:
      'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140',
    inlineImg:
      'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140',
    tags: ['AI Integration, Automation, Machine Learning', '15th July 2025'],
    sections: [
      {
        heading: 'Where Should You Actually Begin with AI?',
        paragraphs: [
          'AI integration succeeds when it addresses high-friction operational workflows: intelligent customer routing, automated documentation extraction, semantic search over company documents, and automated CRM triage.',
          'Start small with RAG (Retrieval-Augmented Generation) pipelines and API-driven LLM integrations connected directly into your team’s existing tools.',
        ],
        showInlineMetaAndImg: true,
      },
    ],
    faqs: [
      {
        q: 'How much does custom AI integration cost?',
        a: 'Leveraging established API endpoints (OpenAI, Anthropic) with specialized vector databases, initial integrations typically take 2-4 weeks.',
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
    subtitle:
      'A founder’s decision framework for building the right development team and balancing speed with long-term ownership.',
    featuredImg:
      'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140',
    inlineImg:
      'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140',
    tags: ['Team Scaling, Hiring, Engineering Management', '1st August 2025'],
    sections: [
      {
        heading: 'The Trade-Offs Between Agency Partners and In-House Teams',
        paragraphs: [
          'Hiring an in-house team gives you dedicated focus, but requires long recruiting cycles, fixed salary commitments, and management overhead. Working with an experienced agency provides instant multi-disciplinary velocity on day one.',
        ],
        showInlineMetaAndImg: true,
      },
    ],
    faqs: [
      {
        q: 'Can an agency team hand off code to our internal hires?',
        a: 'Yes. With well-documented TypeScript repositories, automated testing, and CI/CD pipelines, handoff is straightforward.',
      },
    ],
  },
  'saas-development-cost': {
    heroRow1: {
      prefix: 'How Much',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'Does It Cost To',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Build SaaS?',
    },
    subtitle:
      'A transparent SaaS development cost guide for MVPs, mid-scale platforms, and enterprise solutions.',
    featuredImg:
      'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140',
    inlineImg:
      'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140',
    tags: ['SaaS Cost, MVP Budgeting, Startup Finance', '20th August 2025'],
    sections: [
      {
        heading: 'Estimating SaaS Development Budgets',
        paragraphs: [
          'Understanding scope, architecture complexity, third-party integrations, and compliance allows founders to allocate capital effectively across product discovery, design, development, and launch.',
        ],
        showInlineMetaAndImg: true,
      },
    ],
    faqs: [
      {
        q: 'What determines the cost of an MVP?',
        a: 'The number of unique user roles, core workflow complexity, custom data models, and external API integrations.',
      },
    ],
  },
  'startup-website-mistakes': {
    heroRow1: {
      prefix: 'Why Most Startup',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'Websites Never',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Generate Leads',
    },
    subtitle:
      'A technical and conversion-focused guide to fixing startup website mistakes that kill trust and conversion rates.',
    featuredImg:
      'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140',
    inlineImg:
      'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140',
    tags: ['Conversion Rate, Web Design, Lead Generation', '10th September 2025'],
    sections: [
      {
        heading: 'Why Startup Websites Fail to Convert',
        paragraphs: [
          'Confusing messaging, slow page load performance, hidden calls-to-action, and generic visual design prevent visitors from understanding your value proposition within the critical first five seconds.',
        ],
        showInlineMetaAndImg: true,
      },
    ],
    faqs: [
      {
        q: 'How fast should our website load?',
        a: 'Target under 1.5 seconds on mobile and desktop for optimal search rankings and conversion rates.',
      },
    ],
  },
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id) || blogPosts[1]
  const article = articlesData[post.id] || articlesData['is-mern-still-worth-it-2026']

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

          <p className="blog-detail-sub">{article.subtitle}</p>
        </div>
      </section>

      {/* Featured Top Image */}
      <div className="blog-detail-featured-img-wrap">
        <img
          src={article.featuredImg}
          alt={post.title}
          className="blog-detail-featured-img"
        />
      </div>

      {/* Article Body Content */}
      <div className="blog-detail-content-wrap">
        <article className="blog-article-body">
          {article.sections.map((sec, sIdx) => (
            <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 className="blog-article-h2">{sec.heading}</h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="blog-article-p">{p}</p>
              ))}

              {sec.showInlineMetaAndImg && (
                <>
                  <div className="blog-detail-meta-row">
                    {article.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="blog-meta-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {article.inlineImg && (
                    <div className="blog-detail-inline-img-wrap">
                      <img
                        src={article.inlineImg}
                        alt={sec.heading}
                        className="blog-detail-inline-img"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="blog-article-h2">Frequently asked questions</h2>
              {article.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="blog-faq-item">
                  <h3 className="blog-faq-question">{faq.q}</h3>
                  <p className="blog-faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          )}

          {/* Conclusion */}
          {article.conclusionHeading && (
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="blog-article-h2">{article.conclusionHeading}</h2>
              {article.conclusionParagraphs?.map((p, cIdx) => (
                <p key={cIdx} className="blog-article-p">{p}</p>
              ))}
            </div>
          )}

          {/* Production Checklist */}
          {article.checklistHeading && (
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="blog-article-h2">{article.checklistHeading}</h2>
              {article.checklistParagraphs?.map((p, kIdx) => (
                <p key={kIdx} className="blog-article-p">{p}</p>
              ))}
            </div>
          )}
        </article>
      </div>

      {/* Next Project / More Articles Section */}
      <section className="more-articles-section">
        <div className="more-articles-header">
          <p className="more-articles-eyebrow">(Project)</p>
          <h2 className="more-articles-heading">Next Project</h2>
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
                <h3 className="blog-post-title">{rPost.title}</h3>
                <p className="blog-post-excerpt">{rPost.excerpt}</p>
                <div className="blog-post-badge-row">
                  <span className="blog-post-read-badge">{rPost.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
