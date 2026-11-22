"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">

          {/* Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Background & Vision
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              About
              <span className="bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent">
                {" "}Me
              </span>
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-muted-foreground">

            {/* Always visible paragraphs (Intro + Current Role) */}
            <p className="text-lg leading-relaxed">
              I'm <strong className="text-foreground">Abraham Samuel Alejolowo</strong>,
              a Software Engineer and Computer Science student at
              Kwara State University. I enjoy turning ideas into
              functional digital products, solving engineering
              problems, and building applications that address
              real-world needs. My journey in software development
              has taken me from building simple interfaces to
              developing complete application features and working
              with engineering teams on real products.
            </p>

            <p className="text-base leading-relaxed">
              Currently, I'm working as a Software Engineer Intern
              at <strong className="text-foreground">Keta Solutions Limited (KetaPay)</strong>,
              where I've had the opportunity to contribute to
              different areas of product development. My work
              involves implementing and improving application
              features, working on escrow-related functionality,
              and testing transaction workflows from initiation
              to completion. I've worked around deal creation,
              payment confirmation, escrow status updates,
              transaction notifications, refunds, and dispute
              workflows. I've also been involved in testing
              payment methods such as bank transfers, card
              deposits, and withdrawals, as well as investigating
              issues that affect the user transaction experience.
            </p>

            {/* Collapsible on mobile (< md), always visible on desktop (md+) */}
            <div className={`${isExpanded ? "block" : "hidden"} md:block space-y-6`}>
              <p className="text-base leading-relaxed">
                Beyond transaction workflows, I've contributed to
                website improvements, dynamic content integration,
                application forms, FAQ functionality, and dashboard
                features. I've also worked on mobile application
                quality assurance, testing different user journeys,
                identifying bugs, verifying fixes, and checking
                how features behave across the application. These
                experiences have helped me understand how different
                parts of a software product work together, from
                the user interface and backend processes to
                transaction handling and system reliability.
              </p>

              <p className="text-base leading-relaxed">
                Previously, I worked as a Web Developer Intern at
                <strong className="text-foreground"> Aristiec Technology</strong>,
                where I contributed to real-world web application
                development. I worked on authentication, product
                management, search and filtering functionality,
                shopping cart features, and payment-related
                integrations. It was an opportunity to understand
                how individual features connect to form a complete
                application and how to collaborate effectively
                during the development process.
              </p>

              <p className="text-base leading-relaxed">
                Outside my professional experience, I build
                independent products to explore ideas and solve
                problems that interest me. One of these is{" "}
                <strong className="text-foreground">SkillBridge</strong>,
                a platform designed to help students discover
                internships, scholarships, grants, and other
                opportunities. It also provides application
                tracking, student workspaces, and AI-powered
                assistance to help students prepare for
                opportunities and develop their careers.
              </p>

              <p className="text-base leading-relaxed">
                I also built <strong className="text-foreground">SmartLearn</strong>,
                an AI-powered learning platform designed to make
                learning more accessible, particularly for students
                dealing with unreliable internet connectivity.
                The platform focuses on offline learning, AI
                tutoring, interactive quizzes, flashcards,
                personalized study planning, and progress tracking.
              </p>

              <p className="text-base leading-relaxed">
                Another project I'm working on is{" "}
                <strong className="text-foreground">Minmart</strong>,
                an e-commerce marketplace focused on Nigerian-made
                products and brands. The goal is to create a platform
                where customers can discover and purchase products
                from different brands, with features covering
                product discovery, shopping carts, customer
                authentication, and payment processing. I'm also
                exploring SaaS development through a gym management
                platform that helps fitness businesses manage
                members, subscriptions, payments, and attendance.
              </p>

              <p className="text-base leading-relaxed">
                I approach development with curiosity and a
                problem-solving mindset. I enjoy understanding
                how systems work behind the scenes, breaking
                complex requirements into manageable tasks,
                debugging challenging issues, and continuously
                improving the products I work on. My goal is to
                keep growing as an engineer, contribute to
                meaningful products, and build software that
                makes a practical difference.
              </p>
            </div>

            {/* Mobile-only Pill Toggle Button */}
            <div className="pt-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:bg-primary/15 hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <span>{isExpanded ? "SEE LESS" : "SEE MORE"}</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 shrink-0" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}