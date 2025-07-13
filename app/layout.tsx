"use client"

import type React from "react"

// import type { Metadata } from "next"
import "./globals.css"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

  // export const metadata: Metadata = {
  //   title: "v0 App",
  //   description: "Created with v0",
  //   generator: "v0.dev",
  // }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
