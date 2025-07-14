"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface HeroSectionProps {
  onViewPricing: () => void
}
const profileGroups = [
  ["/images/2.png"],
  ["/images/1.png"],
  ["/images/3.png"],
  ["/images/5.png"],
  ["/images/3.png"],
  ["/images/4.png"],
];
export default function HeroSection({ onViewPricing }: HeroSectionProps) {
  const [testimonialsVisible, setTestimonialsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTestimonialsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Main Hero Content */}
      <main className="mian-con flex items-center justify-center min-h-[76vh] sm:min-h-[87vh]  px-4 sm:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Images Row */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 lg:gap-6 lg:px-[13rem]   ">
            {/* Profile Avatars */}
            <div className="flex justify-center items-center mb-4 md:mb-0 overflow-visible">
              {profileGroups.map((imageSet, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-110 flex-shrink-0 ${index !== 0 ? '-ml-4 sm:-ml-6' : ''}`}
                  style={{ zIndex: 10 + index }}
                >
                  {imageSet.map((img, i) => (
                    <Image
                      key={`${index}-${i}`} // 👈 UNIQUE KEY HERE
                      src={img}
                      alt={`Profile ${index}-${i}`}
                      width={128}
                      height={128}
                      quality={100}
                      className={`w-14 h-14 rounded-full img-fluid shadow-lg object-cover ${i !== 0 ? 'absolute top-2 left-2' : ''}`}
                    />
                  ))}

                </div>
              ))}
            </div>



            {/* Stars and Trust Text */}
            <div className=" justify-center items-center  flex-wrap">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-center md:text-left font-[700]  str-t text-[15.73px] leading-[16.3px] capitalize">
                <div className="text-gray-700">Trusted By The</div>
                <div className="text-[#80D54B] font-bold">Best Creators</div>
              </div>

            </div>
          </div>

          {/* Main Heading */}
<h1 className="heading_cus text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight mt-4 font-satoshi leading-custom-sm">
            <span className="text-[#01594d]">Crafting Bold, </span>
            <span className="text-[#80D54B]">Impactful</span>
            <br />
            <span className="text-[#80D54B]">Designs </span>
            <span className="text-[#01594d]">For Your Brand</span>
          </h1>

          {/* Subtitle */}
          <p className="p-cus text-lg sm:text-xl text-[#01594d] mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Designing brands that don't just catch eyes but capture hearts,
            <br className="hidden sm:block" />
            Create a deep and emotional connection with your audience.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onViewPricing}
            className="bg-[#01594d] button_cus hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-md flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">
                  <div className="w-10 h-10 bg-[#A8EB87] rounded-lg flex items-center justify-center">
                    <img src="/Tags.png" alt="Tag Icon" className="w-6 h-6" />
                  </div>
                </span>
              </div>
              <span className="font-semibold">View Our Pricing</span>
            </div>
          </Button>
        </div>
      </main>

      {/* Testimonial Cards - Hidden on mobile, visible on desktop */}
      <TestimonialCard
        name="Charlie Hills"
        text="I'm Working Closely With Him, Speaking With Him Most Days. He's A Great Person, He's Super Hardworking, Super Easy To Get Along With"
        className={`hidden lg:block absolute top-28 cus-card right-8 w-80 bg-white shadow-xl rounded-xl transform transition-all duration-1000 ${testimonialsVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } delay-20 z-40`}
        image="/images/Ellipse72.png"

      />

      <TestimonialCard
        name="Fatima Khan"
        text="His Work Ethic Is What Impresses Me The Most. I've Worked With Many Designers In The Past, And Let Me Tell You - Obedullah's A Champ!"
        className={`hidden lg:block absolute top-44 cus-card left-8 translate-y-60 w-80 bg-white shadow-xl rounded-xl transform transition-all duration-1000 ${testimonialsVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } delay-20 z-40`}
        image="/images/Ellipse746.png"

      />

      <TestimonialCard
        name="Ayesha Ameer"
        text="If You're Looking For Someone To Elevate Your LinkedIn Profile Or Assist With Design Projects, I Highly Recommend Him"
        className={`hidden lg:block absolute top-22 cus-ayesha cus-card  -translate-y-1/2 w-80 bg-white shadow-xl rounded-xl transform transition-all duration-1000 ${testimonialsVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } delay-20 z-40`}
        image="/images/Ellipse4.png"

      />
    </>
  )
}

function TestimonialCard({ name, text, image, className }: { name: string; text: string; image: string; className: string }) {
  return (
    <Card className={className} >
      <CardContent className="p-2 ">
        <div className="flex items-start space-x-3">
          <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <h4 className="test-h font-bold text-base text-gray-800 font-satoshi">{name}</h4>
            <p className="test-p  text-gray-600 mt-1 leading-relaxed">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
