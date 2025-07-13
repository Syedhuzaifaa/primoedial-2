"use client"

export default function ServicesSection() {
  const services = [
    {
      id: "branding-questionnaire",
      title: "Customized Branding\nQuestionnaire",
      description:
        "You answer our customized branding questionnaire that helps us understand your design preferences, so we can tailor our design strategy accordingly.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "design-refinement",
      title: "Design & Refinement\nto your projects",
      description:
        "Our creative experts bring concepts to life, ensuring every detail reflects your brand's uniqueness. We collaborate with you for refinements until it's perfect.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      ),
    },
    {
      id: "invoice-delivery",
      title: "Invoice and ready to\ndeliver your work",
      description:
        "Your stunning design is ready! We deliver high-quality assets in any format you want or through any channel you want or through whatsapp or we transfer into Google Drive.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-gray-700 font-medium">Primordial Agency</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">How Can We Help You To</span>
            <br />
            <span className="text-[#01594d]">Create </span>
            <span className="text-green-500">Stunning Designs</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-3xl mx-auto leading-relaxed px-4">
            Our services have been proven effective and are a go-to choice for
            <br className="hidden sm:block" />
            the big creators on LinkedIn. Hear their success stories directly!
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#01594d] rounded-2xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-green-400 text-lg sm:text-xl font-bold mb-4 font-satoshi whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
              <p className="text-white text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
