import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";

import { Card } from "./Card";
import { media } from "../utils";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export function CardCarousel({
  slides,
  cardHeight,
  cardWidth,
  imageHeight,
  imageWidth,
  component,
  ...props
}) {
  return (
    <div {...props}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
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
        {slides.map((slide) => {
          return (
            <SwiperSlide key={`${slide.title}__swiper__slide`}>
              <SCard
                key={slide.title}
                title={slide.title}
                tags={slide.tags}
                description={slide.description}
                thumbnail={slide.thumbnail}
                buttonText={slide.buttonText}
                linkTo={slide.linkTo}
                style={{ marginBottom: "50px" }}
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                imageHeight={imageHeight ? imageHeight : slide.imageHeight}
                imageWidth={imageWidth ? imageWidth : slide.imageWidth}
                component={component}
                date={slide.date}
              />
            </SwiperSlide>
          );
        })}
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
