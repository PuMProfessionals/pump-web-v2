import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text, Button } from "../components";
import Open from "../public/open-hamburger.svg";
import Close from "../public/close-hamburger.svg";
import PumpLogo from "../public/pump-logo.png";
import { baseTheme } from "../theme";
import { media } from "../utils";

{
  /* TODO: Refactor into object? paths must be same as linked pages*/
}
const RESOURCES = ["Home", "About Us", "Resources", "Events", "Contact Us"];
const PATHS = ["", "about", "resources", "events", "contact"];

export const Navbar = ({
  backgroundColor = baseTheme.colors.navy,
  fontColor = baseTheme.colors.white,
  path,
  ...props
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <NavbarContainer
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      {...props}
    >
      <LogoContainer>
        {/* TODO: NEW LOGO */}
        <Link href="/">
          <a>
            <PumpImg src={PumpLogo} alt="Pump Logo" width={80} height={50} />
          </a>
        </Link>
        {isHidden ? (
          <Icon
            src={Close}
            alt="Cross icon"
            width={30}
            height={30}
            onClick={handleClick}
          />
        ) : (
          <Icon
            src={Open}
            alt="Hamburger icon"
            width={30}
            height={30}
            onClick={handleClick}
          />
        )}
      </LogoContainer>
      <Container isHidden={isHidden}>
        <ResourcesContainer>
          {RESOURCES.map((resource, index) => (
            <Resource key={resource}>
              <Link href={`/${PATHS[index]}`}>
                <ResourceLink
                  fontColor={fontColor}
                  isSelected={path == PATHS[index]}
                >
                  {resource}
                </ResourceLink>
              </Link>
            </Resource>
          ))}
          <SButton>
            <Link href="/sponsors">
              <a style={{ color: baseTheme.colors.navy }}>Sponsors</a>
            </Link>
          </SButton>
        </ResourcesContainer>
      </Container>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  ${({ theme }) => `
          font-family: ${theme.font.josefin};
          font-size: ${theme.size.default};
          padding: 2rem 4.5rem;
          display: flex;
          justify-content: space-between;
      `};
  ${(props) => `
        background-color: ${props.backgroundColor};
        color: ${props.fontColor};
    `};
  ${media(
    "tablet",
    `
          flex-direction: column;
          `
  )};
  ${media(
    "mobile",
    `
        padding: 1rem 2rem;
        `
  )}
`;
const LogoContainer = styled.div`
  ${media(
    "tablet",
    `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            `
  )};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  ${media(
    "tablet",
    `
          flex-direction: column;
          align-items: flex-start;
          `
  )};
  // props does not work within media function
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.isHidden ? "flex" : "none")};
    margin-top: ${(props) => (props.isHidden ? "30px" : "0")};
  }
`;
const PumpImg = styled(Image)`
  padding-top: 15px !important;
  :hover {
    cursor: pointer;
  }
`;
const ResourcesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media(
    "tablet",
    `
          flex-direction: column;
          `
  )};
`;
const Resource = styled(Text)`
  padding: 0 20px;
  ${media(
    "tablet",
    `
          padding: 0;
          `
  )};
`;
const ResourceLink = styled.a`
  ${({ theme, fontColor, isSelected }) => `
        color: ${isSelected ? theme.colors.yellow : fontColor};
        :hover {
            cursor: pointer;
            color: ${isSelected ? theme.colors.yellow : theme.colors.brightBlue};
        }
  `};
`;
const Icon = styled(Image)`
  display: none !important;
  ${media(
    "tablet",
    `
          display: flex!important;
          cursor: pointer;
          margin-top: 10px;
          opacity: 1;
          :hover {
            opacity: 0.8;
          }
          `
  )};
`;
const SButton = styled(Button)`
  margin-left: 20px;
  ${media(
    "tablet",
    `
          margin-top: 10px;
          margin-bottom: 20px;
          margin-left: 0;
          `
  )};
`;

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  mainPath: PropTypes.string,
};
