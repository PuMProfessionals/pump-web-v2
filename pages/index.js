import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { TopSection } from "../sections/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <TopSection />
      </PageLayout>
    </div>
  );
}
