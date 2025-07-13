"use client"

import { useState } from "react"
import { submitContactForm } from "../app/actions/contact"

export default function ConsultationSection() {
  const [formState, setFormState] = useState<{
    loading: boolean
    message: string
    success: boolean
  }>({
    loading: false,
    message: "",
    success: false,
  })

  const handleFormSubmit = async (formData: FormData) => {
    setFormState({ loading: true, message: "", success: false })

    const result = await submitContactForm(formData)

    setFormState({
      loading: false,
      message: result.message,
      success: result.success,
    })

    // Clear message after 5 seconds
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, message: "" }))
    }, 5000)
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm mb-8">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-gray-700 font-medium">Consultation Call</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">Interested In</span>
              <br />
              <span className="text-[#80D54B]">working with us?</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#01594d] mb-6 font-semibold">Learn more about our services:</p>

            <p className="text-base sm:text-lg text-[#01594d] mb-8 leading-relaxed">
              Book a free 30 mins consultation call and get
              <br className="hidden sm:block" />
              to fill our personalized branding
              <br className="hidden sm:block" />
              questionnaire!
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl w-full max-w-md">
              <form action={handleFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 bg-green-100 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-green-100 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-3 bg-green-100 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.loading}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#80D54B] text-xs font-bold">✓</span>
                  </div>
                  <span>{formState.loading ? "Sending..." : "Get a solution"}</span>
                </button>

                {/* Form Message */}
                {formState.message && (
                  <div className={`text-center text-sm ${formState.success ? "text-green-600" : "text-red-600"}`}>
                    {formState.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
