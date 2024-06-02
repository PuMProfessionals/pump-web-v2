import styled from "styled-components";
import PumpDigest from "../../public/resources/pump-digest.png";
import ImpactReport from "../../public/about/impact-report-2023.png";
import PowerUp from "../../public/events/power-up.png";
import { CardCarousel, Text } from "../../components";

import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const WhatsHappening = ({ ...props }) => (
  <Wrapper {...props}>
    <Title size={baseTheme.size.h1} bold="true">
      What&apos;s Happening?
    </Title>
    <CarouselWrapper>
      <CardCarousel
        className="regular-carousel"
        slides={[
          {
            title: "PuMP Digest",
            description:
              "A student blog with seasonal releases on topics ranging from novel biomedical research to study tips to post-secondary advice.",
            thumbnail: PumpDigest,
            buttonText: "Learn More",
            linkTo: "/resources/blog",
          },
          {
            title: "Impact Report",
            description:
              "We are heading into our third year of operations! Read about our projects and accomplishments from the 2020-21 fiscal year in our first ever impact report.",
            thumbnail: ImpactReport,
            buttonText: "Learn More",
            linkTo: "/about#impact-report",
            imageHeight: 240,
          },
          {
            title: "PowerUp Mentorship",
            description:
              "PowerUp pairs high school students to undergraduate mentors studying the health, life, or biological sciences.",
            thumbnail: PowerUp,
            buttonText: "Learn More",
            linkTo: "/events/power-up",
            imageHeight: 250,
          },
        ]}
        cardHeight={530}
      />
    </CarouselWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 12vh 0;
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;
const CarouselWrapper = styled.div`
  margin: 0 6%;
  ${media(
    1400,
    `   
            margin: auto;
        `
  )};
`;
const Title = styled(Text)`
  padding: 0 5%;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
