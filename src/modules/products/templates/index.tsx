"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, FreeMode } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/thumbs"
import "swiper/css/free-mode"

// Define your image URLs
const mainImages = [
  "https://pagedone.io/asset/uploads/1700472379.png",
  "https://pagedone.io/asset/uploads/1711622397.png",
  "https://pagedone.io/asset/uploads/1711622408.png",
  "https://pagedone.io/asset/uploads/1711622419.png",
  "https://pagedone.io/asset/uploads/1711622437.png",
]

const thumbImages = [
  "https://pagedone.io/asset/uploads/1700472379.png",
  "https://pagedone.io/asset/uploads/1700472430.png",
  "https://pagedone.io/asset/uploads/1700472416.png",
  "https://pagedone.io/asset/uploads/1700472446.png",
  "https://pagedone.io/asset/uploads/1700472467.png",
]

export default function ProductTemplate() {
  // track thumbnail swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image gallery */}
          <div className="flex flex-wrap-reverse">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs, FreeMode]}
              className="nav-for-slider mb-4"
            >
              {thumbImages.map((src, i) => (
                <SwiperSlide key={i} className="cursor-pointer">
                  <Image
                    src={src}
                    alt={`Thumb ${i}`}
                    width={100}
                    height={100}
                    className="rounded-xl transition-all duration-500 object-cover border-2 border-transparent hover:border-indigo-600"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs]}
              className="main-slide-carousel"
            >
              {mainImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={src}
                    alt={`Main ${i}`}
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product details */}
          <div className="pro-detail mx-auto lg:mx-0 lg:pl-8 xl:pl-16">
            <div className="flex items-center justify-between mb-6 gap-6">
              <div>
                <h2 className="font-manrope font-bold text-3xl text-gray-900 mb-2">
                  Yellow Summer Travel Bag
                </h2>
                <p className="font-normal text-base text-gray-500">
                  ABS LUGGAGE
                </p>
              </div>
              <button className="group p-0.5 transition-all duration-500">
                {/* SVG icon here */}
              </button>
            </div>
            {/* Price & rating */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="flex items-center">
                <h5 className="font-semibold text-2xl text-gray-900">
                  $ 199.00
                </h5>
                <span className="ml-3 font-semibold text-lg text-indigo-600">
                  30% off
                </span>
              </div>
              <button className="flex items-center bg-amber-400 py-1.5 px-2.5 rounded-lg gap-1">
                {/* Star SVG */}
                <span className="text-base font-medium text-white">4.8</span>
              </button>
            </div>
            {/* Color options */}
            <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
              {["Black", "Brown", "Beige"].map((c, i) => (
                <div key={i} className="group text-center">
                  <Image
                    src={thumbImages[i]}
                    alt={c}
                    width={100}
                    height={100}
                    className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-indigo-600 object-cover"
                  />
                  <p className="mt-2 text-sm text-gray-400 group-hover:text-indigo-600">
                    {c}
                  </p>
                </div>
              ))}
            </div>
            {/* Size options */}
            <p className="font-medium text-lg text-gray-900 mb-2">Size (KG)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {["Full Set", "10 kg", "25 kg", "35 kg"].map((size, i) => (
                <button
                  key={i}
                  className="border border-gray-200 text-gray-900 text-sm py-2.5 rounded-full font-semibold hover:bg-gray-50 transition"
                >
                  {size}
                </button>
              ))}
            </div>
            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
              <div className="flex border border-gray-400 rounded-full overflow-hidden">
                <button className="px-3 py-2">–</button>
                <input
                  type="text"
                  defaultValue="1"
                  className="w-16 text-center outline-none"
                />
                <button className="px-3 py-2">+</button>
              </div>
              <button className="flex items-center justify-center gap-2 full px-5 py-3 bg-indigo-50 text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition">
                {/* Cart SVG */}
                Add to cart
              </button>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
