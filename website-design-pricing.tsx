"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle, Mail, Phone, Menu, X, Check, ArrowLeft } from "lucide-react"
import { submitContactForm } from "./app/actions/contact"
import { useRouter } from "next/navigation"

export default function WebsiteDesignPricing() {
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

  const carouselProfiles = [
    { name: "Fatima Khan", followers: "1000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "Ayesha Ameer", followers: "51,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "Saijal Taparia", followers: "31,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "Daniel Korenblum", followers: "56,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "John Smith", followers: "75,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "Sarah Wilson", followers: "42,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
    { name: "Mike Johnson", followers: "38,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  ]

  // Testimonials data for the scrolling columns
  const testimonials = {
    column1: [
      {
        text: "I highly recommend Obeidullah as your graphic designer. He has been an invaluable help with my designs, always delivering high-quality work on time!",
        name: "Nikolett Jaksa",
        title: "Personal Branding Expert",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "His work ethic is what impresses me the most. I've worked with many designers in the past, and let me tell you - Obedullah's a champ!",
        name: "Louis Bamberer",
        title: "Content Creator",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "I was referred to Obeidullah through a mutual connection that recommended him highly. I was in the process of a complete rebrand to launch my new business.",
        name: "Sarah Mitchell",
        title: "Business Owner",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Working with Obeidullah has been fantastic. His attention to detail and creative vision exceeded my expectations.",
        name: "Michael Chen",
        title: "Marketing Director",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Professional, creative, and always on time. Obeidullah transformed our brand identity completely.",
        name: "Emma Rodriguez",
        title: "Startup Founder",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    column2: [
      {
        text: "Absolutely exceptional work! Obeidullah went above and beyond that I'm working very closely with him, speaking with him most days.",
        name: "Charlie Hills",
        title: "LinkedIn Creator",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "I cannot recommend Obeidullah enough. He is a stellar design (10/10 skills) and more importantly his work ethic is what impresses me the most.",
        name: "David Park",
        title: "Tech Entrepreneur",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "I worked with Obeidullah on a LinkedIn banner redesign. Although I saw his previous work, he surprised me with the quality he delivered.",
        name: "Jessica Wong",
        title: "Digital Marketer",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "His creativity and problem-solving skills are outstanding. Every project delivered with excellence.",
        name: "Robert Taylor",
        title: "Creative Director",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Fast turnaround, great communication, and exceptional design quality. Highly recommended!",
        name: "Lisa Anderson",
        title: "Brand Manager",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    column3: [
      {
        text: "I have him in my circle. I reached out to Obeidullah to revamp my LinkedIn profile designs. His work on LinkedIn caught my attention.",
        name: "Daniel Korenblum",
        title: "Personal Branding Expert",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "As a busy founder, I don't always have the time to focus on personal projects, but Obeidullah made the entire process effortless.",
        name: "Amanda Foster",
        title: "CEO & Founder",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "The quality of work and attention to detail is remarkable. Obeidullah truly understands brand aesthetics.",
        name: "Kevin Johnson",
        title: "Marketing Consultant",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Exceptional designer with great communication skills. Made our rebranding process smooth and enjoyable.",
        name: "Rachel Green",
        title: "Product Manager",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Creative solutions and professional approach. Obeidullah delivered beyond our expectations every time.",
        name: "Mark Williams",
        title: "Business Development",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    column4: [
      {
        text: "My LinkedIn profile: Quick to reply, polite and proactive with suggestions on how we could make the designs better. Would highly recommend!",
        name: "Fatima Khan",
        title: "Content Strategist",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Outstanding work quality and professional service. Obeidullah's designs helped elevate our brand presence significantly.",
        name: "Thomas Brown",
        title: "Sales Director",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Reliable, creative, and always delivers on time. Working with Obeidullah has been a game-changer for our brand.",
        name: "Sophie Davis",
        title: "Brand Strategist",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Incredible attention to detail and creative vision. Every project exceeded our expectations.",
        name: "James Wilson",
        title: "Creative Lead",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        text: "Professional, talented, and easy to work with. Obeidullah transformed our visual identity completely.",
        name: "Maria Garcia",
        title: "Design Director",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  }

  const handleFormSubmit = async (formData: FormData) => {
    setFormState({ loading: true, message: "", success: false })

    const result = await submitContactForm(formData)

    setFormState({
      loading: false,
      message: result.message,
      success: result.success,
    })

    // Clear message after 5 seconds
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, message: "" }))
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 relative">
      {/* Back Button - Outside Header */}
      <div className="fixed top-8 left-8 z-50">
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
          className="flex items-center justify-center w-12 h-12 bg-green-700 hover:bg-green-600 rounded-full transition-colors shadow-lg"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Header */}
      <header className="bg-[#01594d] text-white px-4 sm:px-8 py-4 rounded-3xl mx-4 sm:mx-8 mt-6 relative z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold italic text-green-400 font-satoshi">N</div>
            <span className="text-xl font-semibold font-satoshi">Primordial</span>
          </div>

          {/* Desktop Navigation */}
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
                  <a href="#" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Logo Design
                  </a>
                  <a href="#" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Thumbnail Design
                  </a>
                  <a href="#" className="block px-4 py-3 hover:bg-green-700 transition-colors text-sm">
                    Carousel Designs
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-green-300 transition-colors font-medium">
              Portfolio
            </a>
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden lg:block bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md">
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
              <a href="/" className="hover:text-green-300 transition-colors font-medium">
                Home
              </a>
              <a href="/website-design" className="hover:text-green-300 transition-colors font-medium">
                Website Design
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
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
                <span className="text-gray-700 font-medium">Primordial Toolkit</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-green-500">Flexible</span>{" "}
              <span className="text-[#01594d]">Pricing For All Creators</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed">
              The <span className="font-bold">best services</span> at the <span className="font-bold">best prices</span>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {/* Landing Page Package */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#01594d] mb-2 font-satoshi">
                    $1800
                    <span className="text-lg font-normal text-gray-600 ml-2">/one-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Landing page</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">WordPress Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Conversion Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Strategic Copywriting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">GA4 Setup</span>
                  </div>
                </div>

                <Button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-full text-lg">
                  Choose plan
                </Button>
              </CardContent>
            </Card>

            {/* Custom Package - Featured */}
            <Card className="bg-green-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative transform scale-110 z-10">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Custom package</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">Pages As You Want</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">WordPress Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">Strategic Copywriting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">Daily Updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#01594d]" />
                    <span className="text-[#01594d] font-medium">GA4</span>
                  </div>
                </div>

                <Button className="w-full bg-[#01594d] hover:bg-green-800 text-white font-bold py-4 px-6 rounded-full text-lg">
                  Choose plan
                </Button>
              </CardContent>
            </Card>

            {/* Website Package */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#01594d] mb-2 font-satoshi">
                    $3500
                    <span className="text-lg font-normal text-gray-600 ml-2">/one-time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">Website</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">4-5 Page Included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">WordPress Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Strategic Copywriting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">GA4 Setup</span>
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

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-12 sm:py-16 px-4 sm:px-8 relative z-30 overflow-hidden">
        {/* Top blur effect - Enhanced and more visible */}
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-green-100 via-green-100/90 via-green-100/70 via-green-100/40 via-green-100/20 to-transparent z-20 pointer-events-none"></div>

        {/* Bottom blur effect - Enhanced with smoother fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-green-100 via-green-100/90 via-green-100/70 via-green-100/40 via-green-100/20 to-transparent z-20 pointer-events-none"></div>

        {/* Left blur effect - Softer fade */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div>

        {/* Right blur effect - Softer fade */}
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 relative z-30">
            <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✦</span>
                </div>
                <span className="text-gray-700 font-medium">Testimonials</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12 relative z-30">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">What do the </span>
              <span className="text-green-500">best creators</span>
              <span className="text-[#01594d]"> say about us</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#01594d] max-w-4xl mx-auto leading-relaxed px-4">
              Our services are <span className="font-bold">endorsed by top industry leaders on LinkedIn</span>
            </p>
          </div>

          {/* Testimonials Grid - 4 Columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden relative z-10">
            {/* Column 1 - Scroll Up */}
            <div className="space-y-4 sm:space-y-6 animate-scroll-up">
              {[...testimonials.column1, ...testimonials.column1].map((testimonial, index) => (
                <Card
                  key={`col1-${index}`}
                  className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-[#01594d] text-xs sm:text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="sm:w-10 sm:h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-800 font-satoshi">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="space-y-4 sm:space-y-6 animate-scroll-down">
              {[...testimonials.column2, ...testimonials.column2].map((testimonial, index) => (
                <Card
                  key={`col2-${index}`}
                  className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-[#01594d] text-xs sm:text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="sm:w-10 sm:h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-800 font-satoshi">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Column 3 - Scroll Up - Hidden on mobile */}
            <div className="hidden lg:block space-y-6 animate-scroll-up">
              {[...testimonials.column3, ...testimonials.column3].map((testimonial, index) => (
                <Card
                  key={`col3-${index}`}
                  className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <p className="text-[#01594d] text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-gray-800 font-satoshi">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Column 4 - Scroll Down - Hidden on mobile */}
            <div className="hidden lg:block space-y-6 animate-scroll-down">
              {[...testimonials.column4, ...testimonials.column4].map((testimonial, index) => (
                <Card
                  key={`col4-${index}`}
                  className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <p className="text-[#01594d] text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-gray-800 font-satoshi">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Want To Get In Touch Section */}
      <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">Want To Get In</span>
            <br />
            <span className="text-green-500">Touch With Us?</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#01594d] mb-8 leading-relaxed">
            Book a free 30 mins consultation call and get to
            <br />
            <span className="text-blue-600 font-semibold">fill our personalized branding questionnaire!</span>
          </p>

          <Button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg text-lg">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-500 text-sm font-bold">✓</span>
              </div>
              <span>Book a 1:1 Design Consultation Call</span>
            </div>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-400 text-[#01594d] py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description */}
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

          {/* Navigation Links */}
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

          {/* Divider */}
          <div className="border-t border-[#01594d] mb-8"></div>

          {/* Contact Information */}
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

          {/* Copyright */}
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
