import React from "react"

const About = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <h2 className="mx-auto mb-3 text-pretty text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-6 lg:max-w-3xl">
          Who We Are!
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          <a
            href="#"
            className="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
          >
            <div className="sm:col-span-5">
              <div className="mb-4 md:mb-6">
                <div className="flex text-xs uppercase tracking-wider text-zinc-600">
                  <span className="mr-3 md:mr-5 lg:mr-6">Webinar</span>
                  <span className="mr-3 md:mr-5 lg:mr-6">
                    Employer of record
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                Engaging Talent, Embracing Change: Uncover the Value of an
                Employer of Record
              </h3>
              <div className="mt-4 flex items-center space-x-2 md:mt-5">
                <span className="font-semibold md:text-base">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 size-3 transition-transform group-hover:tranzinc-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="order-first sm:order-last sm:col-span-5">
              <div className="aspect-[16/9] overflow-clip border border-border">
                <img
                  src="/product 2/second-product1.png"
                  alt="Duis sem sem, gravida vel porttitor eu, volutpat ut arcu"
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
          >
            <div className="sm:col-span-5">
              <div className="mb-4 md:mb-6">
                <div className="flex text-xs uppercase tracking-wider text-zinc-600">
                  <span className="mr-3 md:mr-5 lg:mr-6">Webinar</span>
                  <span className="mr-3 md:mr-5 lg:mr-6">
                    Employer of record
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                Engaging Talent, Embracing Change: Uncover the Value of an
                Employer of Record
              </h3>
              <div className="mt-4 flex items-center space-x-2 md:mt-5">
                <span className="font-semibold md:text-base">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 size-3 transition-transform group-hover:tranzinc-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="order-first sm:order-last sm:col-span-5">
              <div className="aspect-[16/9] overflow-clip border border-border">
                <img
                  src="/product 2/second-product2.png"
                  alt="Duis sem sem, gravida vel porttitor eu, volutpat ut arcu"
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
