import Image from "next/image"
import React from "react"

const Infos = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-2xl lg:text-4xl  font-bold font-manrope leading-normal text-black">
            We didn{`'`}t reinvent the wheel
          </h2>
          <p className="mb-4 text-gray-500 text-base font-normal leading-relaxed">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p className="text-gray-500 text-base font-normal leading-relaxed">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-[300px] h-[300px] object-cover"
            src="/home/pelosophie1.jpg"
            alt="office content 1"
            width={300}
            height={300}
          />
          <Image
            className="w-[300px] h-[300px] object-cover"
            src="/home/pelosophie2.jpg"
            alt="office content 2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default Infos
