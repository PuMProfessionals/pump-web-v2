import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Button } from "./Button";
import { baseTheme } from "../theme";

/* 
    Example:
    - Thumbnail: image
    - Title: text (PuMP Digest)
    - Description: text (Check out . . )
    - imageHeight and imageWidth are dimensions of thumbnail
    - cardHeight is height of card 
*/
export function Card({
  thumbnail,
  title,
  description,
  imageHeight = 200,
  imageWidth = 300,
  cardHeight = 470,
  ...props
}) {
  return (
    <Wrapper cardHeight={cardHeight} {...props}>
      <Section>
        <ImageWrapper>
          <Image
            alt={`Card image for ${title}`}
            src={thumbnail}
            height={imageHeight}
            width={imageWidth}
          />
        </ImageWrapper>
        <Content>
          <Title>{title}</Title>
          <p style={{ marginBottom: "20px" }}>{description}</p>
          <Button>
            <Link href="/">
              <a style={{ color: baseTheme.colors.navy }}>Learn More</a>
            </Link>
          </Button>
        </Content>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 44px;
  margin-bottom: 30px;
  max-width: 300px;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.25);
  ${({ theme, cardHeight }) => `
        height: ${cardHeight}px;
        p {
            font-family: ${theme.font.lato};
            font-size: ${theme.size.small};
            line-height: 1.5;
        }
    `};
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  padding: 15px 25px 35px 35px;
  color: black;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
`;
const Title = styled.h3`
  ${({ theme }) => `
        font-family: ${theme.font.kumbh};
        font-size: ${theme.size.defaultLarger};
    `};
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top-left-radius: 44px;
  border-top-right-radius: 44px;
`;
