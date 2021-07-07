import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Text = ({
  children,
  color = "navy",
  size = "default",
  lineHeight = "1.25",
  ...props
}) => (
  <SText size={size} color={color} lineHeight={lineHeight} {...props}>
    {children}
  </SText>
);

const SText = styled.p`
  ${({ theme, bold, lineHeight, color = "text", size = "default" }) => `
        color: ${theme.colors[color] || color};
        font-size: ${theme.size[size] || size};
        line-height: ${lineHeight || 1.25};
        font-weight: ${bold ? "bold" : "normal"};
    `}
`;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  lineHeight: PropTypes.string,
};
