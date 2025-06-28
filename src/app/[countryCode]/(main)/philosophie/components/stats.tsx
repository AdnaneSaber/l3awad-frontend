import React from "react"

const Stats = () => {
  return (
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
                personal growth and achievement but also strengthens the fabric
                of society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
