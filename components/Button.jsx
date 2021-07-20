import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = ({
  /* eslint-disable react/prop-types */
  icon, // Styled Icon type
  color,
  backgroundColor,
  borderColor,
  children,
  ...props
}) => (
  <SButton
    color={color}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    {...props}
  >
    {children}
    {!!icon && <Icon as={icon} />}
  </SButton>
);

const SButton = styled.button`
  ${({
    theme,
    color = "navy",
    backgroundColor = "yellow",
    borderColor = "yellow",
  }) => `
        color: ${theme.colors[color] || color};
        border: 1px solid ${theme.colors[borderColor] || borderColor};
        font-size: ${theme.size.default};
        font-family: ${theme.font.josefin};
        text-decoration: none;
        cursor: pointer;
        padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: ${theme.radius.button};
        transition: ${theme.transitions.cubicBezier};
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        &:focus,
        &:active,
        &:hover {
            transform: scale(0.9);
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `};
`;
const Icon = styled.svg`
  width: 40px;
  height: 40px;
  margin: 0 0 4px 10px;
`;

Button.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
