export function AboutSection() {
  return (
    <section className="relative py-20 sm:py-2 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              About
              <span className="bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent"> Me</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm Abraham Samuel, a junior software developer with 2 years of experience building scalable web applications. I started my journey with a curiosity for how things work, and that passion has evolved into a professional pursuit of creating high-quality digital solutions that solve real-world problems.
            </p>

            <p className="text-base leading-relaxed">
              My approach combines technical rigor with creative problem-solving. I specialize in React, TypeScript, and modern web technologies, with a growing interest in Web3 and blockchain development. I believe in writing elegant, efficient code that's not just functional, but maintainable and user-focused.
            </p>

            <p className="text-base leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or collaborating with teams on innovative ideas. I'm always eager to learn, improve my craft, and take on new challenges that push my boundaries.
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
