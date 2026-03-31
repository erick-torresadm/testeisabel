'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationProps {
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function useScrollAnimation(options: UseScrollAnimationProps = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { delay = 0, direction = 'up' } = options

  const directionVariants = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return { ref, variants, isInView }
}

export function useParallax(direction: 'up' | 'down' = 'up', range: number = 30) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return {
    ref,
    y: isInView ? 0 : direction === 'up' ? range : -range,
    transition: { duration: 0.8, ease: 'easeOut' },
  }
}
