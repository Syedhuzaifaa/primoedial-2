"use client"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: "website-design",
      title: "Website Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8zm5 0a1 1 0 000 2h.01a1 1 0 100-2H13zm-8 3a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8zm5 0a1 1 0 000 2h.01a1 1 0 100-2H13z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: "linkedin-banners",
      title: "LinkedIn Banners",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: "logo-design",
      title: "Logo Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: "thumbnail-design",
      title: "Thumbnail Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H4v4h9v-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
              <span className="text-gray-700 font-medium">Portfolio Designs</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">The </span>
            <span className="text-green-500">work</span>
            <span className="text-[#01594d]"> we did for our clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-4xl mx-auto leading-relaxed px-4">
            Primordial has already worked with the <span className="font-bold">industries most recognized names</span>.
            Our work is widespread on LinkedIn
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-200 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[#01594d] text-xl sm:text-2xl font-bold mb-4 font-satoshi">{item.title}</h3>
              </div>
              <p className="text-[#01594d] text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
