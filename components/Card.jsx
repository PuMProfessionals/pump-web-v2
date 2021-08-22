import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Button } from "./Button";
import { Tag } from "./Tag";
import { baseTheme } from "../theme";
import { media } from "../utils";
import DefaultAvatar from "../public/members/card-fill.png";

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
  tags,
  component, // optional component to replace in content
  description,
  imageHeight = 200,
  imageWidth = 320,
  cardHeight = 490,
  contentPadding,
  date,
  buttonText,
  linkTo,
  ...props
}) {
  return (
    <Wrapper imageWidth={imageWidth} cardHeight={cardHeight} {...props}>
      <Section>
        <SImage
          alt={`Card image for ${title}`}
          src={thumbnail ? thumbnail : DefaultAvatar}
          height={imageHeight}
          width={imageWidth}
        />
        <Content contentpadding={contentPadding}>
          <div>
            {component ? (
              component
            ) : (
              <>
                {tags && (
                  <TagWrapper>
                    {tags.map((tag) => (
                      <Tag key={`${title}__${description}__${tag}`} label={tag} />
                    ))}
                  </TagWrapper>
                )}
                <Title>{title}</Title>
                <p style={{ marginBottom: "20px" }}>
                  <strong>{date ? date : ""}</strong>
                  {description}
                </p>
              </>
            )}
          </div>
          {!!buttonText && (
            <Button>
              <Link href={linkTo}>
                <a style={{ color: baseTheme.colors.navy }}>{buttonText}</a>
              </Link>
            </Button>
          )}
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
  background-color: white;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.25);
  ${({ theme, cardHeight, imageWidth }) => `
        height: ${cardHeight}px;
        max-width: ${imageWidth}px;
        p {
            font-family: ${theme.font.lato};
            font-size: ${theme.size.small};
            line-height: 1.5;
        }
  `};
  ${media(
    370,
    `
      max-width: 240px;
      margin-left: 0;
      padding-bottom: 20px;
    `
  )};
`;
const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 2%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  ${({ contentpadding }) => `
    padding: ${contentpadding ? contentpadding : "15px 25px 35px 35px"};
  `};
  color: black;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
  ${media(
    500,
    `
      padding: 10px 20px 25px 25px;
    `
  )};
`;
const Title = styled.h3`
  ${({ theme }) => `
        font-family: ${theme.font.kumbh};
        font-size: ${theme.size.defaultLarger};
    `};
  font-weight: bold;
`;
const SImage = styled(Image)`
  border-top-left-radius: 44px !important;
  border-top-right-radius: 44px !important;
`;
