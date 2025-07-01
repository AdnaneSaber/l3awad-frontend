import { BRAND_NAME } from "@lib/brand-config"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"
export const metadata: Metadata = {
  title: `${BRAND_NAME} | Contact`,
  description:
    "Contact us for special orders or inquiries regarding our products.",
}
export default function ContactForm() {
  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <Image
          src="/home/contact.jpg"
          alt="contact"
          className="w-full h-screen object-cover"
          width={930}
          height={935}
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Souhaitez-vous une commande spéciale ?
            </h3>
            <p className="mt-3">Contactez-nous !</p>
          </div>
          <form className="space-y-5 mt-12 lg:pb-12">
            <div>
              <label className="font-medium">Votre Nom et Prénom*</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm"
              />
            </div>
            <div>
              <label className="font-medium">Email*</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm"
              />
            </div>
            <div>
              <label className="font-medium">Subject*</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm"
              />
            </div>

            <div>
              <label className="font-medium">Message*</label>
              <textarea
                placeholder="How can we help you?"
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
