"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle} from "lucide-react"

export default function WhatsApp() {
 

  return (
     <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <div className="relative group">
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-xl">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
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
