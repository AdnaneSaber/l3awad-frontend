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
            className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div
              className={`mx-auto max-w-xl px-1 lg:max-w-none lg:py-16 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : "lg:mx-0"
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
                    Continue Reading
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div
                className={`${
                  index % 2 === 1
                    ? "-ml-48 pr-6 md:-ml-16 lg:right-0"
                    : "-mr-48 pl-6 md:-mr-16 lg:left-0"
                } lg:relative lg:m-0 lg:h-full lg:px-0`}
              >
                <Image
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={item.photo}
                  alt={item.name}
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
