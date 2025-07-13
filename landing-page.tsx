"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import CarouselSlider from "./components/carousel-slider"
import ServicesSection from "./components/services-section"
import BrandGenesisSection from "./components/brand-genesis-section"
import PortfolioSection from "./components/portfolio-section"
import BrandingQuestionnaireSection from "./components/branding-questionnaire-section"
import PricingSection from "./components/pricing-section"
import TestimonialsSection from "./components/testimonials-section"
import ConsultationSection from "./components/consultation-section"
import Footer from "./components/footer"

export default function PrimordialComplete() {
  useEffect(() => {
    // Ensure page starts from top on load
    window.scrollTo(0, 0)
  }, [])

  const handleViewPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 relative">
      <Header />

      <HeroSection onViewPricing={handleViewPricing} />

      <CarouselSlider />

      <ServicesSection />

      <BrandGenesisSection />

      <CarouselSlider />

      <PortfolioSection />

      <BrandingQuestionnaireSection />

      <PricingSection />

      <TestimonialsSection />

      <ConsultationSection />

      <Footer />

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
