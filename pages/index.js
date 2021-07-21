import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { TopSection, WhatsHappening, ContactSection } from "../sections/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <TopSection />
        <WhatsHappening />
        <ContactSection />
      </PageLayout>
    </div>
  );
}
