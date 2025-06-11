"use client"

import { useState } from "react"
export const DetailsSection = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [coupon, setCoupon] = useState("")

  const toggleAccordion = () => setIsOpen(!isOpen)
  const { cartCounter, setCartCounter } = props
  const [productCounter, setProductCounter] = useState(0)

  const addProduct = () => productCounter + 1
  const removeProduct = () => {
    return productCounter > 0 ? productCounter - 1 : 0
  }

  const addToCard = () => {
    const totalCounter = cartCounter + productCounter
    setCartCounter(totalCounter)
    setProductCounter(0)
  }
  return (
    <section className="flex flex-col  gap-3 md:w-full md:max-w-[600px]">
      <div>
        <h1 className="font-normal leading-10 text-2xl mb-4 md:text-3xl md:mb-2">
          Fall Limited Edition Sneakers
        </h1>
        <div className="flex  justify-between flex-col items-start mt-2">
          <strong className="font-bold text-base">OUTSIDE</strong>
          <span>Depth 28cm x height 8cm x length</span>
        </div>
        <div className="flex  justify-between flex-col items-start mt-2">
          <strong className="font-bold text-base">INTERIOR</strong>
          <span>Depth 20cm x height 6cm x length</span>
        </div>
        <div className="block w-full">
          <p className="font-medium text-lg leading-8 text-gray-900 mb-1">
            Color
          </p>
          <section className="">
            <div className="container">
              <div className="flex">
                <div className="inline-flex items-center overflow-hidden  space-x-2 border border-stroke">
                  <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
                    Brown
                  </button>
                  <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
                    White
                  </button>
                  <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
                    Black
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full  mx-auto">
          <div className="max-w-2xl mx-auto">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Size
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 "
            >
              <option defaultValue={""}>Choose an option</option>
              <option value="US">60 / 49.5cm</option>
              <option value="CA">90 / 79.5cm</option>
              <option value="FR">120 / 109.5cm</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start mt-2">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-2xl">$125.00</span>

            <span className="bg-[#f7f8fd] text-orange font-bold text-sm px-2 rounded-md">
              50%
            </span>
          </div>

          <span className="text-grayish-blue text-sm font-bold">
            <del>$250.00</del>
          </span>
        </div>
        <div className="flex ">
          <span className="inline-flex items-center gap-x-1.5   px-2 py-1 text-xs font-medium text-green-700">
            <svg
              className="h-1.5 w-1.5 fill-green-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            Available
          </span>
          <div className="flex items-center ml-16 space-x-2">
            <img
              src="/icons/delivery-truck.svg"
              alt="delivery truck"
              width={23}
              height={28}
              className="inline-block h-auto max-w-full align-middle"
            />
            <p className="text-sm">Delivery time: 2 weeks</p>
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <div
            className="flex w-full bg-[#f7f8fd] justify-between items-center px-6 py-[11px]  mt-2
        md:w-1/3 md:px-3 md:mt-0"
          >
            <div>
              <button
                onClick={() => setProductCounter(removeProduct)}
                className="font-bold text-orange text-2xl pb-1"
              >
                -
              </button>
            </div>

            <div className="font-bold">{productCounter}</div>

            <div>
              <button
                onClick={() => setProductCounter(addProduct)}
                className="font-bold text-orange text-2xl w-[1rem] pb-1"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={addToCard}
            className="w-full bg-black text-white py-4 font-bold 
          shadow-[0_10px_30px_-12px] shadow-black md:w-2/3"
          >
            <div className="flex gap-4 justify-center">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </div>
          </button>
        </div>
      </section>
    </section>
  )
}
