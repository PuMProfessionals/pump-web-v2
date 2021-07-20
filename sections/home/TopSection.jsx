import Image from "next/image";
import styled from "styled-components";

import TitleGraphic from "../../public/home/top-section-graphic.svg";
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
          Donate
        </ButtonText>
      </Button>
    </FirstColumn>
    <SecondColumn>
      <Graphic
        src={TitleGraphic}
        alt="Title graphic - person with book, stethoscope, pills and syringe"
        height={400}
        width={400}
      />
    </SecondColumn>
  </MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  padding: 5%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  ${media(
    800,
    `
        margin: 7%;
        `
  )};
  ${media(
    700,
    `
        flex-direction: column-reverse;
        `
  )};
  ${media(
    500,
    `
        margin: 12%;
        `
  )};
`;

const SText = styled(Text)`
  ${({ theme }) => `
    font-family: ${theme.font.lato};
    color: ${theme.colors.navy};
    margin-top: 0;
  `};
  ${media(
    "tablet",
    `
        line-height: 1.3;
        `
  )};
`;

const JosefinTitle = styled(SText)`
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    margin: 1em 0 0 0;
  `};
  ${media(
    1200,
    `
        font-size: 2.5rem;
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
    500,
    `
        max-width: 340px;
        `
  )};
`;

const FirstColumn = styled.div`
  width: 60%;
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
        padding-left: 5em;
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
