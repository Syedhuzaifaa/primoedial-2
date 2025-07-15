"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = {
  column1: [
    {
      text: "Obeidullah and me met recently. He caught my attention with a posting where he wrote about the importance of design to be remembered as a brand.<br/><br/>I was thinking about to change my CI anyways so the timing was great for it. <br/><br/>He is a chill dude. We had a kick off meeting and I told him about my plans. He worked out some examples. With a lil bit back and forth communication I am now happy about my branding. <br/><br/>Thanks for the work buddy. Wish you only the best",
      name: "Long Nguyen",
      title: "Consulting Expert",
      image: "/images/Ellipse 899.png?height=50&width=50",
    },
    {
      text: "I highly recommend Obeidullah as your graphic designer. <br/><br/> He has been an invaluable help with my designs, always delivering high-quality work on time! His creativity, patience (!!) and attention to detail have made a huge difference, and I truly recommend working with him!",
      name: "Nikolett Jaksa",
      title: "Personal Branding Expert",
      image: "/images/Ellipse745.png?height=50&width=50",
    },
    {
      text: "I was referred to Obeidullah through a mutual connection that recommended him highly. I was in the process of a complete rebrand to launch my new business.",
      name: "Sarah Mitchell",
      title: "Business Owner",
      image: "/placeholder.svg?height=50&width=50",
    },
    // {
    //   text: "Working with Obeidullah has been fantastic. His attention to detail and creative vision exceeded my expectations.",
    //   name: "Michael Chen",
    //   title: "Marketing Director",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
    // {
    //   text: "Professional, creative, and always on time. Obeidullah transformed our brand identity completely.",
    //   name: "Emma Rodriguez",
    //   title: "Startup Founder",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
  ],
  column2: [
    {
      text: "Obeidullah has been an absolute pleasure to work with. <br/><br/> He's initially built trust with me over LinkedIn just through his content.<br/><br/> I saw how amazing he was at Banners so I used him for a few client redesigns and ultimately this has expanded way beyond that.<br/><br/> I'm working very closely with him, speaking with him most days. He's a great person, like I really enjoy speaking with him. <br/><br/> He's super hardworking, super easy to get along with, and super, super helpful. <br/><br/> I highly recommend working with Obeidullah",
      name: "Charlie Hills",
      title: "AI Content Creator",
      image: "/images/Ellipse 898.png?height=50&width=50",
    },
    {
      text: "“I cannot recommend Obeidullah enough. <br/><br/> He is a stellar design (10/10 skills) and more importantly his work ethic is what impresses me the most.<br/><br/>I've worked with many designers in the past, and let me tell you - Obediullah's a champ!”",
      name: "Fatima Khan",
      title: "Professional Speaker",
      image: "/images/Ellipse746.png?height=50&width=50",
    },
    {
      text: "I worked with Obeidullah on a LinkedIn banner redesign. Although I saw his previous work, he surprised me with the quality he delivered.",
      name: "Jessica Wong",
      title: "Digital Marketer",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "His creativity and problem-solving skills are outstanding. Every project delivered with excellence.",
      name: "Nikolett Jaksa",
      title: "Personal Branding Expert",
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
      text: "Obeidullah was one of the first people I connected with on LinkedIn and the first creator I did a collab with. <br/><br/> Over the past six months, I've loved seeing how much he’s grown as a designer and as a person. <br/><br/> We've worked together on couple of projects, and I can say he’s talented, genuine, and puts his heart into everything he does. <br/><br/>Obeidullah isn’t just a great designer, he’s a great person and I’m grateful to have him in my circle.",
      name: "Daniel Korenblum",
      title: "Personal Branding Expert",
      image: "/images/Ellipse7.png?height=50&width=50",
    },
    {
      text: "Obeidullah designed my banner. He is so cool to work with and he literally revised it until I was satisfied with everything.  <br/><br/>He prioritizes customer satisfaction at all costs. <br/><br/>He is super organized too!Take him for your designing and graphics stuff and you won't be disappointed. 101% recommended",
      name: "Amanda Foster",
      title: "CEO & Founder",
      image: "/images/Ellipse4.png?height=50&width=50",
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
      text: "I reached out to Obeidullah to revamp my LinkedIn profile designs.<br /> work on LinkedIn caught my attention, and I'm so glad I made the decision to get help from him.\n\nAs a busy founder, I don’t always have the time to focus on personal projects, but Obeidullah made the entire process effortless.\n\nAll I had to do was fill out a short questionnaire, and from there, he handled everything with impressive precision.\n\nHe kept me in the loop throughout the process, sending regular updates and Loom videos to explain his approach – which were incredibly helpful!\n\nIf you’re looking for someone to elevate your LinkedIn profile or assist with design projects, I highly recommend him.\n\nTalents like his are rare, so don’t miss out!",
      name: "Ayesha Ameer",
      title: "Personal Branding Expert",
      image: "/images/Ellipse74.png?height=50&width=50",
    },
    // {
    //   text: "Outstanding work quality and professional service. Obeidullah's designs helped elevate our brand presence significantly.",
    //   name: "Thomas Brown",
    //   title: "Sales Director",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
    // {
    //   text: "Reliable, creative, and always delivers on time. Working with Obeidullah has been a game-changer for our brand.",
    //   name: "Sophie Davis",
    //   title: "Brand Strategist",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
    // {
    //   text: "Incredible attention to detail and creative vision. Every project exceeded our expectations.",
    //   name: "James Wilson",
    //   title: "Creative Lead",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
    // {
    //   text: "Professional, talented, and easy to work with. Obeidullah transformed our visual identity completely.",
    //   name: "Maria Garcia",
    //   title: "Design Director",
    //   image: "/placeholder.svg?height=50&width=50",
    // },
  ],
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-30 overflow-hidden">
      {/* Blur effects */}
      <div className="absolute top-273 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-[#f2fae5] via-[#f2fae5]/90 via-[#f2fae5]/70 via-[#f2fae5]/40 via-[#f2fae5]/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#f2fae5] via-[#f2fae5]/90 via-[#f2fae5]/70 via-[#f2fae5]/40 via-[#f2fae5]/20 to-transparent z-20 pointer-events-none"></div>
      {/* <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div> */}
      {/* <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-green-100 via-green-100/60 to-transparent z-15 pointer-events-none"></div> */}

      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex mx-auto justify-center mb-8 but_sections">
          <div className="  px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img src="/Group.png" alt="Tag Icon" className="w-6 h-6" />
              </div>
              <span className="but_t">Testimonials</span>
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
            <div
              className="text-[#01594d] text-xs sm:text-sm leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: `"${testimonial.text.replace(/\n/g, '<br />')}"`,
              }}
            />
            <div className="flex items-center space-x-3">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={32}
                height={32}
                className="sm:w-10 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-800 text-[#013A33]">{testimonial.name}</h4>
                <p className="text-xs text-gray-600 text-[#013A33]">{testimonial.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
