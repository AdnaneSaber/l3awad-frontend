"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/scrollbar"
import TestimonialSlider from "../testimonials"

const Swiper2 = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000, once: true })
  }, [])
  return (
    <div className="swiper-container max-h-[40rem]" data-aos="fade-up">
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
