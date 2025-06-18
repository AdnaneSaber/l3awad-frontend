"use client"

import { useEffect, useRef, useState } from "react"

const QuickView: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const slideContainerRef = useRef<HTMLDivElement>(null)

  const images = [
    "https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png",
    "https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png",
    "https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png",
  ]

  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % images.length)
  }

  const goPrev = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const slides = slideContainerRef.current?.children
    if (slides) {
      Array.from(slides).forEach((el, i) => {
        ;(el as HTMLElement).style.transform = `translateX(${
          100 * (i - slideIndex)
        }%)`
      })
    }
  }, [slideIndex])

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      {!visible && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => setVisible(true)}
            className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold"
          >
            Open Quick View
          </button>
        </div>
      )}

      {visible && (
        <div className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
          <div className="flex justify-end">
            <button
              onClick={() => setVisible(false)}
              aria-label="Close"
              className="focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
            {/* Slider */}
            <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50 px-2 py-20 md:py-6 md:px-6 lg:py-24">
              <div className="flex items-center">
                <button
                  onClick={goPrev}
                  aria-label="slide back"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                >
                  <svg
                    className="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 16L24 32L40 48"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="slider relative overflow-hidden w-[200px] h-[400px] sm:w-[170px] sm:h-[300px]">
                <div className="slide-ana h-[360px]" ref={slideContainerRef}>
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full h-full absolute transition-all duration-700"
                    >
                      <img
                        src={img}
                        alt="A black chair with wooden legs"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <button
                  onClick={goNext}
                  aria-label="slide forward"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                >
                  <svg
                    className="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 16L40 32L24 48"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Bar Stool
              </h1>
              <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
                You dont just want to be comfortable sitting in a bar stool—you
                want to be comfortable shimmying it up to the bar, closer to
                your lover, or back slightly to include a third person in the
                conversation.
              </p>

              <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                <button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent dark:border-white dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800">
                  View Details
                </button>
              </div>

              <div className="mt-6">
                <button className="text-xl underline text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-200">
                  add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuickView
