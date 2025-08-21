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
          <span className="text-[01594d]-600 font-semibold">fill our personalized branding questionnaire!</span>
        </p>

        <Button className="bg-[#01594d] hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg button_cuss rounded-xl shadow-lg"
                      style={{ boxShadow: "#c1c1c1f0 14px 14px 14px 5px" }}>
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
