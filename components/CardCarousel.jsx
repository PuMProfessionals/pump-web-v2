import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";

import { Card } from "./Card";
import { media } from "../utils";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export function CardCarousel({ slides, ...props }) {
  return (
    <div {...props}>
      <Swiper
        id="swiper-replace"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          1400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.title}__swiper__slide`}>
            <SCard
              key={slide.title}
              title={slide.title}
              description={slide.description}
              thumbnail={slide.thumbnail}
              style={{ marginBottom: "50px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SCard = styled(Card)`
  margin: 0 15% 50px 15%;
  ${media(
    1400,
    `   
            margin: auto;
        `
  )};
`;
