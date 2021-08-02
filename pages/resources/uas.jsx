import Head from "next/head";
import { PageLayout } from "../../sections/hoc";
import { UASLayout } from "../../sections/resources/uas";

export default function UAS() {
  return (
    <div>
      <Head>
        <title>PuMP | UAS</title>
      </Head>
      <PageLayout>
        <UASLayout />
      </PageLayout>
    </div>
  );
}
