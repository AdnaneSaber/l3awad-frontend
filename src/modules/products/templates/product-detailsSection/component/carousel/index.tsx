import { ReactNode, useState, useEffect } from "react"

interface CarouselProps {
  children: ReactNode[]
  autoSlide?: boolean
  autoSlideInterval?: number
}
const thumbnails: string[] = [
  "/product 2/second-product1.png",
  "/product 2/second-product2.png",
  "/product 2/second-product3.png",
  "/product 2/second-product4.png",
]
export function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden relative max-h-72 md:max-h-full ">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <img
              className="h-[10px] w-[10px]"
              src="/icons/icon-previous.svg"
              alt=""
            />
          </button>
          <button
            onClick={next}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <img
              className="h-[10px] w-[10px]"
              src="/icons/icon-next.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full gap-4 mt-8 h-8">
        {thumbnails.map((t, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className="hover:cursor-pointer focus:opacity-20 "
          >
            <div
              className={`
                  ${curr === i ? "border-2 border-orange" : ""}`}
            >
              <img
                className={` 
                    ${curr === i ? "opacity-40" : ""}`}
                src={t}
                alt=""
                width={75}
                height={75}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
