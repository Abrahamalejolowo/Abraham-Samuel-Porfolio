export function AboutSection() {
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
              <span className="bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent"> Me</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm <strong className="text-foreground">Abraham Samuel Alejolowo</strong>, a full-stack software engineer with a strong focus on building scalable web applications, secure backend APIs, and responsive user interfaces. My journey began with a curiosity for software architecture, which has grown into a dedicated drive to craft high-quality digital products.
            </p>

            <p className="text-base leading-relaxed">
              My technical core spans <strong className="text-foreground">Next.js, React, TypeScript, Node.js, Python and React Native</strong>, paired with databases like PostgreSQL and Supabase, and headless content management systems like Sanity CMS. From engineering payment integrations and escrow services to developing offline-ready web apps, I prioritize clean code, type safety, and optimal performance.
            </p>

            <p className="text-base leading-relaxed">
              When I'm not writing code, I'm exploring modern backend architecture, refactoring UI systems, or collaborating in agile environments. I'm always looking to refine my engineering craft and build intuitive solutions that make an impact.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}