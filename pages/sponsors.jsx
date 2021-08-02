import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Sponsors() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <div style={{ height: "500px" }}>Sponsors</div>
      </PageLayout>
    </div>
  );
}
