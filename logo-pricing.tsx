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

export default function LogoPricing() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$310",
      subtitle: "/one-time",
      concepts: "2x Logo Concepts",
      revisions: "1 Revision Per Concept",
      features: [
        "Logo Transparency",
        "Include Source File",
        "5 Days Delivery"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B",
    },
    {
      title: "Premium",
      price: "$710",
      subtitle: "/one-time",
      concepts: "5x Logo Concepts",
      revisions: "2 Revision Per Concept",
      features: [
        "Logo Transparency",
        "Include Source File",
        "5 Days Delivery"
      ],
      highlight: true,
      primaryColor: "#01594d",
      textColor: "#01594d",
    },
    {
      title: "Standard",
      price: "$510",
      subtitle: "/one-time",
      concepts: "3x Logo Concepts",
      revisions: "2 Revision Per Concept",
      features: [
        "Logo Transparency",
        "Include Source File",
        "5 Days Delivery"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <HeaderMobile />


      {/* Main Content */}
      <main className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mx-auto mb-8 but_sections">
            <div className="  px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center">
                  <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
                </div>
                <span className="but_t">Logo Design</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6  font-satoshi">
              <span className="text-[#80D54B]">Flexible</span> <span className="text-[#01594d]">pricing for all creators</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed best_p">
              The best services at the <span className="font-bold">best prices</span>
            </p>
          </div>

          {/* <PricingCard /> */}
          <PricingCard plans={pricingPlans} />
        </div>
      </main>

      <TestimonialsSection />
      <GetIN />
      <Footer />
      <WhatsApp />
    </div>
  )
}
