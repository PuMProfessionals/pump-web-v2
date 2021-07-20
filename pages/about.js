import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        about
      </PageLayout>
    </div>
  );
}
