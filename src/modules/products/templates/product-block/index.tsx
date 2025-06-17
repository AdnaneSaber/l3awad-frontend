import React from "react"
import { BRAND_NAME } from "../../../../lib/brand-config"

const ProductBlock = () => {
  return (
    <section className="py-8 place-items-center">
      <div className="container">
        <div className="mt-24">
          <div className="mx-auto flex w-fit flex-col items-center gap-8 md:gap-12">
            <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <img
                  src="/main_prod/product (8).png"
                  alt="Ready to use blocks"
                  className="order-first max-h-[400px] w-full object-cover md:order-last"
                />
                <div>
                  <h2 className="mb-4 text-2xl font-semibold md:text-4xl">
                    Pourquoi choisir un meuble à compartiment secret ?
                  </h2>
                  <p className="text-xl text-zinc-600">
                    {BRAND_NAME} propose des meubles élégants et sécurisés,
                    dotés de rangements cachés pour mettre vos objets de valeur
                    à l’abri.
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <li className="flex items-center gap-2">
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
                        className="lucide lucide-circle-check w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium"> Rangement dissimulé</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="lucide lucide-circle-check w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">
                        {" "}
                        Objets précieux bien cachés
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="lucide lucide-circle-check w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">Meuble sur mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="lucide lucide-circle-check w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">
                        Protection contre le vol
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
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
                        className="lucide lucide-circle-check w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">
                        Excellent rapport qualité/prix
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductBlock
