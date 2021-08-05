import styled from "styled-components";

import TieDye from "../../public/about/tiedye-rect.png";
import Navy from "../../public/about/navy-rect.png";
import { Text, ImageCardCarousel } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const QuickFacts = ({ ...props }) => (
  <Wrapper {...props}>
    <Title size={baseTheme.size.h1} bold="true">
      Quick Facts
    </Title>
    <CarouselWrapper>
      <ImageCardCarousel
        id="quick-facts"
        slides={[
          {
            image: Navy,
            cardTitle: "2018",
            description: "YEAR FOUNDED",
            textColour: baseTheme.colors.yellow,
            opacity: 0.95,
            titleSize: 5.5,
            descriptionSize: 1.3,
          },
          {
            image: TieDye,
            cardTitle: "450+",
            description: "STUDENTS INVOLVED",
            textColour: baseTheme.colors.yellow,
            opacity: 0.95,
            titleSize: 5.5,
            descriptionSize: 1.3,
          },
          {
            image: Navy,
            cardTitle: "5",
            description: "BOARDS ACROSS CANADA",
            textColour: baseTheme.colors.yellow,
            opacity: 0.95,
            titleSize: 5.5,
            descriptionSize: 1.3,
          },
          {
            image: TieDye,
            cardTitle: "26+",
            description: "PROJECTS SINCE 2018",
            textColour: baseTheme.colors.yellow,
            opacity: 0.95,
            titleSize: 5.5,
            descriptionSize: 1.3,
          },
        ]}
      />
    </CarouselWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 10vh;
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
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
const CarouselWrapper = styled.div`
  margin: 5% 6%;
  ${media(
    1400,
    `   
            margin: auto;
        `
  )};
`;
