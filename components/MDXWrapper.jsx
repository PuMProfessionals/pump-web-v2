import styled from "styled-components";
import { media } from "../utils";

export const MDXWrapper = styled.div`
  margin: 0 auto;
  line-height: 1.4;
  padding: 3% 5%;
  ${({ theme }) => `
        color: ${theme.colors.navy};
    `};

  ${media(
    "tablet",
    `
            padding: 5% 10%;
            justify-content: center;
            margin: auto;
        `
  )};

  p {
    text-align: justify;
  }

  a {
    ${({ theme }) => `
            color: ${theme.colors.navy};
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(83, 183, 242, 0.5) 20%);
            :hover {
                color: ${theme.colors.brightBlue};
                cursor: pointer;
                transition: all .2s ease-in-out;
            }
        `};
  }

  ol,
  ul {
    li {
      padding: 0;
      margin: 10px;
    }
  }

  img {
    ${media(
      "tablet",
      `
                width: 100%;
            `
    )};
  }

  figcaption {
    font-style: italic;
    font-size: 15px;
  }
`;
