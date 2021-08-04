/*
For example, see UAS page.
*/
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Text } from "./Text";
import { Button } from "./Button";
import { baseTheme } from "../theme";
import { media } from "../utils";

/* Change LeftImageTextLayout to use in Impact Section on about page
 * |- add multiple paragraphs
 * |- add buttons
 * |- add default align at top (center for whitespace around image)
 */

export const LeftImageTextLayout = ({
  titleText,
  graphic,
  descriptions,
  buttons,
  alignTop = true,
  ...props
}) => (
  <Wrapper {...props}>
    <TitleSection>
      <Title size={baseTheme.size.h2} bold="true">
        {titleText}
      </Title>
    </TitleSection>
    <InfoSection>
      <Graphic src={graphic} width={300} height={240} />
      <Description alignTop={alignTop}>
        <div>
          {descriptions.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </div>
        {!!buttons && (
          <ButtonSection>
            {buttons.map((button) => (
              <Link key={button.text} href={button.link}>
                <a>
                  <SButton backgroundColor={button.color}>{button.text}</SButton>
                </a>
              </Link>
            ))}
          </ButtonSection>
        )}
      </Description>
    </InfoSection>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 8vh 0;
`;

const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 240px;
  ${({ alignTop }) => `
    justify-content: ${alignTop ? "space-between" : "center"};
  `}
`;

const Graphic = styled(Image)`
  margin-right: 5%;
  ${media(
    700,
    `
        margin: 0px;
    `
  )}
`;

const TitleSection = styled.div`
  margin: 5% 5% 0%;
`;

const InfoSection = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  ${media(
    700,
    `
        flex-direction: column;
        align-items: center;
    `
  )}
`;

const ButtonSection = styled.div`
   {
    /* TODO: repeated button section -> move to components? */
  }
  display: flex;
  flex-flow: row wrap;
  ${media(
    800,
    `
      justify-content: center;
    `
  )}
`;

const SButton = styled(Button)`
  margin: 0.5rem;
`;
