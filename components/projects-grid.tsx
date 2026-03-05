"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"
import Misa from "@/public/Misa.png"
import listify from "@/public/listify .png"
import Lumina from "@/public/lumina.png"
import Dashboard from "@/public/Dashboard.png"
import Aristiec from "@/public/Aristiec.png"
import Nft from "@/public/Nft.png"

type ProjectStatus = "shipped" | "in-progress" | "archived"

interface Project {
  id: string
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  status: ProjectStatus
  year: string
  stars: number
  forks: number
  url: string
  homepage?: string
  featured?: boolean
  highlight?: boolean
}

const projects: Project[] = [
  {
    id: "masa",
    title: "MASA Web Application",
    description:
      "E-commerce platform for skincare and perfume products with advanced filtering, search functionality, and seamless payment integration.",
    image: Misa,
    tags: ["React", "Tailwind CSS", "REST APIs", "Payment Gateway"],
    status: "shipped",
    year: "2025",
    stars: 12,
    forks: 2,
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
    highlight: true,
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "Modern responsive dashboard with data visualization, API integration, and performance optimization.",
    image: Dashboard,
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    status: "shipped",
    year: "2025",
    stars: 8,
    forks: 1,
    url: "https://github.com/Abrahamalejolowo/dashboard",
    homepage: "https://dashboard-psi-five-0mrfdhh37b.vercel.app/",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description:
      "Decentralized NFT trading platform with minting, smart contracts, and crypto payments. Implemented lazy minting to reduce gas fees.",
    image: Nft,
    tags: ["Web3.js", "Ethereum", "Smart Contracts", "Firebase"],
    status: "shipped",
    year: "2024",
    stars: 15,
    forks: 4,
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
  },
  {
    id: "aristiec",
    title: "Aristiec Company Website",
    description:
      "SEO-optimized company website focused on UI/UX, accessibility, and cross-browser compatibility.",
    image: Aristiec,
    tags: ["React", "Tailwind", "SEO", "Figma"],
    status: "shipped",
    year: "2025",
    stars: 8,
    forks: 2,
    url: "https://github.com/Abrahamalejolowo",
    homepage: "https://aristiec-web-phi.vercel.app/",
  },
  {
    id: "listify",
    title: "Listify - Task Manager",
    description:
      "Real-time task management app with smart reminders and optimized database queries for improved performance.",
    image: listify,
    tags: ["React", "Firebase", "Tailwind", "API"],
    status: "shipped",
    year: "2024",
    stars: 18,
    forks: 5,
    url: "https://github.com/Abrahamalejolowo/react-project",
    homepage: "https://listify-gilt.vercel.app",
    featured: true,
  },
  {
    id: "lumina",
    title: "Lumina E-Commerce",
    description:
      "Modern e-commerce application designed for seamless shopping experience with clean UI and secure authentication.",
    image: Lumina,
    tags: ["React", "Firebase", "Tailwind", "JWT"],
    status: "shipped",
    year: "2023",
    stars: 10,
    forks: 3,
    url: "https://github.com/Abrahamalejolowo/lumina",
    homepage: "https://lumina-p.netlify.app/",
    featured: true,
  },
]

export function ProjectsGrid() {
  const [activeFilter] = useState<ProjectStatus | "all">("all")

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Artifacts
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Open Source Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg",
                project.highlight && "sm:col-span-2"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.highlight && (
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </div>
              )}

              <div className="mb-5 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="text-xs font-mono text-muted-foreground mb-2">
                {project.year}
              </p>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex gap-4 text-xs font-mono text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {project.forks}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xs font-mono">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}