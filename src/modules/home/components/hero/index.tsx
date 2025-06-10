"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000 })
  }, [])

  return (
    <div className="overflow-x-hidden antialiased w-full">
      <div className="relative z-30 items-center justify-center w-screen h-screen">
        <div className="h-screen">
          <img
            className="object-cover w-full h-full"
            src="/home/l3awad_hero.png"
            title="YouTube video player"
          ></img>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-screen  bg-opacity-50" />
        <div
          data-aos="flip-down"
          className="absolute inset-0 z-30 container flex flex-col items-center justify-center h-full max-w-6xl mx-auto sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
        >
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="relative text-center">
              <h1 className="text-white mb-4 text-5xl font-bold font-sans italic leading-none text-center lg:text-8xl xl:text-8xl">
                MA BOÎTE{" "}
                <span className="text-black ml-0 drop-shadow-[0_0_4px_white]">
                  MYSTER
                </span>
              </h1>
              <p className="text-white text-sm lg:text-4xl font-sans italic text-center">
                cachez vos affaires dans une boîte{" "}
                <span className="thick-underline text-[#000000] relative no-underline uppercase cursor-pointer font-bold">
                  secrète
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
