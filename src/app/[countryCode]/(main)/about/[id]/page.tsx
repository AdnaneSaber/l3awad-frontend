import { Abouts } from "@/types/about"
import { BRAND_NAME } from "@lib/brand-config"
import ProductSpecial from "@modules/products/templates/product-special"
import { notFound } from "next/navigation"
import React from "react"

export default function AboutDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const aboutItem = Abouts.find((item) => item.id.toString() === params.id)

  if (!aboutItem) return notFound()
  console.log("Photo URL:", aboutItem.photo)

  const fullText = aboutItem.object_text.replaceAll("{BRAND_NAME}", BRAND_NAME)
  return (
    <div className="max-w-screen-xl mx-auto  relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${aboutItem.photo})`,
        }}
        title={aboutItem.name}
      ></div>
      <div className="max-w-7xl mx-auto">
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative">
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {aboutItem.name}
                  </h2>
                  <p className="mb-4">{aboutItem.object_text}</p>
                  <p>
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick.sdqd
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <img
                    className="w-full"
                    src={aboutItem.photo2}
                    alt="office content 1"
                  />
                  <img
                    className="mt-4 w-full lg:mt-10"
                    src={aboutItem.photo3}
                    alt="office content 2"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <ProductSpecial />
    </div>
  )
}
