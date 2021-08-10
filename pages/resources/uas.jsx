import Head from "next/head";
import { PageLayout } from "../../sections/hoc";
import { UASLayout, UAS3Step } from "../../sections/resources/uas";
import { Title } from "../../components";

export default function UAS() {
  return (
    <div>
      <Head>
        <title>PuMP | UAS</title>
      </Head>
      <PageLayout>
        <Title title="University Admissions Server (UAS)" arrowLink="/resources" />
        <UASLayout />
        <UAS3Step />
      </PageLayout>
    </div>
  );
}
