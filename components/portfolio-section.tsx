"use client"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: "website-design",
      title: "Website Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      image: "/images/Web.png",
    },
    {
      id: "linkedin-banners",
      title: "LinkedIn Banners",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      image: "/images/Web.png",

    },
    {
      id: "logo-design",
      title: "Logo Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      image: "/images/Web.png",

    },
    {
      id: "thumbnail-design",
      title: "Thumbnail Design",
      description:
        "We design websites that do more than just looking good. Every pixel is placed with purpose, from strategy to launch, we make sure your online presence speaks for itself.",
      image: "/images/Web.png",

    },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-30">
      <div className="max-w-6xl mx-auto justify-center">
        {/* Badge */}
        <div className="flex justify-center mb-8 mx-auto but_sections">
          <div className="  px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
              </div>
              <span className="but_t">Portfolio Designs</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="avail-Head text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">The </span>
            <span className="text-[#80D54B]">work</span>
            <span className="text-[#01594d]"> we did for our clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-4xl mx-auto leading-relaxed px-4">
            Primordial has already worked with the <span className="font-bold">industries most recognized <br /> names</span>.
            Our work is widespread on LinkedIn
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#f3fbe6] backdrop-blur-sm border border-[#01594D] rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C4F0A6] rounded-full flex items-center justify-center mb-4">
                 <img src={item.image} alt="" />
                </div>
                <h3 className="text-[#01594d] text-xl sm:text-2xl font-bold mb-4 font-satoshi ">{item.title}</h3>
              </div>
              <p className="text-[#01594d] pp-p text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
