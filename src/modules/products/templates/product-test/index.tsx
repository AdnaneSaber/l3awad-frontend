"use client"
import { useState } from "react"

const slides = [
  { bg: "bg-gray-100", label: "First slide" },
  { bg: "bg-gray-200", label: "Second slide" },
  { bg: "bg-gray-300", label: "Third slide" },
  { bg: "bg-gray-100", label: "Fourth slide" },
  { bg: "bg-gray-200", label: "Fifth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
  { bg: "bg-gray-300", label: "Sixth slide" },
]

export default function ProductTest() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full overflow-hidden min-h-96 bg-white rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full flex justify-center items-center p-6 h-96"
          >
            <div
              className={`w-full h-full flex justify-center items-center ${slide.bg}`}
            >
              <span className="text-4xl text-gray-800 transition duration-700">
                {slide.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Thumbnails */}
      <div className="absolute bottom-3 left-0 w-full flex gap-2 px-2 overflow-x-auto">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer border rounded-md w-[150px] h-12 transition-all ${
              current === idx ? "border-blue-400" : "border-gray-200"
            }`}
          >
            <div
              className={`h-full flex items-center justify-center ${slide.bg}`}
            >
              <span className="text-xs text-gray-800">{slide.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center text-gray-800 hover:bg-gray-800/10 rounded-s-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center text-gray-800 hover:bg-gray-800/10 rounded-e-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}
