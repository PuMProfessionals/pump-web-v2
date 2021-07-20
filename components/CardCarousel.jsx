import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper/core';

import { Card } from "./Card";

SwiperCore.use([Pagination]);

export function CardCarousel({
  slidesPerView = 3,
  spaceBetween = 10,
  slides,
  ...props
}) {  

  return (
    <div {...props}>
      <Swiper 
        slidesPerView={slidesPerView} 
        spaceBetween={spaceBetween} 
        pagination={{
          "clickable": true
        }}
      >
          {slides.map(slide => (
              <SwiperSlide key={`${slide.title}__swiper__slide`}>
                <Card 
                  key={slide.title}
                  title={slide.title}
                  description={slide.description}
                  thumbnail={slide.thumbnail}
                />
              </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}