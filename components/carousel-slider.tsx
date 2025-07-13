"use client"

import Image from "next/image"

const carouselProfiles = [
  { name: "Fatima Khan", followers: "1000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "Ayesha Ameer", followers: "51,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "Saijal Taparia", followers: "31,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "Daniel Korenblum", followers: "56,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "John Smith", followers: "75,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "Sarah Wilson", followers: "42,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
  { name: "Mike Johnson", followers: "38,000+ Followers", image: "/placeholder.svg?height=60&width=60" },
]

export default function CarouselSlider() {
  const duplicatedProfiles = [...carouselProfiles, ...carouselProfiles]

  return (
    <div className="bg-green-400 py-4 z-20 shadow-lg">
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left space-x-4 sm:space-x-8 whitespace-nowrap">
          {duplicatedProfiles.map((profile, index) => (
            <div
              key={`carousel-${index}-${profile.name}`}
              className="flex items-center space-x-3 bg-green-500 rounded-lg px-4 sm:px-6 py-3 min-w-max shadow-md"
            >
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <div className="text-white">
                <div className="font-bold text-xs sm:text-sm">{profile.name}</div>
                <div className="text-xs opacity-90">{profile.followers}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
