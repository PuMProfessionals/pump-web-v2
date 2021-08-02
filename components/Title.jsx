import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

import LeftArrow from "../public/LeftArrow-NoCircle.svg";
import { baseTheme } from "../theme";
import { Text } from "../components";
import { media } from "../utils";

export const Title = ({
  title,
  arrowLink,
  description,
  image,
  backgroundColor = baseTheme.colors.navy,
  isLeftAligned = !!image,
  ...props
}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    isLeftAligned={isLeftAligned}
    {...props}
  >
    {!!arrowLink && (
      <BackArrow isLeftAligned={isLeftAligned}>
        <a href={arrowLink}>
          <Image src={LeftArrow} width={25} />
        </a>
      </BackArrow>
    )}
    <TitleSection>
      <STitle>{title}</STitle>
      {!!description && <Text color="white">{description}</Text>}
    </TitleSection>
    {!!image && <Image src={image} width={200} height={200} />}
  </Wrapper>
);

const STitle = styled.h1`
  font-size: 3rem;
  color: white;
  font-weight: 900;
  ${media(
    "tablet",
    `
      font-size: 2rem;
    `
  )}
`;

const BackArrow = styled.div`
  position: absolute;
  ${({ isLeftAligned }) => `
    left: ${isLeftAligned ? "8%" : "10%"};
    top: ${isLeftAligned ? "80px" : "150px"};
  `}
  ${media(
    600,
    `
      left: 8%;
      top: 80px;
    `
  )}
`;

const TitleSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  ${media(
    600,
    `
      width: 80%;
    `
  )}
`;

const Wrapper = styled.div`
  display: flex;
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor};
  `};
  ${({ isLeftAligned }) => `
    justify-content: ${isLeftAligned ? "space-between" : "center"};
    text-align: ${isLeftAligned ? "left" : "center"};
    padding: ${isLeftAligned ? "0 4rem 2rem" : "0 0 2rem"};
  `}
  ${media(
    600,
    `
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 0 2rem;
    `
  )}
`;

Title.propTypes = {
  title: PropTypes.string,
  arrowLink: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  isLeftAligned: PropTypes.bool,
};
