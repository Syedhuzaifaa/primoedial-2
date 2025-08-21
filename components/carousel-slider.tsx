"use client"

import Image from "next/image"

const carouselProfiles = [
  { name: "Fatima Khan", followers: "70,000+ Followers", image: "/images/Ellipse746.png?height=60&width=60" },
  { name: "Ayesha Ameer", followers: "65,000+ Followers", image: "/images/Ellipse74.png?height=60&width=60" },
  { name: "Sajjal Taparia", followers: "35,000+ Followers", image: "/images/Ellipse4.png?height=60&width=60" },
  { name: "Daniel Korenblum", followers: "70,000+ Followers", image: "/images/Ellipse7.png?height=60&width=60" },
  { name: "Charlie Hills", followers: "100k+ Followers", image: "/images/Ellipse72.png?height=60&width=60" },
  // { name: "Sarah Wilson", followers: "42,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  // { name: "Mike Johnson", followers: "38,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
]

export default function CarouselSlider() {
  const duplicatedProfiles = [...carouselProfiles, ...carouselProfiles]

  return (
  <div className="bg-[#8ed462] z-20  shadow-lg">
  <div className="overflow-hidden">
    <div className="flex animate-scroll-left space-x-4 sm:space-x-8 whitespace-nowrap">
      {duplicatedProfiles.map((profile, index) => (
        <div
          key={`carousel-${index}-${profile.name}`}
          className={`flex items-center space-x-3  px-4 sm:px-6 py-3 min-w-max 
            ${index !== 0 ? 'border-l border-green-700' : ''}`}
        >
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            width={40}
            height={40}
            className="sm:w-12 sm:h-12 rounded-full border-2 border-white"
          />
          <div className="text-white">
            <div className="font-bold text-md text-[#01594d] sm:text-md">{profile.name}</div>
            <div className="text-xs opacity-90">{profile.followers}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}
