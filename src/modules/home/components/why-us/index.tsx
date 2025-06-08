import React from "react"

const WhyUs = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="flex justify-center mt-10 text-4xl font-bold text-black">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="/why us/wood.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Good Quality Of Wood
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="/why us/rfid.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Rfid Technology
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="/why us/fast-delivery (1).png"
                  className="w-32 mb-3"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Free and Fast Delivery
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src="/why us/cash-on-delivery.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Cash On Delivery
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
