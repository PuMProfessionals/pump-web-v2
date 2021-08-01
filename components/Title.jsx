import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

import LeftArrow from "../public/LeftArrow-NoCircle.svg";
import { baseTheme } from "../theme";
import { Text } from "../components";

/**
 * title prop
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
    {!!arrowLink && (
      <BackArrow>
        <a href={arrowLink}>
          <Image src={LeftArrow} width={25} />
        </a>
      </BackArrow>
    )}
    <TitleSection>
      {" "}
      {/* TODO: align left when description present */}
      <STitle>{title}</STitle>
      {!!description && <Text color="white">{description}</Text>}
    </TitleSection>
  </Wrapper>
);

const STitle = styled.h1`
  font-size: 3rem; /* TODO: shrink text on mobile */
  color: white;
  font-weight: 900;
`;

const BackArrow = styled.div`
  position: absolute;
  left: 10%;
  top: 150px;
`;

const TitleSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
