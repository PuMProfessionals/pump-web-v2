import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";

import { ImageCard } from "./ImageCard";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export function ImageCardCarousel({ slides, ...props }) {
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
          <SwiperSlide key={`${slide.cardTitle}__swiper__slide`}>
            <SImageCard
              key={slide.cardTitle}
              cardTitle={slide.cardTitle}
              description={slide.description}
              image={slide.image}
              textColour={slide.textColour}
              opacity={slide.opacity}
              titleSize={slide.titleSize}
              descriptionSize={slide.descriptionSize}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SImageCard = styled(ImageCard)`
  margin: auto;
  margin-bottom: 15%;
`;
