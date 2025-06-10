import { Carousel } from "../product-detailsSection/component/carousel"

const slides = [
  "/product 2/second-product1.png",
  "/product 2/second-product2.png",
  "/product 2/second-product3.png",
  "/product 2/second-product4.png",
]

export const Slider = () => {
  return (
    <div className="relative md:w-full md:max-w-[500px]">
      <Carousel>
        {slides.map((s) => (
          <img className="" key={s} src={s} />
        ))}
      </Carousel>
    </div>
  )
}
