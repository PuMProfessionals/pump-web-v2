import styled from "styled-components";
import Image from "next/image";

import { Text } from "./Text";
import { media } from "../utils";
import { baseTheme } from "../theme";

/*
    Example:
    - Thumbnail: image
    - isImageTop: determines if the image is above the text
    - impactNum: some number or title of the entire card
    - Description: text (cool statistic caption)
    - textColour: color of the title and description in card
    - textSize: size of text at the very top (title)
    - imageHeight and imageWidth are dimensions of thumbnail
*/
export const ImpactCard = ({
  thumbnail,
  isImageTop = true,
  cardTitle,
  description,
  textColour = baseTheme.colors.navy,
  titleSize = 3.5,
  imageHeight = 280,
  imageWidth = 300,
  cardHeight = 370,
  ...props
}) => {
  return (
    <Wrapper cardHeight={cardHeight} {...props}>
      <Section isImageTop={isImageTop}>
        <ImageWrapper>
          <Image
            alt={`Card image for ${cardTitle} ${description}`}
            src={thumbnail}
            height={imageHeight}
            width={imageWidth}
          />
        </ImageWrapper>
        <Content textColour={textColour} {...props}>
          <Title titleSize={titleSize}>{cardTitle}</Title>
          {!!description && (
            <Description textColour={textColour}>{description}</Description>
          )}
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  width: 50%;
  ${({ cardHeight }) => `
    height: ${cardHeight}px;
  `};

  ${media(
    "tablet",
    `  
      margin-left: 0;
      width: 100%;
      height: 100%;
      padding-bottom: 20px;
    `
  )};
`;
const Section = styled.div`
  display: flex;
  ${({ isImageTop }) => `
    flex-direction: ${isImageTop ? "column" : "column-reverse"};
`};
`;
const Content = styled.div`
  ${({ textColour }) => `
    color: ${textColour};
`};
`;
const Title = styled.h2`
  ${({ theme, titleSize }) => `
        font-family: ${theme.font.josefin};
        font-size: ${titleSize}rem;
    `};
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
  ${media(
    "tablet",
    `  
      margin: 40px 0px 10px 0px;
    `
  )};
`;
const Description = styled(Text)`
  display: flex;
  ${({ theme, textColour }) => `
        font-family: ${theme.font.josefin};
        color: ${textColour};
    `};
  font-weight: 600;
  text-align: center;
  font-size: 1.5rem;
  padding: 0 10% 0 10%;
  justify-content: center;
  ${media(
    "tablet",
    `  
      margin: 0 5% 5% 5%;
    `
  )};
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5% 0;
`;
