import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const TextArea = ({
  placeholder,
  name,
  value,
  required = true,
  ...props
}) => (
  <STextArea
    placeholder={placeholder}
    name={name}
    value={value}
    required={required}
    {...props}
  />
);

const STextArea = styled.textarea`
  ${({ theme }) => `
        resize: none;
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

TextArea.propTypes = {
  placeholder: PropTypes.string,
};
