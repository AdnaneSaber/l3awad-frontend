import Image from "next/image"
import React from "react"

const OurProducts = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl uppercase">
            Latest Products
          </h2>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/product_images/product8.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/product_images/product9.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-base text-black group-hover:underline group-hover:underline-offset-4">
                VOID™ Chest Drawer of 2
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/product_images/product8.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/product_images/product9.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-base text-black group-hover:underline group-hover:underline-offset-4">
                VOID™ Chest Drawer of 2
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/product_images/product8.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/product_images/product9.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-base text-black group-hover:underline group-hover:underline-offset-4">
                VOID™ Chest Drawer of 2
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <Image
                src="/product_images/product8.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <Image
                src="/product_images/product9.png"
                fill
                alt="main product"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-base text-black group-hover:underline group-hover:underline-offset-4">
                VOID™ Chest Drawer of 2
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
