import React from "react"

import MyCart from "../components/mycart/index"
import MyShoppingCart from "../components/myshoppingcart/index"

const CartTemplate = () => {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <MyCart />

          <MyShoppingCart />
        </div>
      </div>
    </section>
  )
}

export default CartTemplate
