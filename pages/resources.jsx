import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ResourcesSection } from "../sections/resources";
import { Title } from "../components";
import SampleGraphic from "../public/home/impact-section-graphic-3.svg";

export default function About({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <Title
          title="University Admissions Server (UAS)"
          arrowLink="/resources"
          description="Explore the complete timeline of a medical student, high school to residency and beyond"
          image={SampleGraphic}
          // isLeftAligned="true"
        />
        <ResourcesSection />
      </PageLayout>
    </div>
  );
}
