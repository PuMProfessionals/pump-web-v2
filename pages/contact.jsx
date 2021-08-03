import Head from "next/head";
import styled from "styled-components";

import { Title, ContactForm } from "../components";
import { PageLayout } from "../sections/hoc";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>PuMP | Contact Us</title>
      </Head>
      <PageLayout>
        <Title title="Contact Us" />
        <Wrapper>
          <ContactForm
            title="Or, contact us directly!"
            descriptionText="A representative will reply back to your email within 24 hours. Feel free to contact us about our initiatives, joining the team, becoming a partner, or anything else you want to chat about!"
          />
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 0 10%;
`;
