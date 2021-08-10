import Head from "next/head";
import styled from "styled-components";

import BasilBox from "../public/sponsors/Basil Box.png";
import BrainPower from "../public/sponsors/Brain Power.png";
import Cetaphil from "../public/sponsors/Cetaphil.png";

import { Title } from "../components";
import { PageLayout } from "../sections/hoc";
import { media } from "../utils";

const sponsors = [
  {
    title: "Basil Box",
    image: BasilBox,
    width: 180,
  },
  {
    title: "Brain Power",
    image: BrainPower,
    width: 350,
    height: 110,
  },
  {
    title: "Cetaphil",
    image: Cetaphil,
    width: 300,
  },
];

export default function Sponsors() {
  return (
    <div>
      <Head>
        <title>PuMP | Sponsors</title>
      </Head>
      <PageLayout>
        <Title title="Sponsors" />
        <Wrapper>hello</Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;
