"use client"
import { useState } from "react"

export default function MyToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div className="w-full mx-auto">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-1 text-slate-800"
      >
        <span className="font-semibold text-sm uppercase text-black">
          Buy Now
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
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="pb-5 ">
          <div className="max-w-sm space-y-3">
            <div className="relative">
              <input
                type="text"
                id="hs-floating-input-text-value"
                className="peer p-4 block w-full border-gray-200  sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
                placeholder="Your Full Name"
              />
              <label
                htmlFor="hs-floating-input-text-value"
                className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-gray-500"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                id="hs-floating-input-text-value"
                className="peer p-4 block w-full border-gray-200  sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
                placeholder="Your Phone Number"
              />
              <label
                htmlFor="hs-floating-input-text-value"
                className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-gray-500"
              >
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="hs-floating-input-text-value"
                className="peer p-4 block w-full border-gray-200  sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
                placeholder="you@email.com"
              />
              <label
                htmlFor="hs-floating-input-text-value"
                className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-gray-500"
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="hs-floating-input-text-value"
                className="peer p-4 block w-full border-gray-200  sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
                placeholder="Address"
              />
              <label
                htmlFor="hs-floating-input-text-value"
                className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-gray-500"
              >
                Address
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
