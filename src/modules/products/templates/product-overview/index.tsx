import { Slider } from "../product-slider"
import { DetailsSection } from "../product-detailsSection"
import { HttpTypes } from "@medusajs/types"
type ProductOverViewProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}
export default function ProductOverView({
  product,
  region,
}: ProductOverViewProps) {
  console.log("Product Images:", product.images)
  const images = product?.images?.map((img) => img.url) || []

  return (
    <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20  md:justify-center lg:px-14 lg:gap-16">
      <Slider images={images} />
      <DetailsSection product={product} region={region} />
    </div>
  )
}
