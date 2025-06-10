"use client"

import React, { useState } from "react"
import Description from "../product-description"
import ProductFaq from "../product-faq"
import ProductReview from "../product-review"

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<
    "description" | "faq" | "locking" | "reviews"
  >("description")

  return (
    <section className="py-4">
      <div className="mx-auto grid w-full">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <button
              onClick={() => setActiveTab("description")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "description"
                  ? "text-black bg-gray-100 "
                  : "hover:text-gray-600 hover:bg-gray-50 "
              }`}
            >
              Description
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab("faq")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "faq"
                  ? "text-black bg-gray-100 "
                  : "hover:text-gray-600 hover:bg-gray-50 "
              }`}
            >
              Product Faq
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "reviews"
                  ? "text-black bg-gray-100 "
                  : "hover:text-gray-600 hover:bg-gray-50 "
              }`}
            >
              Reviews
            </button>
          </li>
        </ul>

        <div className="">
          {activeTab === "description" && <Description />}
          {activeTab === "faq" && <ProductFaq />}
          {activeTab === "locking" && (
            <div className="text-gray-600">
              <h2 className="text-xl font-bold mb-4">Locking Mechanisms</h2>
              <p>
                This section can describe the product’s locking systems,
                materials used, and durability information.
              </p>
            </div>
          )}
          {activeTab === "reviews" && <ProductReview />}
        </div>
      </div>
    </section>
  )
}

export default ProductTabs
