import React from "react"
import UnOrderedList3 from "../UnorderedList"
import { lockOptions } from "@lib/data/features"

const HomeBlock = () => {
  return (
    <section className="mt-11">
      <h2
        className="text-center text-4xl font-bold leading-8 text-black"
        data-aos="fade-up"
      >
        Mécanismes de Verrouillage
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        {lockOptions.map((lock, i) => (
          <div
            key={i}
            className="p-4 max-w-sm"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
              <UnOrderedList3 title={lock.title} items={lock.items} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeBlock
