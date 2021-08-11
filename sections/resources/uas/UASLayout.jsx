import { LeftImageTextLayout } from "../../../components";
import SampleGraphic from "../../../public/home/top-section-graphic.svg";

export const UASLayout = () => (
  <div>
    <LeftImageTextLayout
      titleText="What is UAS?"
      descriptions={[
        `The University Admissions Server is a Discord community for
        high school and undergraduate students to learn more about diverse university
        programs. Our goal is to create an information hub to answer student questions
        on admission requirements, program curriculum, student life, extracurricular
        opportunities, and more.`,
      ]}
      graphic={SampleGraphic}
    />
  </div>
);
