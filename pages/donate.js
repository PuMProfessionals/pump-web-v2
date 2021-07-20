import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Donate() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <div style={{ height: "500px" }}>
          donate
        </div>
      </PageLayout>
    </div>
  );
}
