import Image from "next/image";
import styled from "styled-components";

import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media } from "../utils";

/*
    Example:
    - image: image
    - impactNum: some number or title of the entire card
    - Description: text (cool statistic caption)
    - textColour: color of the title and description in card
    - opacity: adjusts how transparent the image will be
    - textSize: size of text at the very top (title)
    - imageHeight and imageWidth are dimensions of thumbnail
*/
export function ImageCard({
  image,
  cardTitle,
  description,
  textColour = baseTheme.colors.navy,
  opacity = 1,
  titleSize = 3.5,
  descriptionSize = 1.5,
  imageHeight = 200,
  imageWidth = 300,
  ...props
}) {
  return (
    <Wrapper
      imageWidth={imageWidth}
      cardHeight={imageHeight}
      image={image}
      {...props}
    >
      <Section>
        <ImageWrapper>
          <SImage
            alt={`Card image for ${cardTitle} ${description}`}
            src={image}
            height={imageHeight}
            width={imageWidth}
            opacity={opacity}
          />
          <Content textColour={textColour} {...props}>
            <Title titleSize={titleSize}>{cardTitle}</Title>
            {!!description && (
              <Description textColour={textColour} size={`${descriptionSize}rem`}>
                {description}
              </Description>
            )}
          </Content>
        </ImageWrapper>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 44px;
  margin-bottom: 30px;
  ${({ theme, cardHeight, imageWidth, image }) => `
        height: ${cardHeight}px;
        max-width: ${imageWidth}px;
        background-image: url(${image});
        p {
            font-family: ${theme.font.lato};
            line-height: 1.5;
        }
  `};
  ${media(
    370,
    `
      max-height: 100%;
      max-width: 100%;
      margin-left: 0;
      padding-bottom: 20px;
    `
  )};
  ${media(
    280,
    `
      max-height: 100%;
      max-width: 100%;
      margin-left: 0;
      padding-bottom: 20px;
    `
  )};
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  min-width: 300px;
`;
const Title = styled.h2`
  ${({ theme, titleSize }) => `
        font-family: ${theme.font.josefin};
        font-size: ${titleSize}rem;
        text-shadow: 2px 2px ${theme.colors.navy};
    `};
  font-weight: bold;
  text-align: center;
  margin: 25px 0px 0px 0px;

  ${media(
    "tablet",
    `  
      margin: 30px 0px 0px 0px;

    `
  )};
`;
const Content = styled.div`
  ${({ textColour }) => `
    color: ${textColour};
`};
  position: absolute;
`;
//It is this block of css that is not functioning, the colour changes just fine but for some reason font-size just will not work
const Description = styled(Text)`
  display: flex;
  ${({ theme, textColour }) => `
        font-family: ${theme.font.josefin};
        color: ${textColour};
        text-shadow: 1px 1px ${theme.colors.navy}
    `};
  font-weight: 100;
  text-align: center;
  justify-content: center;
  margin: 0% 2% 10% 2%;
  ${media(
    "tablet",
    `  
      margin: 0 5% 5% 5%;
    `
  )};
`;
const SImage = styled(Image)`
  border-radius: 30px;
  ${({ opacity }) => `
    opacity: ${opacity};
  `};
`;
