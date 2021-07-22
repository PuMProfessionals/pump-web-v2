import styled from "styled-components";
import Image from "next/image";
import { media } from "../utils";

/*
    Example:
    - Thumbnail: image
    - impactNum: some number
    - Description: text (cool statistic caption)
    - imageHeight and imageWidth are dimensions of thumbnail
*/
export const ImpactCard = ({
  thumbnail,
  impactNum,
  description,
  imageHeight = 200,
  imageWidth = 300,
  cardHeight = 370,
  ...props
}) => {
  return (
    <Wrapper cardHeight={cardHeight} {...props}>
      <Section>
        <ImageWrapper>
          <Image
            alt={`Card image for ${impactNum} ${description}`}
            src={thumbnail}
            height={imageHeight}
            width={imageWidth}
          />
        </ImageWrapper>
        <Content>
          <Title>{impactNum}</Title>
          <Description>{description}</Description>
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  margin-bottom: 30px;
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
  flex-direction: column;
`;
const Content = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.navy};
`};
`;
const Title = styled.h2`
  ${({ theme }) => `
        font-family: ${theme.font.josefin};
    `};
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
  font-size: 3.5rem;
  ${media(
    "tablet",
    `  
      margin: 40px 0px 10px 0px;
    `
  )};
`;
const Description = styled.text`
  display: flex;
  ${({ theme }) => `
        font-family: ${theme.font.josefin};
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
`;
