import { HttpTypes } from "@medusajs/types"
import React, { useEffect } from "react"
type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

const Description = (props: ProductInfoProps) => {
  const { product, region } = props
  useEffect(() => {
    console.log("Product Variants:", product.variants)
  }, [product])
  return (
    <article className="relative w-full pt-4 bg-white px-6  pb-8  shadow-xl ring-1 ring-gray-900/5 sm:max-w-4xl sm:px-10 mt-5">
      <div className="px-4 sm:px-0 ">
        <h3 className="text-base/7 font-semibold text-gray-900 ">
          Description of the product
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Product Description:
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {product.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Materials:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {product.material ? product.material : "-"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Dimensions:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Width: {product.width} centimetres <br /> Height: {product.height}{" "}
              centimetres <br /> Length:
              {product.length} centimetres
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Colors:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {product.variants && product.variants.length > 0 ? (
                <ul className="list-disc ml-5">
                  {product.variants.map((variant, index) => (
                    <li key={variant.id || index}>
                      {variant.title ?? "Untitled variant"}
                    </li>
                  ))}
                </ul>
              ) : (
                "-"
              )}
            </dd>
          </div>
          {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Number of Drawers:
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              2
            </dd>
          </div> */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Total weight
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {product.weight} kg
            </dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default Description
