import React from "react"
import ProductOverview from "./product-overview/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"
import ProductTabs from "./product-tab"

const ProductTemplate = () => {
  return (
    <div>
      <ProductOverview />
      <div className="px-5">
        <ProductTabs />

        {/* <ProductForm /> */}
      </div>
      <ProductBlock />
      <OurProducts title="Related Product" />
    </div>
  )
}

export default ProductTemplate
