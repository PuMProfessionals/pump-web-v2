import Head from "next/head";
import { Input } from "../components";
import { PageLayout } from "../sections/hoc";

export default function Events() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <div style={{ height: "500px" }}>
          <Input placeholder="Sample placeholder" />
        </div>
      </PageLayout>
    </div>
  );
}
