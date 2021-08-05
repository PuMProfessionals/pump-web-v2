/*
For example, see UAS page or Impact section on About Us page.
*/
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "./Text";
import { Button } from "./Button";
import { baseTheme } from "../theme";
import { media } from "../utils";

/* Change LeftImageTextLayout to use in Impact Section on about page
 * |- add multiple paragraphs
 * |- add buttons
 * |- add default align at top (center for whitespace around image)
 */

export const LeftImageTextLayout = ({
  titleText,
  graphic,
  imageWidth = 300,
  imageHeight = 240,
  descriptions,
  buttons,
  alignTop = true,
  ...props
}) => (
  <Wrapper {...props}>
    <TitleSection>
      <Title size={baseTheme.size.h2} bold="true">
        {titleText}
      </Title>
    </TitleSection>
    <InfoSection>
      <Graphic src={graphic} width={imageWidth} height={imageHeight} />
      <Description alignTop={alignTop} imageHeight={imageHeight}>
        <div>
          {descriptions.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </div>
        {!!buttons && (
          <ButtonSection>
            {buttons.map((button) => (
              <Link key={button.text} href={button.link}>
                <a>
                  <SButton backgroundColor={button.color}>{button.text}</SButton>
                </a>
              </Link>
            ))}
          </ButtonSection>
        )}
      </Description>
    </InfoSection>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 8vh 0;
`;

const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
  ${media(
    700,
    `
        text-align: center;
      `
  )};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 3%;
  ${({ imageHeight }) => `
    height: ${imageHeight}px;
  `};
  ${({ alignTop }) => `
    justify-content: ${alignTop ? "space-between" : "center"};
  `};
  ${media(
    700,
    `
        width: 80%;
        margin: 0;
    `
  )};
`;

const Graphic = styled(Image)`
  margin-right: 5%;
  ${media(
    700,
    `
        margin: 0;
    `
  )}
`;

const TitleSection = styled.div`
  margin: 5% 5% 0%;
`;

const InfoSection = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  ${media(
    700,
    `
        flex-direction: column;
        align-items: center;
    `
  )}
`;

const ButtonSection = styled.div`
   {
    /* TODO: repeated button section -> move to components? */
  }
  display: flex;
  flex-flow: row wrap;
  ${media(
    800,
    `
      justify-content: center;
    `
  )}
`;

const SButton = styled(Button)`
  margin: 0.5rem;
`;

LeftImageTextLayout.propTypes = {
  titleText: PropTypes.string,
  graphic: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  descriptions: PropTypes.array,
  buttons: PropTypes.array,
  alignTop: PropTypes.bool,
};
