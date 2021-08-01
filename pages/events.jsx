import Head from "next/head";
import styled from "styled-components";

import { EventsCarousel } from "../sections/events";
import { PageLayout } from "../sections/hoc";

export default function Events() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <Wrapper>
          <EventsCarousel />
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 5%;
`;
