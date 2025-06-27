import { Carousel } from "../product-detailsSection/component/carousel"

type SliderProps = {
  images: string[]
}

export const Slider = ({ images }: SliderProps) => {
  return (
    <div className="relative md:w-full md:max-w-[600px] h-full">
      <Carousel images={images} />
    </div>
  )
}
