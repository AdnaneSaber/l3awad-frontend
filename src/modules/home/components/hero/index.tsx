import { BRAND_NAME } from "@lib/brand-config"

const Hero = () => {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="/home/l3awad_hero.png"
          alt={BRAND_NAME}
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div
            className="max-w-4xl mx-auto text-center pb-24 sm:mb-1"
            data-aos="flip-up"
          >
            <h1 className="text-white mb-4 text-5xl font-bold font-sans italic leading-none text-center lg:text-8xl xl:text-7xl">
              MA BOÎTE{" "}
              <span className="text-black ml-0 drop-shadow-[0_0_6px_white]">
                MYSTER
              </span>
            </h1>
            <p className="text-white text-sm lg:text-4xl font-sans italic text-center">
              cachez vos affaires dans une boîte{" "}
              <span className="thick-underline text-[#000000] relative no-underline uppercase cursor-pointer font-bold drop-shadow-[0_0_6px_white]">
                secrète
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
