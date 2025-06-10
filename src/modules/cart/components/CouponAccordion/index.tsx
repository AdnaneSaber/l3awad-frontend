"use client"

import { useState } from "react"

export default function CouponAccordion() {
  const [isOpen, setIsOpen] = useState(false)
  const [coupon, setCoupon] = useState("")

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div className="w-full  mx-auto">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-4 text-slate-800"
      >
        <span className="font-semibold text-sm uppercase text-black">
          Add coupon (Optional)
        </span>
        <span className="transition-transform duration-300">
          {isOpen ? (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="pb-5 flex">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter your coupon code"
            className="w-full px-4 py-2 border rounded-md text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a
            className="group relative inline-block focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
              Download
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
