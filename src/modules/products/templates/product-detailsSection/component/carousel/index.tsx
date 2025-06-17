"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

interface CarouselProps {
  images: string[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

export function Carousel({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden relative md:max-h-full">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images.map((src, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={index} src={src} alt={`Slide ${index}`} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <Image
              src="/icons/icon-previous.svg"
              alt="icon previous"
              width={10}
              height={10}
            />
          </button>
          <button
            onClick={next}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <Image
              src="/icons/icon-next.svg"
              alt="icon next"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full gap-2 mt-5 h-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className="hover:cursor-pointer flex-shrink-0"
          >
            <div className={`${curr === i ? "border-2 border-orange" : ""}`}>
              <Image
                className={`max-h-[80px] ${curr === i ? "opacity-40" : ""}`}
                src={src}
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
