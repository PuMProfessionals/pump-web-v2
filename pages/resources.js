import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function About({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        resources
      </PageLayout>
    </div>
  );
}
