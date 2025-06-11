import React from "react"
import ProductOverview from "./product-overview/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"
import ProductTabs from "./product-tab"
import ProductSpecial from "./product-special"

const ProductTemplate = () => {
  return (
    <div className="md:max-w-[80%] md:mx-auto md:px-4">
      <ProductOverview />
      <ProductTabs />
      <ProductSpecial />
      <ProductBlock />
      <OurProducts title="Related Product" />
    </div>
  )
}

export default ProductTemplate
