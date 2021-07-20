import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { TopSection, WhatsHappening } from "../sections/home";

const WhatsHappeningItems = {
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <TopSection />
        <WhatsHappening />
      </PageLayout>
    </div>
  );
}
