import { BRAND_NAME } from "@lib/brand-config"
import React from "react"

const Incentive = () => {
  return (
    <section>
      <div className="xl:w-[90%] lg:w-[95%] md:w-[100%] mx-auto relative md:px-0 px-4 md:my-10 bg-white  overflow-hidden">
        <div className="w-full h-full flex flex-col items-center">
          <section
            className="w-full relative flex items-center flex-col lg:flex-row"
            id="about"
          >
            <img
              className="lg:w-1/2 "
              src="/home/philo.jpeg"
              alt="port image"
            />

            <div className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-white">
              <h2 className="text-black md:text-5xl text-2xl font-bold mb-4">
                Notre philosophie
              </h2>
              <p className="text-black text-md mb-6">
                Chez {BRAND_NAME}, nous croyons qu’un meuble peut être bien plus
                qu’un simple objet de décoration. Il peut devenir un espace
                personnel sécurisé, élégant et discret. Notre mission est de
                réconcilier la sécurité avec le design, en proposant des meubles
                intelligents dotés de systèmes de verrouillage RFID invisibles,
                mais redoutablement efficaces.
              </p>

              <div className="mt-6">
                <a
                  href="#_"
                  className="relative inline-block px-4 py-2 font-medium group uppercase"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    En savoir plus
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Incentive
