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
  leftAlign = !!image,
  ...props
}) => (
  <Wrapper backgroundColor={backgroundColor} leftAlign={leftAlign} {...props}>
    {!!arrowLink && (
      <BackArrow leftAlign={leftAlign}>
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
  font-size: 3rem; /* mobile: shrink text  */
  color: white;
  font-weight: 900;
`;

const BackArrow = styled.div`
  position: absolute;
  ${({ leftAlign }) => `
  left: ${leftAlign ? "8%" : "10%"};
  top: ${leftAlign ? "80px" : "150px"};
  `}
`;

const TitleSection = styled.div`
  width: 60%; /* mobile: wider */
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor};
  `};

  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
  ${({ leftAlign }) => `
    justify-content: ${leftAlign ? "space-between" : "center"};
    text-align: ${leftAlign ? "left" : "center"};
    padding: ${leftAlign ? "0 4rem 2rem" : "0 0 2rem"};
  `}
`;

Title.propTypes = {
  leftAlign: PropTypes.bool,
  title: PropTypes.string,
  arrowLink: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
};
