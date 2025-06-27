import ProductActions from "@modules/products/components/product-actions"
import { Suspense } from "react"
import ProductActionsWrapper from "../product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import { TbTruckDelivery } from "react-icons/tb"
import { ImCheckmark } from "react-icons/im"
import { BRAND_NAME } from "../../../../lib/brand-config"
type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}
export const DetailsSection = (props: ProductInfoProps) => {
  const { product, region } = props

  return (
    <section className="flex flex-col  gap-3 md:w-full md:max-w-[600px]">
      <div>
        <h1 className="font-bold leading-10 text-2xl mb-4 md:text-3xl md:mb-2">
          {product.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <span className="text-lg font-semibold">🕵️ 100% Non-Detectable</span>
          <span className="text-lg font-semibold">🛠️ Simple Setup</span>
          <span className="text-lg font-semibold">⚙️ Custom-Made</span>
        </div>

        <Suspense
          fallback={
            <ProductActions disabled={true} product={product} region={region} />
          }
        >
          <ProductActionsWrapper id={product.id} region={region} />
        </Suspense>
        <div className="flex mt-4">
          <span className="inline-flex items-center gap-x-1.5   px-2 py-1 text-xs font-medium text-green-700">
            <svg
              className="h-1.5 w-1.5 fill-green-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            Available
          </span>
        </div>
        <ul className="mt-1 space-y-1 text-gray-700">
          <li className="flex text-base font-semibold items-center gap-2">
            <ImCheckmark /> <p>RFID Locking System Included</p>
          </li>
          <li className="flex text-base font-semibold items-center gap-2">
            <ImCheckmark /> <p>Designed in the UK</p>
          </li>
          <li className="flex text-base font-semibold items-center gap-2">
            <ImCheckmark /> <p>Premium Materials</p>
          </li>
        </ul>
        <div className=" ring-1 ring-gray-900/5 bg-white text-card-foreground  p-2 mt-2">
          <p className="mb-1 flex items-center gap-2 font-bold">
            Delivery
            <TbTruckDelivery className="text-lg" />
          </p>
          <p className="text-black">
            Order the <strong className="font-bold">{product.title}</strong> now
            - Receive by July 20th- Order now receive by Aug 3rd*(Due to High
            demand weve had to extend our delivery time for the Void Drawer.)
          </p>
        </div>
        <div className="text-black text-xs p-2 mt-2">
          <p>
            Please note that all of our products are custom-made for you and are
            therefore excluded from withdrawal and return. You are welcome to
            contact us before placing your order {BRAND_NAME}® visit and view
            the products.
          </p>
        </div>
      </div>
    </section>
  )
}
