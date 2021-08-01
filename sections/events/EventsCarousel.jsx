import Head from "next/head";
import styled from "styled-components";

import PumpDigest from "../../public/home/pump-digest.png";
import { CardCarousel, Text } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export function EventsCarousel({
    backgroundColor = baseTheme.colors.greyBlue,
    textColor = baseTheme.colors.white,
    ...props
}) {
  return (
    <div>
      <Head>
        <title>PuMP | Events</title>
      </Head>
      <Wrapper backgroundColor={backgroundColor} {...props}>
        <Title size={baseTheme.size.h1} color={textColor} bold="true">
            Annual Events
        </Title>
        <Description size={baseTheme.size.h4} color={textColor}>
            Opportunities that assist high school students with career planning, relieve stress, and connect with others.
        </Description>
        <CarouselWrapper>
            <CardCarousel
                cardHeight={520}
                cardWidth={230}
                slides={[
                    {
                        title: "PuMP+",
                        description:
                            "Connecting high school students to a variety of opportunities. Meet institutions such as the Sanofi Biogenius Challenge, Vex Robotics, and The Knowledge Society! Join 500+ students and 20+ booths!",
                        thumbnail: PumpDigest,
                        buttonText: "Learn More",
                        linkTo: "/"
                    },
                    {
                        title: "MedHunt",
                        description:
                            "MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
                        thumbnail: PumpDigest,
                        buttonText: "Learn More",
                     linkTo: "/"
                    },
                    {
                        title: "PowerUp Mentorship Program",
                        description:
                            "Partnered with The STEM Fellowship, high school students are paired with university students where they can talk about scholarships, post-secondary applications, or university life.",
                        thumbnail: PumpDigest,
                        buttonText: "Learn More",
                        linkTo: "/"
                    }
                ]}
            />
         </CarouselWrapper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    padding: 20px;
    border-radius: 44px;
    ${({ backgroundColor }) => `
        background-color: ${backgroundColor};
    `};
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
  `};
`;
const Description = styled(Text)`
  padding: 0 5% 5% 5%;
`;
