import { BRAND_NAME } from "@lib/brand-config"
import React from "react"

const ProductSpecial = () => {
  return (
    <section className="py-8 mx-auto justify-self-center grid items-center gap-8 lg:grid-cols-2">
      <img
        src="/product 5/leo.gif"
        alt="placeholder hero"
        className="max-h-96 w-full object-cover"
      />
      <div className="flex flex-col lg:items-start lg:text-left">
        <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
          Your Special Order
        </h1>
        <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg ">
          you wish your {BRAND_NAME}® Furniture in a special colour, with a
          special wood and with specific dimensions? No problem, just make a
          non-binding inquiry. Together we will discuss your ideas and make you
          an individual offer.
        </p>
        <div className="flex flex-col sm:flex-row sm:mb-2">
          <div>
            <ul className="ml-4 space-y-4 text-left">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-xs md:text-sm lg:text-lg">
                  color as desired
                </p>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-xs md:text-sm lg:text-lg">
                  Various types of wood
                </p>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-xs md:text-sm lg:text-lg">
                  Individual customization
                </p>
              </li>
            </ul>
          </div>
          <div className="place-content-end ml-16 lg:ml-28 mt-8 lg:mt-0">
            <button
              className="group relative inline-block focus:ring-3 focus:outline-hidden"
              type="button"
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
                Inquire now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSpecial
