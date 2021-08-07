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

/**
 * Component with Title, image on the left and description, buttons on the right
 *
 * @prop {string} titleText - Section title
 * @prop {object} graphic - Left image object
 * @prop {number} imageWidth - Image width, default 300px
 * @prop {number} imageHeight - Image height, default 240px
 * @prop {array} descriptions - Array of paragraphs
 * @prop {array} buttons - Array of buttons objects
 * |- button object keys: color, button text, button link
 * @prop {boolean} isAlignedTop - Text at top or center of image, default true
 */

export const LeftImageTextLayout = ({
  titleText,
  graphic,
  imageWidth = 300,
  imageHeight = 240,
  descriptions,
  buttons,
  isAlignedTop = true,
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
      <Description isAlignedTop={isAlignedTop} imageHeight={imageHeight}>
        <div>
          {descriptions.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </div>
        {!!buttons && (
          <ButtonSection>
            {buttons.map((button) => (
              <Link key={button.link} href={button.link}>
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
    800,
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
  ${({ imageHeight, isAlignedTop }) => `
    height: ${imageHeight}px;
    justify-content: ${isAlignedTop ? "space-between" : "center"};
  `};
  ${media(
    800,
    `
        width: 80%;
        margin: 0;
    `
  )};
`;

const Graphic = styled(Image)`
  margin-right: 5%;
  ${media(
    800,
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
    800,
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
  graphic: PropTypes.object,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  descriptions: PropTypes.array,
  buttons: PropTypes.array,
  isAlignedTop: PropTypes.bool,
};
