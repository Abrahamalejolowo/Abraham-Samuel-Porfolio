
"use client"

import { useEffect, useState } from "react"
import { ContactForm } from "./contact-form"

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Product Builder",
  "Frontend Engineer",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === targetText) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? displayText.slice(0, -1)
              : targetText.slice(0, displayText.length + 1)
          )
        },
        isDeleting ? 45 : 90
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">

          {/* Left Column - Introduction */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                Hello, I'm
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl text-balance">
                Abraham Alejolowo
                <br />

                <span className="bg-gradient-to-l max-[700px]:text-[26px] text-[36px] from-primary/50 to-accent text-transparent bg-clip-text typing-cursor">
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              I'm a Software Engineer passionate about turning ideas
              into meaningful digital products. From building
              full-stack applications and AI-powered platforms to
              developing e-commerce experiences and working on
              real-world fintech products, I enjoy solving complex
              problems and creating software that makes a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <ContactForm />
              </div>

              <button
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98] cursor-pointer"
              >
                <span>About me</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Developer Terminal */}
          <div className="relative animate-scale-in stagger-4">
            <div className="relative rounded-xl border border-border bg-card/60 glass p-5 sm:p-8 hover-lift">

              {/* Terminal Header */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
              </div>

              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-background/50 rounded-md px-3 py-1 font-mono text-xs text-muted-foreground">
                terminal://abraham
              </div>

              <pre className="mt-6 overflow-hidden font-mono text-[10px] leading-relaxed text-primary/80 sm:text-xs md:text-sm">
                <span className="sm:hidden">{`┌──────────────────────────┐
│  ABRAHAM SAMUEL          │
│                          │
│  > role: Software Eng.   │
│  > projects: 30+         │
│  > focus: building       │
│  > status: active        │     │     │
└──────────────────────────┘`}</span>

                <span className="hidden sm:block">{`┌──────────────────────────────────────┐
│                                      │
│  ABRAHAM SAMUEL ALEJOLOWO            │
│  Software Engineer                   │
│                                      │
│  > Currently: KetaPay                │
│  > Projects: 8                       │
│  > Focus: Building digital products  │
│  > Status: Actively building         │
│                                      │
│                         │
│  SPECIALIZATION                      │
│  ├── Web Applications                │
│  ├── Fintech & Payments              │
│  ├── AI-powered Products             │
│  └── Mobile Applications             │
│                                      │
└──────────────────────────────────────┘`}</span>
              </pre>
            </div>

            {/* Floating Labels */}
            <div className="absolute -right-2 sm:-right-6 -top-2 sm:-top-6 rounded-lg border border-primary/40 bg-primary/15 glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-primary animate-float">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Building since 2023
              </span>
            </div>

            <div
              className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 rounded-lg border border-border bg-card glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
              style={{ animationDelay: "1s" }}
            >
              OPEN TO OPPORTUNITIES
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
