import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FAQ.css'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  question: string
  answer: string
}

const faqList: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'We provide full-cycle digital solutions including Custom Web Design & Development (MERN, React, Next.js, WordPress, Framer), SaaS Platforms & Dashboards, AI Automation & Integrations, CRM/ERP Solutions, Brand Strategy & Visual Identity, UI/UX Design, and SEO Growth.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines depend on the scope and complexity. Most websites are completed within 2–6 weeks, while custom SaaS platforms and enterprise solutions may require additional time.',
  },
  {
    question: 'Do you build custom software for businesses?',
    answer: 'Yes, we specialize in developing bespoke software, scalable CRM systems, ERP dashboards, AI workflow automations, and custom web applications tailored to your specific business requirements.',
  },
  {
    question: 'Can you redesign or upgrade an existing website?',
    answer: 'Absolutely. We can revamp your existing website with a modern, high-converting design, faster load speeds, responsive layouts, 3D/animated interactions, and improved SEO.',
  },
  {
    question: 'Do you provide SEO and digital marketing?',
    answer: 'Yes, all our websites are engineered with technical SEO best practices, semantic markup, performance optimization, and we assist in digital strategy to drive organic traffic and conversions.',
  },
  {
    question: 'Do you offer revisions and support?',
    answer: 'Yes, we provide collaborative revision rounds during the design and development phases, along with post-launch support and maintenance to ensure seamless operations.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1) // Default 2nd open matching reference
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.faq-accordion-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <p className="faq-eyebrow">(FAQs)</p>
          <h2 className="faq-headline">Your Questions, Answered</h2>
          <p className="faq-sub">
            Everything you need to know about our web development, SaaS, AI, branding, and digital solutions.
          </p>
        </div>

        {/* Accordion list */}
        <div className="faq-list">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon-wrap">
                    <span className="faq-icon-line h-line" />
                    <span className={`faq-icon-line v-line ${isOpen ? 'collapsed' : ''}`} />
                  </span>
                </button>

                <div className={`faq-answer-drawer ${isOpen ? 'expanded' : ''}`}>
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
