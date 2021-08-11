import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "./Text";
import { Button } from "./Button";
import { media } from "../utils";
import { baseTheme } from "../theme";

/**
 *
 * Student Resource Component
 * @prop {string} titleText - resource title
 * @prop {string} descriptionText - resource description
 * @prop {array} buttons - array of buttons with resource relevant links
 * |- each button element should have text and link keys
 * |- button can have external property which means it is an external link rather than internal (link to another section of website)
 * @prop {object} graphic - resource graphic
 * @prop {number} graphicWidth - width of resource graphic, default 400
 * @prop {number} graphicHeight - height of resource graphic, default 350
 * @prop {boolean} isGraphicLeft - specify the location of the resource graphic
 * |- default true (image on left, text on right)
 * @prop {boolean} isCard - should the text + buttons look like a card, default false
 * |- box shadow and rounded borders
 */

export const StudentResource = ({
  titleText,
  descriptionText,
  buttons,
  graphic,
  graphicWidth = 400,
  graphicHeight = 350,
  isGraphicLeft = true,
  isCard = false,
  textColor = baseTheme.colors.navy,
  ...props
}) => (
  <Wrapper isgraphicleft={isGraphicLeft} iscard={isCard} {...props}>
    <Graphic isgraphicleft={isGraphicLeft ? 1 : 0}>
      <Image src={graphic} width={graphicWidth} height={graphicHeight} />
    </Graphic>
    <InfoSection isgraphicleft={isGraphicLeft} iscard={isCard}>
      <Title textcolor={textColor}>{titleText}</Title>
      <SText textcolor={textColor}>{descriptionText}</SText>
      {!!buttons && (
        <ButtonSection isgraphicleft={isGraphicLeft}>
          {buttons.map((button) => {
            if (button.external) {
              return (
                <a
                  key={button.text}
                  href={button.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SButton backgroundColor={button.color}>{button.text}</SButton>
                </a>
              );
            } else {
              return (
                <Link key={button.text} href={button.link}>
                  <a>
                    <SButton backgroundColor={button.color}>{button.text}</SButton>
                  </a>
                </Link>
              );
            }
          })}
        </ButtonSection>
      )}
    </InfoSection>
  </Wrapper>
);

const Title = styled.h2`
  ${({ theme, textcolor }) => `
      font-family: ${theme.font.josefin};
      color: ${textcolor};
      `};
  margin: 3% 0 0;
`;
const SText = styled(Text)`
  ${({ textcolor }) => `
      color: ${textcolor};
      `};
`;
const Graphic = styled.div`
  /* TODO: curved border ? */
  ${({ isgraphicleft }) => `
      ${isgraphicleft ? "margin-right: 5%;" : "margin-left: 5%;"}
      `};
  ${media(
    "tablet",
    `
      margin: 0;
    `
  )}
`;

const Wrapper = styled.div`
  padding: 4vh 0;
  display: flex;
  ${({ isgraphicleft }) => `
      flex-direction: ${isgraphicleft ? "row" : "row-reverse"}
      `};
  align-items: center;
  justify-content: center;
  ${media(
    "tablet",
    `
      flex-direction: column;
    `
  )}
`;

const InfoSection = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  ${({ isgraphicleft, iscard, theme }) => `
      text-align: ${isgraphicleft ? "left" : "right"};
      box-shadow: ${iscard ? `${theme.boxShadow.topBottom}` : "none"};
      border-radius: ${theme.radius.border};
      `};
  padding: 3%;
  ${media(
    "tablet",
    `
      text-align: center;
      width: 85%;
      margin: 1rem 0 0;
    `
  )};
   {
    /* TODO: change text color based on background */
  }
`;

const ButtonSection = styled.div`
  display: flex;
  ${({ isgraphicleft }) =>
    `
      justify-content: ${isgraphicleft ? "flex-start" : "flex-end"}
    `};
  flex-flow: row wrap;
  ${media(
    "tablet",
    `
      justify-content: center;
    `
  )}
`;

const SButton = styled(Button)`
  margin: 0.5rem;
`;

StudentResource.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  buttons: PropTypes.array,
  graphic: PropTypes.object,
  graphicWidth: PropTypes.number,
  graphicHeight: PropTypes.number,
  isGraphicLeft: PropTypes.bool,
  isCard: PropTypes.bool,
};
