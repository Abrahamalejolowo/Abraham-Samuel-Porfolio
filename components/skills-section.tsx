import { Code2, Database, Zap, Layers, Cpu, CreditCard } from "lucide-react"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiExpress,
  SiPython,
  SiSolidity,
  SiEthereum,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiSanity,
  SiSupabase,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"
import { ComponentType } from "react"

interface SkillItem {
  name: string
  icon: ComponentType<{ className?: string }>
}

interface SkillCategory {
  category: string
  icon: ComponentType<{ className?: string }>
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    category: "CMS & E-Commerce Integration",
    icon: CreditCard,
    skills: [
      { name: "Sanity CMS", icon: SiSanity },
      { name: "GROQ Queries", icon: Code2 },
      { name: "Paystack API", icon: CreditCard },
      { name: "Flutterwave API", icon: CreditCard },
      { name: "Escrow Workflows", icon: Layers },
    ],
  },
  {
    category: "Systems & Web3 Development",
    icon: Cpu,
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Solidity", icon: SiSolidity },
      { name: "Ethereum", icon: SiEthereum },
      { name: "Web3.js", icon: SiEthereum },
      { name: "Smart Contracts", icon: Zap },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Layers,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="relative px-4 sm:px-6 py-10 sm:py-16 bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 sm:space-y-6 mb-12 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">expertise</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.category}
                className="group relative rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between border-b border-border/40 pb-3">
                    <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wider">
                      {category.category}
                    </h3>
                    <CategoryIcon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon
                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/40"
                        >
                          <SkillIcon className="h-3.5 w-3.5 shrink-0 text-primary/80" />
                          <span>{skill.name}</span>
                        </div>
                      )
                    })}
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