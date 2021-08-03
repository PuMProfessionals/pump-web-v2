import Image from "next/image";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import { media } from "../utils";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export function ImageCarousel({ slides, ...props }) {
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
          <SwiperSlide 
            key={`${slide.title}__swiper__slide`}
            padding={slide.padding ? slide.padding : 0}
            >
            <ImageWrapper>
                <SImage
                    src={slide.image}
                    alt={`Logo for ${slide.title}`}
                    height={slide.height ? slide.height : 150}
                    width={slide.width ? slide.width : 250}
                />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const ImageWrapper = styled.div`
    padding: 40px 0;
    margin: 0 10vw;
    ${media(
        950,
        `
            margin: auto;
        `
    )};
`;
const SImage = styled(Image)`
    margin: auto;
`;
