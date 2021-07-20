import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import { Card } from "./Card";
import { media } from "../utils";

SwiperCore.use([Pagination]);

export function CardCarousel({ slides, ...props }) {
  return (
    <div {...props}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          750: {
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
  ${media(
    1200,
    `
      margin: auto;
    `
  )};
`;
