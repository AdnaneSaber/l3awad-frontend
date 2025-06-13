import React from "react"

const ProductForm = () => {
  return (
    <div className="relative flex sm:w-full lg:max-w-[24rem] flex-col rounded-lg bg-white border border-slate-200 shadow-sm">
      <div className="p-6">
        <div className="block overflow-visible">
          <div className="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div role="tabpanel" data-value="card">
              <form className="mt-1 flex flex-col">
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                  />
                </div>

                <label className="block mb-1 text-sm text-slate-600 mt-4">
                  Card Details
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="1234 5678 9012 3456"
                />

                <div className="flex">
                  <div className="w-full md:w-8/12 mr-4">
                    <label className="block mb-1 text-sm text-slate-600 mt-4">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-full md:w-4/12">
                    <label className="block mb-1 text-sm text-slate-600 mt-4">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="123"
                    />
                  </div>
                </div>

                <label className="mt-4 block mb-1 text-sm text-slate-600">
                  Holder Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g John Doe"
                />

                <button className="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Pay Now
                </button>
                <button className="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Add To Cart
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="-mt-0.5 h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Payments are secure and encrypted
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
