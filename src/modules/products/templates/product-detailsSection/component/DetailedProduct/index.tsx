export const DetailedProduct = () => {
  return (
    <div>
      <h2
        className="uppercase font-bold tracking-[0.13em] text-xs 
        md:text-base"
      >
        Sneaker Company
      </h2>

      <h1 className="font-bold text-3xl mb-4 md:text-5xl md:mb-2">
        Fall Limited Edition Sneakers
      </h1>

      <div className="block w-full">
        <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
          Bag Color
        </p>
        <div className="text">
          <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
            <button
              data-ui="checked active"
              className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-[#000000] focus-within:border-[#000000]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#873e23" />
              </svg>
            </button>
            <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-[#000000] focus-within:border-[#000000]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#000000" />
              </svg>
            </button>
            <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-[#000000] focus-within:border-[#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="20" fill="#FFFFFF" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-col md:items-start mt-2">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-2xl">$125.00</span>

          <span className="bg-[#f7f8fd] text-orange font-bold text-sm px-2 rounded-md">
            50%
          </span>
        </div>

        <span className="text-grayish-blue text-sm font-bold">
          <del>$250.00</del>
        </span>
      </div>
    </div>
  )
}
