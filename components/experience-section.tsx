"use client"

import { ChevronRight } from "lucide-react"

const experiences = [
  {
    role: "Web developer Intern",
    company: "Aristiec Technology,India",
    period: "2025",
    location: "Remote",
  description: "Worked on real-world web applications, contributing to frontend and backend development while gaining hands-on experience in scalable architecture and modern development practices.",
    achievements: [
      "Built reusable UI components with React and TypeScript",
  "Designed RESTful APIs using Node.js",
  "Implemented secure authentication and database management with Firebase",
  "Collaborated in an agile remote development environment"
],
    technologies: ["React", "TypeScript", "Node.js", "Firebase", "Web3.js", "Solidity"]
  },

  {
    role: "Frontend developer Intern",
    company: "NAICTS, Student Representative Council (SRC), KWASU",
    period: "2025",
    location: "Nigeria",
    description: "Contributed to frontend development projects using React and modern web technologies.",
    achievements: [
      "Built responsive UI components used across 3+ projects",
      "Collaborated with 5+ developers on agile team",
      "Improved page load time by 35% with optimization"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-0 sm:py-32 ">
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
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm mt-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{exp.period} • {exp.location}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Achievements</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
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
