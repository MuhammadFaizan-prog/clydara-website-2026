import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealChars } from './RevealChars'

gsap.registerPlugin(ScrollTrigger)

export interface RevealHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span'
  className?: string
  text?: string
  children?: React.ReactNode
  delay?: number
  stagger?: number
  duration?: number
  triggerOffset?: string
  style?: React.CSSProperties
}

export function RevealHeading({
  as: Component = 'h2',
  className = '',
  text,
  children,
  delay = 0,
  stagger = 0.035,
  duration = 0.72,
  triggerOffset = 'top 85%',
  style,
  ...rest
}: RevealHeadingProps) {
  const headingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    const el = headingRef.current
    const chars = el.querySelectorAll('.reveal-item')

    if (chars.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          filter: 'blur(10px)',
          y: 18,
          scale: 0.96,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            once: true,
          },
        }
      )
    }, headingRef)

    return () => ctx.revert()
  }, [delay, stagger, duration, triggerOffset])

  const content = typeof children === 'string' ? (
    <RevealChars text={children} />
  ) : text ? (
    <RevealChars text={text} />
  ) : (
    children
  )

  return (
    // @ts-expect-error dynamic tag ref
    <Component ref={headingRef} className={className} style={style} {...rest}>
      {content}
    </Component>
  )
}
