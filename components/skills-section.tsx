import { Code2, Database, Zap, Layers } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React" ,"React Native", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Firebase", "REST APIs", "Express.js","Python"],
  },
  {
    category: "Web3 & Blockchain",
    icon: Zap,
    skills: ["Web3.js", "Smart Contracts", "Ethereum", "Solidity", "NFT Development"],
  },
  {
    category: "Tools & DevOps",
    icon: Layers,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  },
]

export function SkillsSection() {
  return (
    <section className="relative px-4 sm:px-6 py-10 sm:py-15 bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 sm:space-y-6 mb-12 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">expertise</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className="group relative rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wider">
                      {category.category}
                    </h3>
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-block mr-2 mb-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/40"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
