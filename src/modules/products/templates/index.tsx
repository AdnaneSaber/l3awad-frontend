import React from "react"
import ProductOverview from "./product-overview/index"
import ProductTabs from "./product-tab/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"

const index = () => {
  return (
    <div>
      <ProductOverview />
      <ProductTabs />
      <ProductBlock />
      <OurProducts title="Related Product" />
    </div>
  )
}

export default index
