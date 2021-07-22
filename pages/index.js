import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import {
  TopSection,
  WhatsHappening,
  ImpactSection,
  ContactSection,
} from "../sections/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <TopSection />
        <WhatsHappening />
        <ImpactSection />
        <ContactSection />
        <div>DO NOT USE OR TEST WITHOUT EXPLICIT APPROVAL</div>
      </PageLayout>
    </div>
  );
}
