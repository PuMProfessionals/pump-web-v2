import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Close from "../public/close-hamburger.svg";
import { baseTheme } from "../theme";
import { media } from "../utils";

export const Notification = ({
  backgroundColor = baseTheme.colors.greyBlue,
  fontColor = baseTheme.colors.white,
  path,
  notif,
  children,
  ...props
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <React.Fragment>
      {!isHidden && (
        <Wrapper backgroundColor={backgroundColor} fontColor={fontColor} {...props}>
          <div style={{ margin: "auto" }}>
            {children}
            {!!notif && (
              <Link href={path}>
                <NotificationBox>{notif}</NotificationBox>
              </Link>
            )}
          </div>
          <LogoContainer>
            <Icon
              src={Close}
              alt="Cross icon"
              width={20}
              height={20}
              onClick={handleClick}
            />
          </LogoContainer>
        </Wrapper>
      )}
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => `
          font-family: ${theme.font.josefin};
          font-size: ${theme.size.default};
          padding: 0.7rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
      `};
  ${(props) => `
        background-color: ${props.backgroundColor};
        color: ${props.fontColor};
    `};
  ${media(
    500,
    `
          padding: 1rem 2rem;
          font-size: 0.85rem; /* TODO: make this with theme */
          `
  )};
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
const Icon = styled(Image)`
  :hover {
    cursor: pointer;
  }
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
const NotificationBox = styled.a`
  ${({ theme }) => `
        color: ${theme.colors.yellow};
        font-weight: bold;
        :hover {
            cursor: pointer;
            
        }
  `};
`;
