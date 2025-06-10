import React, { useState } from "react"

export const CTASection = ({ props }: any) => {
  const { cartCounter, setCartCounter } = props
  const [productCounter, setProductCounter] = useState(0)

  const addProduct = () => productCounter + 1
  const removeProduct = () => {
    return productCounter > 0 ? productCounter - 1 : 0
  }

  const addToCard = () => {
    const totalCounter = cartCounter + productCounter
    setCartCounter(totalCounter)
    setProductCounter(0)
  }

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
        <div
          className="flex w-full bg-[#f7f8fd] justify-between items-center px-6 py-[11px]  mt-2
        md:w-1/3 md:px-3 md:mt-0"
        >
          <div>
            <button
              onClick={() => setProductCounter(removeProduct)}
              className="font-bold text-orange text-2xl pb-1"
            >
              -
            </button>
          </div>

          <div className="font-bold">{productCounter}</div>

          <div>
            <button
              onClick={() => setProductCounter(addProduct)}
              className="font-bold text-orange text-2xl w-[1rem] pb-1"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={addToCard}
          className="w-full bg-black text-white py-4 font-bold 
          shadow-[0_10px_30px_-12px] shadow-black md:w-2/3"
        >
          <div className="flex gap-4 justify-center">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </div>
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={addToCard}
          className="w-full bg-black text-white py-4 font-bold 
          shadow-[0_10px_30px_-12px] shadow-black "
        >
          <div className="flex gap-4 justify-center">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
            Buy Now
          </div>
        </button>
      </div>
    </section>
  )
}
