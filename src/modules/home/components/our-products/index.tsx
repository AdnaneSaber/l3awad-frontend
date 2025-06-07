import { products } from "@lib/data/ourProduct"
import React from "react"

const OurProducts = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Latest product
          </h2>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <a
              key={product.id}
              href="#"
              className="group block overflow-hidden"
            >
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {product.name}
                </h3>

                <p className="mt-1.5 tracking-wide text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProducts
