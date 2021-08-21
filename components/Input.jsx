import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Input = ({
  placeholder,
  name,
  value,
  type,
  required = true,
  ...props
}) => (
  <SInput
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    required={required}
    {...props}
  />
);

const SInput = styled.input`
  ${({ theme }) => `
        font-size: ${theme.size.default};
        transition: ${theme.transitions.cubicBezier};
        background-color: ${theme.colors.input};
        font-weight: 500;
        font-family: ${theme.font.lato};
        border-radius: ${theme.radius.border};
        outline: none;
        border: none;
        padding: 20px;
        box-shadow: ${theme.boxShadow.shallow};
        width: auto;
        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
        &:focus {
            box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0.15);
        }
        ::placeholder {
            color: ${theme.colors.caption};
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: ${theme.colors.caption};
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: ${theme.colors.caption};
        }
    `};
`;

Input.propTypes = {
  placeholder: PropTypes.string,
};
