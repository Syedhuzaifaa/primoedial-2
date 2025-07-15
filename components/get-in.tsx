"use client"

import { Button } from "@/components/ui/button"

export default function GetIN() {
 

  return (
      <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">Want To Get In</span>
            <br />
            <span className="text-[#80D54B]">Touch With Us?</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#01594d] mb-8 leading-relaxed">
            Book a free 30 mins consultation call and get to
            <br />
            <span className="text-blue-600 font-semibold">fill our personalized branding questionnaire!</span>
          </p>

          <Button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg ">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#80D54B] text-sm font-bold">✓</span>
              </div>
              <span>Book a 1:1 Design Consultation Call</span>
            </div>
          </Button>
        </div>
      </section>
  )
}
