"use client"
import React, { useEffect, useState } from "react"
import { FiTruck } from "react-icons/fi"
import { AiOutlineSafety, AiOutlineStar } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

const MainHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your Style With Premium Fashion
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Discover the latest trends and timeless pieces that define
                modern elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                Shop Now
                <BsArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all">
                View Latest Trends
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <FiTruck className="text-2xl text-gray-700" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineSafety className="text-2xl text-gray-700" />
                <span className="text-sm font-medium">Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineStar className="text-2xl text-gray-700" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
                alt="Fashion Model in Premium Clothing"
                className="rounded-2xl w-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                style={{ height: "600px" }}
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-sm font-semibold text-gray-600">
                  Featured Collection
                </div>
                <div className="text-2xl font-bold text-gray-900">$299.99</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <AiOutlineStar key={i} className="text-yellow-500" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    (2.5k reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero
