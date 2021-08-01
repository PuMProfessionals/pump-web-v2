import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

import LeftArrow from "../public/home/LeftArrow.svg";
import { baseTheme } from "../theme";

/**
 * text prop
 * background color prop
 * back button optional
 * |- link prop
 * description optional
 * |- align left
 * |- optional image (right aligned)
 */

export const Title = ({
  title,
  arrowLink,
  description,
  image,
  backgroundColor = baseTheme.colors.navy,
  ...props
}) => (
  <Wrapper backgroundColor={backgroundColor}>
    <BackArrow>
      <Image src={LeftArrow} width={50} />
    </BackArrow>
    <STitle>{title}</STitle>
  </Wrapper>
);

const STitle = styled.h1`
  width: 60%;
  font-size: 3rem; /* TODO: shrink text on mobile */
  color: white;
  font-weight: 900;
`;

const BackArrow = styled.div`
  position: absolute;
  left: 9%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 2rem;
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor};
  `};
`;

Title.PropTypes = {
  title: PropTypes.string,
  arrowLink: PropTypes.strin,
  description: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
};
