import React from "react"
import ProductOverview from "./product-overview/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"

const index = () => {
  return (
    <div>
      <ProductOverview />
      <ProductBlock />
      <OurProducts title="Related Product" />
    </div>
  )
}

export default index
