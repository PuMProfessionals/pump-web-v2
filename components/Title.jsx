import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import LeftArrow from "../public/LeftArrow-NoCircle.svg";
import { baseTheme } from "../theme";
import { Text } from "../components";
import { media } from "../utils";

/**
 *
 * Title Component
 * @prop {string} title - Page title
 * @prop {string} arrowLink - Link of back arrow
 * @prop {string} description - Section description
 * @prop {string} image - Path to right-aligned image
 * @prop {number} imageWidth - width of right-aligned image, default 200px
 * @prop {number} imageHeight - heigh tof right-aligned image, default 200px
 * @prop {string} backgroundColor - Color of header, default navy (match navbar)
 * @prop {boolean} isLeftAligned - Is text left aligend
 * |- default true if image is present
 */

export const Title = ({
  title,
  arrowLink,
  description,
  image,
  imageWidth = 200,
  imageHeight = 200,
  backgroundColor = baseTheme.colors.navy,
  isLeftAligned = !!image,
  ...props
}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    isLeftAligned={isLeftAligned}
    {...props}
  >
    <TopSection isLeftAligned={isLeftAligned}>
      {!!arrowLink && (
        <Link href={arrowLink}>
          <a>
            <Image src={LeftArrow} width={25} />
          </a>
        </Link>
      )}
      <TitleSection>
        <STitle>{title}</STitle>
        {!!description && <Text color="white">{description}</Text>}
      </TitleSection>
    </TopSection>
    {!!image && <Image src={image} width={imageWidth} height={imageHeight} />}
  </Wrapper>
);

const STitle = styled.h1`
  font-size: 3rem;
  color: white;
  font-weight: 900;
  ${media(
    "tablet",
    `
      font-size: 1.5rem;
    `
  )};
  ${media(
    "mobile",
    `
      font-size: 1.2rem;
    `
  )}
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2%;
  ${({ isLeftAligned }) => `
    width: ${isLeftAligned ? "60%" : "100%"};
    justify-content: ${isLeftAligned ? "flex-start" : "center"};
  `}
  ${media(
    "tablet",
    `
    flex-direction: column;
    `
  )}
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  ${media(
    600,
    `
      margin-left: 0;
    `
  )}
`;

const Wrapper = styled.div`
  display: flex;
  /* TODO: replace with background svg */
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor};
  `};
  ${({ isLeftAligned }) => `
    justify-content: ${isLeftAligned ? "space-between" : "center"};
    text-align: ${isLeftAligned ? "left" : "center"};
    padding: ${isLeftAligned ? "0 4rem 2rem" : "0 0 2rem"};
  `}
  ${media(
    "tablet",
    `
      flex-direction: column;
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
  image: PropTypes.object,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  backgroundColor: PropTypes.string,
  isLeftAligned: PropTypes.bool,
};
