import React from "react"
import MyToggle from "../components/my-toggle"

const CartTemplate = () => {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className=" border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <img
                      className="h-20 w-20 dark:hidden"
                      src="/product 2/second-product1.png"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-20 w-20 dark:block"
                      src="/product 2/second-product2.png"
                      alt="imac image"
                    />
                  </a>

                  <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="counter-input"
                        data-input-counter
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                        placeholder=""
                        value="2"
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        $1,499
                      </p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      PC system All in One APPLE iMac (2023)
                    </a>

                    <div className="space-y-1">
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Height: 10 inches
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: Black
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Composition: 100% calf leather
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        Add to Favorites
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4  border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Subtotal
                </span>
                <span className="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label className="inline-block mb-3 font-semibold text-sm uppercase">
                  Shipping
                </label>
                <div className="block p-2 text-gray-600 w-full text-sm">
                  <div className="grid space-y-3">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-radio-delete"
                          name="hs-radio-with-description"
                          type="radio"
                          defaultChecked
                          className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                          aria-describedby="hs-radio-delete-description"
                        />
                      </div>
                      <label htmlFor="hs-radio-delete" className="ms-3 mt-1">
                        <span className="block text-sm font-semibold text-gray-800">
                          Delivery to curbside (by freight forwarder): 219 €
                        </span>
                      </label>
                    </div>

                    <div className="relative flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-radio-archive"
                          name="hs-radio-with-description"
                          type="radio"
                          className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                          aria-describedby="hs-radio-archive-description"
                        />
                      </div>
                      <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
                        <span className="block text-sm font-semibold text-gray-800">
                          Delivery to the destination (by BALZWERK®): 379 €
                        </span>
                      </label>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-radio-archive"
                          name="hs-radio-with-description"
                          type="radio"
                          className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                          aria-describedby="hs-radio-archive-description"
                        />
                      </div>
                      <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
                        <span className="block text-sm font-semibold text-gray-800">
                          Delivery includes assembly & anchoring for products
                          with safe (by BALZWERK®): 629 €
                        </span>
                      </label>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-radio-archive"
                          name="hs-radio-with-description"
                          type="radio"
                          className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                          aria-describedby="hs-radio-archive-description"
                        />
                      </div>
                      <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
                        <span className="block text-sm font-semibold text-gray-800">
                          Pick up in the showroom (availability for pick up will
                          be communicated by email)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-2">
                <MyToggle />
              </div>
              <div className="border-t py-6">
                <div className="flex  justify-between py-1 font-semibold text-sm uppercase">
                  <span>Total</span>
                  <span>$600</span>
                </div>
                <p
                  className="text-[#8e8e8e] text-sm float-left w-full
                         "
                >
                  (incl. VAT., excl. Shipping costs)
                </p>
              </div>
              <div className="mt-6  items-center">
                <button
                  type="button"
                  className="relative inline-block px-4 py-2 font-medium group w-full"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Proceed to checkout
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-4  border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full  border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  className="group relative inline-block focus:ring-3 focus:outline-hidden w-full"
                  type="button"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 w-full"></span>

                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase w-full">
                    Apply Code
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartTemplate
