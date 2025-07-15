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


export default function ThumbnailPricing() {
const thumbnailDesignPlans = [
  {
    title: "Basic",
    price: "$650",
    subtitle: "/month",
    features: [
      "3x Thumbnails Per Week",
      "CTR-Based Strategy",
      "Image Sourcing",
      "2 Revision Per Thumbnail",
      "48Hrs Delivery"
    ],
    highlight: false,
    primaryColor: "#8ED462",
    textColor: "#80D54B"
  },
  {
    title: "Premium",
    price: "$1150",
    subtitle: "/month",
    features: [
      "5x Thumbnails Per Week",
      "CTR-Based Strategy",
      "Image Sourcing",
      "Unlimited Revisions",
      "48Hrs Delivery"
    ],
    highlight: true,
    primaryColor: "#01594d",
    textColor: "#01594d"
  },
  {
    title: "Standard",
    price: "$850",
    subtitle: "/month",
    features: [
      "4x Thumbnails Per Week",
      "CTR-Based Strategy",
      "Image Sourcing",
      "3 Revisions Per Thumbnail",
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
                <span className="but_t">Thumbnail Design</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#80D54B]">Thumbnail</span> <span className="text-[#01594d]">Design Packages</span>
            </h1>
            <p className="text-xl text-[#01594d] max-w-2xl mx-auto leading-relaxed">
              The <span className="font-bold">best services</span> at the <span className="font-bold">best prices</span>
            </p>
          </div>

       <PricingCard plans={thumbnailDesignPlans} />

        </div>
      </main>
      <TestimonialsSection />
      <GetIN />
      <Footer />
      <WhatsApp />
    </div>
  )
}
