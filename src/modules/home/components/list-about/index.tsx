import { Abouts } from "@/types/about"
import { BRAND_NAME } from "@lib/brand-config"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { slugify } from "@lib/slugify"

const ListAbout = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
      {Abouts.map((item, index) => (
        <div key={item.id} className="relative">
          <div
            className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-24 ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div
              className={`mx-auto max-w-xl px-4 lg:max-w-none lg:py-16 lg:px-0 flex flex-col justify-center ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <h2 className="text-3xl font-bold tracking-tight text-black">
                {item.name}
              </h2>
              <p className="mt-4 text-lg text-black whitespace-pre-line">
                {(item.object_text.length > 200
                  ? item.object_text.slice(0, 200)
                  : item.object_text
                ).replaceAll("{BRAND_NAME}", BRAND_NAME) +
                  (item.object_text.length > 200 ? "..." : "")}
              </p>
              <div className="mt-6">
                <Link
                  href={`/about/${slugify(item.name)}`}
                  className="relative inline-block px-4 py-2 font-medium group uppercase"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>

            <div
              className={`mt-12 sm:mt-16 lg:mt-0 ${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-xl">
                <Image
                  src={item.photo}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListAbout
