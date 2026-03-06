import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://abraham-dev.vercel.app'),
  title: {
    default: "Abraham Samuel",
    template: "%s | Abraham Samuel",
  },
  description:
    "Junior Software Developer with 2 years of experience building web applications with React, TypeScript, and Tailwind CSS. Expertise in full-stack development and Web3 technologies.",
  keywords: ["Software Developer", "React", "TypeScript", "Next.js", "Web Development", "Tailwind CSS", "Firebase", "Web3", "Frontend Development"],
  authors: [{ name: "Abraham Samuel Alejolowo", url: "https://github.com/Abrahamalejolowo" }],
  creator: "Abraham Samuel Alejolowo",
  publisher: "Abraham Samuel Alejolowo",
 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Abraham Porfolio",
    description: "Junior Software Developer with 2 years of experience building web applications with React, TypeScript, and Tailwind CSS.",
    siteName: "Abraham Samuel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abraham Samuel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Samuel — Junior Software Developer",
    description: "Junior Software Developer with 2 years of experience building web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
