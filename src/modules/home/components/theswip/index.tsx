"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/scrollbar"
import TestimonialSlider from "../testimonials"

const Swiper2 = () => {
  return (
    <div className="swiper-container max-h-[40rem]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <TestimonialSlider />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swiper2
