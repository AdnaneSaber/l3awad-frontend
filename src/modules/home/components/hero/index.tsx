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
            src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-c778-61f4-9980-95a8b62474c5/raw?se=2025-05-26T13%3A54%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=64bd0dfa-7158-530b-a206-5a1a8d8f2c7d&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-26T02%3A44%3A40Z&ske=2025-05-27T02%3A44%3A40Z&sks=b&skv=2024-08-04&sig=8ew26bwGYYg1Nj%2BRHMJUlwz6TuJWs32QNR3Mg80NNBM%3D"
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
                MA BOÎTE
                <span className="text-black ml-0">MYSTER</span>
              </h1>
              <p className="text-white text-sm lg:text-4xl font-sans italic text-center">
                cachez vos affaires dans une boîte
                <span className="text-black ml-2 uppercase font-bold">
                  secrète
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
