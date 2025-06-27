import { BRAND_NAME } from "@lib/brand-config"
import Link from "next/link"
import React from "react"

const ProductSpecial = () => {
  return (
    <section className="py-8 px-2 mx-auto justify-self-center grid items-center gap-8 lg:grid-cols-2">
      <img
        src="/product 5/leo.gif"
        alt="placeholder hero"
        className="max-h-96 w-full object-cover"
      />
      <div className="flex flex-col lg:items-start lg:text-left">
        <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
          Votre commande personnalisée
        </h1>
        <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg ">
          Vous souhaitez un meuble {BRAND_NAME}® dans une couleur spécifique, un
          type de bois particulier ou des dimensions précises ? Aucun souci, il
          vous suffit de faire une demande sans engagement. Nous discuterons
          ensemble de vos idées afin de vous proposer une offre sur mesure.
        </p>
        <div className="flex flex-col sm:flex-row sm:mb-2">
          <div>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-3 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg font-bold">
                  Couleur au choix
                </p>
              </li>
              <li className="flex items-center gap-3 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg font-bold">
                  Divers types de bois
                </p>
              </li>
              <li className="flex items-center gap-3 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-6"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg font-bold">
                  Personnalisation individuelle
                </p>
              </li>
            </ul>
          </div>
          <div className="place-content-end ml-12 lg:ml-8 mt-8 lg:mt-0">
            <Link
              href="/contact"
              className="group relative inline-block focus:ring-3 focus:outline-hidden"
              type="button"
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
                → DEMANDER UNE OFFRE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSpecial
