import React from "react"
import ProductOverview from "./product-overview/index"
import ProductBlock from "./product-block/index"
import OurProducts from "@modules/home/components/our-products"
import ProductTabs from "./product-tab"
import ProductSpecial from "./product-special"
import { HttpTypes } from "@medusajs/types"
import { notFound } from "next/navigation"
import FeaturedProducts from "@modules/home/components/featured-products"
import { listCollections } from "@lib/data/collections"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
  product,
  region,
}) => {
  if (!product || !product.id) {
    return notFound()
  }
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }
  return (
    <div className="md:max-w-[80%] md:mx-auto md:px-4">
      <ProductOverview product={product} region={region} />
      <ProductTabs product={product} region={region} />
      <ProductSpecial />
      <ProductBlock />
      <FeaturedProducts collections={collections} region={region} />
    </div>
  )
}

export default ProductTemplate
