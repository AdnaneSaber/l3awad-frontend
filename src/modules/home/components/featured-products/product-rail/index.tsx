import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
type CustomStoreProductParams = HttpTypes.StoreProductParams & {
  "collection_id[]": string[]
}
export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      "collection_id[]": [collection.id],
      fields: "*variants.calculated_price",
    } as CustomStoreProductParams,
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {collection.title}
        </Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <div key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </div>
          ))}
      </div>
    </div>
  )
}
