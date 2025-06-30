import React from "react"

const WhyUs = () => {
  return (
    <section className="text-gray-700 body-font">
      <h2
        className="flex justify-center mt-10 text-2xl lg:text-4xl font-bold text-black"
        data-aos="fade-up"
      >
        Pourquoi nous choisir ?
      </h2>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div
            className="p-4 md:w-1/4 sm:w-1/2 cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-delay={100}
          >
            <div
              className="px-4 py-6 transform transition duration-500 hover:scale-110"
              title="Verrouillage discret sans serrure visible."
            >
              <div className="flex justify-center">
                <img src="/why us/wood.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Meilleure qualité du bois
              </h2>
            </div>
          </div>

          <div
            className="p-4 md:w-1/4 sm:w-1/2 cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-delay={200}
          >
            <div
              className="px-4 py-6 transform transition duration-500 hover:scale-110"
              title="Des meubles qui s’intègrent parfaitement à votre intérieur."
            >
              <div className="flex justify-center">
                <img src="/why us/rfid.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Sécurité RFID
              </h2>
            </div>
          </div>

          <div
            className="p-4 md:w-1/4 sm:w-1/2 cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-delay={300}
          >
            <div
              className="px-4 py-6 transform transition duration-500 hover:scale-110"
              title="Conçu et fabriqué au Maroc par des artisans passionnés."
            >
              <div className="flex justify-center">
                <img
                  src="/why us/fast-delivery (1).png"
                  className="w-32 mb-3"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Livraison rapide
              </h2>
            </div>
          </div>

          <div
            className="p-4 md:w-1/4 sm:w-1/2 cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-delay={400}
          >
            <div
              className="px-4 py-6 transform transition duration-500 hover:scale-110"
              title="Partout au Maroc sous 72h."
            >
              <div className="flex justify-center">
                <img src="/why us/cash-on-delivery.png" className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Paiement à la livraison
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
