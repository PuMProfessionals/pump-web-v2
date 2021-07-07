import Head from "next/head";
import { PageLayout } from "../components/hoc";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        hello
      </PageLayout>
    </div>
  );
}
