import Head from "next/head";
import { PageLayout } from "../../sections/hoc";
import { UASLayout, UAS3Step } from "../../sections/resources/uas";
import { Title } from "../../components";

export default function UAS() {
  return (
    <div>
      <Head>
        <title>PuMP | UAS</title>
        <meta
          name="description"
          content="Join a Discord comunity for high school and undergraduate students to learn more about diverse medical university programs."
        />
      </Head>
      <PageLayout>
        <Title title="University Admissions Server (UAS)" arrowLink="/resources" />
        <UASLayout />
        <UAS3Step />
      </PageLayout>
    </div>
  );
}
