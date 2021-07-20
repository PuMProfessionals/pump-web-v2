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
*/
export function Card({ thumbnail, title, description, ...props }) {
  return (
    <Wrapper {...props}>
      <Section>
        <ImageWrapper>
          <Image alt="Sample" src={thumbnail} height={200} width={300} />
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
  height: 470px;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.25);
  ${({ theme }) => `
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
