"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
      <header className="bg-[#01594d] lg:mx-[13rem]  text-white px-4 sm:px-8 py-2 rounded-2xl mx-4 sm:mx-8  relative z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold italic text-green-400 font-satoshi">N</div>
          <span className="text-xl font-semibold font-satoshi">Primordial</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="hover:text-green-300 transition-colors font-medium">
            Home
          </a>

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

          <a href="#" className="hover:text-green-300 transition-colors font-medium">
            Portfolio
          </a>
        </div>

        {/* Desktop CTA Button */}
        <Button className="book_button hidden lg:block  hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md">
          Book A Call
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-green-600">
          <div className="flex flex-col space-y-4 mt-4">
            <a href="#" className="hover:text-green-300 transition-colors font-medium">
              Home
            </a>
            <Link href="/website-design" className="hover:text-green-300 transition-colors font-medium">
              Website Design
            </Link>
            <Link href="/logo-design" className="hover:text-green-300 transition-colors font-medium">
              Logo Design
            </Link>
            <a href="#" className="hover:text-green-300 transition-colors font-medium">
              Portfolio
            </a>
            <Button className="book_button hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md w-full">
              Book A Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
