import styled from "styled-components";

import { CardCarousel, Text } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export function EventsCarousel({
  slides,
  title, // string
  description, // string
  backgroundColor = baseTheme.colors.greyBlue,
  textColor = baseTheme.colors.white,
  cardWidth = 230,
  cardHeight = 520,
  ...props
}) {
  return (
    <div className="regular-carousel">
      <Wrapper backgroundColor={backgroundColor} {...props}>
        <Title size={baseTheme.size.h1} color={textColor} bold="true">
          {title}
        </Title>
        <Description size={baseTheme.size.h4} color={textColor}>
          {description}
        </Description>
        <CarouselWrapper>
          <CardCarousel cardHeight={cardHeight} cardWidth={cardWidth} slides={slides} />
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
  padding: 0 5% 3% 5%;
`;
