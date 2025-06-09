import React from "react"
import ProductOverview from "./product-overview/index"
import ProductTabs from "./product-tab/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"
import ProductForm from "./product-form"

const index = () => {
  return (
    <div>
      <ProductOverview />
      <div className="flex flex-row justify-around container mx-auto place-items-center">
        <div className="basis-2/3">
          <ProductTabs />
        </div>
        <div className="basis-1/3">
          <ProductForm />
        </div>
      </div>

      <ProductBlock />
      <OurProducts title="Related Product" />
    </div>
  )
}

export default index
