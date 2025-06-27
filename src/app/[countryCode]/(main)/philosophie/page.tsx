import { BRAND_NAME } from "@lib/brand-config"
import { Metadata } from "next"
import React from "react"
export const metadata: Metadata = {
  title: `${BRAND_NAME} | Philosophie`,
  description:
    "Découvrez notre philosophie et notre engagement envers l'artisanat de qualité.",
}

export default function Philosophie() {
  return (
    <main>
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
                  de mobilier innovant, fruit de leur vision, avec un
                  savoir-faire artisanal et une grande motivation. Les meilleurs
                  matériaux et un savoir-faire technique sont à la base de nos
                  meubles, conçus pour préserver en toute sécurité et discrétion
                  les objets les plus précieux de votre foyer.
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
      <section className="pt-2 pb-2 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-black text-2xl lg:text-4xl font-bold font-manrope leading-normal lg:text-start text-center ">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Our achievement story is a testament to teamwork and
                      perseverance. Together, we{`'`}ve overcome challenges,
                      celebrated victories, and created a narrative of progress
                      and success.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5  border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        33+ Years
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Influencing Digital Landscapes Together
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5  border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        125+ Projects
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Excellence Achieved Through Success
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5  border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        26+ Awards
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our Dedication to Innovation Wins Understanding
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5  border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100  sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full  object-cover"
                  src="/home/carpenter-contact.jpg"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:mx-0 mx-auto h-full object-cover"
              src="/home/old-man.webp"
              alt="about Us image"
            />
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start gap-4 flex">
                <h2 className="text-black text-2xl lg:text-4xl font-bold font-manrope leading-normal lg:text-start">
                  Building Stronger Communities through Collaboration and
                  Empowerment
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start">
                  Through collaborationperse perspectives and strengths are
                  leveraged to create inclusive environments where everyone has
                  the opportunity to thrive. This approach not only fosters
                  personal growth and achievement but also strengthens the
                  fabric of society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-2xl lg:text-4xl  font-bold font-manrope leading-normal text-black">
              We didn{`'`}t reinvent the wheel
            </h2>
            <p className="mb-4 text-gray-500 text-base font-normal leading-relaxed">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className="text-gray-500 text-base font-normal leading-relaxed">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full"
              src="/product 3/third-product04.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10"
              src="/product 3/third-product07.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <h2 className="mb-4 text-2xl lg:text-4xl  font-bold font-manrope leading-normal text-black">
          something we should show you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/product 3/third-product04.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Chest
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="/product 3/third-product05.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Couch
              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40"
              >
                <img
                  src="/product 3/third-product06.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Nightstand
                </h3>
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40"
              >
                <img
                  src="/product 3/third-product07.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Cabinet
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/product 3/third-product08.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Dresser
              </h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
