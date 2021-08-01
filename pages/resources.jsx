import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ResourcesSection } from "../sections/resources";
import { Title } from "../components";

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
          description={`Explore the complete timeline of a medical student, from
                        high school to residency and beyond`}
        />
        <ResourcesSection />
      </PageLayout>
    </div>
  );
}
