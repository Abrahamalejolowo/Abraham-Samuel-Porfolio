
"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import {

  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Server,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import Misa from "@/public/Misa.png"
import skillbridge from "@/public/skillbridge.jpeg"
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
  url: string
  homepage?: string
  featured?: boolean
  highlight?: boolean
  isBackendOnly?: boolean
}

const projects: Project[] = [
  {
    id: "minmart",
    title: "Minmart – E-Commerce Marketplace",
    description:
      "Building an e-commerce marketplace focused on Nigerian-made products and local brands. Minmart is designed to connect customers with different vendors through a unified shopping experience. The platform includes product discovery, brand collections, shopping cart management, customer authentication, and a location-aware approach to product pricing and availability. Currently developing the platform with plans for integrated payment processing and a complete order management experience.",
    image: minmart,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Paystack"
    ],
    status: "shipped",
    year: "2026",
    url: "https://github.com/Abrahamalejolowo/Minimart",
    homepage: "https://minmarts.com",
    featured: true,
    highlight: true,
  },
    {
    id: "aristiec",
    title: "Aristiec – Company Website",
    description:
      "Contributed to the development of a professional company website, focusing on responsive layouts, reusable interface components, and a consistent user experience. Worked on frontend implementation and interface improvements to ensure the website was accessible and functional across different screen sizes.",
    image: Aristiec,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "Responsive Design"
    ],
    status: "shipped",
    year: "2025",
    url: "https://github.com/Abrahamalejolowo",
    homepage: "https://aristiec.com",
  },
  {
    id: "skillbridge",
    title: "SkillBridge – Student Opportunity Platform",
    description:
      "Building a student-focused platform that makes it easier to discover career opportunities, develop professional skills, and manage applications in one place. SkillBridge brings together internships, scholarships, grants, and other opportunities through a centralized student workspace. Features include personalized student profiles, opportunity discovery, saved opportunities, application tracking, an AI-powered career assistant, and a premium subscription experience designed to unlock additional AI capabilities.",
    image: skillbridge,
    tags: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "Neon",
      "Better Auth",
      "Gemini API",
      "Tailwind CSS"
    ],
    status: "shipped",
    year: "2026",
    url: "https://github.com/Abrahamalejolowo/skillbridge",
    homepage: "https://skillbridge-umber-nu.vercel.app",
    featured: true,
    highlight: true,
  },
  {
    id: "smart-learn",
    title: "SmartLearn – Offline AI Learning Platform",
    description:
      "An AI-powered educational platform designed to make quality learning accessible even in areas with unreliable internet connectivity. SmartLearn combines an AI tutor with an offline-first learning experience, allowing students to access learning resources, practice through interactive quizzes, create flashcards, track academic progress, and organize their study schedules. The application also explores PWA installation, local data persistence, and personalized learning experiences.",
    image: smartlearn,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Gemini API",
      "IndexedDB",
      "PWA",
      "Tailwind CSS"
    ],
    status: "Coming soon",
    year: "2026",
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
  },
  {
    id: "execora",
    title: "EXECORA – Autonomous AI Task Assistant",
    description:
      "Developing an AI-powered workflow assistant designed to simplify repetitive digital tasks and improve productivity. The platform explores AI-driven task execution, document analysis, intelligent instructions, and workflow status tracking through an interactive web interface. It focuses on making complex digital workflows easier to manage through AI-assisted automation.",
    image: execore,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Integration",
      "REST APIs"
    ],
    status: "shipped",
    year: "2026",
    url: "https://github.com/Abrahamalejolowo",
    homepage: "https://execora-umber.vercel.app/",
    featured: true,
  },
  {
    id: "gym-management",
    title: "Gym Management SaaS",
    description:
      "Developing a multi-tenant gym management platform that helps fitness businesses manage their daily operations from a centralized dashboard. The system supports gym-specific accounts, member registration, membership plans, payment tracking, attendance management, and operational analytics. It is designed around a shared SaaS architecture where different gyms can manage their own members, subscriptions, and business information independently.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "QR Attendance"
    ],
    status: "in-progress",
    year: "2026",
    url: "https://github.com/Abrahamalejolowo",
    featured: true,
  },
  {
    id: "masa",
    title: "MASA – E-Commerce Web Application",
    description:
      "Developed an e-commerce experience for skincare and fragrance products, focusing on product discovery and a smooth shopping experience. Implemented responsive product interfaces, search and filtering functionality, product presentation, and API-connected application features to help customers browse and interact with products.",
    image: Misa,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Payment Integration"
    ],
    status: "shipped",
    year: "2025",
    url: "https://github.com/Abrahamalejolowo",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description:
      "Explored decentralized marketplace development through an NFT platform focused on digital asset creation and trading. The project involved smart contract concepts, NFT minting workflows, Ethereum integration, and blockchain-based transactions, with an interest in reducing transaction costs through lazy minting approaches.",
    image: Nft,
    tags: [
      "Web3.js",
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "Firebase"
    ],
    status: "shipped",
    year: "2024",
    url: "https://github.com/Abrahamalejolowo",
  },

]

export function ProjectsGrid() {
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

  const visibleProjects =
    isMobile && !showAllMobile
      ? projects.slice(0, 4)
      : projects

  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Selected Work & Experiments
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Projects I've Built
          </h2>

          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            A collection of products, applications, and engineering
            experiments I've worked on, from e-commerce and fintech
            experiences to AI-powered platforms and SaaS solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg flex flex-col justify-between animate-fade-in-up",
                project.highlight && "sm:col-span-2"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                {project.highlight && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                    <Sparkles className="h-3 w-3" />
                    Featured Project
                  </div>
                )}

                {/* Project Image / Backend Preview */}
                {project.isBackendOnly ? (
                  <div className="mb-5 flex h-48 w-full flex-col justify-between rounded-lg border border-primary/30 bg-secondary/80 p-4 font-mono text-xs text-primary/90">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        backend_service.api
                      </span>

                      <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] text-primary">
                        REST API
                      </span>
                    </div>

                    <div className="space-y-1.5 text-muted-foreground text-[11px]">
                      <p className="text-primary">
                        {`> POST /api/payments/verify`}
                      </p>
                      <p>{`Payment verification workflow`}</p>
                      <p className="text-primary">
                        {`> GET /api/transactions/status`}
                      </p>
                      <p>{`Transaction status lookup`}</p>
                    </div>

                    <div className="text-[10px] text-muted-foreground">
                      // API workflow demonstration
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

                {/* Project Status */}
                <div className="flex items-center justify-between mb-3">
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

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Footer */}
              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-5 text-xs font-mono pt-4 border-t border-border/40">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                    Source Code
                  </a>

                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Toggle */}
        {isMobile && projects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary/20 active:scale-95"
            >
              {showAllMobile ? (
                <>
                  Show Less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects ({projects.length})
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
