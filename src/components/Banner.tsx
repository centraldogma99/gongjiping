import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Banner1PNG, Banner2PNG, Banner3PNG } from "../assets"

const BANNERS = [Banner1PNG, Banner2PNG, Banner3PNG]

export const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop
    >
      {BANNERS.map((banner, i) => (
        <SwiperSlide key={i} className="flex items-center justify-center">
          <img src={banner} alt="banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
