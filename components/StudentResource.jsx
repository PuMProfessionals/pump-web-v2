import Image from "next/image";
import Link from "next/link";
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
  graphicWidth = 500,
  graphicHeight = 350,
  isGraphicLeft = true,
  ...props
}) => (
  <Wrapper isgraphicleft={isGraphicLeft ? 1 : 0} {...props}>
    <Graphic
      src={graphic}
      width={graphicWidth}
      height={graphicHeight}
      isgraphicleft={isGraphicLeft ? 1 : 0}
    />
    <InfoSection isgraphicleft={isGraphicLeft ? 1 : 0}>
      <Title>{titleText}</Title>
      <Text>{descriptionText}</Text>
      {!!buttons && (
        <ButtonSection isgraphicleft={isGraphicLeft ? 1 : 0}>
          {buttons.map((button) => (
            <Link key={button.text} href={button.link}>
              <a>
                <SButton backgroundColor={button.color}>{button.text}</SButton>
              </a>
            </Link>
          ))}
        </ButtonSection>
      )}
    </InfoSection>
  </Wrapper>
);

const Title = styled.h2`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
  margin: 0;
`;

const Graphic = styled(Image)`
  /* TODO: curved border ? */
  ${({ isgraphicleft }) => `
    ${isgraphicleft ? "margin-left: 5%;" : "margin-right: 5%;"}
  `};
  ${media(
    "800",
    `
      width: 70%;
    `
  )}
`;

const Wrapper = styled.div`
  padding: 8vh 0;
  display: flex;
  ${({ isgraphicleft }) => `
    flex-direction: ${isgraphicleft ? "row" : "row-reverse"}
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
  width: 35%;
  display: flex;
  flex-direction: column;
  ${({ isgraphicleft, theme }) => `
    text-align: ${isgraphicleft ? "left" : "right"};
    // TODO: make card optional prop 
    box-shadow: ${theme.boxShadow.topBottom};
    border-radius: ${theme.radius.border};
  `};
  padding: 3%;
  ${media(
    800,
    `
      text-align: center;
      margin: 5% 0 0;
      width: 85%;
    `
  )}/* TODO: change text color based on background */
`;

const ButtonSection = styled.div`
  display: flex;
  ${({ isgraphicleft }) => `
    justify-content: ${isgraphicleft ? "flex-start" : "flex-end"}
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
  buttons: PropTypes.array,
  graphic: PropTypes.object,
  graphicWidth: PropTypes.number,
  graphicHeight: PropTypes.number,
  isGraphicLeft: PropTypes.bool,
};
