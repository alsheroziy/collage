"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimateOnViewProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export default function AnimateOnView({
  children,
  type = "fade-up",
  delay = 0,
  duration = 500,
  className = "",
  threshold = 0.1,
}: AnimateOnViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all"
    const durationClass = `duration-${duration}`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    const initialClasses = {
      "fade-up": "opacity-0 translate-y-10",
      "fade-down": "opacity-0 -translate-y-10",
      "fade-left": "opacity-0 translate-x-10",
      "fade-right": "opacity-0 -translate-x-10",
      "zoom-in": "opacity-0 scale-95",
      "zoom-out": "opacity-0 scale-105",
    }

    return isVisible
      ? `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`
      : `${baseClasses} ${durationClass} ${initialClasses[type]}`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}

