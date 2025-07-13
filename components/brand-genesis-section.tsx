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
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Product Card */}
          <div className="relative order-2 lg:order-1">
            <img src="/images/Group 1000001770.png" alt="" />
          </div>

          {/* Right Side - Main Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl avail-Head mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">Avail our</span>
              <br />
              <span className="text-[#80D54B]">Brand Genesis</span>
              <br />
              <span className="text-[#01594d]">Pack Today!!</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#01594d] avail-p mb-8 leading-relaxed">
              Your brand deserves a strong start.
              <br />
              Let <span className="font-bold">Primordial</span> Build it for you!
            </p>

            <Button className="bg-[#01594d] hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg button_cuss rounded-xl shadow-lg">
              Few slots left <span className="font-normal">for this month!</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials positioned around this section - Hidden on mobile */}
      <Card className=" cus-card hidden xl:block absolute top-8 left-1/2 transform -translate-x-1/2 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-2">
          <div className="flex items-start space-x-3">
            <Image
              src="/images/Ellipse746.png?height=50&width=50"
              alt="Fatima Khan"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold test-h text-gray-800 font-satoshi">Fatima Khan</h4>
              <p className="test-p text-gray-600 mt-1 leading-relaxed">
                His Work Ethic Is What Impresses Me The Most. I've Worked With Many Designers In The Past, And Let Me
                Tell You - Obedullah's A Champ!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="cus-card hidden xl:block absolute top-24 right-8 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-2">
          <div className="flex items-start space-x-3">
            <Image
              src="/images/Ellipse74.png?height=50&width=50"
              alt="Ayesha Ameer"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold test-h text-gray-800 font-satoshi">Ayesha Ameer</h4>
              <p className="test-p text-gray-600 mt-1 leading-relaxed">
                If You're Looking For Someone To Elevate Your LinkedIn Profile Or Assist With Design Projects, I Highly
                Recommend Him
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="cus-card hidden xl:block absolute bottom-8 right-40 transform -translate-x-1/2 w-80 bg-white shadow-xl rounded-xl z-40">
        <CardContent className="p-2">
          <div className="flex items-start space-x-3">
            <Image
              src="/images/Ellipse72.png?height=50&width=50"
              alt="Charlie Hills"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold test-h text-gray-800 font-satoshi">Charlie Hills</h4>
              <p className="test-p text-gray-600 mt-1 leading-relaxed">
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
