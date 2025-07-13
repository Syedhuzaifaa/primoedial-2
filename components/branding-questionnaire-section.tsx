"use client"

import { Button } from "@/components/ui/button"

export default function BrandingQuestionnaireSection() {
  // const processSteps = [
  //   {
  //     id: "select-service",
  //     title: "Select a service",
  //     icon: (
  //       <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
  //         <path
  //           fillRule="evenodd"
  //           d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8zm5 0a1 1 0 000 2h.01a1 1 0 100-2H13zm-8 3a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8zm5 0a1 1 0 000 2h.01a1 1 0 100-2H13z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     id: "drop-message",
  //     title: "Drop a message",
  //     icon: (
  //       <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
  //         <path
  //           fillRule="evenodd"
  //           d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     id: "fill-questionnaire",
  //     title: "Fill the Questionnaire",
  //     icon: (
  //       <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
  //         <path
  //           fillRule="evenodd"
  //           d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H4v4h9v-4z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  // ]

  const services = ["Website Design", "Logo Design", "Thumbnail Design", "Carousel Design", "Cheatsheet Design"]

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h2 className="avail-h text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">Fill Out Our Personalized</span>
              <br />
              <span className="text-[#80D54B]">Branding Questionnaire</span>
            </h2>

            <p className=" fill-p text-lg sm:text-xl text-[#01594d] mb-8 leading-relaxed">
              Let us know how can we help you elevate
              <br className="hidden sm:block" />
              your branding today!
            </p>

            {/* Process Steps */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8">
              <img src="/images/fill-3.png" alt="" />
            </div>

            <Button className="bg-[#01594d] hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg button_cuss rounded-xl shadow-lg">
              Get in Touch with us
            </Button>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
             <img src="/images/Group 1000001772.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
