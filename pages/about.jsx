import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ValueSection } from "../sections/about";

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <ValueSection />
      </PageLayout>
    </div>
  );
}
