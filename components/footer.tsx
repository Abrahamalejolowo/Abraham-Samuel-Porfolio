import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"
import { ContactForm } from "./contact-form"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Abrahamalejolowo", handle: "@Abrahamalejolowo", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/abraham-alejolowo-b7ab97319", handle: "/in/abraham-alejolowo", icon: Linkedin },
  { label: "Email", href: "mailto:abrahamalejolowo@gmail.com", handle: "abrahamalejolowo@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Expensive Code</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Junior Software Developer building scalable web solutions with React, Node js, and Web3 technologies.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-up stagger-1">
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Open to collaborations, freelance opportunities, and interesting problems. Let's build something amazing together.
            </p>

           <a
                href="#footer"
                className=""
              >
                <span className="relative z-10"><ContactForm/></span>
                {/* <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span> */}
                {/* Animated background */}
                {/* <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" /> */}
              </a>
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} Expensive Code  All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
