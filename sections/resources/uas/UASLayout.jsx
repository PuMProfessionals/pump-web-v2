import { LeftImageTextLayout } from "../../../components";
import UASLogo from "../../../public/resources/uas-logo.png";

export const UASLayout = () => (
  <div style={{ marginTop: "5%" }}>
    <LeftImageTextLayout
      titleText="What is UAS?"
      descriptions={[
        `The University Admissions Server is a Discord community for
        high school and undergraduate students to learn more about diverse university
        programs. Our goal is to create an information hub to answer student questions
        on admission requirements, program curriculum, student life, extracurricular
        opportunities, and more.`,
      ]}
      graphic={UASLogo}
      imageWidth={300}
      imageHeight={300}
    />
  </div>
);
