import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ResourcesSection } from "../sections/resources";

export default function Resources({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <ResourcesSection />
      </PageLayout>
    </div>
  );
}
