import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `
        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
        html, body {
            height: 100%;
            box-sizing: inherit;
            margin: 0;
        }
        body {
            color: ${theme.colors.navy};
            font-family: ${theme.font.lato};
            overflow-y: scroll;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        a {
            text-decoration: none;
            color: ${theme.colors.white};
        }
    `};

    @media only screen and (max-width: 1000px) {
        html {
            font-size: 13px;
        }
    }
    @media only screen and (max-width: 800px) {
        html {
            font-size: 10px;
        }
    }
    @media only screen and (max-width: 600px) {
        html {
            font-size: 7px;
        }
    }
`;
