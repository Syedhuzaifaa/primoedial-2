"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle, Mail, Phone, Menu, X, Check, ArrowLeft } from "lucide-react"
import { submitContactForm } from "./app/actions/contact"
import { useRouter } from "next/navigation"

export default function LinkedInRebrandPricing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState<{
    loading: boolean
    message: string
    success: boolean
  }>({
    loading: false,
    message: "",
    success: false,
  })

  const router = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    setFormState({ loading: true, message: "", success: false })
    const result = await submitContactForm(formData)
    setFormState({
      loading: false,
      message: result.message,
      success: result.success,
    })
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, message: "" }))
    }, 5000)
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-[#01594d] text-white px-4 sm:px-8 py-4 rounded-3xl mx-4 sm:mx-8 mt-6 relative z-50 shadow-lg">
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
            className="flex items-center justify-center w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold italic text-green-400 font-satoshi">N</div>
            <span className="text-xl font-semibold font-satoshi">Primordial</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="hover:text-green-300 transition-colors font-medium">
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
                  <a href="/website-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Website Design
                  </a>
                  <a href="/logo-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Logo Design
                  </a>
                  <a href="/thumbnail-design" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Thumbnail Design
                  </a>
                  <a href="/carousel-designs" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Carousel Designs
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-green-300 transition-colors font-medium">
              Portfolio
            </a>
          </div>

          <Button className="hidden lg:block bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md">
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
              <a href="/" className="hover:text-green-300 transition-colors font-medium">
                Home
              </a>
              <a href="/li-profile-rebrand" className="hover:text-green-300 transition-colors font-medium">
                LinkedIn Rebrand
              </a>
              <a href="#" className="hover:text-green-300 transition-colors font-medium">
                Portfolio
              </a>
              <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md w-full">
                Book A Call
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
                <span className="text-gray-700 font-medium">LinkedIn Rebrand</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#80D54B]">LinkedIn</span> <span className="text-[#01594d]">Rebrand Packages</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed">
              The <span className="font-bold">best services</span> at the <span className="font-bold">best prices</span>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {/* Basic Package */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#01594d] mb-2 font-satoshi">
                    $300
                    <span className="text-lg font-normal text-gray-600 ml-2">/one-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Basic</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">1x Banner Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">2x Featured Images</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">Source Files Included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">2 Revisions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">4-5 Days Delivery</span>
                  </div>
                </div>

                <Button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-full text-lg">
                  Choose plan
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package - Featured */}
            <Card className="bg-green-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative transform scale-110 z-10">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#01594d] mb-2 font-satoshi">
                    $800
                    <span className="text-lg font-normal text-[#01594d] ml-2">/one-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Premium</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">2x Slideshows Banner</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">1x Carousel Template</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">3x Featured Cards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">2x Single Pager Template</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">Unlimited Revisions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">4-5 Days Delivery</span>
                  </div>
                </div>

                <Button className="w-full bg-[#01594d] hover:bg-green-800 text-white font-bold py-4 px-6 rounded-full text-lg">
                  Choose plan
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#01594d] mb-2 font-satoshi">
                    $500
                    <span className="text-lg font-normal text-gray-600 ml-2">/one-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Standard</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">2x Slideshows Banner</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">3x Featured Cards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">Source Files Included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">4 Revisions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#80D54B]" />
                    <span className="text-gray-700">4-5 Days Delivery</span>
                  </div>
                </div>

                <Button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-full text-lg">
                  Choose plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-400 text-[#01594d] py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-3xl sm:text-4xl font-bold italic text-white font-satoshi">N</div>
              <span className="text-2xl sm:text-3xl font-bold text-[#01594d] font-satoshi">Primordial</span>
            </div>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Primordial is a design agency that focuses on freeing up valuable hours for clients to focus on
              high-impact business development
            </p>
          </div>

          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-8 flex-wrap">
            <a href="#" className="hover:text-white transition-colors font-medium text-sm sm:text-base">
              About Us
            </a>
            <span className="text-[#01594d]">•</span>
            <a href="#" className="hover:text-white transition-colors font-medium text-sm sm:text-base">
              Testimonials
            </a>
            <span className="text-[#01594d]">•</span>
            <a href="#" className="hover:text-white transition-colors font-medium text-sm sm:text-base">
              Portfolio
            </a>
            <span className="text-[#01594d]">•</span>
            <a href="#" className="hover:text-white transition-colors font-medium text-sm sm:text-base">
              Services
            </a>
            <span className="text-[#01594d]">•</span>
            <a href="#" className="hover:text-white transition-colors font-medium text-sm sm:text-base">
              Contact Us
            </a>
          </div>

          <div className="border-t border-[#01594d] mb-8"></div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">PrimordialCreations@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">+44 7894683735</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm">© 2025 Primordial Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <div className="relative group">
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-xl">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <div className="absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-xl p-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
            <p className="text-sm">
              <span className="text-gray-600">Need Help? </span>
              <span className="font-bold text-gray-800">Chat with Primordial!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
