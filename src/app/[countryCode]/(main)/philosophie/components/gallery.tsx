import React from "react"

const Gallery = () => {
  return (
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
  )
}

export default Gallery
