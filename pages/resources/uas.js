import Head from "next/head";

import SampleGraphic from "../../public/home/top-section-graphic.svg";
import { PageLayout } from "../../sections/hoc";
import { UASLayout } from "../../sections/resources/uas";

export default function UAS() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <UASLayout
          titleText="What is UAS?"
          descriptionText="The University Admissions Server is a Discord community for
            high school and undergraduate students to learn more about diverse university
            programs. Our goal is to create an information hub to answer student questions
            on admission requirements, program curriculum, student life, extracurricular
            opportunities, and more."
          graphic={SampleGraphic}
        />
      </PageLayout>
    </div>
  );
}
