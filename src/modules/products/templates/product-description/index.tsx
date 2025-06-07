import React from "react"

const Description = () => {
  return (
    <article className="relative w-full pt-4 bg-white px-6  pb-8  shadow-xl ring-1 ring-gray-900/5 sm:max-w-4xl sm:rounded-lg sm:px-10 mt-5">
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
              Modern MDF 2-Drawer Nightstand with Hidden Compartment Bring
              elegance and functionality together with this modern MDF
              nightstand, designed to enhance any living space with its sleek
              and minimalist style. Measuring 40x40 cm at the base and standing
              50 cm tall, this nightstand offers a clean, contemporary aesthetic
              while remaining warm and inviting.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Materials:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              wood, MDF, metal
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Dimensions:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Width: 40 centimetres <br /> Height: 50 centimetres <br /> Depth:
              40 centimetres
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Colors:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Black
              <br /> White
              <br /> Brown
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Number of Drawers:
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              2
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Total weight
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              5,5 kg (Flap 60) / 7,5kg (Flap 90) / 10kg (Flap 120)
            </dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default Description
