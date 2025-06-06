import React from "react"

const Incentive = () => {
  return (
    <section>
      <div className="xl:w-[90%] lg:w-[95%] md:w-[100%] mx-auto relative md:px-0 px-4 md:my-10 bg-white  overflow-hidden">
        <div className="w-full h-full flex flex-col items-center">
          <section
            className="w-full relative flex items-center flex-col lg:flex-row"
            id="about"
          >
            <img
              className="lg:w-1/2 "
              src="/home/philo.jpeg"
              alt="port image"
            />

            <div className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-white">
              <h2 className="text-black md:text-5xl text-2xl font-bold mb-4">
                Our Philosophy
              </h2>
              <p className="text-black text-md mb-6">
                A young team of craftsmen has developed a new, innovative
                furniture concept from their vision with manual skill and a lot
                of motivation. The best materials and carpentry know-how are the
                basis for our furniture, which should keep the most important
                and valuable things in your household safe and secret.
              </p>

              <div className="mt-6">
                <a
                  href="#_"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Read more
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Incentive
