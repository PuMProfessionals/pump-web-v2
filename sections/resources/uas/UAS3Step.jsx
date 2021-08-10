import styled from "styled-components";
import Link from "next/link";

import { StudentResource, Button } from "../../../components";
import SampleGraphic from "../../../public/home/top-section-graphic.svg";
import { baseTheme } from "../../../theme";
import { media } from "../../../utils";

export const UAS3Step = () => (
  <Wrapper>
    <TitleSection>
      <Title>Our 3-Step Approach:</Title>
    </TitleSection>
    <StudentResource
      titleText="1. FAQ Documents"
      descriptionText={`Concise descriptions of each university program that will be pinned in each Discord channel for easy access. FAQ sheets will address basic information about the university program, such as grade cutoffs, testing requirements, course requirements, and core curriculum.`}
      graphic={SampleGraphic}
      graphicWidth={250}
      isCard={true}
    />
    <StudentResource
      titleText="2. Moderated Q&A"
      descriptionText={`For topics not addressed in the FAQ, students are encouraged to use the Discord chat function to get their question answered directly by a current student/alumni of their program of interest`}
      graphic={SampleGraphic}
      graphicWidth={250}
      isGraphicLeft={false}
      isCard={true}
    />
    <StudentResource
      titleText="3. Lounge Rooms"
      descriptionText={`A miscellaneous channel to learn more about each university's student life, network, and chat!`}
      graphic={SampleGraphic}
      graphicWidth={250}
      isCard={true}
    />
    <div>
      <Link href="reources/uas">
        <a>
          {/* TODO: change to discord server link */}
          <Button>Join our Community of 800+ Students!</Button>
        </a>
      </Link>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8vh;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${media(
    "tablet",
    `
      justify-content: center;
      `
  )};
`;

const Title = styled.h2`
  font-weight: 900;
  padding-right: 20%;
  color: ${baseTheme.colors.navy};
  font-family: ${baseTheme.font.josefin};
  font-size: ${baseTheme.size.h2};
  ${media(
    "tablet",
    `
      padding-right: 0;
    `
  )};
`;
