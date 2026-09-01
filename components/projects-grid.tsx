"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles, ChevronDown, ChevronUp, Server } from "lucide-react"
import Misa from "@/public/Misa.png"
import Dashboard from "@/public/Dashboard.png"
import Aristiec from "@/public/Aristiec.png"
import Nft from "@/public/Nft.png"
import minmart from "@/public/minmart.jpeg"
import smartlearn from "@/public/smartlearn.jpeg"
import execore from "@/public/execora.jpeg"

type ProjectStatus = "shipped" | "in-progress" | "archived" | "Coming soon"

interface Project {
  id: string
  title: string
  description: string
  image?: StaticImageData | string
  tags: string[]
  status: ProjectStatus
  year: string
  stars: number
  forks: number
  url: string
  homepage?: string
  featured?: boolean
  highlight?: boolean
  isBackendOnly?: boolean
}

const projects: Project[] = [
    {
    id: "smart-learn",
    title: "Smart Learn Platform",
    description:
      "An offline interactive educational platform providing structured learning modules, resource tracking, and dynamic content queries via CMS.",
    image: smartlearn,
    tags: ["Next.js", "React", "TypeScript", "Sanity CMS", "Tailwind"],
    status: "Coming soon",
    year: "2026",
    stars: 16,
    forks: 3,
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
    highlight: true,
  },
  {
    id: "execora",
    title: "EXECORA - Autonomous AI Task Helper",
    description:
      "Digital workflow helper for automated task execution, document analysis, and process status tracking.",
    image: execore,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Prompt Lab", "REST API"],
    status: "in-progress",
    year: "2026",
    stars: 32,
    forks: 8,
    url: "https://github.com/Abrahamalejolowo",
    homepage: "https://execora-umber.vercel.app/",
    featured: true,
  },
  {
    id: "backend",
    title: "Escrow & Payment API",
    description:
      "Backend microservice architecture powering secure escrow transactions, webhooks, and payment settlement gateways.",
    tags: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "Paystack", "Flutterwave"],
    status: "shipped",
    year: "2026",
    stars: 21,
    forks: 5,
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
    isBackendOnly: true,
  },
  {
    id: "minmart",
    title: "Minmart E-Commerce & Vendor Platform",
    description:
      "Multi-vendor marketplace featuring product listings, fragrance vendor onboarding, responsive layouts, and integrated mobile payment flows.",
    image: minmart,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Flutterwave"],
    status: "in-progress",
    year: "2026",
    stars: 24,
    forks: 6,
    url: "https://github.com/Abrahamalejolowo/Minmart",
    homepage: "https://minmart.netlify.app/",
    featured: true,
  },
  {
    id: "auth-microservice",
    title: "JWT & OAuth Microservice Engine",
    description:
      "Stateless authentication backend service handling user sessions, token rotation, rate-limiting, and RBAC authorization middleware.",
    tags: ["Node.js", "Express", "Firebase Auth", "PostgreSQL", "JWT"],
    status: "shipped",
    year: "2025",
    stars: 19,
    forks: 4,
    url: "https://github.com/Abrahamalejolowo",
    isBackendOnly: true,
  },
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
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description:
      "Decentralized NFT trading platform with minting, smart contracts, and crypto payments. Implemented lazy minting to reduce gas fees.",
    image: Nft,
    tags: ["Web3.js", "Ethereum", "Smart Contracts", "Firebase"],
    status: "Coming soon",
    year: "2024",
    stars: 15,
    forks: 4,
    url: "https://github.com/Abrahamalejolowo",
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
]

export function ProjectsGrid() {
  const [activeFilter] = useState<ProjectStatus | "all">("all")
  const [showAllMobile, setShowAllMobile] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter)

  // Cap visible projects to 4 on mobile unless expanded
  const visibleProjects = isMobile && !showAllMobile 
    ? filteredProjects.slice(0, 4) 
    : filteredProjects

  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Artifacts
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg flex flex-col justify-between",
                project.highlight && "sm:col-span-2"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                {project.highlight && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </div>
                )}

                {/* Render screenshot image or stylized Backend Terminal card */}
                {project.isBackendOnly ? (
                  <div className="mb-5 flex h-48 w-full flex-col justify-between rounded-lg border border-primary/30 bg-secondary/80 p-4 font-mono text-xs text-primary/90">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        backend_service.api
                      </span>
                      <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] text-primary">
                        REST / Microservice
                      </span>
                    </div>
                    <div className="space-y-1.5 text-muted-foreground text-[11px]">
                      <p className="text-primary">{`> GET /api/v1/escrow/status`}</p>
                      <p>{`200 OK - 42ms`}</p>
                      <p className="text-primary">{`> POST /api/v1/payments/verify`}</p>
                      <p>{`Status: Webhook Verified`}</p>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      // Built for security & high concurrency
                    </div>
                  </div>
                ) : (
                  project.image && (
                    <div className="mb-5 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )
                )}

                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-mono text-muted-foreground">
                    {project.year}
                  </p>
                  <span
                    className={cn(
                      "text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider",
                      project.status === "shipped"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : project.status === "Coming soon"
                        ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                        : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                    )}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-primary" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3 text-primary" />
                    {project.forks}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-xs font-mono pt-3 border-t border-border/40">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>

                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Toggle */}
        {isMobile && filteredProjects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary/20 active:scale-95"
            >
              {showAllMobile ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects ({filteredProjects.length}) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}