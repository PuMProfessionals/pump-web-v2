import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "../components";
import { PageLayout } from "../sections/hoc";
import { TopSection, ContactSection } from "../sections/home";

export default function Home() {
  const successfulNotify = () => {
    toast.success("Successful");
  };
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <TopSection />
        <ContactSection />
        <Button onClick={successfulNotify}>Notify</Button>
        <ToastContainer />
      </PageLayout>
    </div>
  );
}
