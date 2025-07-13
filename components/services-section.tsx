"use client"

export default function ServicesSection() {
  const services = [
    {
      id: "branding-questionnaire",
      image: "/images/Group 1000001767.png"

    },
    {
      id: "design-refinement",
      image: "/images/Group 1000001768.png"

    },
    {
      id: "invoice-delivery",
      image: "/images/Group 1000001769.png"

    },
  ]

  return (
    <section className=" py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 but_sections">
          <div className="  px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
              </div>
              <span className="but_t">Primordial Agency</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">How Can We Help You To</span>
            <br />
            <span className="text-[#01594d]">Create </span>
            <span className="text-[#80D54B]">Stunning Designs</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-3xl  leading-relaxed ">
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
              className=" transform transition-all duration-300 hover:scale-105"
            >
              <img src={service.image} alt={service.id} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
