"use client"

import { Button } from "@/components/ui/button"
// import { MessageCircle } from "lucide-react"

export default function WhatsApp() {


  return (
    <div className="fixed bottom-10 right-6 sm:bottom-8 sm:right-8 z-50">
      <div className="relative group">
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=447894683735&text&type=phone_number&app_absent=0"
        >
         <Button className="bg-transparent hover:bg-transparent text-white rounded-full shadow-none p-0">
  <img
    src="/Whatsapp.png"
    alt="WhatsApp"
    width={50}
    height={50}
  />
</Button>

        </a>
        <div className="absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-xl p-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <p className="text-sm">
            <span className="text-gray-600">Need Help? </span>
            <span className="font-bold text-gray-800">Chat with Primordial!</span>
          </p>
        </div>
      </div>
    </div>

  )
}
