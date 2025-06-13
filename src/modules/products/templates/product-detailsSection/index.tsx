import ProductActions from "@modules/products/components/product-actions"
import { Suspense } from "react"
import ProductActionsWrapper from "../product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import { TbTruckDelivery } from "react-icons/tb"
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
        <div className="flex justify-between flex-col items-start mt-2">
          <strong className="font-bold text-lg">OUTSIDE</strong>
          <span>
            Depth {product.width}cm x height {product.height}cm x length{" "}
            {product.length}cm
          </span>
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
          {/* <div className="flex items-center ml-16 space-x-2">
            <img
              src="/icons/delivery-truck.svg"
              alt="delivery truck"
              width={23}
              height={28}
              className="inline-block h-auto max-w-full align-middle"
            />
            <p className="text-sm">Delivery time: 2 weeks</p>
          </div> */}
        </div>
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
      </div>
    </section>
  )
}
