import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Events() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <div style={{ height: "500px" }}>events</div>
      </PageLayout>
    </div>
  );
}
