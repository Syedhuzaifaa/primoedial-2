"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BrandGenesisSection() {
  const features = [
    "7-9 section website design",
    "Custom Branding & Development",
    "2 logo design concepts",
    "Unlimited Revisions",
    "15 days delivery",
  ]

  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Product Card */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#01594d] rounded-2xl p-4 sm:p-6 text-center mb-6">
                <h3 className="text-green-400 text-xl sm:text-2xl font-bold mb-2 font-satoshi">Brand Genesis Pack</h3>
                <p className="text-white text-sm mb-4">A package designed for business starting from scratch</p>
                <div className="text-white text-3xl sm:text-4xl font-bold mb-4 font-satoshi">$1499</div>
                <Button className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 sm:px-8 rounded-lg w-full">
                  Get Started
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={`feature-${index}`} className="flex items-center space-x-3 text-white">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative circles - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 bg-green-300 rounded-full opacity-50"></div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full opacity-60"></div>
          </div>

          {/* Right Side - Main Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">Avail our</span>
              <br />
              <span className="text-green-500">Brand Genesis</span>
              <br />
              <span className="text-[#01594d]">Pack Today!!</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#01594d] mb-8 leading-relaxed">
              Your brand deserves a strong start.
              <br />
              Let <span className="font-bold">Primordial</span> Build it for you!
            </p>

            <Button className="bg-[#01594d] hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg">
              Few slots left for this month!
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials positioned around this section - Hidden on mobile */}
      <Card className="hidden xl:block absolute top-8 left-8 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Fatima Khan"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold text-base text-gray-800 font-satoshi">Fatima Khan</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                His Work Ethic Is What Impresses Me The Most. I've Worked With Many Designers In The Past, And Let Me
                Tell You - Obedullah's A Champ!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hidden xl:block absolute top-8 right-8 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Ayesha Ameer"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold text-base text-gray-800 font-satoshi">Ayesha Ameer</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                If You're Looking For Someone To Elevate Your LinkedIn Profile Or Assist With Design Projects, I Highly
                Recommend Him
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hidden xl:block absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Charlie Hills"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold text-base text-gray-800 font-satoshi">Charlie Hills</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                I'm Working Closely With Him, Speaking With Him Most Days. He's A Great Person, He's Super Hardworking,
                Super Easy To Get Along With
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
