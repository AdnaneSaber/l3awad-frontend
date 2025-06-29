"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { BRAND_NAME } from "@lib/brand-config"
import React from "react"

const Services = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000 })
  }, [])
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="sm:container px-6 py-10 mx-auto w-full">
        <h1 className="sm:text-3xl font-bold tracking-tight text-black text-2xl">
          Plus de sécurité ? {BRAND_NAME}®.
        </h1>
        <iframe
          className="min-w-full mt-12 h-64 md:h-[450px] overflow-hidden"
          src="https://player.vimeo.com/video/1097139688?h=296ca4e6a9&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div
            className="p-6 border  border-r-gray-200 dark:border-gray-700"
            data-aos="fade-up-left"
          >
            <div className="md:flex md:items-start md:-mx-4">
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-medium text-black capitalize ">
                  🛡️ Sécurité Invisible & Personnalisée
                </h1>

                <p className="mt-3 text-gray-700 ">
                  Vous seul(e) connaissez le système de verrouillage intégré à
                  votre meuble {BRAND_NAME}®. Grâce à notre technologie RFID
                  dissimulée, vos objets précieux sont protégés des regards
                  indiscrets et des vols.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-6 border  border-r-gray-200 dark:border-gray-700"
            data-aos="fade-up-right"
          >
            <div className="md:flex md:items-start md:-mx-4">
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-medium text-black capitalize ">
                  🪑 Mobilier avec Compartiment Secret
                </h1>

                <p className="mt-3 text-gray-700 ">
                  Derrière chaque design élégant se cache une fonction secrète.
                  Nos meubles intègrent des compartiments invisibles sécurisés
                  par RFID, pensés pour la discrétion et la sécurité sans
                  compromis sur le style.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-6 border  border-r-gray-200 dark:border-gray-700"
            data-aos="fade-up-left"
          >
            <div className="md:flex md:items-start md:-mx-4">
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-medium text-black capitalize ">
                  🌿 Fabrication Locale & Durable
                </h1>

                <p className="mt-3 text-gray-700 ">
                  Tous nos produits sont conçus, testés et assemblés au Maroc,
                  en privilégiant des matériaux durables. Nous soutenons
                  l’artisanat local tout en respectant l’environnement et la
                  qualité.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-6 border  border-r-gray-200 dark:border-gray-700"
            data-aos="fade-up-right"
          >
            <div className="md:flex md:items-start md:-mx-4">
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-medium text-black capitalize ">
                  ✏️ Design Sur-Mesure
                </h1>

                <p className="mt-3 text-gray-700 ">
                  Besoin d’un meuble unique, à vos dimensions ou avec des
                  exigences spécifiques ? Nous concevons pour vous un meuble
                  sécurisé et élégant, parfaitement adapté à votre usage
                  personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
