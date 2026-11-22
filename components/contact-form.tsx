"use client";

import { useState, useEffect, type SVGProps } from "react";
import { createPortal } from "react-dom";
import { Mail, X } from "lucide-react";

function WhatsAppIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.459 3.475 1.331 4.988L2 22l5.184-1.359a9.93 9.93 0 0 0 4.847 1.258h.004c5.515 0 9.969-4.453 9.969-9.969A9.914 9.914 0 0 0 19.083 4.88 9.903 9.903 0 0 0 12.031 2Zm5.821 14.236c-.246.693-1.434 1.325-1.984 1.408-.506.076-1.146.108-1.85-.115-.427-.136-.975-.317-1.676-.62-2.948-1.273-4.873-4.241-5.02-4.437-.147-.196-1.199-1.595-1.199-3.043 0-1.448.759-2.16 1.028-2.454.27-.295.588-.368.784-.368.196 0 .392.002.564.01.181.009.424-.069.663.506.246.589.835 2.037.908 2.184.074.147.123.319.025.515-.098.196-.147.319-.294.491-.147.172-.309.383-.441.515-.147.147-.301.306-.129.601.172.294.763 1.259 1.638 2.039 1.125 1.003 2.073 1.314 2.368 1.461.294.147.466.123.638-.074.172-.196.736-.859.932-1.153.196-.295.392-.246.663-.147.27.098 1.718.81 2.012.957.295.147.491.221.564.344.074.122.074.711-.172 1.404Z" />
    </svg>
  );
}

function XIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const contactOptions = [
  {
    label: "WhatsApp",
    description: "Chat with me directly on WhatsApp",
    href: "https://wa.me/2348136122120", // Replace with your WhatsApp number (country code + number, no + or spaces)
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Mail",
    description: "Send an email to my inbox",
    href: "mailto:abrahamalejolowo@email.com", // Replace with your email address
    icon: Mail,
    external: false,
  },
  {
    label: "X",
    description: "Reach out or DM me on X",
    href: "https://x.com/AAlejolowo76244", // Replace with your X profile URL
    icon: XIcon,
    external: true,
  },
];

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal works properly
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto rounded-xl border border-primary bg-primary/10 px-6 py-3 text-sm font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Get In Touch →
      </button>

      {/* Modal via Portal */}
      {mounted &&
        isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto">
              <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl">

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close modal"
                  className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="border-b border-border/50 px-6 py-6">
                  <h2 className="text-xl font-bold">Get In Touch</h2>
                  <p className="text-sm text-muted-foreground">
                    Choose how you’d like to reach out.
                  </p>
                </div>

                {/* Direct Contact Options */}
                <div className="px-6 py-6 space-y-3">
                  {contactOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <a
                        key={option.label}
                        href={option.href}
                        target={option.external ? "_blank" : undefined}
                        rel={option.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-xl border border-border/70 bg-secondary/20 px-4 py-3.5 transition-colors hover:border-primary/50 hover:bg-primary/10"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {option.label}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {option.description}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-primary">→</span>
                      </a>
                    );
                  })}
                </div>

              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}