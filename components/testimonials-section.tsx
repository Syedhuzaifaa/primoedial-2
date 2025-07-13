"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = {
  column1: [
    {
      text: "I highly recommend Obeidullah as your graphic designer. He has been an invaluable help with my designs, always delivering high-quality work on time!",
      name: "Nikolett Jaksa",
      title: "Personal Branding Expert",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "His work ethic is what impresses me the most. I've worked with many designers in the past, and let me tell you - Obedullah's a champ!",
      name: "Louis Bamberer",
      title: "Content Creator",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "I was referred to Obeidullah through a mutual connection that recommended him highly. I was in the process of a complete rebrand to launch my new business.",
      name: "Sarah Mitchell",
      title: "Business Owner",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Working with Obeidullah has been fantastic. His attention to detail and creative vision exceeded my expectations.",
      name: "Michael Chen",
      title: "Marketing Director",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Professional, creative, and always on time. Obeidullah transformed our brand identity completely.",
      name: "Emma Rodriguez",
      title: "Startup Founder",
      image: "/placeholder.svg?height=50&width=50",
    },
  ],
  column2: [
    {
      text: "Absolutely exceptional work! Obeidullah went above and beyond that I'm working very closely with him, speaking with him most days.",
      name: "Charlie Hills",
      title: "LinkedIn Creator",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "I cannot recommend Obeidullah enough. He is a stellar design (10/10 skills) and more importantly his work ethic is what impresses me the most.",
      name: "David Park",
      title: "Tech Entrepreneur",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "I worked with Obeidullah on a LinkedIn banner redesign. Although I saw his previous work, he surprised me with the quality he delivered.",
      name: "Jessica Wong",
      title: "Digital Marketer",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "His creativity and problem-solving skills are outstanding. Every project delivered with excellence.",
      name: "Robert Taylor",
      title: "Creative Director",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Fast turnaround, great communication, and exceptional design quality. Highly recommended!",
      name: "Lisa Anderson",
      title: "Brand Manager",
      image: "/placeholder.svg?height=50&width=50",
    },
  ],
  column3: [
    {
      text: "I have him in my circle. I reached out to Obeidullah to revamp my LinkedIn profile designs. His work on LinkedIn caught my attention.",
      name: "Daniel Korenblum",
      title: "Personal Branding Expert",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "As a busy founder, I don't always have the time to focus on personal projects, but Obeidullah made the entire process effortless.",
      name: "Amanda Foster",
      title: "CEO & Founder",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "The quality of work and attention to detail is remarkable. Obeidullah truly understands brand aesthetics.",
      name: "Kevin Johnson",
      title: "Marketing Consultant",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Exceptional designer with great communication skills. Made our rebranding process smooth and enjoyable.",
      name: "Rachel Green",
      title: "Product Manager",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Creative solutions and professional approach. Obeidullah delivered beyond our expectations every time.",
      name: "Mark Williams",
      title: "Business Development",
      image: "/placeholder.svg?height=50&width=50",
    },
  ],
  column4: [
    {
      text: "My LinkedIn profile: Quick to reply, polite and proactive with suggestions on how we could make the designs better. Would highly recommend!",
      name: "Fatima Khan",
      title: "Content Strategist",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Outstanding work quality and professional service. Obeidullah's designs helped elevate our brand presence significantly.",
      name: "Thomas Brown",
      title: "Sales Director",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Reliable, creative, and always delivers on time. Working with Obeidullah has been a game-changer for our brand.",
      name: "Sophie Davis",
      title: "Brand Strategist",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Incredible attention to detail and creative vision. Every project exceeded our expectations.",
      name: "James Wilson",
      title: "Creative Lead",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "Professional, talented, and easy to work with. Obeidullah transformed our visual identity completely.",
      name: "Maria Garcia",
      title: "Design Director",
      image: "/placeholder.svg?height=50&width=50",
    },
  ],
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-30 overflow-hidden">
      {/* Blur effects */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-green-100 via-green-100/90 via-green-100/70 via-green-100/40 via-green-100/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-green-100 via-green-100/90 via-green-100/70 via-green-100/40 via-green-100/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 relative z-30">
          <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-gray-700 font-medium">Testimonials</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 relative z-30">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-satoshi">
            <span className="text-[#01594d]">What do the </span>
            <span className="text-[#80D54B]">best creators</span>
            <span className="text-[#01594d]"> say about us</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#01594d] max-w-4xl mx-auto leading-relaxed px-4">
            Our services are <span className="font-bold">endorsed by top industry leaders on LinkedIn</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden relative z-10">
          {/* Column 1 - Scroll Up */}
          <TestimonialColumn testimonials={testimonials.column1} animation="animate-scroll-up" columnId="col1" />

          {/* Column 2 - Scroll Down */}
          <TestimonialColumn testimonials={testimonials.column2} animation="animate-scroll-down" columnId="col2" />

          {/* Column 3 - Scroll Up - Hidden on mobile */}
          <div className="hidden lg:block">
            <TestimonialColumn testimonials={testimonials.column3} animation="animate-scroll-up" columnId="col3" />
          </div>

          {/* Column 4 - Scroll Down - Hidden on mobile */}
          <div className="hidden lg:block">
            <TestimonialColumn testimonials={testimonials.column4} animation="animate-scroll-down" columnId="col4" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialColumn({
  testimonials,
  animation,
  columnId,
}: {
  testimonials: any[]
  animation: string
  columnId: string
}) {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <div className={`space-y-4 sm:space-y-6 ${animation}`}>
      {duplicatedTestimonials.map((testimonial, index) => (
        <Card
          key={`${columnId}-${index}-${testimonial.name}`}
          className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-4 sm:p-6">
            <p className="text-[#01594d] text-xs sm:text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
            <div className="flex items-center space-x-3">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={32}
                height={32}
                className="sm:w-10 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-800 font-satoshi">{testimonial.name}</h4>
                <p className="text-xs text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
