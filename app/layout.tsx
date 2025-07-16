"use client"

import "./globals.css"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Toaster } from "react-hot-toast"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}

// "use client"

// import type React from "react"

// // import type { Metadata } from "next"
// import "./globals.css"
// import { useEffect } from "react"
// import { usePathname } from "next/navigation"
// import { Toaster } from 'react-hot-toast'
//   // export const metadata: Metadata = {
//   //   title: "v0 App",
//   //   description: "Created with v0",
//   //   generator: "v0.dev",
//   // }

// export default function RootLayout({ children }) {
//   return (
//     <>
//       {children}
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   )
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname()

//   useEffect(() => {
//     // Scroll to top when route changes
//     window.scrollTo(0, 0)
//   }, [pathname])

//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }
