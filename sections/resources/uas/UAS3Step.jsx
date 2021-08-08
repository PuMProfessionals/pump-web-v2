import styled from "styled-components";
import { StudentResource } from "../../../components";
import SampleGraphic from "../../../public/home/top-section-graphic.svg";

export const UAS3Step = () => (
  <div>
    <StudentResource
      titleText="1. FAQ Documents"
      descriptionText={`Concise descriptions of each university program that will be pinned in each Discord channel for easy access. FAQ sheets will address basic information about the university program, such as grade cutoffs, testing requirements, course requirements, and core curriculum.`}
      graphic={SampleGraphic}
      graphicHeight={300}
      isCard={true}
    />
    <StudentResource
      titleText="2. Moderated Q&A"
      descriptionText={`For topics not addressed in the FAQ, students are encouraged to use the Discord chat function to get their question answered directly by a current student/alumni of their program of interest`}
      graphic={SampleGraphic}
      graphicHeight={300}
      isGraphicLeft={false}
      isCard={true}
    />
    <StudentResource
      titleText="3. Lounge Rooms"
      descriptionText={`A miscellaneous channel to learn more about each university's student life, network, and chat!`}
      graphic={SampleGraphic}
      graphicHeight={300}
      isCard={true}
    />
  </div>
);
