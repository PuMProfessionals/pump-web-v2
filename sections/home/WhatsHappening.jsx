import Image from "next/image";
import styled from "styled-components";

import PowerUp from "../../public/home/power-up.png";
import PumpDigest from "../../public/home/pump-digest.png";
import ImpactReport from "../../public/home/impact-report.png";
import { CardCarousel } from "../../components";

 
export const WhatsHappening = ({ ...props }) => (
  <Wrapper {...props}>
      <CarouselWrapper>
        <CardCarousel 
            slides={[
                {
                    title: "PuMP Digest",
                    description: "Check out our blog to explore our articles on research, student life, post-secondary education, careers in medicine, and more!",
                    thumbnail: PumpDigest
                },
                {
                    title: "Impact Report",
                    description: "We are heading into our third year of operations! Read about our projects from the 2020-21 fiscal year in our first ever impact report.",
                    thumbnail: ImpactReport
                },
                {
                    title: "PowerUp Mentorship",
                    description: "Explore articles on research, student life, PuMP has partnered up with The STEM Fellowship to launch our mentorship program, PowerUp!",
                    thumbnail: PumpDigest
                },
                {
                    title: "PuMP Digest 2",
                    description: "Check out our blog to explore our articles on research, student life, post-secondary education, careers in medicine, and more!",
                    thumbnail: PumpDigest
                },
                {
                    title: "Impact Report 2",
                    description: "We are heading into our third year of operations! Read about our projects from the 2020-21 fiscal year in our first ever impact report.",
                    thumbnail: ImpactReport
                },
                {
                    title: "PowerUp Mentorship",
                    description: "Explore articles on research, student life, PuMP has partnered up with The STEM Fellowship to launch our mentorship program, PowerUp!",
                    thumbnail: PumpDigest
                }
            ]}
        />
      </CarouselWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
    padding: 0 20px;
`;
const CarouselWrapper = styled.div`
    margin: auto;
    width: 80%;
`;
