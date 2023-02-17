import React from 'react'
import './carousel.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import SwiperCore, { Navigation, Autoplay, EffectCoverflow } from "swiper";


import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";
import image5 from "./image-5.jpg"; 
import image6 from "./image-6.jpg";
import image7 from "./image-7.jpg";

SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);

const slides = [image1, image2, image3, image4, image5, image6, image7];

const Carousel = () => {
    return (
        <Swiper 
            spaceBetween={30} // add space between the photos
            slidesPerView={3} 
            loop 
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            effect="coverflow"
            coverflowEffect={{
                rotate: 20,
                stretch: 50,
                depth: 200,
                modifier: 1,
                slideShadows: true
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

export default Carousel
