import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ResourcesSection } from "../sections/resources";
import { Title } from "../components";

export default function Resources({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP | Resources</title>
        <meta
          name="description"
          content="Learn more about our resources including University Admissions Server, blog, and opportunities"
        />
      </Head>
      <PageLayout>
        <Title title="Student Resources" />
        <ResourcesSection />
      </PageLayout>
    </div>
  );
}
