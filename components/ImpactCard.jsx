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
  imageWidth = 300
}) => {
  return (
    <Wrapper>
      <Section>
        <ImageWrapper>
          <Image
            alt={`Card image for Impact`}
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
  height: 370px;

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
  ${media(
    "tablet",
    `
        flex-direction: row;
        `
  )};
`;
const Content = styled.div`
  color: black;
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
        text-align: left;
        padding: 0 0 0 40px;
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
  ${media(
    "tablet",
    `
        text-align: left;
        padding: 0 0 0 40px;
        `
  )};
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media(
    "tablet",
    `   
        margin-right: 0;
        max-width: 200px;
        min-width: 200px;
        margin: 0 0 0 10%;
        
        `
  )};
`;
/*
TO IMPLEMENT
- CHANGE ORDER OF SVG VS STATISTIC FOR SECOND CARD
- PASS IN ORDER VALUE AND CHANGE THE ORDER OF THE IMAGE WRAPPER / IMAGE
    */
