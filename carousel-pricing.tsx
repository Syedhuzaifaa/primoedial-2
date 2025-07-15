"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import HeaderMobile from "./components/header-mobile"
import TestimonialsSection from "./components/testimonials-section"
import Footer from "./components/footer"
import GetIN from "./components/get-in"
import WhatsApp from "./components/whatsapp"
import PricingCard from "./components/pricing-card"

export default function CarouselPricing() {
  const carouselDesignPlans = [
    {
      title: "Basic",
      price: "$500",
      subtitle: "/month",
      features: [
        "2x Carousels Per Week",
        "Custom Designed",
        "Unlimited Slides",
        "2 Revisions Per Carousel",
        "48Hrs Delivery"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B"
    },
    {
      title: "Premium",
      price: "$1500",
      subtitle: "/month",
      features: [
        "5x Carousels Per Week",
        "Custom Designed",
        "Unlimited Slides",
        "Unlimited Revisions",
        "24Hrs Delivery"
      ],
      highlight: true,
      primaryColor: "#01594d",
      textColor: "#01594d"
    },
    {
      title: "Standard",
      price: "$800",
      subtitle: "/month",
      features: [
        "3x Carousels Per Week",
        "Custom Designed",
        "Unlimited Slides",
        "2 Revisions Per Carousel",
        "48Hrs Delivery"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <HeaderMobile />
      {/* Main Content */}
      <main className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mx-auto  mb-8 but_sections">
            <div className="  px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center">
                  <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
                </div>
                <span className="but_t">Carousel Packages</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#80D54B]">Carousel</span> <span className="text-[#01594d]">Design Packages</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed">
              The <span className="font-bold">best services</span> at the <span className="font-bold">best prices</span>
            </p>
          </div>

          <PricingCard plans={carouselDesignPlans} />

        </div>
      </main>
      <TestimonialsSection />
      <GetIN />
      <Footer />
      <WhatsApp />
    </div>
  )
}
