"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const pricingItems = [
    {
      id: "website-design",
      title: "Website Design",
      href: "/website-design",
    },
    {
      id: "logo-designing",
      title: "Logo Designing",
      href: "/logo-design",
    },
    {
      id: "thumbnail-design",
      title: "Thumbnail Design",
      href: "/thumbnail-design",
    },
    {
      id: "li-profile-rebrand",
      title: "Li Profile Rebrand",
      href: "/li-profile-rebrand",
    },
    {
      id: "carousel-designs",
      title: "Carousel Designs",
      href: "/carousel-designs",
    },
    {
      id: "cheatsheets",
      title: "Cheatsheets",
      href: "/cheatsheets",
    },
  ]

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 px-4 sm:px-8 relative z-30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex mx-auto justify-center mb-8 but_sections">
          <div className="  px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
              </div>
              <span className="but_t">Pricing Section</span>
            </div>
          </div>
        </div>


        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">Experience the creative origin of</span>
            <br />
            <span className="text-[#01594d]">designs at the </span>
            <span className="text-[#80D54B]">most affordable rates</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-4xl mx-auto leading-relaxed px-4">
            Take advantage of the <span className="font-bold">Primordial Toolkit</span> and stand out immediately. Use
            <br className="hidden sm:block" />
            our world-class graphic designers to put your brand out there!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {pricingItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#01594d] border border-[#8ED462] rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center items-center gap-3">
                <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />

                <h3 className="text-white text-lg sm:text-xl font-bold font-satoshi">{item.title}</h3>
              </div>
              <Link href={item.href}>
                <Button className="book_button bg-green-400 hover:bg-green-500 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-full text-sm sm:text-base">
                  View Full Pricing
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
