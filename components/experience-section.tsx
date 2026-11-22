
"use client"

import { ChevronRight } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer (Intern)",
    company: "KETA SOLUTIONS LIMITED (KetaPay)",
    period: "Jul 2026 – Present",
    location: "Hybrid / Lagos, Nigeria",
    description:
      "Working with the Engineering team at KetaPay as a Software Engineer Intern, contributing to the development, improvement, and quality assurance of fintech products, including payment systems, escrow services, web applications, and mobile experiences. Working across frontend engineering, API integrations, product testing, and dashboard functionality.",
    achievements: [
      "Develop and maintain responsive web interfaces and application features using Next.js, React, TypeScript, and Tailwind CSS.",
      "Implemented and refined website components, including FAQ sections, application forms, freelancer navigation, and dynamic content powered by Sanity CMS.",
      "Work with Sanity CMS to manage and integrate dynamic website content, including FAQs, categories, and structured content queries.",
      "Test and validate Paystack payment workflows, including bank transfer deposits, card deposits, saved cards, withdrawals, and transaction verification.",
      "Perform quality assurance on escrow workflows, payment processing, refunds, disputes, and transaction-related features.",
      "Test and investigate webhook-driven payment and transaction flows to ensure accurate status updates and reliable system behaviour.",
      "Contribute to notification feature testing, covering escrow events, payment updates, unread counts, notification navigation, and Expo push notifications.",
      "Conduct mobile application testing through TestFlight, identifying, documenting, and verifying bugs across different application features.",
      "Test administrative dashboard functionality, including customer management, data tables, filters, exports, role-based access control, team permissions, and audit logs.",
      "Collaborate with engineers through GitHub, pull requests, code reviews, issue tracking, and sprint-based development workflows."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Sanity CMS",
      "REST APIs",
      "Paystack",
      "Git",
      "GitHub",
      "Expo",
      "TestFlight"
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Aristiec Technology",
    period: "Apr 2025 – Jul 2025",
    location: "Remote",
    description:
      "Worked as a Web Developer Intern, contributing to the development of real-world web applications. Collaborated on frontend interfaces and backend integrations, gaining practical experience building application features, working with REST APIs, and implementing authentication and payment-related functionality.",
    achievements: [
      "Developed reusable and responsive frontend components using React and modern JavaScript technologies.",
      "Integrated REST APIs to support authentication, product management, and payment-related application workflows.",
      "Implemented product discovery features, including product search, filtering, and shopping cart functionality.",
      "Worked on authentication and user management, including secure login and registration workflows.",
      "Contributed to backend API development and integration using Node.js.",
      "Worked with database operations to support application data and product management.",
      "Collaborated with other developers to implement features, debug issues, and improve application functionality."
    ],
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "Git"
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "NAICTS, Student Representative Council (SRC), KWASU",
    period: "2025",
    location: "Nigeria",
    description:
      "Contributed to frontend development activities within the student technology community, working with modern web technologies to build responsive user interfaces and improve web application experiences.",
    achievements: [
      "Developed responsive user interface components using React and JavaScript.",
      "Implemented reusable frontend components to support consistent application interfaces.",
      "Worked with Tailwind CSS to create responsive layouts and improve UI styling.",
      "Collaborated with other developers on frontend development tasks and project implementation.",
      "Integrated frontend interfaces with REST APIs to support dynamic application functionality."
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub"
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-0 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Professional Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Experience of Work
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-card/30 p-6 sm:p-8 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-8 left-8 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>

                  <p className="text-primary font-mono text-sm mt-1">
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.period} • {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-5">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Key Responsibilities & Contributions
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
