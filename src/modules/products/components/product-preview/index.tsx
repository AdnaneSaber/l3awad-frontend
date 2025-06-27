import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PreviewPrice from "./price"
import Image from "next/image"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })
  const fallbackImage = "/main_prod/main-prod (1).png"
  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block overflow-hidden"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          src={product.images?.[0]?.url || fallbackImage}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
          width={350}
          height={450}
        />

        <Image
          src={product.images?.[1]?.url || fallbackImage}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          width={350}
          height={450}
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.title}
        </h3>
        <h4 className="mt-1.5 tracking-wide text-gray-900">
          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
        </h4>
      </div>
    </LocalizedClientLink>
  )
}
