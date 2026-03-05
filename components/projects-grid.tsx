"use client"

import { useState} from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"
import Misa from "@/public/Misa.png"
import listify from "@/public/listify .png"
import lumina from "@/public/lumina.png"
import Dashboard from "@/public/Dashboard.png"
import Aristiec from "@/public/Aristiec.png"
import Nft from "@/public/Nft.png"

const projects = [
  {
    id: 0,
    title: "MASA Web Application",
    description:
      "E-commerce platform for skincare and perfume products. Implemented product catalog with advanced filtering, search functionality, and seamless payment integration.",
    image: Misa,
    tags: ["React", "Tailwind CSS", "REST APIs", "Payment Gateway"],
    status: "shipped",
    year: "2025",
    stars: 12,
    forks: 2,
    url: "https://github.com/Abrahamalejolowo",
    // homepage: "https://listify-gilt.vercel.app",
    featured: true,
    highlight: true,
  },
    {
    id: 1,
    title: "Dashboard",
   description:
      "Modern responsive company website showcasing services and products. Focused on UI/UX improvements, SEO optimization, and cross-browser compatibility.",
    image: Dashboard,
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Chart.js", "Api"],
    status: "shipped",
    year: "2025",
    stars: 8,
    forks: 1,
    url: "https://github.com/Abrahamalejolowo/dashboard.git",
     homepage: "https://dashboard-psi-five-0mrfdhh37b.vercel.app/",
    featured: false,
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description:
      "Decentralized digital asset trading platform with NFT minting, smart contracts, and cryptocurrency payments. Implemented lazy minting reducing gas fees by 35%.",
    image: Nft,
    tags: ["Web3.js", "React", "Smart Contracts", "Ethereum", "Firebase"],
    status: "shipped",
    year: "2024",
    stars: 15,
    forks: 4,
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
  },
  {
    id: 3,
    title: "Aristiec Company Website",
    description:
      "Modern responsive company website showcasing services and products. Focused on UI/UX improvements, SEO optimization, and cross-browser compatibility.",
    image: Aristiec,
    tags: ["React.js", "Tailwind CSS", "Figma", "SEO"],
    status: "shipped",
    year: "2025",
    stars: 8,
    forks: 2,
    url: "https://github.com/Abrahamalejolowo",
    homepage: "https://aristiec-web-phi.vercel.app/",
    featured: false,
  },
    {
    id: 4,
    title: "Listify - To-Do List App",
    description:
      "Feature-rich task management application with real-time syncing, task prioritization, and smart reminders. Optimized database queries reducing load times by 40%.",
    image: listify,
    tags: ["React", "Firebase", "Tailwind CSS", "API"],
    status: "shipped",
    year: "2024",
    stars: 18,
    forks: 5,
    url: "https://github.com/Abrahamalejolowo/react-project.git",
    homepage: "https://listify-gilt.vercel.app",
    featured: true,
  },
    {
    id: 4,
    title:"Lumina",
    description:
      "A modern e-commerce web app designed to provide a seamless shopping experience with a clean UI and intuitive navigation.",
    image: lumina,
    tags: ["React", "Firebase", "Tailwind CSS", "JWT Auth"],
    status: "shipped",
    year: "2023",
    stars: 18,
    forks: 5,
    url: "https://github.com/Abrahamalejolowo/lumina.git",
    homepage: "https://lumina-p.netlify.app/",
    featured: true,
  },
 
  
]

// const filters = ["all", "shipped", "in-progress", "archived"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Artifacts</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Open Source Projects</h2>
          </div>
{/* 
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                "highlight" in project && project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {/* Project Image */}
              {"image" in project && project.image && (
                <div className="mb-5 -mx-6 -mt-6 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow z-10">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    project.status === "shipped" && "bg-primary shadow-sm shadow-primary/50",
                    project.status === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                    project.status === "archived" && "bg-muted-foreground",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {project.description}
              </p>

              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">source</span>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">live</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
