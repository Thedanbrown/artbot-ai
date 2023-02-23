import React from "react";
import "./carousel.css";
import { ImageCard } from '../index'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { QUERY_IMAGES, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Autoplay, EffectCoverflow } from "swiper";

SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);


const Carousel = () => {
  const { data: meData, error: meError } = useQuery(QUERY_ME);
  console.log("meData: ", meData);

const imageUrlArray = meData?.me.images || [];
console.log("THIS IS IMAGE ARRAY ", imageUrlArray);

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
      {imageUrlArray.map((imageInfo) => {
  return (
    <SwiperSlide key={imageInfo._id}>
          <ImageCard
            url={imageInfo.url}
            prompt={imageInfo.prompt}
          />
        </SwiperSlide>
  )
})}
    </Swiper>
  );
};

export default Carousel;
