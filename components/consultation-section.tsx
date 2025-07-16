"use client"

import { useState } from "react"
import { submitContactForm } from "../app/actions/contact"
import { ArrowRight } from "lucide-react"
import toast from "react-hot-toast"

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

  // Show toast
  if (result.success) {
    toast.success("Email sent successfully!")
  } else {
    toast.error(result.message || "Something went wrong!")
  }

  // Clear message after 5 seconds (optional)
  setTimeout(() => {
    setFormState((prev) => ({ ...prev, message: "" }))
  }, 5000)
}


  return (
    <section className="py-12 sm:py-16 px-4 sm:px-16 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center mx-auto sm:mx-0 mb-8 but_sections">
              <div className="  px-6 py-3 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center">
                    <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
                  </div>
                  <span className="but_t">Consultation Call</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-satoshi">
              <span className="text-[#01594d]">Interested In</span>
              <br />
              <span className="text-[#80D54B]">working with us?</span>
            </h2>

            <p className="consul-h consul-p-m  text-[#01594d]  ">Learn more about our services:</p>

            <p className="consul-p-m text-[#01594d] mb-8 consul-p leading-relaxed">
              Book a free 30 mins consultation call and get
              <br className="hidden sm:block" />
              to fill our personalized branding questionnaire!
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative flex justify-center">
            <div className="bg-white border border-4 border-[#0000001A] rounded-2xl p-6 sm:p-6 shadow-xl w-full max-w-md">
              <form action={handleFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-[#01594D] block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    required
                    className="w-full px-3 py-2 bg-[#F3F3F3] border border-green-200 rounded-lg text-sm sm:text-base placeholder-[#01594D] focus:outline-none focus:ring-2 focus:ring-[#01594DA2] focus:border-transparent"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-[#01594D] block text-sm font-medium text-gray-700 mb-2">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Service"
                    name="Service"
                    placeholder="Service"
                    // required
                    className="w-full px-3 py-2 bg-[#F3F3F3] border border-green-200 rounded-lg placeholder-[#01594D] focus:outline-none focus:ring-2 focus:ring-[#01594DA2] focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="text-[#01594D] block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-3 bg-[#F3F3F3] border border-green-200 rounded-lg placeholder-[#01594D] focus:outline-none focus:ring-2 focus:ring-[#01594DA2] focus:border-transparent resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.loading}
                  className="text-[#01594D] w-auto px-[14px] pr-[14px] pl-[7px] py-[6px] bg-[#8ED462] hover:bg-[#76C14D] text-white font-semibold rounded-full shadow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 bg-[#01594D] hover:bg-green-600 rounded-full transition-colors shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 text-[#8ED462]" />
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
