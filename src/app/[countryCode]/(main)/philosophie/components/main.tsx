import { BRAND_NAME } from "@lib/brand-config"
import React from "react"

const Main = () => {
  return (
    <section className="pt-6 pb-2">
      <div className="overflow-hidden">
        <div className="">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center px-2">
              <h1 className="mb-8 text-pretty text-4xl font-medium lg:text-8xl">
                We are <span className="uppercase">{BRAND_NAME}</span>®
              </h1>
              <p className="mx-auto max-w-screen-md text-zinc-600 lg:text-xl">
                Une jeune équipe d{`'`}artisans a développé un nouveau concept
                de mobilier innovant, fruit de leur vision, avec un savoir-faire
                artisanal et une grande motivation. Les meilleurs matériaux et
                un savoir-faire technique sont à la base de nos meubles, conçus
                pour préserver en toute sécurité et discrétion les objets les
                plus précieux de votre foyer.
              </p>
            </div>
          </div>
          <img
            src="/home/phelo.jpg"
            alt="placeholder"
            className="mx-auto mt-4 max-h-[700px] w-full max-w-7xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Main
