"use client"

import React from "react"

type AboutContentProps = {
  name: string
  fullText: string
  photo2: string
  photo3: string
}

const AboutContent: React.FC<AboutContentProps> = ({
  name,
  fullText,
  photo2,
  photo3,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="mb-4">{fullText}</p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full" src={photo2} alt="office content 1" />
          <img
            className="mt-4 w-full lg:mt-10"
            src={photo3}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutContent
