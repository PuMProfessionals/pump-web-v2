import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import PumpLogo from "../public/pump-logo.png";
import FacebookLogo from "../public/fb.svg";
import InstagramLogo from "../public/instagram.svg";
import { CONSTANTS, media } from "../utils";
import { Text } from "../components";

const PATHS = ["", "about", "resources", "events", "contact", "sponsors"];

export const Footer = ({ path, ...props }) => (
  <FooterContainer {...props}>
    <FirstColumn>
      <Image src={PumpLogo} alt="Pump Logo" width={120} height={50} />
      <SText lineHeight="24px" style={{ padding: "20px 0 20px 0" }}>
        {CONSTANTS.registered_charity_descr}
      </SText>
      <SText size="small">{CONSTANTS.copyright}</SText>
    </FirstColumn>
    <SecondColumn>
      <JosefinNoHoverText bold size="defaultLarger" style={{ marginBottom: "20px" }}>
        Navigation
      </JosefinNoHoverText>
      {/* TODO: need to add links to appropriate pages */}
      {CONSTANTS.resources.map((resource, index) => (
        <JosefinText key={resource}>
          <Link href={`/${PATHS[index]}`}>
            <ResourceLink isSelected={path == PATHS[index]}>{resource}</ResourceLink>
          </Link>
        </JosefinText>
      ))}
    </SecondColumn>
    <ThirdColumn>
      <JosefinNoHoverText bold size="defaultLarger" style={{ marginBottom: "20px" }}>
        Contact
      </JosefinNoHoverText>
      <a href={`mailto:${CONSTANTS.email}`}>
        <Email>{CONSTANTS.email}</Email>
      </a>
      <JosefinNoHoverText>{CONSTANTS.address}</JosefinNoHoverText>
      <LogoContainer>
        <a href={CONSTANTS.facebook} target="_blank" rel="noopener noreferrer">
          <Logo>
            <SocialMedia
              src={FacebookLogo}
              alt="Facebook Logo"
              width={50}
              height={50}
            />
          </Logo>
        </a>
        <a href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer">
          <Logo>
            <SocialMedia
              src={InstagramLogo}
              alt="Instagram Logo"
              width={50}
              height={50}
            />
          </Logo>
        </a>
      </LogoContainer>
    </ThirdColumn>
  </FooterContainer>
);

const FooterContainer = styled.div`
  ${({ theme }) => `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-family: ${theme.font.lato};
        font-size: ${theme.size.small};
        background-color: ${theme.colors.navy};
        color: ${theme.colors.text};
    `};

  ${media(
    "tablet",
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 100px;
        `
  )};
  ${media(
    "mobile",
    `
        padding: 40px 50px;
        `
  )};
`;
const SText = styled(Text)`
  ${({ theme }) => `
        color: ${theme.colors.white};
    `}
  ${media(
    "mobile",
    `
        line-height: 1.3;
        `
  )};
`;
const JosefinNoHoverText = styled(SText)`
  ${({ theme }) => `
        font-family: ${theme.font.josefin};
    `};
`;
const JosefinText = styled(JosefinNoHoverText)`
  :hover {
    opacity: 70%;
    cursor: pointer;
    ${({ theme }) => `
        color: ${theme.colors.brightBlue};
    `};
  }
`;
const Email = styled(JosefinText)`
  text-decoration: underline;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Logo = styled.div`
  margin-right: 20px;
`;
const SocialMedia = styled(Image)`
  ${media(
    "mobile",
    `
        width: 70%;
        `
  )};
  :hover {
    opacity: 80%;
  }
`;
const ResourceLink = styled.a`
  ${({ theme, isSelected }) => `
        color: ${isSelected ? theme.colors.yellow : theme.colors.white};
        :hover {
            cursor: pointer;
            color: ${isSelected ? theme.colors.yellow : theme.colors.brightBlue};
        }
  `};
`;
const FirstColumn = styled.div`
  padding: 110px 20px 100px 100px;
  ${media(
    "tablet",
    `
        padding: 20px 0 0 0;
        `
  )};
`;
const SecondColumn = styled.div`
  padding: 100px 20px 100px 100px;
  ${media(
    "tablet",
    `
        padding: 0;
        `
  )};
`;
const ThirdColumn = styled.div`
  padding: 100px 100px 100px 20px;
  ${media(
    "tablet",
    `
        padding: 0 0 20px 0;
        `
  )};
`;
