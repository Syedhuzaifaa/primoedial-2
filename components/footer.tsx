"use client"

import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "About Us", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ]

  return (
    <section className="bg-[#8ED462] footer_cus text-[#01594d] py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Description */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/images/Group 1000001746.png" alt="" />
          </div>
          <p className="consul-p-m text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4 foot-p">
            Primordial is a design agency that focuses on freeing up valuable <br /> hours for clients to focus on high-impact
            business development
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center  mb-8 flex-wrap">
          {navigationLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <a href={link.href} className=" footer-menu hover:text-[#013A33A3] text-[#013A33] transition-colors font-medium text-sm sm:text-base">
                {link.name}
              </a>
              {index < navigationLinks.length - 1 && <span className="text-[#01594d] mx-2 sm:mx-4">•</span>}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#01594d] mb-8"></div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4  sm:w-5 sm:h-5" />
            <span className="font-medium text-[#013A33] foot-mail text-sm sm:text-base">PrimordialCreations@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4  sm:w-5 sm:h-5" />
            <span className="font-medium text-[#013A33] foot-mail text-sm sm:text-base">+44 7894683735</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm">© 2025 Primordial Creations. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
