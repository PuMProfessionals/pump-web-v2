/* Copy component from ui-library, use nextjs components */
// import Image from "next/image";
// import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "./Text";
import { Button } from "./Button";
import { media } from "../utils";

export const StudentResource = ({
  titleText,
  descriptionText,
  buttons,
  graphic,
  isGraphicLeft = true,
  ...props
}) => (
  <StudentResourceSection isGraphicLeft={isGraphicLeft} {...props}>
    <Graphic src={graphic}/>
    <InfoSection isGraphicLeft={isGraphicLeft}>
      <Title>{titleText}</Title>
      <Text>{descriptionText}</Text>
      <ButtonSection isGraphicLeft={isGraphicLeft}>
        {buttons.map(button => (
          <a key={button.text} href={button.link}>
            <SButton backgroundColor={button.color}>{button.text}</SButton>
          </a>
        ))}
      </ButtonSection>
    </InfoSection>
  </StudentResourceSection>
);

const Title = styled.h2`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
  margin: 0;
`;

const Graphic = styled.img`
  border: 2px solid black; /* TODO: curved border? */
  ${media(
    "800",
    `
      width: 70%;
    `
  )}
`;

const StudentResourceSection = styled.div`
  display: flex;
  ${({ isGraphicLeft }) => `
    flex-direction: ${isGraphicLeft ? "row" : "row-reverse"}
  `};
  align-items: center;
  justify-content: center;
  ${media(
    800,
    `
      flex-direction: column;
    `
  )}
`;

const InfoSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  ${({ isGraphicLeft }) => `
    text-align: ${isGraphicLeft ? "left" : "right"};
    ${isGraphicLeft ? "margin-left: 8%" : "margin-right: 8%;"}
  `};
  ${media(
    800,
    `
      text-align: center;
      margin: 5% 0 0;
      width: 85%;
    `
  )} /* TODO: change text color based on background */
`;

const ButtonSection = styled.div`
  display: flex;
  ${({ isGraphicLeft }) => `
    justify-content: ${isGraphicLeft ? "left" : "right"}
  `};
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

StudentResource.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  buttons: PropTypes.Object,
  graphic: PropTypes.string,
  isGraphicLeft: PropTypes.boolean
};
