import React from "react";
import "./carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { QUERY_IMAGES, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Autoplay, EffectCoverflow } from "swiper";

import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image9 from "./image-9.jpg";

SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);

const slides = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30} // add space between the photos
      slidesPerView={3}
      loop
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <img src={slide} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
