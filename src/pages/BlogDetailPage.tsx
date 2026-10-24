import { useEffect, useRef, type ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealChars } from '../components/common/RevealChars'
import { RevealHeading } from '../components/common/RevealHeading'
import { blogPosts } from './BlogPage'
import { getPage } from '../seo/site'
import NotFoundPage from './NotFoundPage'
import './BlogDetailPage.css'
import './BlogPage.css'
import './SeoContent.css'

gsap.registerPlugin(ScrollTrigger)

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
    comparison?: { label?: string; caption: string; columns: string[]; rows: string[][] }
    showInlineMetaAndImg?: boolean
  }[]
  faqs: { q: string; a: string }[]
  conclusionHeading?: string
  conclusionParagraphs?: string[]
  checklistHeading?: string
  checklistParagraphs?: string[]
}

// Renders [label](/internal-path) inside guide copy as a client-side link; everything else stays plain text.
function renderInline(text: string) {
  const parts: (string | ReactElement)[] = []
  const pattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(<Link key={match.index} to={match[2]}>{match[1]}</Link>)
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

// Short vendor or publisher label for a source link, e.g. "vercel.com".
function sourceDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
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
    tags: ['MERN, React, Web Development'],
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
    tags: ['Custom Software, SaaS, Business Strategy'],
    sections: [
      {
        heading: 'Should a startup build custom software or buy SaaS?',
        paragraphs: [
          'Buy SaaS for standard workflows when speed and limited operating capacity matter most. Build custom software when the workflow creates a competitive advantage, existing products fail a realistic trial, and you can fund ongoing maintenance. A hybrid approach often fits: buy commodity tools such as email or accounting, and build the specific workflow that makes your product different.',
          'Before choosing, test the same end-to-end scenario in each option. Include the exception that happens most often, a permission boundary, an integration failure, and a complete data export. Record what works, what needs manual intervention, who owns support, and what it costs to leave. A feature checklist alone will miss these operating constraints.',
        ],
      },
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
        heading: 'A 36-month build-versus-buy cost worksheet',
        paragraphs: [
          'Use the same period, user count, workflow and service level for both options. SaaS total = implementation and migration + monthly licences and usage over 36 months + integration, support and workaround labour + exit costs. Custom total = discovery, build and migration + hosting, maintenance and support over 36 months + planned changes + exit costs. Include staff time in both columns; compare cash cost separately from time you might save.',
          'Illustrative arithmetic only, not market pricing or a Clydara quote: 40 SaaS users at $30 per month for 36 months cost $43,200. Add $8,000 implementation and $300 per month for integrations and support ($10,800), giving $62,000. A hypothetical custom option with a $45,000 build, $8,000 migration and $500 per month for hosting and maintenance ($18,000) totals $71,000. Under these assumptions, custom costs $9,000 more before additional change requests or exit costs.',
          'That $9,000 difference is equivalent to $250 per month over 36 months. Custom needs at least that much additional realised value to offset the difference under this simplified example. Measure saved hours, errors or revenue with a pilot rather than assuming every saved hour becomes a cash saving. Recalculate using actual proposals, expected user growth, integration limits and a maintenance owner; choose SaaS if the custom business case still does not hold.',
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
      suffix: 'Where to Begin',
    },
    subtitle:
      'AI integration for startups should begin with a measurable business problem—not a chatbot, model, or trend. This guide explains how founders can prioritize automation, search, support, and decision tools without creating unnecessary risk.',
    featuredImg:
      'https://framerusercontent.com/images/0rV439NXlQ1IOSi0VkvDsmerR3Q.png?width=3840&height=2562',
    inlineImg:
      'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140',
    tags: ['Artificial Intelligence, Automation, Startups'],
    sections: [
      {
        heading: 'Start With the Workflow, Not the Model',
        paragraphs: [
          'Founders often misunderstand AI because the market presents it as a product category rather than a capability. A large language model can summarize, classify, extract, generate, search, and reason over supplied context, but it does not automatically understand your business or guarantee a correct answer. Useful AI integration starts by identifying a repeated decision or information bottleneck where probabilistic output can be reviewed, measured, and improved.',
          'The most common myth is that adding the ChatGPT API or Claude instantly creates an intelligent product. APIs provide model access; the product still needs context, permissions, workflow design, evaluation, monitoring, and a safe fallback. Another myth is that AI agents should replace entire roles. In practice, the highest-return systems usually remove repetitive steps while keeping people responsible for approvals, exceptions, and customer relationships.',
          'Begin with process mapping. List high-volume tasks, time spent, error rates, delays, and business impact. Good first candidates include support-ticket classification, meeting summaries, proposal drafts, document extraction, knowledge search, and sales-call follow-up. Avoid starting with low-frequency tasks, irreversible decisions, or workflows where no one can verify quality.',
          'Internal AI automation is often the safest starting point. A team can connect approved documents, CRM records, and operating procedures to an assistant that drafts answers or retrieves relevant information. Employees remain in the loop, access can follow existing roles, and the company can compare output with known standards before exposing the system to customers.',
          'Customer support is another practical opportunity. AI can classify intent, suggest replies, summarize account history, and surface knowledge-base articles. The system should show confidence, cite sources, and escalate sensitive or uncertain cases. Fully autonomous support may reduce ticket cost but can damage trust when billing, legal, or account-access issues are handled incorrectly.',
          'Sales automation works best around preparation and administration: account research, call summaries, CRM updates, follow-up drafts, and opportunity-risk signals. It should not generate invented personalization or send unsupervised claims. The goal is to give salespeople more time for discovery and relationships, not flood prospects with synthetic outreach.',
          'AI search using retrieval-augmented generation, or RAG, can make private knowledge conversational. Documents are divided, embedded, stored in a vector database, retrieved by relevance, and supplied to an LLM. Strong RAG also needs metadata filters, permissions, freshness rules, citations, and evaluation.',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'Architecture, Security, Cost, and ROI',
        paragraphs: [
          'An AI implementation roadmap should move through five stages. First, define one workflow and baseline metric. Second, prototype with representative data and a human reviewer. Third, build an evaluation set containing normal, difficult, and unsafe examples. Fourth, integrate the system into the real workflow with logging and fallback paths. Fifth, expand only after quality, adoption, cost, and business impact are proven.',
          'Model choice should follow the task. Compare OpenAI, Claude, and other providers on accuracy, latency, context size, structured output, regional availability, security terms, and price. Smaller models can be faster and cheaper for classification or extraction. Larger models may be justified for complex synthesis. Keep a provider abstraction where practical, but do not overengineer portability before the first use case works.',
          'AI dashboards can convert unstructured information into usable signals: recurring customer objections, product feedback themes, support drivers, pipeline risks, or operational exceptions. The dashboard must preserve links to source records so leaders can verify conclusions. A polished chart based on weak extraction is more dangerous than an obvious draft.',
          'AI agents are appropriate when a task requires several tool calls and can be constrained by permissions, budgets, and checkpoints. Start with read-only tools, deterministic workflows, and explicit approvals before allowing an agent to send messages, change records, or trigger financial actions.',
          'Security must be designed into the data flow. Classify information before sending it to a model. Remove unnecessary personal or confidential data, encrypt transport and storage, control retention, and confirm whether provider terms permit training on submitted content. Use tenant isolation, role-based access, audit logs, secret management, and deletion policies. Protect RAG systems from prompt injection in uploaded documents and retrieved web content.',
          'Cost includes more than tokens. Budget for data preparation, integrations, evaluation, observability, human review, support, and iteration. Token costs can grow with long prompts, repeated context, high traffic, and agent loops. Control spend through caching, smaller models, structured prompts, context limits, batching, and usage budgets. Measure cost per completed business outcome, not cost per API call.',
          'ROI should connect to a baseline: average handling time, tickets resolved, proposals produced, hours saved, conversion rate, or cycle time. Calculate gross benefit, subtract operating cost, then account for adoption and review time. If an assistant saves five minutes but requires ten minutes of correction, it has negative value regardless of demo quality.',
          'Example: a recruitment platform can extract structured candidate data, match requirements, draft recruiter notes, and keep a human responsible for decisions. A property-management company can classify maintenance requests and suggest vendors while escalating safety issues. A B2B SaaS team can search product documentation and account history to help support agents answer faster with citations.',
        ],
      },
      {
        heading: 'Practical Decision Guide, FAQs, and Next Step',
        paragraphs: [
          'A founder-ready checklist begins with six questions. What measurable bottleneck are we solving? What data is required, and do we have permission to use it? Who verifies the result? What happens when the model is wrong or unavailable? How will we evaluate quality before and after launch? What is the maximum acceptable cost per outcome?',
          'Choose a narrow first release. For example, instead of “build an AI sales agent,” build a tool that summarizes calls, identifies agreed actions, and drafts a follow-up for approval. Instead of “replace customer support,” classify tickets and recommend cited responses. Narrow scope produces clearer evaluation, lower security exposure, and faster learning.',
          'Create an evaluation set before launch. Include at least dozens of representative cases, edge cases, incomplete inputs, adversarial instructions, and examples where the correct behavior is refusal or escalation. Score factuality, relevance, format, safety, latency, and cost. Re-run the set whenever prompts, models, tools, or retrieval logic change.',
          'Treat prompts and retrieval configuration as production assets. Version them, test them, review changes, and monitor failures. Capture user feedback without storing more sensitive data than necessary. Establish an owner for model quality and a process for incidents.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where should a startup begin with AI?',
        a: 'Start with a frequent, measurable internal workflow where a person can verify the result.',
      },
      {
        q: 'Do we need a vector database?',
        a: 'Only when semantic retrieval over private or changing knowledge is important. Simple tasks may need no RAG at all.',
      },
      {
        q: 'What is the difference between an LLM workflow and an AI agent?',
        a: 'A workflow follows defined steps. An agent chooses among tools or actions dynamically. Agents provide flexibility but require stronger limits and monitoring.',
      },
      {
        q: 'How much does AI integration cost?',
        a: 'A prototype may be modest, while a secure production system with integrations, evaluation, and scale requires a larger investment. Scope and risk matter more than the model brand.',
      },
      {
        q: 'Can AI use confidential business data?',
        a: 'It can, but only with suitable provider terms, data controls, access restrictions, retention settings, and a documented security review.',
      },
      {
        q: 'How do we prevent hallucinations?',
        a: 'Use constrained tasks, quality data, retrieval with citations, structured outputs, validation, and human review. No technique eliminates errors completely.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'AI creates value when it improves a real workflow with acceptable quality, cost, and risk. Start narrow, measure rigorously, secure the data path, and expand from evidence. Clydara helps startups identify high-return AI opportunities, design secure RAG and automation systems, and integrate models into real products. Contact Clydara to plan an AI initiative grounded in business value.',
    ],
    checklistHeading: 'A 90-day AI integration plan',
    checklistParagraphs: [
      'During the first 30 days, interview workflow owners, choose one use case, establish a baseline, and review data permissions. Build a thin prototype using representative examples rather than a polished interface. Record failure categories and ask users whether the output saves time in the real process.',
      'During days 31 to 60, create a production-shaped pilot. Add identity, authorization, logging, cost limits, evaluation tests, and a human approval step. Connect only the minimum required systems. Compare at least two model configurations and measure quality, latency, and cost per completed task. Train a small user group and collect structured feedback.',
      'During days 61 to 90, improve weak cases, document operating procedures, and decide whether to expand, revise, or stop. Monitor model and retrieval changes, create an incident path, and assign ownership. Expansion should follow demonstrated value, not executive enthusiasm.',
      'Procurement also matters. Review provider availability, service limits, data-processing terms, breach notification, subprocessors, regional hosting, and deletion controls. For critical workflows, define what the product does when the model is slow or unavailable. A reliable AI feature is a complete service with safeguards\u2014not a prompt connected directly to a button.',
    ],
  },
  'agency-vs-in-house-developers': {
    heroRow1: {
      prefix: 'Agency vs',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'In-House',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Developers',
    },
    subtitle:
      'Agency vs In-House Developers is ultimately a choice about speed, control, capability, and long-term ownership. The right model depends on product maturity, hiring conditions, roadmap certainty, and management capacity.',
    featuredImg:
      'https://framerusercontent.com/images/ANlLFOiR8BN3esWQJemb6UwQ.png?width=1920&height=2939',
    inlineImg:
      'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140',
    tags: ['Agency, Hiring, Software Development'],
    sections: [
      {
        heading: 'The Real Cost of Building a Development Team',
        paragraphs: [
          'The visible cost of an in-house developer is salary. The real cost includes recruitment fees, interviews, leadership time, equipment, benefits, payroll taxes, onboarding, management, learning time, retention risk, and the delay before a complete team is productive. One excellent engineer rarely covers product strategy, UX, frontend, backend, cloud infrastructure, quality assurance, security, and delivery management. Founders must compare a functioning team with a functioning team\u2014not one salary with an agency proposal.',
          'Recruitment is especially difficult when the company lacks a technical brand or experienced engineering leadership. Hiring can take months, and a rushed decision creates expensive technical debt. If a key employee leaves, knowledge and delivery momentum may leave with them. In-house teams can become a major advantage, but they require ongoing investment in culture, career growth, standards, and management.',
          'When you hire a software agency, you purchase coordinated capability for a defined period. A strong agency provides discovery, design, architecture, engineering, QA, deployment, and project leadership. It can begin faster than a new internal team and adjust specialist involvement as the project changes. The trade-off is that the agency must learn your business, communication needs structure, and long-term knowledge transfer must be planned rather than assumed.',
          'Time to market is often the deciding factor. A funded startup may lose more from a six-month hiring delay than it spends on an experienced agency. An agency can run discovery while assembling the delivery team, then move from prototype to production with established workflows. This is valuable when the opportunity window is narrow, investors expect milestones, or internal leaders cannot pause operations to recruit.',
          'Skill diversity is another advantage. A product may need a senior architect during planning, more frontend capacity during interface delivery, a cloud engineer before launch, and security expertise before enterprise sales. Maintaining every specialist full-time is inefficient for many companies. An agency can vary the mix.',
          'In-house teams offer context, continuity, and direct control. Engineers are immersed in customer feedback, commercial priorities, and internal operations. They can make frequent small decisions without a contractual process and build deep domain knowledge over time. For a software company whose product changes continuously, this proximity becomes strategically important.',
          'The founder pain point is management overhead. Developers need clear priorities, product decisions, technical leadership, feedback, and protection from constant interruption. Hiring engineers without creating this environment does not produce an effective development team.',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'Quality, Communication, and Scaling',
        paragraphs: [
          'Communication quality depends less on location than on operating discipline. Strong agency engagements have named owners, regular demonstrations, written decisions, transparent backlogs, accessible source control, and direct contact with the people doing the work. Weak outsourcing hides the team behind an account manager and reports activity instead of outcomes.',
          'Quality control should be visible. Ask how requirements become acceptance criteria, how architecture is reviewed, how tests are automated, how security is addressed, and how production incidents are handled. Review sample documentation and repositories where possible. Confirm who owns intellectual property, infrastructure accounts, domains, analytics, and deployment access. A premium presentation is not evidence of engineering quality.',
          'An internal team also needs controls: code review, testing, observability, release procedures, security ownership, and technical-debt management. \u201cIn-house\u201d does not automatically mean higher quality. It means the company owns the responsibility directly.',
          'Scaling differs by model. Agencies can add capacity quickly, though adding people to a late project can reduce productivity if architecture and onboarding are weak. In-house scaling is slower but can produce durable organizational knowledge. The right plan considers both product demand and management bandwidth. Ten developers without experienced leadership may ship less reliably than four with clear architecture and priorities.',
          'Agency advantages are strongest when the product has a defined business goal, speed matters, specialist skills are needed, and the company can appoint a decisive internal owner. Agencies are also useful for modernization, integrations, design systems, cloud migration, security improvements, or a major release that exceeds internal capacity.',
          'In-house is better when software is the company\u2019s enduring core, priorities change daily, domain context is complex, and there is enough work to justify a permanent multidisciplinary team. It is also preferable when regulation or data sensitivity requires unusually tight operational control\u2014although specialist partners may still support reviews.',
          'Hybrid teams often provide the best transition. A startup can retain a technical founder or product leader internally while an agency delivers the first platform. Internal engineers join over time, participate in reviews, and gradually assume ownership. Another model keeps core product development in-house while an agency handles a bounded mobile app, redesign, integration, or infrastructure project.',
          'For hybrid delivery, define decision rights. Identify who owns product priorities, architecture, releases, incidents, and vendor coordination. Use one backlog, one source of truth, shared standards, and a documented handover plan. Without that clarity, hybrid teams create duplicate authority rather than flexibility.',
        ],
      },
      {
        heading: 'Decision Matrix, FAQs, and Recommendation',
        paragraphs: [
          'Use a decision matrix scored from one to five. Evaluate urgency, roadmap stability, domain complexity, security, need for specialist skills, hiring access, management capacity, budget predictability, and desired long-term ownership. Weight the factors that matter most. If speed and skill breadth dominate, an agency may lead. If continuous product evolution and domain immersion dominate, in-house may lead. If both matter, choose a hybrid plan.',
          'Before selecting an agency, request a discovery approach rather than a premature fixed quote. Ask who will work on the engagement, how senior involvement changes, what artifacts you receive, and how scope changes are handled. Speak with references about communication during difficult moments, not only launch success.',
          'Before hiring internally, define the first team shape and leadership model. Decide whether you need a product-minded technical lead, a specialist, or a generalist. Create an interview process that tests practical judgment rather than trivia. Budget for onboarding and tooling, and be honest about the company\u2019s ability to mentor.',
          'Practical example: a non-technical founder with validated demand and a six-month market window may use an agency to deliver an MVP, then hire a technical lead during development. A mature SaaS company may keep its platform team internal and bring in an agency for a new marketing experience or AI integration.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is an agency cheaper than in-house developers?',
        a: 'It can be for a time-bound initiative because the company avoids recruitment and permanent specialist costs. Long-term continuous development may justify an internal team.',
      },
      {
        q: 'How do we protect product knowledge?',
        a: 'Keep source code and infrastructure in company-controlled accounts, document decisions, record demonstrations, and schedule structured knowledge transfer.',
      },
      {
        q: 'Will outsourcing reduce quality?',
        a: 'Not inherently. Quality depends on team capability, standards, transparency, incentives, and governance.',
      },
      {
        q: 'When should we hire the first internal developer?',
        a: 'Hire when there is sustained work, clear leadership, and a need for deep product ownership\u2014not simply because internal sounds safer.',
      },
      {
        q: 'Can an agency work with our developers?',
        a: 'Yes. Hybrid delivery works well when responsibilities, standards, communication, and decision rights are explicit.',
      },
      {
        q: 'What should an agency contract include?',
        a: 'Scope, deliverables, acceptance, intellectual-property ownership, confidentiality, access, security expectations, payment terms, change process, support, and termination assistance.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'Choose the model that removes your most expensive constraint. An agency can accelerate delivery and supply diverse expertise. An in-house team can compound domain knowledge and product ownership. A hybrid model can provide speed now and capability later.',
      'Clydara works as a product and engineering partner for founders who need clear strategy, senior execution, and transparent handover. Contact Clydara to evaluate your team model and build a delivery plan aligned with your stage.',
    ],
    checklistHeading: 'How to make either model succeed',
    checklistParagraphs: [
      'For an agency engagement, assign one internal product owner with authority to prioritize and accept work. Provide access to customers, subject-matter experts, and existing systems. Review working software frequently. Delayed feedback is expensive because assumptions spread across design, code, and tests.',
      'For an internal team, protect focus and create a sustainable engineering environment. Maintain a clear roadmap, limit concurrent priorities, fund testing and infrastructure, and give technical leaders influence over commitments. Retention improves when engineers can see the customer impact of their work and are not forced to trade quality for every deadline.',
      'In both models, measure outcomes rather than utilization. Useful measures include lead time, deployment frequency, escaped defects, incident recovery, adoption, and the business metric the product is meant to change. Hours worked or tickets closed can reward activity without value.',
      'Plan continuity before a transition becomes urgent. Keep architecture records, runbooks, dependency inventories, environment access, and known technical debt current. Schedule shadowing and reverse-shadowing during handover: the incoming team performs the work while the outgoing team observes. A responsible transition is part of delivery quality, not an optional final-week document.',
    ],
  },
  'saas-development-cost': {
    heroRow1: {
      prefix: 'How Much',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: 'Does SaaS',
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Development Cost?',
    },
    subtitle:
      'SaaS development cost depends on product scope, risk, integrations, security, and scale\u2014not simply the number of screens. This guide helps founders estimate an MVP, plan hidden costs, and build a realistic investment roadmap.',
    featuredImg:
      'https://framerusercontent.com/images/FkxBKrKQZeHThLueSHrj4jwds.png?width=2400&height=1600',
    inlineImg:
      'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140',
    tags: ['SaaS, Pricing, Startup'],
    sections: [
      {
        heading: 'What Actually Drives SaaS Development Cost',
        paragraphs: [
          'The honest answer to \u201cHow much does it cost to build a SaaS platform?\u201d is that cost follows uncertainty, capability, and quality. A focused startup MVP may validate one workflow with a small set of users. A custom SaaS platform for enterprise customers may require tenant isolation, complex permissions, audit logs, integrations, uptime commitments, compliance, migration tools, and global infrastructure. Both are called SaaS, but they are different investments.',
          'Discovery reduces expensive assumptions. The team defines users, jobs, business rules, risks, success metrics, integrations, and the smallest valuable release. Deliverables may include user flows, architecture options, a prioritized backlog, prototypes, and a cost range. Skipping discovery rarely removes the work; it pushes decisions into engineering, where changes cost more.',
          'UI/UX cost depends on workflow complexity, research, accessibility, responsive states, design-system needs, and prototype fidelity. A dashboard with a few standard forms differs from a collaborative workspace with dense data and role-specific behavior. Good design is not decoration. It prevents rework by making states, errors, permissions, and edge cases visible before implementation.',
          'Software development cost should be estimated by capability groups and risk, then refined after discovery. A single fixed number given before understanding the product is usually a sales tactic, not reliable planning.',
          'Backend engineering covers business logic, APIs, background jobs, notifications, billing events, file processing, reporting, and integrations. Costs rise when workflows have many exceptions or require guaranteed processing. Database work includes schema design, indexes, migrations, backups, retention, reporting, and tenant isolation. A flexible schema does not remove the need for careful modeling.',
          'APIs can accelerate delivery when payment, email, identity, analytics, or AI services already solve a commodity problem. They also create integration and operating costs: usage fees, rate limits, version changes, outages, webhooks, retries, and data reconciliation. Budget for failure handling, not only the happy path.',
          'Authentication is more than a login screen. Password recovery, email verification, multifactor authentication, social login, enterprise SSO, session security, device management, and role-based authorization all affect scope. Managed identity can reduce risk, while complex enterprise permissions still require product-specific design.',
          'AI features add model usage, data preparation, prompt and retrieval design, evaluations, safety controls, observability, and human-review workflows. A demo can be inexpensive; a reliable AI capability integrated with private customer data is a production system and should be budgeted accordingly.',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'MVP, Startup, and Enterprise Pricing',
        paragraphs: [
          'A useful pricing framework separates three levels. A focused MVP generally includes one primary user journey, essential administration, basic analytics, standard authentication, and a production deployment. Depending on region, team seniority, and complexity, it may range from tens of thousands to low six figures. The purpose is to validate demand and workflow\u2014not reproduce a mature competitor.',
          'A growth-stage SaaS product commonly adds multiple roles, subscriptions, richer reporting, integrations, automation, mobile responsiveness, support tooling, and more robust infrastructure. Costs can move well into six figures because the product must support real operations, not just demonstrate an idea.',
          'Enterprise SaaS pricing is driven by assurance as much as features. SSO, SCIM, auditability, granular access, data residency, compliance evidence, penetration testing, uptime, migration, procurement support, and advanced observability require architecture and operational maturity. A multi-region, regulated platform can become a seven-figure program delivered in phases.',
          'These ranges are not quotes. Team model matters. Freelancers may reduce hourly cost but require more coordination. An experienced product agency costs more per week but may reduce risk through integrated discovery, design, engineering, QA, and delivery leadership. An internal team creates durable ownership but adds recruitment and ongoing employment costs.',
          'Infrastructure starts with cloud hosting, databases, object storage, queues, email, monitoring, logs, backups, domains, and content delivery. Early costs can be modest, but inefficient queries, oversized services, unbounded logs, and AI usage can surprise founders. Design cost controls from the beginning: budgets, alerts, retention policies, autoscaling limits, and per-tenant usage visibility.',
          'Maintenance is not optional. Browsers, operating systems, dependencies, APIs, and security threats change. Budget for patching, monitoring, incidents, support, backups, performance work, and small improvements. A common planning range is a meaningful annual percentage of initial development, adjusted for product activity and service requirements.',
          'Scaling cost should follow evidence. Do not build global microservices for an unvalidated MVP. Do avoid choices that make basic growth dangerous. Use managed services, stateless application layers, appropriate indexes, queues for slow work, automated deployments, and observability. Load test the workflows that matter before major launches.',
          'Cloud hosting is only one part of scalability. Customer onboarding, support, billing, permissions, data exports, and internal administration must also scale. A product that handles traffic but requires an employee to configure every account is not operationally scalable.',
        ],
      },
      {
        heading: 'Hidden Costs, Budget Plan, and FAQs',
        paragraphs: [
          'Hidden costs include data migration, content preparation, legal and compliance advice, app-store accounts, transactional messages, analytics, customer support tools, accessibility remediation, penetration testing, third-party minimums, and post-launch iteration. Sales commitments can create unplanned features. Integrations may require paid partner access. Enterprise customers may demand security evidence before purchase.',
          'Build a budget in layers. Reserve funding for discovery, design, implementation, launch, and an operating runway after launch. Add contingency for validated unknowns rather than using it to conceal vague scope. Prioritize capabilities by revenue, learning, risk reduction, and dependency. Defer convenience features that do not improve the first customer outcome.',
          'Use phased estimates with assumptions. Phase one validates the riskiest workflow. Phase two supports repeatable sales. Phase three improves scale, automation, and enterprise readiness. Re-estimate after each phase using real usage and customer feedback.',
          'Practical example: a founder building compliance workflow software may first support document collection, review status, reminders, and exports. Advanced integrations, custom reporting, and enterprise identity can follow after design partners validate the core process. This protects capital while preserving a credible architecture.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a startup MVP cost?',
        a: 'A focused custom MVP often begins in the tens of thousands and can reach low six figures depending on workflow, design, integrations, and quality requirements.',
      },
      {
        q: 'Why do SaaS estimates vary so much?',
        a: 'Products with similar screen counts can have radically different permissions, data, integrations, security, and failure-handling needs.',
      },
      {
        q: 'Should we use a fixed-price contract?',
        a: 'Fixed price works for genuinely defined scope. For uncertain products, paid discovery followed by phased estimates is usually more reliable.',
      },
      {
        q: 'How much should we budget after launch?',
        a: 'Plan for hosting, support, monitoring, maintenance, security, and iteration. The correct amount depends on usage and commercial commitments.',
      },
      {
        q: 'Can no-code reduce SaaS development cost?',
        a: 'It can validate simple workflows quickly. Complex logic, scale, ownership, or integrations may eventually require custom engineering.',
      },
      {
        q: 'What increases cost fastest?',
        a: 'Unclear requirements, late changes, complex permissions, data migration, enterprise security, many integrations, and premature scale.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'SaaS development cost should be treated as a staged investment tied to learning and revenue. Define the smallest valuable product, fund quality where failure is expensive, and expand from evidence.',
      'Clydara helps founders turn SaaS ideas into realistic roadmaps, architecture, and production platforms. Contact Clydara to estimate your project and identify the highest-value release your budget can support.',
    ],
    checklistHeading: 'How to request a credible estimate',
    checklistParagraphs: [
      'Prepare a short product brief describing users, their current problem, the primary workflow, required integrations, security expectations, target launch window, and commercial model. Include what is explicitly outside the first release. This gives an estimator enough context to identify risk without pretending every detail is settled.',
      'Ask vendors to separate assumptions, exclusions, third-party fees, and client responsibilities. Understand the expected team composition and how estimates change after discovery. A low estimate that excludes QA, deployment, project leadership, or post-launch support may not be comparable with an integrated proposal.',
      'Tie scope to milestones with observable acceptance. A milestone might be \u201ca customer administrator can invite a user, assign a role, and review an audit record,\u201d not \u201cauthentication complete.\u201d Product-level acceptance reduces disputes and keeps budget discussions connected to usable capability.',
      'Protect runway after launch. Early customer feedback will reveal missing states, confusing workflows, and operational needs that planning could not fully predict. Reserve capacity for stabilization and measured iteration. The goal is not to spend the smallest possible amount before launch; it is to reach a reliable learning point without exhausting the capital needed to respond.',
    ],
  },
  'startup-website-mistakes': {
    heroRow1: {
      prefix: 'Why Startup',
      pill: 'https://framerusercontent.com/images/klHvhiVb59QcJITpOaWJWmAWkGY.svg?width=81&height=64',
      accent: "Websites Don't",
    },
    heroRow2: {
      pill: 'https://framerusercontent.com/images/Wwgo4LfrIbO7lSRxvwnjSVzwROM.svg?width=81&height=64',
      suffix: 'Generate Leads',
    },
    subtitle:
      'Most startup website mistakes are not visual. They are failures of messaging, trust, performance, SEO, and conversion design that prevent qualified visitors from understanding the offer and taking the next step.',
    featuredImg:
      'https://framerusercontent.com/images/gyymVjWtj6P1viNzEiNOb5NFoc.png?width=849&height=1200',
    inlineImg:
      'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140',
    tags: ['SEO, Web Design, Conversion Optimization'],
    sections: [
      {
        heading: 'The Conversion Problem Usually Starts With Positioning',
        paragraphs: [
          'A startup website has seconds to answer four questions: What do you do? Who is it for? Why is it better or safer? What should the visitor do next? Many sites lead with broad claims such as \u201ctransforming the future\u201d or \u201cunlocking innovation.\u201d These phrases sound ambitious but force visitors to interpret the product. Confusion increases bounce rate and weakens every paid, outbound, and SEO campaign sending traffic to the page.',
          'Poor messaging often comes from writing inside-out. The company explains features, technology, and vision before the buyer\u2019s problem. Strong positioning begins with a specific audience, painful situation, valuable outcome, and credible difference. A headline should make the category and value clear. Supporting copy can explain how the product works and why the approach is distinct.',
          'Weak calls to action create another leak. \u201cLearn more\u201d does not explain the commitment or benefit. Use an action that matches buyer readiness: request an audit, view a technical demo, calculate savings, explore the platform, or speak with an expert. Keep the primary action consistent and provide a lower-commitment path for visitors who need evidence first.',
          'Brand positioning is not only visual identity. It is the coherent promise expressed through message, proof, tone, and experience. A premium design cannot compensate for an undifferentiated offer.',
          'Trust signals should reduce the specific risk of choosing you. Logos help when recognizable and authorized, but stronger proof includes quantified outcomes, detailed case studies, customer quotes with roles, security practices, implementation expectations, and transparent expertise. Early startups without famous clients can show founder credibility, product demonstrations, design-partner results, process clarity, and honest limitations.',
          'Structure proof near the claim it supports. If you promise faster onboarding, show the average time or a customer example beside that statement. If security matters, explain identity, encryption, data handling, and compliance in buyer language. A separate wall of logos cannot answer every objection.',
          'Founder pain often appears as a traffic problem: \u201cWe need more visitors.\u201d Analytics may show that existing visitors never reach key sections, abandon slow pages, or click vague CTAs. Before increasing acquisition spend, verify message clarity and conversion paths. Sending more traffic to a weak experience scales waste.',
          'A useful practical test is the five-second review. Show the opening section to someone in the target market, hide it, and ask what the company sells, who it serves, and what action was offered. If answers vary widely, redesigning buttons will not solve the underlying positioning issue.',
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: 'Performance, SEO, and User Experience',
        paragraphs: [
          'Website speed affects attention, trust, conversion optimization, and search visibility. Large images, excessive scripts, third-party trackers, unoptimized fonts, and client-side rendering can delay useful content. Measure on real devices and production connections rather than relying only on a fast office laptop.',
          'Core Web Vitals focus on loading, responsiveness, and visual stability. Largest Contentful Paint identifies how quickly the primary content appears. Interaction to Next Paint measures responsiveness after user input. Cumulative Layout Shift captures unexpected movement. Improve them by optimizing images, reserving media dimensions, reducing JavaScript, prioritizing critical assets, caching effectively, and removing third parties that do not justify their cost.',
          'Technical SEO gives search engines a clear, accessible site. Each important page needs a descriptive title, useful meta description, one clear H1, logical headings, crawlable internal links, canonical handling, a sitemap, and appropriate indexing rules. Structured data can clarify organizations, articles, products, and FAQs when the visible content supports it. Avoid generating thin pages solely for keywords.',
          'SEO starts with search intent. A homepage may target the core category, while service pages answer commercial needs and articles address founder questions. Internal links should guide readers from informational content to relevant services and related articles. Good lead generation SEO connects discovery to a next step instead of treating traffic as the final metric.',
          'Mobile optimization is not shrinking desktop. Prioritize content order, readable type, tap targets, form simplicity, and performance on constrained devices. Sticky elements should not cover content. Menus should be obvious. Forms should use correct input types and request only information necessary for the next conversation.',
          'User experience should reduce decision effort. Use clear navigation, consistent language, meaningful headings, scannable sections, and visible system feedback. Remove carousels that hide critical proof, animations that delay reading, and decorative effects that compete with the offer. Premium experiences feel controlled, not busy.',
          'Conversion optimization requires a hypothesis. For example: \u201cQualified visitors do not request a demo because enterprise security is unclear.\u201d The change might add security proof near the CTA, not randomly change its color. Prioritize tests by potential impact, confidence, and effort. Ensure enough traffic and duration before declaring a winner.',
          'A/B testing is useful when traffic supports statistical learning and the variation represents a meaningful decision. Low-traffic startups should use customer interviews, session recordings, usability tests, and funnel analysis first. Testing tiny cosmetic differences on a fundamentally unclear page creates false precision.',
        ],
      },
      {
        heading: 'What does a measured website performance change look like?',
        paragraphs: [
          'A useful performance record keeps the test settings, code changes and every comparable capture together. It shows both the improvements and the work that remains, rather than selecting the highest score.',
          'Clydara’s public homepage provides a dated example. Three PageSpeed Insights captures on 8 October 2026 recorded Lighthouse 13.5.0 and Chromium 153.0.8010.36. The mobile tests used an emulated Moto G Power with Slow 4G throttling; the desktop tests used the same custom desktop settings. The implemented changes were responsive image delivery and deferred offscreen images, followed by serving the original fonts locally.',
          'The mobile LCP improved in the final capture, while desktop TBT worsened compared with the image-only capture. These observations are not a controlled causal experiment: a single lab result can vary with the test conditions. All three linked reports remain available for inspection.',
          'CrUX field data was unavailable in these captures. Real-user INP, ranking changes and conversion improvements were not established by this example. Compare field experience and genuine enquiries separately when enough data exists.',
        ],
        comparison: {
          caption: 'Clydara homepage: archived PageSpeed lab captures on 8 October 2026',
          columns: ['Measurement', 'Before', 'After responsive images', 'After local fonts'],
          rows: [
            ['Mobile performance score', '80', '79', '84'],
            ['Mobile LCP', '3.637 s', '3.687 s', '3.492 s'],
            ['Desktop performance score', '86', '94', '89'],
            ['Desktop TBT', '301 ms', '180 ms', '260 ms'],
          ],
        },
      },
      {
        heading: 'Analytics, Audit Checklist, FAQs, and CTA',
        paragraphs: [
          'Analytics should follow the buyer journey. Track qualified landing sessions, key content engagement, CTA clicks, form starts, form completion, booked meetings, and opportunities\u2014not only page views. Connect marketing data with CRM outcomes where privacy and consent permit. A channel producing fewer but higher-quality opportunities may be more valuable than one producing cheap traffic.',
          'Use a website audit checklist:\n\nMessaging: Is the audience, problem, offer, difference, and next step clear above the fold?\nProof: Are claims supported with relevant outcomes, examples, credentials, or process detail?\nConversion: Is there one primary CTA, a lower-commitment option, and a short working form?\nPerformance: Are images optimized, scripts controlled, layouts stable, and Core Web Vitals healthy?\nSEO: Are titles, descriptions, headings, canonicals, indexing, sitemap, schema, and internal links correct?\nMobile: Is the content readable, navigation usable, and interaction fast on a real phone?\nAccessibility: Can visitors navigate by keyboard, understand labels, and perceive sufficient contrast?\nAnalytics: Are meaningful events recorded and tested without collecting unnecessary personal data?\nOperations: Does someone own content accuracy, technical maintenance, and monthly review?',
          'Run the audit against major traffic sources and buyer segments. A page may work for referrals who already trust the founder but fail for cold search visitors who need category context and proof.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does our startup website get traffic but no leads?',
        a: 'Common causes are unclear positioning, low-intent traffic, weak proof, poor performance, confusing CTAs, or a form that asks for too much.',
      },
      {
        q: 'How many CTAs should a page have?',
        a: 'Repeat one primary action where it is contextually useful. Add a secondary action only for a distinct readiness level.',
      },
      {
        q: 'Do Core Web Vitals affect leads?',
        a: 'They influence user experience and search performance. Slow, unstable pages increase abandonment, especially on mobile.',
      },
      {
        q: 'What should we track?',
        a: 'Track steps connected to revenue: CTA engagement, form completion, booked meetings, qualified opportunities, and source quality.',
      },
      {
        q: 'When should we run A/B tests?',
        a: 'When you have a clear hypothesis, reliable measurement, and enough traffic. Otherwise use qualitative research and focused iteration.',
      },
      {
        q: 'How long does SEO take?',
        a: 'Technical fixes can improve crawlability quickly, but competitive organic growth usually requires sustained content, authority, and iteration.',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionParagraphs: [
      'Startup website mistakes compound. Weak positioning reduces engagement, missing proof reduces trust, slow performance increases abandonment, and poor measurement hides the cause. Fix the foundation before buying more traffic. Make the offer clear, support it with evidence, remove technical friction, and measure the journey to qualified revenue.',
      'Clydara combines strategy, UX, engineering, SEO, and performance to improve websites as business systems\u2014not digital brochures. Request a website audit from Clydara to identify the messaging, technical, and conversion issues preventing your site from generating leads.',
    ],
    checklistHeading: 'A practical 30-day website improvement plan',
    checklistParagraphs: [
      'In week one, audit analytics, search queries, recordings, sales objections, and customer language. Interview several qualified prospects or customers. Rewrite the core message around the problem, audience, outcome, and difference. Define one primary conversion and ensure measurement works from landing page to CRM.',
      'In week two, fix technical blockers: compress and correctly size images, remove unnecessary scripts, stabilize layouts, test forms, verify indexing, and improve mobile navigation. Check important templates with performance and accessibility tools, then validate issues manually on real devices.',
      'In week three, strengthen proof. Turn vague testimonials into specific outcomes, publish a focused case study, explain the delivery process, and address major risks near relevant calls to action. Add internal links from useful articles to matching services and from commercial pages to deeper evidence.',
      'In week four, launch the highest-confidence changes and establish a review rhythm. Compare qualified conversion rates by source and page. Read form submissions, not just totals. Choose the next hypothesis from observed friction. Sustainable lead generation comes from repeated learning across positioning, content, UX, SEO, and performance\u2014not from a one-time visual redesign.',
    ],
  },
  "saas-infrastructure-cost": {
    heroRow1: { prefix: "SaaS", pill: '/images/blog/guide-pill-1.webp', accent: "Infrastructure" },
    heroRow2: { pill: '/images/blog/guide-pill-2.webp', suffix: "Cost in 2026" },
    subtitle:
      "A SaaS built on managed services costs close to nothing as a prototype, around $110 to $140 a month once paying customers arrive, and somewhere between $370 and $1,050 a month at growth. The jumps come from seats, user counts and backups, not traffic. Every price here comes from the vendor's own pricing page, checked on 13 October 2026.",
    featuredImg: '/images/blog/saas-infrastructure-cost-featured.webp',
    inlineImg: '/images/blog/saas-infrastructure-cost-card.webp',
    tags: ["SaaS, Infrastructure, Pricing"],
    sections: [
      {
        heading: "The short answer, and why most estimates online are wrong",
        paragraphs: [
          "Founders often want to know what a SaaS costs to run before they know what it costs to build. Fair question. The honest answer is that for most early products the monthly infrastructure bill is small, and the build cost dwarfs it. We cover that side in our [SaaS development cost guide](/blog/saas-development-cost). This post is about the bill that arrives every month after launch.",
          "Most articles on this topic quote ranges like \"$100 to $250 pre-launch\" with no vendor, no date and no assumptions. That isn't useful when you are choosing a stack. So we priced one common setup: Vercel for hosting, Supabase for the Postgres database, file storage and optionally auth, Clerk as the alternative auth provider, Resend or Postmark for email, and Sentry for error monitoring. You could swap any of these for AWS, Render, Auth0 or SendGrid. The shape of the bill stays the same.",
          "All prices are in US dollars, exclude tax, use monthly billing unless the vendor only shows an annual figure, and assume one production project with no overages. Pricing pages change often, so treat the dates as part of the numbers.",
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: "Monthly cost by stage",
        paragraphs: [
          "Prototype means you and a handful of testers. First customers means a small paying user base and two developers with access. Growth means tens of thousands of active users, four developers, a bigger database and real backups. The growth column assumes 80,000 monthly active users, which is where the auth decision starts to matter a lot.",
        ],
        comparison: {
          label: "SaaS infrastructure cost by stage",
          caption: "Monthly SaaS infrastructure cost by stage, USD, vendor list prices checked 13 October 2026",
          columns: ["Line item", "Prototype", "First customers", "Growth"],
          rows: [
            ["Hosting (Vercel)", "$0 Hobby, personal non-commercial use only", "$40: Pro with 2 developer seats", "$80: Pro with 4 seats, plus usage beyond the $20 monthly credit"],
            ["Database and storage (Supabase)", "$0 Free: 500 MB database, paused after a week of inactivity, no backups", "$25 Pro: 8 GB disk, 100 GB file storage, daily backups", "$175: Pro, Medium compute ($50 after the $10 credit), point-in-time recovery ($100)"],
            ["Authentication", "$0 Supabase Auth or Clerk Hobby", "$0 Supabase Auth, or $25 Clerk Pro", "$0 Supabase Auth up to 100,000 MAU, or about $625 Clerk Pro at 80,000 retained users"],
            ["Transactional email", "$0 Resend Free, 100 emails a day", "$20 Resend Pro (50,000 emails) or $15 Postmark Basic (10,000)", "$90 Resend Scale, 100,000 emails"],
            ["Error monitoring (Sentry)", "$0 Developer, one user", "$26 Team, billed annually", "$26 Team to $80 Business, billed annually"],
            ["Monthly total", "$0", "About $111 to $136", "About $371 to $1,050"],
          ],
        },
      },
      {
        heading: "What each line actually charges for",
        paragraphs: [
          "Hosting. Vercel Pro is $20 a month and includes $20 of usage credit, and each additional developer seat is another $20. Viewer seats are free. The catch on the free tier is in Vercel's own FAQ: Hobby is for personal, non-commercial use. Once you charge customers, budget for Pro.",
          "Database. Supabase Free gives you 500 MB and two active projects, but free projects pause after a week without activity and have no automatic backups. That is fine for a demo and risky for anything a customer touches. Pro starts at $25, includes $10 of compute credit (enough for the Micro instance), 8 GB of disk and daily backups kept for seven days. Bigger instances cost $15, $60 or $110 a month before the credit. Point-in-time recovery starts at $100 a month, and once real customer data lives in the database we think it is worth it.",
          "Authentication. This is the line founders underestimate. Supabase includes 50,000 monthly active users on Free and 100,000 on Pro, then charges $0.00325 per user. Clerk's free Hobby plan covers 50,000 monthly retained users per app; Pro is $25 a month ($20 billed annually) with 50,000 included, then $0.02 per retained user up to 100,000. At 80,000 retained users that is $25 plus $600. Clerk only counts users who come back 24 hours after signing up, which helps if you get a lot of drive-by signups. Auth0 is free up to 25,000 monthly active users, and its Essentials and Professional plans start at $35 and $240 a month for 500 users, rising with the user count.",
          "Email. Resend's free plan allows 3,000 emails a month but only 100 a day, which a single bulk invite can blow through. Pro is $20 for 50,000 emails, Scale is $90 for 100,000, and extra emails cost $0.90 per thousand. Postmark's free tier is only 100 emails a month; Basic starts at $15 for 10,000.",
          "Storage. Supabase Pro includes 100 GB of file storage, then $0.0213 per GB. Amazon S3 Standard in us-east-1 is $0.023 per GB-month for the first 50 TB, and you pay separately for requests and data transfer out. Cloudflare R2 is $0.015 per GB-month with no egress charges and 10 GB free. For most early products, storage is a rounding error. It only matters if users upload video or large drawings.",
          "Monitoring. Sentry's free Developer plan is limited to one user. Team is $26 a month billed annually with 50,000 errors included and unlimited users. Business is $80. You can also add an uptime monitor here; Sentry includes one on every plan.",
        ],
      },
      {
        heading: "Where the bill jumps without warning",
        paragraphs: [
          "Seats grow faster than traffic. Two extra developers on Vercel Pro add $40 a month whether or not a single new customer signs up. Check which tools charge per seat before you invite your whole team, contractors included.",
          "Auth pricing units differ. MAU, MRU and \"external active users\" are counted differently, and the price per user varies by an order of magnitude between providers. If your product is free to use with a paid upgrade, model auth cost at your target user count before you write the login screen, not after.",
          "Backups are not on by default where you think they are. On Supabase Free there are none, and point-in-time recovery is a paid add-on even on Pro. A restore you have never tested is a hope, not a backup.",
          "Payment fees usually beat infrastructure. Stripe's standard US card rate is 2.9% plus 30 cents per successful charge, with 1.5% more for international cards. On a $29 monthly plan that is about $1.14 per customer per month, before currency conversion. At a few hundred customers, Stripe is likely your largest variable cost, not your servers.",
          "AI features are a separate budget. Model API calls are billed per token and can outgrow everything else on this page quickly. Our [AI integration guide](/blog/ai-integration-for-startups) covers how to cap that spend.",
        ],
      },
      {
        heading: "How we'd keep a young SaaS bill under control",
        paragraphs: [
          "Turn on the spend controls that already exist. Vercel gives new teams a default $200 on-demand budget with alerts and can pause projects at a hard limit. Supabase Pro ships with a spend cap enabled. Leave both on until you understand your usage pattern.",
          "Keep one region and one production project until a customer contract forces otherwise. Preview environments and branch databases are useful, and they are billed too.",
          "Pick auth with your business model in mind. For a B2B product with a few hundred paying seats, Clerk's polish can be worth the per-user price. For a free consumer app aiming at 100,000 users, bundled Supabase Auth changes the economics completely.",
          "Review the invoices monthly for the first six months. Fifteen minutes is enough to catch a forgotten add-on or a seat for someone who left. If you are still choosing between building on a stack like this and buying an existing tool, our [custom software vs SaaS guide](/blog/custom-software-vs-saas) walks through that decision.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to host a SaaS in 2026?",
        a: "On the stack priced here, about $0 for a prototype, roughly $110 to $140 a month with first paying customers, and $370 to $1,050 a month at around 80,000 active users. Your numbers depend on seats, user counts and backup needs.",
      },
      {
        q: "Can I run a commercial SaaS on free tiers?",
        a: "Partly. Vercel Hobby is for non-commercial use, and Supabase Free pauses idle projects and has no backups, so most teams move to paid plans once customers depend on the product.",
      },
      {
        q: "What is usually the biggest infrastructure cost?",
        a: "Early on, the database plan and developer seats. At scale, per-user auth pricing and payment processing fees often overtake hosting.",
      },
      {
        q: "Is AWS cheaper than Vercel and Supabase?",
        a: "Raw resources can be cheaper, but you pay for it in setup and operations time. For a small team, managed platforms usually cost less in total until usage is large and predictable.",
      },
      {
        q: "Are these Clydara prices?",
        a: "No. Every figure here is a vendor's public list price, not a Clydara fee. Vendors bill whoever owns the accounts, and we recommend that the founder owns them from day one.",
      },
    ],
    conclusionHeading: "The bottom line",
    conclusionParagraphs: [
      "Running a SaaS is cheap until a few specific lines move: seats, auth users, backups and payments. Price those four at the user count you are aiming for, not the one you have today, and the rest of the bill will rarely surprise you.",
      "If you want a second opinion on a stack or an architecture before you commit, look at our [SaaS and web development services](/services) or read how we approach a [custom SaaS build](/blog/custom-saas-development-process).",
    ],
  },
  "custom-saas-development-process": {
    heroRow1: { prefix: "Custom SaaS", pill: '/images/blog/guide-pill-1.webp', accent: "Development:" },
    heroRow2: { pill: '/images/blog/guide-pill-2.webp', suffix: "How a Build Runs" },
    subtitle:
      "A custom SaaS build moves through discovery, scoping, design, an MVP build, QA and launch, and then keeps going as iteration. Each stage exists to make one expensive mistake cheaper to catch. This is how those stages run in practice, what you should have in your hands at the end of each, and where founders tend to lose weeks.",
    featuredImg: '/images/blog/custom-saas-development-process-featured.webp',
    inlineImg: '/images/blog/custom-saas-development-process-card.webp',
    tags: ["Custom SaaS, Product Development, Process"],
    sections: [
      {
        heading: "The shape of a build",
        paragraphs: [
          "Most process diagrams show six neat boxes with week counts under each. Real builds overlap. Design starts before scoping is finished, QA runs inside every sprint, and the first customer conversation after launch rewrites half the backlog. The boxes are still useful, because each one ends with a decision that gets more expensive if you postpone it.",
          "Our default stack for SaaS products and dashboards is React on the front end and Node.js on the server, with MongoDB when the data is naturally document-shaped and Postgres, often through Supabase, when the data is relational and needs strict permissions. Stack choice matters less than people think at this stage. Our [MERN guide](/blog/is-mern-still-worth-it-2026) covers when that stack fits and when it doesn't.",
          "The table below is the short version. The rest of the post explains each row.",
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: "Stage by stage at a glance",
        paragraphs: [],
        comparison: {
          label: "Custom SaaS build stages",
          caption: "What happens at each stage of a custom SaaS build, and what the founder should receive",
          columns: ["Stage", "What happens", "What you should receive", "Your part"],
          rows: [
            ["Discovery", "Interviews, workflow mapping, risky assumptions listed", "A written problem statement and a go or stop recommendation", "Access to real users and honest answers"],
            ["Scoping", "The first release is cut to one core workflow", "Prioritised backlog with acceptance criteria", "Saying no to features you like"],
            ["Design", "Clickable prototype, every state of every key screen", "Prototype link and a small component library", "Testing it with two or three users"],
            ["MVP build", "Working software in thin vertical slices", "A staging URL that updates as features land, repo access", "Reviewing demos within days, not weeks"],
            ["QA", "Permission, security, accessibility and device testing", "Test plan, fixed issues, known-issues list", "Acceptance testing with your own data"],
            ["Launch", "Soft launch to a small group, monitoring switched on", "Production URL, runbook, restore tested", "Onboarding the first customers yourself"],
            ["Iteration", "Fixes and features driven by usage", "A regular release rhythm and a short changelog", "Deciding what matters next"],
          ],
        },
      },
      {
        heading: "Discovery: decide whether to build at all",
        paragraphs: [
          "Discovery is research, not development. The UK Government's Service Manual puts it bluntly: you should not start building your service in discovery, and around four to eight weeks is typical for a government service. A focused startup product often needs less, but the principle holds. You are trying to understand who the users are, what they are doing today, and which constraints you cannot change.",
          "A good discovery ends with a written problem statement in plain language and a list of the assumptions most likely to kill the product. It can also end with a recommendation not to build, or to buy an existing tool instead. The same manual notes that stopping after discovery is not a failure. We agree. A week spent learning that a $30-a-month tool solves the problem is the cheapest week of the project. If you are on that fence, read our [custom software vs SaaS guide](/blog/custom-software-vs-saas) first.",
        ],
      },
      {
        heading: "Scoping: one workflow, written down",
        paragraphs: [
          "Scoping turns discovery into a first release small enough to ship. In practice that means picking the one workflow a paying customer would miss if it disappeared, and parking everything else. Each item in the backlog gets acceptance criteria a non-developer can check: \"an admin can invite a teammate and assign the viewer role\", not \"user management done\".",
          "This is also when to settle the decisions that are painful to change later. Will each customer's data live in shared tables with a tenant ID, or in separate databases? What roles exist, and what can each one see? Who owns the repository, the cloud accounts, the domain and the payment account? Our answer to the last one is always the founder. If a studio holds your accounts, you don't fully own your product.",
        ],
      },
      {
        heading: "Design: every state, not just the happy path",
        paragraphs: [
          "Design for a SaaS product is mostly about states. What does the dashboard look like with no data yet? What does a user without permission see? What happens when a payment fails or an upload is too large? A prototype that only shows the happy path pushes all of those questions into development, where answering them costs more.",
          "Keep the visual system small: a handful of components used consistently beats a large design kit nobody follows. Put the clickable prototype in front of two or three real users before any code is written. If they can't find the main action without help, that's a design problem, and it's cheap to fix now.",
        ],
      },
      {
        heading: "MVP build: thin slices and a staging link",
        paragraphs: [
          "Build in vertical slices: one feature working end to end, from database to screen, before the next one starts. It means you can click through something real early, and integrations like payments and email get tested in week two instead of the week before launch, when there's no slack left to fix them.",
          "Ask for a staging URL from the first sprint and repository access from day one. Short, frequent demos beat long status reports. A common delay in software projects is not code. It's feedback waiting for a decision, so block regular time in your calendar to review what was built.",
        ],
      },
      {
        heading: "QA: permissions first",
        paragraphs: [
          "Testing should run through the whole build, but a dedicated pass before launch catches what sprint testing misses. Start with permissions, because a data leak between customers is the bug that ends trust. On Supabase, the documentation is explicit that a table in an exposed schema without row level security can be read and written by any role with a grant on it, and it recommends a policy for each operation with tests for both allowed and denied access.",
          "Beyond that: check the OWASP Top 10 risks against your app, test keyboard navigation and contrast against WCAG 2.2, and try the core workflow on a cheap Android phone over a slow connection. Load your own messy data in, not tidy sample rows. You should receive a list of known issues alongside the fixed ones. A QA report with zero open issues usually means nobody looked hard.",
        ],
      },
      {
        heading: "Launch and iteration",
        paragraphs: [
          "Launch to a small group first. Five friendly customers who will tell you what broke are worth more than a big announcement. Before anyone outside the team logs in, monitoring should be switched on, backups should be confirmed and a restore should have been tried once. A one-page runbook covering how to deploy, roll back and who gets alerted is enough at this size.",
          "Then the real work starts. Budget for iteration from the beginning, because the first month of usage always changes priorities. If you are planning the money side, our [SaaS development cost guide](/blog/saas-development-cost) and our breakdown of [monthly SaaS infrastructure costs](/blog/saas-infrastructure-cost) cover the build budget and the running bill.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does custom SaaS development take?",
        a: "It depends on scope and on how quickly decisions get made. As a general reference, the UK Government Service Manual calls four to eight weeks typical for discovery alone on a government service. Treat any fixed week count given before discovery with caution.",
      },
      {
        q: "Can we skip discovery and go straight to building?",
        a: "You can if the problem, users and workflow are already well understood and written down. Otherwise the questions discovery answers come up during the build anyway, when changes cost more.",
      },
      {
        q: "Who should own the code and accounts?",
        a: "You should. Put the repository, cloud hosting, domain, database and payment accounts in your company's name from the start, and give the development team access rather than the reverse.",
      },
      {
        q: "Fixed price or time and materials?",
        a: "Fixed price works when the scope is genuinely settled. For a new product, a paid discovery followed by phased estimates usually gives a more honest number.",
      },
      {
        q: "What should I prepare before contacting a studio?",
        a: "Who will use the product, the problem it solves, the systems it must connect to, the features you consider essential, and any timeline or budget limits. That is enough for a useful first conversation.",
      },
    ],
    conclusionHeading: "What to take from this",
    conclusionParagraphs: [
      "A custom SaaS build is a sequence of decisions, each made cheaper by the stage before it. Insist on written outputs at every step, keep ownership of your accounts, and protect time for feedback. Those three habits do more for a project than any choice of framework.",
      "If you have a product in mind, our [SaaS and custom software services](/services) page explains what we build, and the contact form asks for exactly the details listed in the FAQ above.",
    ],
  },
  "saas-vs-custom-software-architecture-firms": {
    heroRow1: { prefix: "SaaS vs Custom", pill: '/images/blog/guide-pill-1.webp', accent: "Software for" },
    heroRow2: { pill: '/images/blog/guide-pill-2.webp', suffix: "Architecture Firms" },
    subtitle:
      "Most architecture and design studios should buy their core software: a practice management tool for fees, time and invoices, and a BIM platform for model collaboration. Custom software earns its cost in a narrower place: the client-facing layer, and the workflows your bought tools leave stuck in spreadsheets and email threads. Here is how to tell which side of that line your studio is on.",
    featuredImg: '/images/blog/saas-vs-custom-software-architecture-firms-featured.webp',
    inlineImg: '/images/blog/saas-vs-custom-software-architecture-firms-card.webp',
    tags: ["Architecture, Custom Software, SaaS"],
    sections: [
      {
        heading: "Three jobs, not one",
        paragraphs: [
          "When a principal says \"we need better software\", they usually mean one of three different jobs, and lumping them together is how studios end up either overspending or under-tooled.",
          "The first job is running the practice: fees split by phase, timesheets, staffing, invoices and the numbers that tell you whether a project is making money. The second is design collaboration: shared models, drawing sets, markups and coordination with consultants. The third is the client experience: how a client sees progress, approves a design option, picks finishes, signs off a stage and finds the right document six months later.",
          "Mature products exist for the first two jobs, built by companies with far more engineers than any studio will ever hire. The third job is where generic tools fit worst, because every studio's client process is a little different and it is part of what clients are paying for.",
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: "What off-the-shelf tools cost",
        paragraphs: [
          "These are published prices, checked on 13 October 2026. Several A&E vendors only quote on request, which makes comparison harder than it should be.",
        ],
        comparison: {
          label: "Architecture firm software prices",
          caption: "Off-the-shelf tools an architecture studio might use, with published prices (USD, checked 13 October 2026)",
          columns: ["Tool", "Job it does", "Published price"],
          rows: [
            ["Monograph", "Practice management: phase budgets, time, invoicing, QuickBooks Online sync", "$45 to $490 a month depending on firm size"],
            ["Factor", "A&E project management and billing", "$30 per user a month on an annual plan, 5+ users"],
            ["BQE CORE", "Practice management and accounting modules", "Quote only, based on modules and users"],
            ["Autodesk BIM Collaborate Pro", "Cloud co-authoring and model coordination for Revit", "$925 per user a year, or $115 a month"],
            ["Asana", "General project and task management", "$10.99 per user a month (Starter, annual)"],
            ["ClickUp", "General project and task management", "$7 per user a month (Unlimited, annual)"],
          ],
        },
      },
      {
        heading: "When SaaS is enough",
        paragraphs: [
          "For a 12-person studio, Factor at $30 a seat comes to $360 a month. Add BIM Collaborate Pro for four Revit users and that is another $3,700 a year. Those are real numbers, but they are small next to one senior salary, and the products come with support, updates and security work you would otherwise pay for yourself.",
          "Stay with off-the-shelf tools if your projects follow a similar shape, your clients are comfortable with email updates and PDF issue sheets, and the main complaint is that people don't fill in their timesheets. That last one matters. If the problem is habit, custom software will not fix it. It will just give people a new place not to log their hours.",
          "A generic tool like Asana or ClickUp can also be enough for task tracking, but neither understands fees by phase. If you are tracking design fees against stages, an architecture-specific tool usually saves more admin time than it costs.",
        ],
      },
      {
        heading: "When a custom portal or tool pays off",
        paragraphs: [
          "The signals are usually practical and easy to spot. The same project information is retyped into three places every week. Clients ask \"where are we?\" often enough that someone spends hours writing status emails. Design options and finish selections go back and forth as PDF attachments, and nobody is sure which version was approved. A developer client or a repeat commercial client wants a branded place to see all their projects. Or you sell a repeatable service, such as interior fit-outs, with a defined set of options that a guided online flow could handle.",
          "In those cases a small custom tool can carry real weight: a client portal with logins, a clear record of every approval with who approved it and when, selections tied to the drawing revision they belong to, and a project timeline your team updates in one place instead of in emails. None of that requires replacing the tools you already pay for.",
          "Picture a 20-person interiors practice running eight fit-outs at once. Each client gets a finishes schedule as a spreadsheet, comments come back by email, and a junior designer spends Friday afternoons merging them into the next revision. The practice tool tracks the fees perfectly well. It just doesn't see any of this. That gap, not the fee tracking, is the thing worth building for.",
          "To be clear about our own position: Clydara builds custom portals, dashboards and CRM-style business tools, but we don't have a published architecture-firm case study. The examples in this post are typical studio situations, not client stories.",
        ],
      },
      {
        heading: "Build thin, on top of what you already pay for",
        paragraphs: [
          "The mistake to avoid is rebuilding practice management or document control from scratch. Keep your practice tool as the record for fees and time, and your BIM platform as the record for models. Build only the layer that is missing, and connect it through whatever exports or APIs your tools provide. Check that before anyone writes a line of code, because it decides how much of the portal can update itself.",
          "Running costs for a small portal like this are modest. A React front end with a managed Postgres database, authentication and transactional email sits in the first-customers column of our [SaaS infrastructure cost breakdown](/blog/saas-infrastructure-cost), around $110 to $140 a month on list prices. The build is the larger cost, and our [custom SaaS development process](/blog/custom-saas-development-process) explains how to keep the first version small. Whatever you build, keep the code, hosting and domain in the studio's name.",
        ],
      },
      {
        heading: "A quick test before you spend anything",
        paragraphs: [
          "For two weeks, have the team note every time they copy information from one system to another or write a status update by hand. Multiply the hours by an internal cost rate and you have a rough monthly figure for the problem. If that number is smaller than the running cost plus a sensible share of the build cost, stay with your current tools and tidy up the process instead.",
          "Then try the cheapest workaround for a month: a shared approvals folder with a naming rule, or a form that logs sign-offs. If the workaround holds, you have saved real money. If it collapses under real projects, you now know exactly what the custom tool needs to do, which is the best brief a developer can get. Our broader [custom software vs SaaS guide](/blog/custom-software-vs-saas) has a worksheet for the full cost comparison.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do architecture firms need custom software?",
        a: "Most don't for core operations. Practice management and BIM collaboration are well served by existing products. Custom software makes sense for client-facing portals and studio-specific workflows that those tools don't cover.",
      },
      {
        q: "Can a small studio just use Asana or ClickUp?",
        a: "For tasks, yes. For fees tracked by phase, timesheets against budgets and invoicing, an architecture-specific tool such as Monograph or Factor fits better.",
      },
      {
        q: "Should we build our own BIM collaboration tool?",
        a: "No. Model co-authoring and coordination are deep technical products. Buy them, and if needed build a thin layer that shows clients the parts they care about.",
      },
      {
        q: "What does a custom client portal usually include?",
        a: "Client logins, project status, a record of approvals and selections with dates, links to the current drawing set, and notifications when something needs the client's decision.",
      },
      {
        q: "Has Clydara built software for architecture firms?",
        a: "Custom portals, dashboards and business tools are part of what we build, but we don't have a published architecture-firm case study. The scenarios in this guide are illustrations.",
      },
    ],
    conclusionHeading: "Where we land",
    conclusionParagraphs: [
      "Buy the tools that run the practice and the tools that handle the models. Consider custom software only for the part of your process clients actually see, or for the copying and chasing your bought tools leave behind, and only after a cheap workaround has failed.",
      "If you reach that point, our [custom software and SaaS services](/services) page explains what we build and what to include in a brief.",
    ],
  },
  "nextjs-react-security-update-october-2026": {
    heroRow1: {
      prefix: "Next.js and React",
      pill: "/images/blog/guide-pill-1.webp",
      accent: "Security Update:",
    },
    heroRow2: {
      pill: "/images/blog/guide-pill-2.webp",
      suffix: "Who Needs to Patch",
    },
    subtitle: "On 14 October 2026 the Next.js and React teams shipped fixes for two critical remote code execution bugs and one high-severity denial of service. Not every app is exposed to all three, but the safe answer for almost everyone on Next.js 15 or 16 is the same: upgrade today. Here is what was fixed, how to tell which parts apply to you, and what most of the coverage leaves out.",
    featuredImg: '/images/blog/nextjs-react-security-update-october-2026-featured.webp',
    inlineImg: '/images/blog/nextjs-react-security-update-october-2026-card.webp',
    tags: [
      "Security, Next.js, React",
    ],
    sections: [
      {
        heading: "What was fixed on 14 October",
        paragraphs: [
          "The Next.js team published an out-of-band security update on 14 October 2026, with patched releases 16.4.1 (Active LTS) and 15.5.28 (Maintenance LTS) [1]. Two of the fixes had been postponed from the September release because they depended on upstream libraries [1]. Both versions appeared on npm that day [8].",
          "Everything in this section is taken from the official advisories. Severity scores are the CVSS v4 numbers the advisories publish.",
          "GHSA-673q-mjm6-r5xr (critical, 9.5): unauthenticated remote code execution in App Router apps using Cache Components, when a use cache function returns multiple typed arrays. It affects Next.js 16.0.0 to 16.4.0 and is fixed in 16.4.1 [2].",
          "GHSA-2464-fhr4-w9xw, CVE-2026-96889 (critical, 9.5): unauthenticated remote code execution through the Image Optimization API with SVG files, via an upstream image library, on glibc-based Linux. It affects Next.js 10.0.0 to 15.5.27 and 16.x up to 16.4.0, and is fixed in 15.5.28 and 16.4.1 [3].",
          "GHSA-p3m5-59mp-jv5r (high, 8.2): a denial of service where crafted requests to App Router apps with at least one Server Action can pin the CPU and block other requests in the same process. It affects Next.js 13.0.0 to 15.5.27 and 16.0.0 to 16.4.0, and is fixed in 15.5.28 and 16.4.1 [4].",
        ],
        showInlineMetaAndImg: true,
      },
      {
        heading: "A five-minute check for your app",
        paragraphs: [
          "Run npm ls next sharp in the project (or the pnpm or Yarn equivalent) and note the versions your lockfile actually resolves, not the range written in package.json. If next is below 15.5.28 on the 15 line, or below 16.4.1 on the 16 line, you are on an affected version for at least one advisory.",
          "Then answer four questions. Do you use the App Router? Do you have any Server Actions, meaning any function marked use server? Have you enabled Cache Components and written use cache functions? Do you serve images through next/image with the built-in optimizer on your own Linux server or container, or generate images with next/og?",
          "A Pages Router app with no Server Actions is not affected by the denial of service [4]. An app on Next.js 15 cannot hit the use cache bug, because that advisory only lists 16.x [2]. But the image bug reaches back to version 10 [3], and the Next.js team says to upgrade even if your app has no use cache functions like the ones described [2]. So the checklist tells you how urgent this is, not whether to patch.",
        ],
      },
      {
        heading: "Your host changes the risk, not the fix",
        paragraphs: [
          "The image advisory is scoped to Next.js running on glibc-based Linux [3]. That covers most Debian and Ubuntu based Docker images, which is how many teams self-host Next.js. Images built on Alpine use musl instead of glibc, so they fall outside the advisory's stated scope. We would still not treat that as a reason to wait, because the patched release is a small version bump and your next base-image change could quietly move you back into scope.",
          "Managed platforms change where the code runs. Netlify, for example, says its own image CDN serves next/image there, so that route is not exercised on its platform, but the same flaw is reachable through next/og ImageResponse, which runs in your function [7]. Netlify also notes that the denial of service mostly turns into extra function cost on autoscaling infrastructure rather than downtime [7]. Read your own host's notice for the details, and upgrade anyway: every platform's advice ends in the same version numbers.",
        ],
      },
      {
        heading: "Three things the headlines skip",
        paragraphs: [
          "Old preview deployments are still running the old code. Patching main and redeploying production does nothing for the branch and pull request previews you shipped last month. Netlify explicitly warns that public deploy previews may stay vulnerable until they are deleted [7]. If your previews are public, delete the stale ones or put them behind authentication.",
          "The image library is a transitive dependency. The workaround in the advisory is to make sure Next.js uses sharp 0.35.5 or later, and the Next.js team says upgrading to the patched versions makes package managers pull a fixed sharp automatically [3]. After upgrading, run npm ls sharp again and confirm the resolved version, especially in monorepos or projects with overrides and pinned resolutions, where an old copy can survive.",
          "Plain React apps without a server are not part of this. The React side of the fixes covers the react-server-dom-webpack, react-server-dom-parcel and react-server-dom-turbopack packages, with fixes back-ported to 19.0.9, 19.1.10, 19.2.9 and 19.3.1 [5]. React's advisory states that if your React code does not use a server, or you don't use a framework or bundler that supports React Server Components, you are not affected [5]. A client-rendered or statically prerendered Vite app is in that group. Our own site, for instance, is React 19 with Vite and build-time prerendering and has no server components, so we checked and nothing changed for us.",
        ],
      },
      {
        heading: "Next.js 15 is about to leave maintenance",
        paragraphs: [
          "The Next.js support policy lists 15.x as Maintenance LTS, released on 21 October 2024, and says each major version stays in Maintenance LTS for two years after its initial release [6]. Read together, that puts the end of 15.x maintenance on 21 October 2026, six days after this update. That date is our reading of the published policy rather than a separate announcement.",
          "Prediction, not fact: 15.5.28 may be one of the last routine security releases for the 15 line. The policy does say the team will, in rare circumstances, patch versions outside LTS depending on severity [6], so a future critical bug might still get a 15.x fix. Planning on that would be a gamble. If you are on 15, take 15.5.28 now and schedule the move to 16 for the coming weeks, not next quarter.",
        ],
      },
      {
        heading: "How to patch without breaking production",
        paragraphs: [
          "Upgrade with npm install next@16.4.1 on the 16 line or npm install next@15.5.28 on the 15 line, as the Next.js post shows [1]. If you manage the React Server Components packages directly, move them to the patched React versions listed above [5]. Commit the lockfile, let CI run, and deploy.",
          "Then verify, because a green build only proves it compiled. Confirm the deployed build reports the new next version, check that image routes and any Server Actions still work, and remove or protect stale previews. If you run several Next.js apps, check each one: the work is small per app but easy to skip on the internal dashboard nobody has touched since spring.",
          "If your stack choice is still open, our guide on [whether MERN is still worth it in 2026](/blog/is-mern-still-worth-it-2026) covers how much server-side machinery a product really needs, which is also how much you will need to patch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which Next.js versions fix the October 2026 vulnerabilities?",
        a: "Next.js 16.4.1 and 15.5.28, both released on 14 October 2026. Earlier 16.x and 15.x releases are affected by at least one of the three advisories.",
      },
      {
        q: "Is my app affected if I only use the Pages Router?",
        a: "Not by the Server Actions denial of service or the use cache bug. The image optimization RCE is not tied to the router, so upgrade either way.",
      },
      {
        q: "Is there a workaround if I can't upgrade today?",
        a: "Only for the image bug: make sure Next.js resolves sharp 0.35.5 or later. The advisories list no workaround for the use cache RCE or the denial of service beyond upgrading.",
      },
      {
        q: "Are React apps built with Vite affected?",
        a: "Not if they don't use a server or React Server Components. React's advisory limits the issue to the react-server-dom packages used by frameworks and bundlers that support server components.",
      },
      {
        q: "When does Next.js 15 support end?",
        a: "Under the published support policy, 15.x stays in Maintenance LTS for two years from its 21 October 2024 release, which points to 21 October 2026.",
      },
    ],
    conclusionHeading: "The short version",
    conclusionParagraphs: [
      "Upgrade to 16.4.1 or 15.5.28, confirm the resolved sharp version, redeploy, and clean up old previews. Use the checklist to decide whether this is a tonight job or a this-week job, not whether to do it. And if you are still on 15, start planning the move to 16 now.",
      "If you would like a second pair of hands on an upgrade like this, our [web and SaaS development services](/services) page explains what we take on.",
    ],
  },
  "pwnescape-linux-kernel-vm-escape": {
    "heroRow1": {
      "prefix": "PwnEscape Kernel Flaw:",
      "pill": "/images/blog/guide-pill-1.webp",
      "accent": "Who Must"
    },
    "heroRow2": {
      "pill": "/images/blog/guide-pill-2.webp",
      "suffix": "Act on It"
    },
    "subtitle": "On 14 and 15 October 2026 a Linux kernel flaw nicknamed PwnEscape went public. Code running inside a virtual machine could make the host leak its own memory, and the leak was shown on Vercel's production sandboxes. Most teams have nothing to deploy, but a few do, and the story says a lot about how isolation really works. Here is what is confirmed, what was only shown in a lab, and who needs to act.",
    "featuredImg": "/images/blog/pwnescape-linux-kernel-vm-escape-featured.webp",
    "inlineImg": "/images/blog/pwnescape-linux-kernel-vm-escape-card.webp",
    "tags": [
      "Security, Linux, Cloud"
    ],
    "sections": [
      {
        "heading": "What happened, in dates",
        "paragraphs": [
          "Vercel ran a public sandbox challenge in August 2026 with up to $1 million on offer for anyone who could break out of Vercel Sandbox. In a post on 14 October it said it had received 1,285 reports in two weeks, paid $242,000, and that the most severe finding was a zero-day in the upstream Linux kernel's networking stack [1].",
          "The researcher, Paulos Yibelo of pwn.ai, published his own write-up on 15 October. It gives a timeline: first report to Vercel on 20 August, private report to the kernel security contact on 4 September, the fix accepted into the networking tree on 8 October, and merged into Linus Torvalds' mainline tree on 14 October [2]. The CVE record was published on 15 October as CVE-2026-99999 [4], and the same day Greg Kroah-Hartman released seven stable kernels containing the fix [5].",
          "The CVE record rates it 9.3 out of 10, Critical, with a local attack vector, which means the attacker already has to be running code on the machine, here inside a guest VM [4][6]. It is not in CISA's known-exploited list and The Hacker News reports no sign of real-world use [6]. Those are the facts. The rest of this article separates what was demonstrated from what was only claimed."
        ],
        "showInlineMetaAndImg": true
      },
      {
        "heading": "How a checksum hint became a host-memory leak",
        "paragraphs": [
          "This is the part most coverage skips, and it is the useful part. When Linux sends a packet it does not always compute the checksum straight away. It can mark the packet as CHECKSUM_PARTIAL, a note that says the checksum is still to be written, plus two numbers saying where to start and where to write. The researcher's description is that these values are not just labels: they authorise a later write into the packet's memory [2].",
          "In a virtual machine, the guest supplies that metadata. The host's networking code validates the packet's IPv4 header, routes it, and possibly fragments it. Later, when the checksum is finally completed, the stored write position can point back into the IPv4 header itself. The header the kernel already checked is rewritten after the check, and the code after that trusts the new values [2]. The researcher turned that into a leak of about 32 bytes of host memory per packet the guest sent, which could repeat for as long as the guest kept sending [1][2].",
          "Our reading, not a quote: it is a check-then-change bug. Nothing was parsed wrongly. Two parts of the kernel were allowed to trust different versions of the same packet. The fix adds one shared check that the checksum start does not fall inside the IPv4 header, applied before the checksum is completed at five places in the code [2][3]. Its author calls it a defence-in-depth measure and says a more complete validation where packets first enter the kernel still needs work [3][4].",
          "One more detail worth knowing: the bug is not in KVM or in any hypervisor. It is in the host's own networking stack, which is why the researcher says the name 'KVM escape' describes the boundary that was crossed, not the file that contained the bug [2]."
        ]
      },
      {
        "heading": "What was shown, and what was not",
        "paragraphs": [
          "Shown against production: the memory leak. Vercel says it was demonstrated against Vercel production sandboxes [1]. Vercel also says no report showed anyone accessing customer data, and The Hacker News repeats that no customer files, secrets or application data were shown to be read [1][6].",
          "Shown only in the researcher's own lab: crashing the host with two packets, which would take down every sandbox on that host, and running commands with full administrator rights on the host. Vercel says both were demonstrated on the researcher's own KVM and Firecracker machines set up to match Vercel Sandbox [1]. The researcher stresses this is not a claim of root access in any vendor's production environment [6].",
          "Claimed by the researcher, not independently confirmed in what we read: that the full escape works in 'many other' hypervisor environments [2]. The write-up also notes that reviewers discussed paths using TUN or AF_PACKET sockets without a VM [2]. We found no demonstration of those, so treat them as open questions rather than known exposure.",
          "Not proven, and easy to get wrong: that this is an internet-facing flaw. The record's attack vector is local [4], and The Hacker News says an outsider cannot exploit it by sending packets across the open internet [6]."
        ]
      },
      {
        "heading": "Who has to act",
        "paragraphs": [
          "If you run your own virtualisation hosts, KVM or Firecracker machines, self-hosted CI runners that use VMs, or a sandbox for customer code or AI agents: this is yours. Update the host kernel to a fixed release or your vendor's build and reboot into it. The Hacker News notes that updating only a guest's kernel does not fix the host, and that no separate workaround is given [6].",
          "The first fixed stable releases listed in the CVE record are 5.10.272, 5.15.223, 6.1.190, 6.6.159, 6.12.113, 6.18.57 and 7.2.11 [4][5]. Distributions often backport a fix without changing the version number, so check your vendor's advisory and confirm the fix is in the kernel actually running, not only the number that uname prints [6].",
          "If you build on a managed platform, cloud VMs, serverless or a hosted sandbox, the provider owns the host kernel. There is nothing for you to deploy. What you can do is read your provider's security notice. Vercel says it worked with AWS and other partners to prioritise a fix and keep its customers safe [1]. We could not verify what other providers have said, so check yours directly.",
          "If you only run ordinary web servers and apps with no untrusted guests, the practical risk is low, because the attacker needs code running in the right place first [4][6]. It is still a critical kernel fix in a routine stable release, so it belongs in your normal patch cycle."
        ]
      },
      {
        "heading": "What it means if you build multi-tenant software",
        "paragraphs": [
          "The more transferable lessons came from Vercel's own review, which included four engineer-weeks of source review by Trail of Bits. They gave three recommendations that Vercel says it implemented [1]. First, find and remove all trust in the guest: values returned by software running inside the sandbox are tenant input, so anything that crosses the boundary should be derived server-side or signed with a key the guest cannot reach. Second, one policy and one decider: Vercel's network policy was parsed independently by several subsystems that did not always agree, so it now uses one routine per data type and one component per decision. Third, assume the next zero-day, which means limiting the damage with up-to-date host kernels, no nested virtualisation and Firecracker's jailer.",
          "Vercel's example of the first lesson is instructive. A snapshot's storage location was reported by software inside the guest and the host believed it. A researcher who owned two accounts used that to swap the contents of two snapshots between them. Vercel notes the attack needed a random 96-bit identifier it never exposes, and says the fix binds every snapshot object to the project that created it [1].",
          "For a SaaS team the translation is ours, not Vercel's: any value that comes back from tenant-controlled code, a browser, a plugin or an AI agent's tool call is untrusted input, including identifiers and storage paths. Bind objects to the tenant on the server and do not rely on an ID staying secret. If your product runs customer code or agent actions, keep long-lived secrets out of the environment where that code runs and scope each credential narrowly."
        ]
      },
      {
        "heading": "What to expect next (prediction)",
        "paragraphs": [
          "Prediction, not fact: expect more disclosures at the boundary between guests and the host kernel. The reasons are in the sources. The researcher says his team found the bug in three days with an AI-assisted research system for under $700 in API tokens, a figure we could not verify independently [2][6]. Vercel says the volume of reports was only possible because researchers now hunt at AI speed [1].",
          "If that holds, the gap between a bug existing and someone finding it gets shorter, and patch cadence matters more than it used to. For anyone running their own hosts, that argues for kernel updates that are routine and rehearsed rather than a quarterly project."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is PwnEscape?",
        "a": "The nickname for CVE-2026-99999, a Linux kernel networking flaw. Crafted checksum metadata from inside a guest VM can make the host kernel rewrite a packet's IPv4 header after checking it, which the researcher turned into a host-memory leak."
      },
      {
        "q": "Which kernel versions fix it?",
        "a": "The first fixed stable releases in the CVE record are 5.10.272, 5.15.223, 6.1.190, 6.6.159, 6.12.113, 6.18.57 and 7.2.11. Distributions may backport the fix without changing the version number, so check your vendor's advisory."
      },
      {
        "q": "Can someone exploit it over the internet?",
        "a": "Not directly, according to the CVE record's local attack vector and The Hacker News. The attacker needs to be running code inside a guest VM first."
      },
      {
        "q": "Do I need to do anything if I host on Vercel, AWS or another managed platform?",
        "a": "No deployment on your side: the provider patches the host kernel. Read your provider's security notice to confirm their status."
      },
      {
        "q": "Was customer data exposed?",
        "a": "Vercel says no report in its challenge showed anyone accessing customer data in Vercel Sandbox. The memory leak itself was demonstrated against its production sandboxes."
      }
    ],
    "conclusionHeading": "The short version",
    "conclusionParagraphs": [
      "If you run your own VM hosts or sandboxes, patch the host kernel and reboot. If you use a managed platform, read your provider's notice and carry on. Either way, take the design lesson: nothing that comes back from tenant-controlled code should be trusted, and isolation depends on the whole host stack, not only the hypervisor.",
      "If your product runs customer code or agent actions and you want a second pair of eyes on how it is built, our [custom SaaS development process](/blog/custom-saas-development-process) guide and [services](/services) page explain how we scope that kind of work."
    ]
  },
  "vercel-deployment-retention-october-23": {
    "heroRow1": {
      "prefix": "Vercel Deployment Retention:",
      "pill": "/images/blog/guide-pill-1.webp",
      "accent": "What Changes"
    },
    "heroRow2": {
      "pill": "/images/blog/guide-pill-2.webp",
      "suffix": "on 23 October"
    },
    "subtitle": "Vercel is moving existing Pro teams to a 30-day deployment retention window and starting to bill for stored deployments. Deletions begin on 23 October 2026 unless you opt out first. Here is what that means in plain terms, what Vercel says it will always keep, and the short check worth doing before the date.",
    "featuredImg": "/images/blog/vercel-deployment-retention-october-23-featured.webp",
    "inlineImg": "/images/blog/vercel-deployment-retention-october-23-card.webp",
    "tags": [
      "Vercel, Hosting, SaaS costs"
    ],
    "sections": [
      {
        "heading": "The short answer: what happens on 23 October",
        "paragraphs": [
          "Vercel deployment retention for existing Pro teams changes to 30 days. Per Vercel's 9 October changelog, deployments older than 30 days will be deleted starting 23 October 2026 unless you opt out in your retention settings before then. Settings already at 30 days or shorter are unchanged, and deleted deployments cannot be used for rollback [1].",
          "The same notice says Deployment Storage and Functions Storage billing will begin for all Pro teams at $0.10 per GB-month. Vercel does not give one start date: it says to check the email sent to your team for when billing starts for you [1]. New Pro teams already default to a 30-day retention period [2].",
          "That is the confirmed part. What the headline does not tell you is how much of your history is actually exposed, which depends on a list of exceptions in Vercel's docs."
        ],
        "showInlineMetaAndImg": true
      },
      {
        "heading": "What Vercel keeps even after 30 days",
        "paragraphs": [
          "Vercel's retention documentation lists exceptions. A deployment is kept while any of them is true. On Pro and Enterprise these include the last 10 deployments created in a project, the last 20 production deployments in a Ready state, and the last 20 non-production deployments in a Ready state [3].",
          "On every plan, a deployment with a production alias is kept, a deployment that is the target of a custom-environment branch alias is kept, a non-production deployment with any custom alias is kept, and the latest preview deployment of a Git branch that is still active is kept. A branch counts as active until it is deleted or its pull request is merged or closed [3].",
          "Our reading, not Vercel's wording: your live production site and your most recent rollback targets are covered by these exceptions. What is exposed is the long tail, such as an old preview you want to reopen to reproduce a bug, a release from four months ago you need to inspect for an audit, or a rollback target older than your last 20 production builds. If a project ships rarely, 30 days may delete very little. If it ships many times a day, the 20-deployment exceptions can be used up within days, and that is where the new window starts to bite."
        ]
      },
      {
        "heading": "Deleted does not always mean gone: recovery and timing",
        "paragraphs": [
          "Vercel's docs describe a recovery period. When a deployment passes its retention limit it enters a recovery period, visitors to it see a 410 status code, and you can restore it for 30 days for successfully built deployments, from project Settings under Security, in the Recently Deleted section. After that its resources are permanently removed [3].",
          "Timing is not instant either. The docs say a background job typically marks an expired deployment for deletion within 48 hours, and a deployment that was protected by an exception when first checked can be re-evaluated later, which can take up to 30 days [3].",
          "There is a conflict to be aware of. The changelog says deleted deployments cannot be used for rollback [1], while the docs describe a restore step for the 30-day recovery period [3]. Both can be true: a deleted deployment cannot be rolled back to directly, but within the recovery period it may be restorable first. The docs page we read was marked last updated 16 September 2026, before the October announcement, so check the current page and your dashboard rather than assuming the recovery window applies to your team."
        ]
      },
      {
        "heading": "What does Vercel deployment storage cost?",
        "paragraphs": [
          "Vercel prices Deployment Storage and Functions Storage at $0.10 per GB-month each [1]. Vercel's docs say each successful deployment can add both: Deployment Storage for build outputs and static assets, and Functions Storage for function bundles stored in each region where they are deployed [4].",
          "The docs name three drivers of usage: how many deployments are retained, how large each deployment's output is, and how long they are kept [4]. Here is a worked example using only those inputs, and the figures are illustrative arithmetic, not Vercel data. A project that keeps 300 deployments at 150 MB each holds about 45 GB. At $0.10 per GB-month that is about $4.50 a month for that project's deployment storage, before Functions Storage and before any allowance in your plan, which we did not verify.",
          "Two things follow. First, for most small teams the dollar figure is modest, so the real decision is about history and recovery, not cost. Second, large outputs multiply fast: a project that ships big static assets or heavy function bundles with every build costs far more per retained deployment, and trimming output size helps as much as shortening retention [4][5]."
        ]
      },
      {
        "heading": "Check your Vercel deployment retention in ten minutes",
        "paragraphs": [
          "1. Open your team's Usage page and look at Deployment Storage and Functions Storage per project, which Vercel says it shows there [1]. Note which projects hold the most.",
          "2. Open each important project's settings, then Security, then Deployment Retention Policy, and read the current periods for Canceled, Errored, Pre-Production and Production deployments [3]. You can also run the CLI command shown in Vercel's docs, vercel list with a policy option, to view them [3].",
          "3. Decide per project, not per team. A project policy replaces the team default for that project only, so a client site that ships monthly can keep a long window while a busy app uses a short one [3].",
          "4. If you need history, for audits, a contract, or because you roll back to older builds, set a longer period before 23 October. That is the opt-out Vercel refers to [1]. Longer periods keep more output, which raises storage [4].",
          "5. If you do not, reduce storage at the source: remove unnecessary build files, move large assets to Vercel Blob, and shrink function bundles, as Vercel's own optimisation guide suggests [1][5].",
          "6. Keep your own release record. Do not rely on a hosting platform as your only archive of what you shipped. A tagged commit in Git, a build log or a release note is enough to rebuild a past version, and it does not expire with a retention setting."
        ]
      },
      {
        "heading": "Free Hobby plan: a related change",
        "paragraphs": [
          "A separate change affects Hobby teams. The New Stack reports that on the free plan, older unprotected deployments are now deleted immediately when a team exceeds the 10 GB Deployment Storage limit, and each Hobby project keeps its three most recent production deployments and three most recent deployments of any type [6].",
          "The same report quotes Vercel's head of pricing saying the current production deployment is never deleted and that aliased and active-branch deployments stay protected [6]. If you run a small project or a prototype on Hobby, that is the page to read."
        ]
      },
      {
        "heading": "What to expect next (prediction)",
        "paragraphs": [
          "Prediction, not fact: expect other platforms to put a price on retained build history. Vercel's own stated reason is that coding agents have increased how often teams deploy and how much history is stored [2], and its pricing head says the platform now handles more than 10 million deployments a day, over six times a year ago [6].",
          "If that trend continues, the sensible habit is to treat deployment history as a cost you set deliberately, with a retention period chosen per project, rather than an unlimited default."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What happens to my Vercel deployments on 23 October 2026?",
        "a": "For existing Pro teams, deployments older than 30 days start being deleted unless you opted out in your retention settings first. Exceptions such as production-aliased deployments and the most recent deployments are kept."
      },
      {
        "q": "How much does Vercel deployment storage cost?",
        "a": "Vercel says Deployment Storage and Functions Storage each cost $0.10 per GB-month for Pro teams. Your team's billing start date is in the email Vercel sent."
      },
      {
        "q": "Can I restore a Vercel deployment that was deleted?",
        "a": "Vercel's docs describe a 30-day recovery period for successfully built deployments, using Recently Deleted under project Security settings. The 9 October changelog says deleted deployments cannot be used for rollback, so verify in your dashboard."
      },
      {
        "q": "How do I keep older deployments on Vercel?",
        "a": "Set a longer deployment retention period in your team or project settings before 23 October. Longer periods keep more output, which increases storage usage."
      },
      {
        "q": "Will Vercel delete my live production site?",
        "a": "No. Vercel says a deployment with a production alias is kept, and its pricing head says the current production deployment is never deleted."
      }
    ],
    "conclusionHeading": "The short version",
    "conclusionParagraphs": [
      "Before 23 October, open your retention settings, decide per project how much history you need, and either lengthen the period or accept the 30-day default. Your live production deployment and recent rollback targets are protected by documented exceptions, but old previews and old releases are not.",
      "If hosting and infrastructure costs are part of planning a product, our [SaaS infrastructure cost](/blog/saas-infrastructure-cost) guide covers the wider picture, and the [services](/services) page explains how we scope SaaS builds."
    ]
  },
  "github-actions-lockfile": {
    "heroRow1": {
      "prefix": "GitHub Actions Lockfile:",
      "pill": "/images/blog/guide-pill-1.webp",
      "accent": "What It Is"
    },
    "heroRow2": {
      "pill": "/images/blog/guide-pill-2.webp",
      "suffix": "and How to Use It"
    },
    "subtitle": "On 14 October 2026 GitHub put workflow dependency lockfiles into public preview. A GitHub Actions lockfile records the exact commit behind every action your workflows use, so a tag that moves later cannot change what runs in your CI. Here is how it works, what it does not protect, and a safe way to start.",
    "featuredImg": "/images/blog/github-actions-lockfile-featured.webp",
    "inlineImg": "/images/blog/github-actions-lockfile-card.webp",
    "tags": [
      "GitHub Actions, CI/CD, Supply chain security"
    ],
    "sections": [
      {
        "heading": "What is a GitHub Actions lockfile?",
        "paragraphs": [
          "A GitHub Actions lockfile is a file, .github/workflows/actions.lock, that records the exact commit for each action and reusable workflow your workflows depend on, including their transitive dependencies. Your workflow can keep a readable reference such as a version tag, but the runner executes the commit recorded in the lockfile [1][2].",
          "The problem it targets is simple. Tags and branches can move after you reviewed a workflow, so a later run can execute different code. If an action is compromised, a moved tag can change what your pipeline runs without any change to your repository [1].",
          "GitHub announced the public preview on 14 October 2026. The changelog was edited the same day to say it is available on GitHub Enterprise Cloud (including data residency), Team and Free plans [1]. The preview is subject to change, and GitHub Enterprise Server is not supported [2]."
        ],
        "showInlineMetaAndImg": true
      },
      {
        "heading": "How workflow dependency locking works",
        "paragraphs": [
          "You install the gh actions-lock extension for the GitHub CLI. Running gh actions-lock scans the workflows in .github/workflows, pins each resolvable action to a commit SHA, and writes the lockfile for you to review and commit [1][2].",
          "Adoption is per workflow. Once a workflow is onboarded, every dependency must have a lockfile entry, and GitHub Actions runs the recorded commit even if the tag or branch has since moved [1].",
          "The tool also checks pins rather than trusting them. According to its README, each locked pin is re-checked at job start: the repository was not renamed or transferred, the pinned commit still exists, and it is still in the history of the tag or branch recorded. A failed check blocks the run. This is aimed at impostor-commit attacks, where a commit from a fork is made to look like upstream code [2].",
          "One limit to know about: workflows that use local-path actions (uses: ./something) cannot be onboarded yet, and GitHub calls this a short-term gap. The tool converts same-repository references to a $/ form on fix runs, so check its README for the current behaviour [2]."
        ]
      },
      {
        "heading": "What a lockfile does not protect you from",
        "paragraphs": [
          "GitHub is explicit that locking does not decide whether a dependency is safe. It fixes which commit runs, so you need to review a dependency before you lock it [1].",
          "Our reading, not GitHub's wording: a lockfile turns a silent change into a visible one. If a maintainer's tag is hijacked tomorrow, your runs keep using the commit you reviewed. But if the commit you locked was already malicious, locking preserves it. That is why GitHub's guidance says a lockfile is only a security control if someone reads the diff, and suggests adding actions.lock to CODEOWNERS and requiring a code-owner review [3].",
          "Related note: on 20 October GitHub also put a package firewall into public preview for GitHub Enterprise Cloud. It sits between runners or coding agents and the npm registry and can apply cooldown periods and advisory checks. It covers npm packages only today, and it is a separate control from lockfiles [4]."
        ]
      },
      {
        "heading": "How to adopt it safely (a practical order)",
        "paragraphs": [
          "1. Install the extension with gh extension install github/gh-actions-lock, run gh actions-lock in a non-critical repository, and read the generated diff before committing [2].",
          "2. Add a pull-request check that runs gh actions-lock --verify, which exits with an error if the lockfile is stale. GitHub's docs describe this as a good required check. For a faster local check, gh actions-lock --verify-local --no-fix works offline in a pre-commit hook, but it only confirms every dependency has an entry, not that the pins are trustworthy [2][3].",
          "3. Keep Dependabot managing your actions. When it bumps an action in an onboarded workflow, it regenerates the matching lockfile entry in the same pull request. It will not onboard a workflow that has no entries yet [1][3].",
          "4. Add .github/workflows/actions.lock to CODEOWNERS and require code-owner approval, so a changed SHA is reviewed by the people responsible for build security [3].",
          "5. Only then consider the Require lockfile policy, which blocks runs of targeted workflows that are not onboarded. GitHub's docs say to pilot it first: scope it to repositories already onboarded and start in Evaluate mode, which is available on GitHub Enterprise. Do not use Active mode until you can keep lockfiles current [3]."
        ]
      },
      {
        "heading": "Is it worth it for a small SaaS team?",
        "paragraphs": [
          "Prediction, not fact: for a small team the cost is low and the failure mode is annoying rather than dangerous. You run one command, review one extra file in pull requests, and a stale lockfile is flagged by a check. The benefit is that your deploy pipeline, which usually holds cloud and hosting credentials, stops depending on tags that other people control.",
          "If you ship customer-facing software, treat CI as part of the product's attack surface. Pinning actions, scoping tokens, and reviewing workflow changes are cheap controls compared with the cost of leaked deployment keys. Because the feature is a public preview, expect flags and behaviour to change, and try it first on a repository where a broken build is acceptable."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is a GitHub Actions lockfile?",
        "a": "It is the file .github/workflows/actions.lock. It records the exact commit for each action and reusable workflow a workflow depends on, including transitive dependencies, so runs use those commits even if a tag or branch moves."
      },
      {
        "q": "Who can use GitHub Actions workflow lockfiles?",
        "a": "GitHub says the public preview covers GitHub Enterprise Cloud, Enterprise Cloud with data residency, Team and Free plans. GitHub Enterprise Server is not supported, and the feature may change."
      },
      {
        "q": "How do I create the lockfile?",
        "a": "Install the GitHub CLI extension with gh extension install github/gh-actions-lock, then run gh actions-lock in your repository, review the generated changes and commit them."
      },
      {
        "q": "Does locking make an action safe?",
        "a": "No. GitHub states that locking does not determine whether a dependency is safe. Review an action before you lock it, and review lockfile changes in pull requests."
      },
      {
        "q": "How do I keep the lockfile up to date?",
        "a": "Use Dependabot for action updates, which regenerates the lockfile entry in the same pull request, and add a CI step running gh actions-lock --verify to catch stale files."
      }
    ],
    "conclusionHeading": "The short version",
    "conclusionParagraphs": [
      "A GitHub Actions lockfile pins what your CI runs to commits you reviewed. It does not judge those commits, so pair it with review of the lockfile diff. Start with one repository, add the verify check, and widen from there.",
      "If your pipeline deploys a product you depend on, our [SaaS infrastructure cost](/blog/saas-infrastructure-cost) guide covers the wider running costs, and the [services](/services) page explains how we scope SaaS builds."
    ]
  },
  "go-x509-no-valid-chains-built": {
    "heroRow1": {
      "prefix": "x509: No Valid Chains",
      "pill": "/images/blog/guide-pill-1.webp",
      "accent": "Built After"
    },
    "heroRow2": {
      "pill": "/images/blog/guide-pill-2.webp",
      "suffix": "Go 1.27.3: What to Do"
    },
    "subtitle": "On 20 October 2026 the Go team shipped Go 1.27.3 and Go 1.26.10, which make Go's certificate verifier reject chains through eight intermediate CA keys. A Go program built on these releases can now fail with x509: no valid chains built when a server's certificate chains through one of them. Here is what changed, how to confirm it, and what to do.",
    "featuredImg": "/images/blog/go-x509-no-valid-chains-built-featured.webp",
    "inlineImg": "/images/blog/go-x509-no-valid-chains-built-card.webp",
    "tags": [
      "Go, TLS certificates, Security updates"
    ],
    "sections": [
      {
        "heading": "Why does Go say x509: no valid chains built after the 1.27.3 update?",
        "paragraphs": [
          "Go 1.27.3 and 1.26.10, released on 20 October 2026, filter out any certificate chain that contains one of a small set of blocked intermediate certificate authority keys. If a server's chain passes through one, a program built with these releases fails the connection with x509: no valid chains built [1][2].",
          "The Go team described it as blocking trust in intermediates because of \"specific security concerns around their operation\". It is tracked as CVE-2026-111943 and Go issue 82345, handled on the URGENT track [1].",
          "Only programs rebuilt on the new releases are affected. A binary you built earlier keeps its old behaviour until you recompile it [2]."
        ],
        "showInlineMetaAndImg": true
      },
      {
        "heading": "What exactly did Go block?",
        "paragraphs": [
          "The Go change lists SHA-256 hashes of eight public keys and does not name the certificate authority. The Hacker News reports that a commenter on the Go issue matched them to eMudhra emSign intermediates: six TLS intermediates under emSign Root TLS CA - G3 and two code-signing intermediates. The Hacker News said it had not independently checked those hashes [2].",
          "Because the filter hashes each public key rather than the certificate, a cross-signed copy of a blocked key is caught too. It runs in Go's own verifier and in the macOS and Windows paths that hand verification to the operating system [2].",
          "Fact versus open question: the Go team has not said what prompted the change, and eMudhra had published no public statement when The Hacker News checked on 20 October [2]."
        ]
      },
      {
        "heading": "How do I check whether my service is affected?",
        "paragraphs": [
          "1. Rebuild a staging copy with Go 1.27.3 or 1.26.10 and run your normal outbound TLS paths: payment, email, webhooks, internal services, and any partner API.",
          "2. Search logs for x509: no valid chains built after the rebuild. The error means no acceptable chain could be built, so also check the server side.",
          "3. Inspect the failing host's chain with openssl s_client -connect host:443 -showcerts, and note the issuer of each intermediate. If it names an emSign TLS intermediate, that is the likely cause. Treat this as a lead to confirm, not proof, since the Go team has not published the mapping.",
          "4. Check whether your own private PKI or a vendor trusts one of the eight keys. The report says the filter appears to apply even when a program supplies its own trusted roots, though the Go team has not said whether that is intended [2]."
        ]
      },
      {
        "heading": "What are my options if a dependency's chain is blocked?",
        "paragraphs": [
          "The sources describe no setting to disable the filter, and no temporary workaround [2]. Go 1.25 and older are out of support and get no fix, so the only route is a supported release from the Go download page [2][3].",
          "The realistic fix is on the certificate side: the operator of the failing server needs a certificate issued under a different intermediate. If that server is a vendor's, ask them. If you run it, reissue with another CA.",
          "Some teams reverted a toolchain bump after seeing failures. Docker's secrets-engine repository has commits titled revert Go to 1.26.10, visible on the Go issue [1]. Reverting only postpones the problem and keeps the older behaviour, so use it as a short-term measure while certificates are replaced."
        ]
      },
      {
        "heading": "Should small SaaS teams rush this upgrade?",
        "paragraphs": [
          "Prediction, not fact: for most teams the safer order is to upgrade promptly and test outbound connections first, because the Go team said it \"highly recommend[s]\" upgrading immediately [1]. A failed TLS call in staging is cheaper than one in production.",
          "Our reading, not Go's wording: the interesting lesson is that a toolchain patch can change which internet services your code trusts. Go's verifier does no revocation checking [4], so shipping the block in a release is how it removes trust. That puts \"pin your Go version and rebuild on a schedule\" next to dependency updates in the release checklist.",
          "Another point from the reports: whether Chrome, Apple or Microsoft took similar action is not established [2]. Do not assume browsers and Go agree on the same list."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does x509: no valid chains built mean in Go?",
        "a": "It means Go's certificate verifier could not build a chain it accepts from the server's certificate to a trusted root. After 20 October 2026 one cause is a chain through a blocked intermediate in Go 1.27.3 or 1.26.10."
      },
      {
        "q": "Which Go versions contain the block?",
        "a": "Go 1.27.3 and Go 1.26.10, released 20 October 2026, with the change also merged into the main branch for Go 1.28. Go 1.25 and older are out of support and received no fix."
      },
      {
        "q": "Can I turn the CA block off in Go?",
        "a": "The reporting says the change has no setting to disable it and lists no temporary workaround. The remedy is a certificate issued under a different intermediate."
      },
      {
        "q": "Which certificate authority is affected?",
        "a": "Go has not named it. The Hacker News reports a commenter matched the eight key hashes to eMudhra emSign intermediates, which The Hacker News had not independently verified."
      },
      {
        "q": "Do I need to rebuild my Go programs?",
        "a": "Existing binaries keep their old behaviour until rebuilt. Rebuild on a supported release to get the fix, then test outbound TLS connections before deploying."
      }
    ],
    "conclusionHeading": "The short version",
    "conclusionParagraphs": [
      "Go 1.27.3 and 1.26.10 block eight intermediate CA keys, so a rebuilt program can fail with x509: no valid chains built if a server's chain uses one. Upgrade, test outbound connections in staging, and ask affected operators to reissue certificates.",
      "For the wider picture of keeping a product's dependencies current, see our guide to the [Next.js and React security update](/blog/nextjs-react-security-update-october-2026), and our [services](/services) page for how we scope SaaS builds."
    ]
  },
  "nodejs-brotli-vulnerability-fix": {
    "heroRow1": {
      "prefix": "Node.js Brotli",
      "pill": "/images/blog/guide-pill-1.webp",
      "accent": "Vulnerability"
    },
    "heroRow2": {
      "pill": "/images/blog/guide-pill-2.webp",
      "suffix": "Fix Guide"
    },
    "subtitle": "On 21 October 2026 Node.js shipped 22.23.4, 24.22.1 and 26.12.1 to fix a Brotli decoder flaw (CVE-2026-111497) that the project says can allow remote code execution. Upgrading is the only fix. Here is who is actually exposed, how to check your version, and what the same release changes for TLS.",
    "featuredImg": "/images/blog/nodejs-brotli-vulnerability-fix-featured.webp",
    "inlineImg": "/images/blog/nodejs-brotli-vulnerability-fix-card.webp",
    "tags": [
      "Node.js, Security updates, Backend"
    ],
    "sections": [
      {
        "heading": "What is the Node.js Brotli vulnerability (CVE-2026-111497)?",
        "paragraphs": [
          "CVE-2026-111497 is an out-of-bounds write in the Brotli decoder bundled with Node.js. Malformed compressed input can corrupt process memory, which the Node.js project says can lead to a crash, memory disclosure or remote code execution. It is rated high and fixed in 22.23.4, 24.22.1 and 26.12.1 [1].",
          "The cause is narrow: an invalid block switch was reported as a request for more input instead of a format error, so the streaming decoder kept appending bytes to an eight-byte internal buffer [1]."
        ],
        "showInlineMetaAndImg": true
      },
      {
        "heading": "Is my app exposed to the Brotli flaw?",
        "paragraphs": [
          "You are exposed where your code decompresses Brotli data an attacker controls. That includes node:zlib calls on request bodies, and fetch() on a response from another server sent with Brotli compression [1][2].",
          "Fact: the advisory affects the 22.x, 24.x and 26.x lines. Node.js 20.x and earlier are end of life and get no fix [1][2].",
          "Fact: a public proof-of-concept on 22 October reached code execution only against a deliberately weakened test build. On a standard build its author reported a crash and limited memory read, and no exploitation in the wild had been reported as of 22 October [2]."
        ]
      },
      {
        "heading": "How do I check my Node.js version and upgrade?",
        "paragraphs": [
          "1. Run node --version on every server, CI image and container. Compare it with the fixed releases: 22.23.4, 24.22.1 or 26.12.1.",
          "2. Look beyond servers. Container images and single-file binaries that bundle Node.js will not show up in a package inventory [2].",
          "3. Upgrade within your line, rebuild images, and redeploy. Node.js 20.x and earlier should move to a supported line [1][2].",
          "4. Search your code for zlib.brotliDecompress, createBrotliDecompress and fetch calls to third-party hosts to see which paths touch Brotli data."
        ]
      },
      {
        "heading": "What if I cannot upgrade Node.js today?",
        "paragraphs": [
          "The advisory offers no workaround inside Node.js, so there is no setting that turns the bug off [2]. Limiting untrusted Brotli traffic on affected paths helps where practical, but only the update removes the flaw [3].",
          "Vercel said it added firewall rules on 21 October that block the attack in inbound requests. Those rules do not cover Brotli responses your app fetches from other servers, and do not replace upgrading [2]."
        ]
      },
      {
        "heading": "What else changed in the October 2026 Node.js security release?",
        "paragraphs": [
          "The same release fixes nine other issues, including three more rated high: a DNS resolve bug that truncates names at a NUL byte (CVE-2026-105482) and two TLS hostname-check bypasses for IPv4 hosts written in unusual forms (CVE-2026-105483, CVE-2026-106069) [1].",
          "It also updates c-ares, OpenSSL, SQLite and undici, and, as The Hacker News reports, blocks eight eMudhra intermediate CA keys, the same block Go shipped on 20 October [2].",
          "Our reading, not the project's: the TLS fixes matter more for services that connect to IP literals than for typical hostname-based SaaS traffic. Treat that as a prediction and check your own code paths."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Which Node.js versions fix CVE-2026-111497?",
        "a": "Node.js 22.23.4, 24.22.1 and 26.12.1, released on 21 October 2026. Node.js 20.x and earlier are end of life and receive no fix."
      },
      {
        "q": "Is the Node.js Brotli vulnerability being exploited?",
        "a": "As of 22 October 2026 no exploitation in the wild had been reported. A public proof-of-concept reached code execution only on a deliberately weakened build, according to The Hacker News."
      },
      {
        "q": "Does fetch() in Node.js use the vulnerable Brotli decoder?",
        "a": "Yes, per The Hacker News: Node.js runs the bundled decoder when code calls fetch() on a response sent with Brotli compression, as well as through node:zlib."
      },
      {
        "q": "Is there a workaround for the Node.js Brotli flaw?",
        "a": "No. The advisory lists none inside Node.js. Upgrading is the fix; limiting untrusted Brotli traffic or a firewall rule only reduces exposure."
      },
      {
        "q": "Do I need to upgrade Node.js if I only use it for builds?",
        "a": "Lower urgency, since the flaw needs attacker-controlled Brotli input. Still upgrade CI images when convenient, because the release also fixes other high-severity issues."
      }
    ],
    "conclusionHeading": "The short version",
    "conclusionParagraphs": [
      "Upgrade to Node.js 22.23.4, 24.22.1 or 26.12.1, rebuild any image that bundles Node, and prioritise services that decompress Brotli from untrusted sources. No workaround exists.",
      "For the wider picture of patching a product's dependencies, see our guide to the [Next.js and React security update](/blog/nextjs-react-security-update-october-2026), and our [services](/services) page for how we scope SaaS builds."
    ]
  },
}

const articleReferences: Record<string, { title: string; url: string }[]> = {
  'is-mern-still-worth-it-2026': [
    { title: 'React: choosing a framework or starting from scratch', url: 'https://react.dev/learn/creating-a-react-app' },
    { title: 'Node.js: avoiding blocked event-loop workloads', url: 'https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop' },
    { title: 'Express: production security practices', url: 'https://expressjs.com/en/advanced/best-practice-security/' },
  ],
  'custom-software-vs-saas': [
    { title: 'Thoughtworks: a strategic build-versus-buy framework (2022)', url: 'https://www.thoughtworks.com/content/dam/thoughtworks/documents/e-book/tw_ebook_build_vs_buy_2022.pdf' },
    { title: 'AWS: infrastructure pricing and estimation', url: 'https://aws.amazon.com/pricing/' },
  ],
  'ai-integration-for-startups': [
    { title: 'Claude: defining success criteria and building evaluations', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' },
    { title: 'Express: production security and input validation', url: 'https://expressjs.com/en/advanced/best-practice-security/' },
  ],
  'agency-vs-in-house-developers': [
    { title: 'Thoughtworks: evaluating the build-versus-buy decision (2022)', url: 'https://www.thoughtworks.com/content/dam/thoughtworks/documents/e-book/tw_ebook_build_vs_buy_2022.pdf' },
    { title: 'Express: security responsibilities in production', url: 'https://expressjs.com/en/advanced/best-practice-security/' },
  ],
  'saas-development-cost': [
    { title: 'AWS: ongoing infrastructure cost inputs', url: 'https://aws.amazon.com/pricing/' },
    { title: 'Stripe: subscription lifecycle and billing implementation', url: 'https://docs.stripe.com/billing/subscriptions/overview' },
  ],
  'startup-website-mistakes': [
    { title: 'Google: creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    { title: 'Google: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { title: 'Clydara PageSpeed capture: before image and font changes', url: 'https://pagespeed.web.dev/analysis/https-www-clydralab-com/sfm7qhddi0' },
    { title: 'Clydara PageSpeed capture: after responsive images', url: 'https://pagespeed.web.dev/analysis/https-www-clydralab-com/02emg8kwkx' },
    { title: 'Clydara PageSpeed capture: after local font delivery', url: 'https://pagespeed.web.dev/analysis/https-www-clydralab-com/fko2pu8ucm' },
    { title: 'Recorded revisions, exact measurements and limitations', url: 'https://github.com/MuhammadFaizan-prog/clydara-website-2026/blob/main/seo/evidence/psi-high-priority.json' },
    { title: 'Google: Lighthouse performance scoring and variability', url: 'https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/' },
  ],
  "saas-infrastructure-cost": [
    { title: "Vercel pricing (checked 13 Oct 2026)", url: "https://vercel.com/pricing" },
    { title: "Supabase pricing (checked 13 Oct 2026)", url: "https://supabase.com/pricing" },
    { title: "Clerk pricing (checked 13 Oct 2026)", url: "https://clerk.com/pricing" },
    { title: "Auth0 pricing (checked 13 Oct 2026)", url: "https://auth0.com/pricing" },
    { title: "Resend pricing (checked 13 Oct 2026)", url: "https://resend.com/pricing" },
    { title: "Postmark pricing (checked 13 Oct 2026)", url: "https://postmarkapp.com/pricing" },
    { title: "Sentry pricing (checked 13 Oct 2026)", url: "https://sentry.io/pricing/" },
    { title: "Amazon S3 pricing", url: "https://aws.amazon.com/s3/pricing/" },
    { title: "Cloudflare R2 pricing", url: "https://developers.cloudflare.com/r2/pricing/" },
    { title: "Stripe pricing (checked 13 Oct 2026)", url: "https://stripe.com/pricing" },
  ],
  "custom-saas-development-process": [
    { title: "GOV.UK Service Manual: how the discovery phase works", url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works" },
    { title: "GOV.UK Service Manual: how the alpha phase works", url: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works" },
    { title: "Supabase: row level security", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
    { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
    { title: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  ],
  "saas-vs-custom-software-architecture-firms": [
    { title: "Monograph pricing (checked 13 Oct 2026)", url: "https://www.monograph.com/pricing" },
    { title: "Factor pricing (checked 13 Oct 2026)", url: "https://factorapp.com/pricing" },
    { title: "BQE CORE pricing (quote-based)", url: "https://www.bqe.com/pricing" },
    { title: "Autodesk BIM Collaborate Pro pricing (checked 13 Oct 2026)", url: "https://www.autodesk.com/products/bim-collaborate/overview" },
    { title: "Asana pricing (checked 13 Oct 2026)", url: "https://asana.com/pricing" },
    { title: "ClickUp pricing (checked 13 Oct 2026)", url: "https://clickup.com/pricing" },
  ],
  "nextjs-react-security-update-october-2026": [
    { title: "Next.js: Security update for upstream vulnerabilities (14 Oct 2026)", url: "https://nextjs.org/blog/nextjs-security-update-october-14-2026" },
    { title: "GHSA-673q-mjm6-r5xr: RCE in use cache functions returning typed arrays", url: "https://github.com/vercel/next.js/security/advisories/GHSA-673q-mjm6-r5xr" },
    { title: "GHSA-2464-fhr4-w9xw / CVE-2026-96889: RCE in Image Optimization with SVG", url: "https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw" },
    { title: "GHSA-p3m5-59mp-jv5r: denial of service with Server Actions", url: "https://github.com/vercel/next.js/security/advisories/GHSA-p3m5-59mp-jv5r" },
    { title: "React GHSA-h3gv-c5rc-p453: denial of service in Server Functions", url: "https://github.com/react/react/security/advisories/GHSA-h3gv-c5rc-p453" },
    { title: "Next.js support policy (checked 15 Oct 2026)", url: "https://nextjs.org/support-policy" },
    { title: "Netlify: Next.js and React vulnerabilities, platform impact (14 Oct 2026)", url: "https://www.netlify.com/changelog/2026-10-14-nextjs-react-security-vulnerabilities/" },
    { title: "npm: next release history", url: "https://www.npmjs.com/package/next?activeTab=versions" },
  ],
  "pwnescape-linux-kernel-vm-escape": [
    { title: "Vercel: Findings from the $1M Vercel Sandbox challenge (14 Oct 2026)", url: "https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge" },
    { title: "pwn.ai: PwnEscape, Guest-to-Host KVM Escape (CVE-2026-99999)", url: "https://pwn.ai/blog/pwnescape" },
    { title: "Linux kernel commit 6785011f8b16: ipv4: validate checksum_start before completing checksum", url: "https://github.com/torvalds/linux/commit/6785011f8b16abf40b1e9d8b2e332232b3e68822" },
    { title: "CVE-2026-99999 record, mirrored by OpenCVE (checked 16 Oct 2026)", url: "https://app.opencve.io/cve/CVE-2026-99999" },
    { title: "LWN: Seven stable kernels for Thursday with fix for critical vulnerability (15 Oct 2026)", url: "https://lwn.net/Articles/1100611/" },
    { title: "The Hacker News: Critical PwnEscape Linux Kernel Vulnerability (15 Oct 2026)", url: "https://thehackernews.com/2026/10/critical-pwnescape-linux-kernel.html" },
    { title: "oss-security: PwnEscape thread (15 Oct 2026)", url: "https://seclists.org/oss-sec/2026/q4/168" },
  ],
  "vercel-deployment-retention-october-23": [
    { title: "Vercel changelog: Deployment Storage billing begins for existing Pro teams (9 Oct 2026)", url: "https://vercel.com/changelog/deployment-storage-pricing-expands-to-existing-teams" },
    { title: "Vercel changelog: New Pro teams now default to 30-day deployment retention (9 Oct 2026)", url: "https://vercel.com/changelog/new-pro-teams-now-default-to-30-day-deployment-retention" },
    { title: "Vercel docs: Deployment Retention (page last updated 16 Sep 2026)", url: "https://vercel.com/docs/deployment-retention" },
    { title: "Vercel docs: Deployment Storage", url: "https://vercel.com/docs/deployment-storage" },
    { title: "Vercel docs: Optimize Deployment Storage", url: "https://vercel.com/docs/deployment-storage/optimize" },
    { title: "The New Stack: Why Vercel tightened its free-tier rules", url: "https://thenewstack.io/vercel-hobby-deployment-retention/" },
  ],
  "github-actions-lockfile": [
    { title: "GitHub changelog: GitHub Actions workflow lockfiles in public preview (14 Oct 2026)", url: "https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview" },
    { title: "github/gh-actions-lock: README (GitHub, accessed 21 Oct 2026)", url: "https://github.com/github/gh-actions-lock" },
    { title: "GitHub Docs: Enforcing lockfiles for action dependencies", url: "https://docs.github.com/en/actions/how-tos/administer/enforce-workflow-lockfiles" },
    { title: "GitHub changelog: GitHub package firewall in public preview (20 Oct 2026)", url: "https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/" },
  ],
  "go-x509-no-valid-chains-built": [
    { title: "golang/go issue 82345: crypto/x509 mitigation for security concerns with a specific CA (opened 19 Oct 2026)", url: "https://github.com/golang/go/issues/82345" },
    { title: "The Hacker News: Go Issues Emergency Update Blocking Eight CA Keys (20 Oct 2026)", url: "https://thehackernews.com/2026/10/go-issues-emergency-update-blocking.html" },
    { title: "Go downloads", url: "https://go.dev/dl/" },
    { title: "Go package documentation: crypto/x509", url: "https://pkg.go.dev/crypto/x509" },
  ],
  "nodejs-brotli-vulnerability-fix": [
    { title: "Node.js: Wednesday, October 21, 2026 Security Releases", url: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" },
    { title: "The Hacker News: Node.js Brotli Decoder Bug Could Allow Remote Code Execution (22 Oct 2026)", url: "https://thehackernews.com/2026/10/nodejs-brotli-decoder-bug-could-allow.html" },
    { title: "The Hacker News: Researchers Demonstrate Node2Shell RCE Exploit (23 Oct 2026)", url: "https://thehackernews.com/2026/10/researchers-demonstrate-node2shell-rce.html" },
  ],
}

const relatedArticleIds: Record<string, string[]> = {
  'is-mern-still-worth-it-2026': ['saas-development-cost', 'ai-integration-for-startups', 'custom-software-vs-saas'],
  'custom-software-vs-saas': ['saas-development-cost', 'agency-vs-in-house-developers', 'ai-integration-for-startups'],
  'ai-integration-for-startups': ['is-mern-still-worth-it-2026', 'saas-development-cost', 'custom-software-vs-saas'],
  'agency-vs-in-house-developers': ['custom-software-vs-saas', 'saas-development-cost', 'is-mern-still-worth-it-2026'],
  'saas-development-cost': ['custom-software-vs-saas', 'agency-vs-in-house-developers', 'ai-integration-for-startups'],
  'startup-website-mistakes': ['agency-vs-in-house-developers', 'custom-software-vs-saas', 'is-mern-still-worth-it-2026'],
  "saas-infrastructure-cost": ["saas-development-cost", "custom-saas-development-process", "saas-vs-custom-software-architecture-firms"],
  "custom-saas-development-process": ["saas-infrastructure-cost", "saas-vs-custom-software-architecture-firms", "saas-development-cost"],
  "saas-vs-custom-software-architecture-firms": ["saas-infrastructure-cost", "custom-saas-development-process", "custom-software-vs-saas"],
  "nextjs-react-security-update-october-2026": ["is-mern-still-worth-it-2026", "saas-infrastructure-cost", "custom-saas-development-process"],
  "pwnescape-linux-kernel-vm-escape": ["custom-saas-development-process", "saas-infrastructure-cost", "nextjs-react-security-update-october-2026"],
  "vercel-deployment-retention-october-23": ["saas-infrastructure-cost", "custom-saas-development-process", "saas-development-cost"],
  "github-actions-lockfile": ["saas-infrastructure-cost", "nextjs-react-security-update-october-2026", "custom-saas-development-process"],
  "go-x509-no-valid-chains-built": ["nextjs-react-security-update-october-2026", "github-actions-lockfile", "saas-infrastructure-cost"],
  "nodejs-brotli-vulnerability-fix": ["nextjs-react-security-update-october-2026", "github-actions-lockfile", "go-x509-no-valid-chains-built"],
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const heroRef = useRef<HTMLElement>(null)
  const pageRef = useRef<HTMLElement>(null)
  const post = blogPosts.find((p) => p.id === id)
  const article = post ? articlesData[post.id] : undefined

  // Scroll reveals for the sources list and related guides, matching the FAQ and blog grid entrances
  useEffect(() => {
    if (!post || !article || !pageRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.guide-sources-list, .guide-next-steps', {
        opacity: 0,
        y: 8,
        stagger: 0.12,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.guide-sources', start: 'top 85%', once: true },
      })
      gsap.from('.more-articles-section .blog-post-card', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.more-articles-section .blog-posts-grid', start: 'top 85%', once: true },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [id, post, article])

  // Scroll to top when post changes + trigger animation
  useEffect(() => {
    if (!post || !article) return
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.blog-detail-headline-row-1 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(8px)',
          y: 18,
          scale: 0.95,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.032,
          ease: 'power2.out',
        }
      )
      .fromTo(
        '.blog-detail-headline-row-2 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(10px)',
          y: 20,
          scale: 0.96,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.032,
          ease: 'power2.out',
        },
        '-=0.45'
      )
      .from('.blog-detail-sub', { opacity: 0, y: 16, duration: 0.65 }, '-=0.3')
      .from('.blog-detail-featured-img-wrap', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' }, '-=0.35')
    }, heroRef)

    return () => ctx.revert()
  }, [id, post, article])

  if (!post || !article) return <NotFoundPage />

  const modifiedDate = getPage(`/blog/${post.id}`)?.dateModified
  const modifiedLabel = modifiedDate
    ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${modifiedDate}T12:00:00Z`))
    : ''
  // A guide first published on its dateModified day shows one dated "Published" label instead of a duplicate "Updated" one.
  const publishedSameDay = Boolean(modifiedDate) && post.date === new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${modifiedDate}T12:00:00Z`))

  const relatedPosts = (relatedArticleIds[post.id] || [])
    .map((relatedId) => blogPosts.find((p) => p.id === relatedId))
    .filter((relatedPost): relatedPost is typeof blogPosts[number] => Boolean(relatedPost))

  return (
    <main className="blog-detail-page" ref={pageRef}>
      {/* Blog Detail Hero Card */}
      <section className="blog-detail-hero-card" ref={heroRef}>
        <div className="blog-detail-hero-container">
          <h1 className="blog-detail-headline-wrap" aria-label={post.title}>
            <span className="blog-detail-headline-row blog-detail-headline-row-1">
              <span className="blog-detail-h1 blog-dark">
                <RevealChars text={article.heroRow1.prefix} />
              </span>
              <span className="hero-pill-anim-wrap reveal-item">
                <span className="hero-pill-img hero-pill-1">
                  <img src={article.heroRow1.pill} alt="" />
                </span>
              </span>
              <span className="blog-detail-h1 blog-accent">
                <RevealChars text={article.heroRow1.accent} />
              </span>
            </span>
            <span className="blog-detail-headline-row blog-detail-headline-row-2">
              <span className="hero-pill-anim-wrap reveal-item">
                <span className="hero-pill-img hero-pill-2">
                  <img src={article.heroRow2.pill} alt="" />
                </span>
              </span>
              <span className="blog-detail-h1 blog-dark">
                <RevealChars text={article.heroRow2.suffix} />
              </span>
            </span>
          </h1>

          <p className="blog-detail-sub">{article.subtitle}</p>
          <p className="seo-article-byline">
            By <Link to="/about">{post.author}</Link> · Published {publishedSameDay ? <time dateTime={modifiedDate}>{post.date}</time> : post.date}
            {modifiedDate && !publishedSameDay && (
              <> · Updated <time dateTime={modifiedDate}>{modifiedLabel}</time></>
            )}
          </p>
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
              <RevealHeading as="h2" className="blog-article-h2" text={sec.heading} />

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="blog-article-p">{renderInline(p)}</p>
              ))}

              {sec.comparison && (
                <div className="seo-measurement-table-wrap" role="region" aria-label={sec.comparison.label || 'Homepage performance comparison'} tabIndex={0}>
                  <table className="seo-measurement-table">
                    <caption>{sec.comparison.caption}</caption>
                    <thead><tr>{sec.comparison.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
                    <tbody>{sec.comparison.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}

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
              <RevealHeading as="h2" className="blog-article-h2" text="Frequently asked questions" />
              {article.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="blog-faq-item">
                  <h3 className="blog-faq-question">{faq.q}</h3>
                  <p className="blog-faq-answer">{renderInline(faq.a)}</p>
                </div>
              ))}
            </div>
          )}

          {/* Conclusion */}
          {article.conclusionHeading && (
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <RevealHeading as="h2" className="blog-article-h2" text={article.conclusionHeading} />
              {article.conclusionParagraphs?.map((p, cIdx) => (
                <p key={cIdx} className="blog-article-p">{renderInline(p)}</p>
              ))}
            </div>
          )}

          {/* Production Checklist */}
          {article.checklistHeading && (
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <RevealHeading as="h2" className="blog-article-h2" text={article.checklistHeading} />
              {article.checklistParagraphs?.map((p, kIdx) => (
                <p key={kIdx} className="blog-article-p">{renderInline(p)}</p>
              ))}
            </div>
          )}
          <section className="seo-reading-block guide-sources" aria-label="Sources and next steps">
            <h2 className="blog-article-h2 guide-sources-heading">Sources and further reading</h2>
            <p className="guide-sources-intro">References behind this guide. Not a project quote or a guarantee of results.</p>
            <ol className="guide-sources-list">
              {(articleReferences[post.id] || []).map((reference) => (
                <li key={reference.url} className="guide-source-item">
                  <a className="guide-source-link" href={reference.url} target="_blank" rel="noopener noreferrer">
                    {reference.title}
                    <svg className="guide-source-icon" viewBox="0 0 16 16" width="11" height="11" fill="none" aria-hidden="true" focusable="false"><path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  {' '}<span className="guide-source-domain">{sourceDomain(reference.url)}</span>
                </li>
              ))}
            </ol>
            <p className="blog-article-p guide-next-steps">
              Explore our <Link to="/services">web development, SaaS and AI integration services</Link>,
              learn about the <Link to="/about">Clydara team</Link>, or <Link to="/contact">send a project enquiry</Link> with your goals, current systems and constraints.
            </p>
          </section>
        </article>
      </div>

      {/* Next Project / More Articles Section */}
      <section className="more-articles-section">
        <div className="more-articles-header">
          <p className="more-articles-eyebrow">(Further reading)</p>
          <RevealHeading as="h2" className="more-articles-heading" text="Related guides" />
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
                <span className="guide-card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" focusable="false"><path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>

              <div className="blog-post-content">
                <RevealHeading as="h3" className="blog-post-title" text={rPost.title} />
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
