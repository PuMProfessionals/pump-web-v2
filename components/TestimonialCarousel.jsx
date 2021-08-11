import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";

import { Testimonial } from "./Testimonial";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export function TestimonialCarousel({ slides, ...props }) {
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
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide.author}__${index}__swiper__slide`}>
            <STestimonial testimonial={slide.testimonial} author={slide.author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const STestimonial = styled(Testimonial)`
  margin: 0 auto 40px auto;
`;
