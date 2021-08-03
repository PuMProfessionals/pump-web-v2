import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import TitleGraphic from "../../public/home/top-section-graphic.svg";
import { baseTheme } from "../../theme";
import { media, CONSTANTS } from "../../utils";
import { Text, Button } from "../../components";

export const TopSection = ({ ...props }) => (
  <MainContainer {...props}>
    <FirstColumn>
      <JosefinTitle size="4.5em" bold="true">
        {CONSTANTS.pump}
      </JosefinTitle>
      <SText size="default">{CONSTANTS.registered_charity_descr}</SText>
      <Button>
        <ButtonText size="default" bold="true">
          <Link href="/donate">
            <a style={{ color: baseTheme.colors.navy }}>Donate</a>
          </Link>
        </ButtonText>
      </Button>
    </FirstColumn>
    <SecondColumn>
      <Graphic
        src={TitleGraphic}
        alt="Title graphic - person with book, stethoscope, pills and syringe"
        height={370}
        width={370}
      />
    </SecondColumn>
  </MainContainer>
);

const MainContainer = styled.div`
	display: flex;
  padding: 7% 12%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  ${media(
    800,
    `
        padding: 5%;
        margin: 0 7% 7% 7%;
        `
  )};
  ${media(
    700,
    `
        flex-direction: column-reverse;
        `
  )};{*/
  ${media(
    500,
    `
        margin: 0 12% 12% 12%;
        `
  )};*/}
`;

const SText = styled(Text)`
  ${({ theme }) => `
    font-family: ${theme.font.lato};
    color: ${theme.colors.navy};
    margin-top: 0;
		max-width: 25vw;
  `};
  ${media(
    "tablet",
    `
        line-height: 1.3;
				max-width: 100vw;
        `
  )};
`;

const JosefinTitle = styled(SText)`
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    margin: 1em 0 0 0;
		max-width: 30vw;
  `};
  ${media(
    1200,
    `
        font-size: 2.5rem;
				max-width: 100vw;
        `
  )};
`;

const ButtonText = styled(SText)`
  margin: 0 0 0 0;
`;

const Graphic = styled(Image)`
  width: 100%;
  height: auto;
  ${media(
    1200,
    `
        max-width: 400px;
        `
  )};
  ${media(
    600,
    `
        max-width: 340px;
        `
  )};
`;

const FirstColumn = styled.div`
  width: 55%;
  ${media(
    "laptop",
    ` 
        width: 100%;
        flex: 0 0 35%;
        `
  )};
  ${media(
    "tablet",
    `
        flex: 1 0 0;
        `
  )};
`;

const SecondColumn = styled.div`
  padding-left: 10em;
  flex: 1;
  ${media(
    1200,
    `
        padding-left: 8em;
        `
  )};
  ${media(
    "tablet",
    `
        padding-left: 2em;
        `
  )};
  ${media(
    700,
    `
        padding: 0 0 0 0;
        `
  )};
`;
