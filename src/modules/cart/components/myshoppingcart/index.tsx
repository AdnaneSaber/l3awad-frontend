import React from "react"
import MyToggle from "../my-toggle"

const MyShoppingCart = () => {
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4  border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Subtotal</span>
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
                    Delivery includes assembly & anchoring for products with
                    safe (by BALZWERK®): 629 €
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
                    Pick up in the showroom (availability for pick up will be
                    communicated by email)
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
  )
}

export default MyShoppingCart
