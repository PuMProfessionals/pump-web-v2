import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function BlogProject() {
  return (
    // TODO: reference ./blog/id/index.js for styling templates
    <div>
      <ToastContainer />
      <Head>
        <title>PuMP | Admin Opportunity - {"N/A"}</title>
        <meta property="description" content="admin dashboard to handle resources" />
      </Head>
    </div>
  );
}
