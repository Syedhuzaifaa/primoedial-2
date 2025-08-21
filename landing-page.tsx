"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
// import Header from "./components/header"
import HeroSection from "./components/hero-section"
// import CarouselSlider from "./components/carousel-slider"
import ServicesSection from "./components/services-section"
import BrandGenesisSection from "./components/brand-genesis-section"
import PortfolioSection from "./components/portfolio-section"
import BrandingQuestionnaireSection from "./components/branding-questionnaire-section"
import PricingSection from "./components/pricing-section"
import TestimonialsSection from "./components/testimonials-section"
import ConsultationSection from "./components/consultation-section"
import Footer from "./components/footer"
import WhatsApp from "./components/whatsapp"

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
    <div className="min-h-screen relative">

      <HeroSection onViewPricing={handleViewPricing} />

  

      <ServicesSection />

      <BrandGenesisSection />


      <PortfolioSection />
      
      {/* <CarouselSlider /> */}

      <BrandingQuestionnaireSection />

      <PricingSection />

      <TestimonialsSection />

      <ConsultationSection />

      <Footer />

      <WhatsApp/>
    </div>
  )
}
