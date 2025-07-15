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

export default function WebsiteDesignPricing() {
  const websiteDesignPlans = [
    {
      title: "Landing page",
      price: "$1800",
      subtitle: "/one-time",
      features: [
        "Responsive Design",
        "WordPress Development",
        "Conversion Optimization",
        "Strategic Copywriting",
        "GA4 Setup"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B"
    },
    {
      title: "Custom package",
      price: "",
      subtitle: "",
      features: [
        "Pages As You Want",
        "Responsive Design",
        "WordPress Development",
        "Strategic Copywriting",
        "Daily Updates",
        "GA4"
      ],
      highlight: true,
      primaryColor: "#01594d",
      textColor: "#01594d"
    },
    {
      title: "Website",
      price: "$3500",
      subtitle: "/one-time",
      features: [
        "4-5 Page Included",
        "Responsive Design",
        "WordPress Development",
        "Strategic Copywriting",
        "GA4 Setup"
      ],
      highlight: false,
      primaryColor: "#8ED462",
      textColor: "#80D54B"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Back Button - Outside Header */}
      {/* <div className="fixed top-8 left-8 z-50">
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
      </div> */}

      <HeaderMobile />


      {/* Main Content */}
      <main className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mx-auto  mb-8 but_sections">
            <div className="  px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center">
                  <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
                </div>
                <span className="but_t">Primordial Toolkit</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#80D54B]">Flexible</span>{" "}
              <span className="text-[#01594d]">Pricing For All Creators</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed">
              The <span className="font-bold">best services</span> at the <span className="font-bold">best prices</span>
            </p>
          </div>

          <PricingCard plans={websiteDesignPlans} />

        </div>
      </main>
      <TestimonialsSection />
      <GetIN />
      <Footer />
      <WhatsApp />
    </div>
  )
}
