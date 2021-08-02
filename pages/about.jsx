import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ValueSection, QuickFacts } from "../sections/about";

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <ValueSection />
        <QuickFacts />
      </PageLayout>
    </div>
  );
}
