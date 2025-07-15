"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X ,ArrowLeft} from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeaderMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-[#01594d] lg:mx-[13rem]  text-white px-4 sm:px-8 py-2 rounded-2xl mx-4 sm:mx-8  relative z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              router.push("/")
              setTimeout(() => {
                const pricingSection = document.getElementById("pricing")
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" })
                }
              }, 100)
            }}
            className="flex items-center justify-center w-[2rem] h-[2rem] bg-green-700 hover:bg-green-600 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center space-x-2">
            <img src="/images/Group 48097818.png" alt="" width={140} height={25} />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-green-300 transition-colors font-medium">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-green-300 transition-colors font-medium"
              >
                <span>Packages</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#01594d] rounded-lg shadow-xl py-2 w-48 z-50 border border-green-600">
                  <Link href="/website-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Website Design
                  </Link>
                  <Link href="/logo-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Logo Design
                  </Link>
                  <Link href="/thumbnail-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Thumbnail Design
                  </Link>
                  <Link href="/carousel-designs" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Carousel Designs
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" className="hover:text-green-300 transition-colors font-medium">
              Portfolio
            </Link>
          </div>

          <Button className="book_button hidden lg:block bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md">
            Book A Call
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-green-600">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="hover:text-green-300 transition-colors font-medium">
                Home
              </Link>
              <Link href="/website-design" className="hover:text-green-300 transition-colors font-medium">
                Website Design
              </Link>
              <Link href="/logo-design" className="hover:text-green-300 transition-colors font-medium">
                Logo Design
              </Link>
              <Link href="/thumbnail-design" className="hover:text-green-300 transition-colors font-medium">
                Thumbnail Design
              </Link>
              <Link href="/carousel-designs" className="hover:text-green-300 transition-colors font-medium">
                Carousel Designs
              </Link>
              <Button className="book_button bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md w-full">
                Book A Call
              </Button>
            </div>
          </div>
        )}
      </header>
  )
}
