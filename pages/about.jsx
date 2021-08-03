import Head from "next/head";

// import YiAn from "../public/members/yi-an-(annie)-wang.jpeg";
import Brooklyn from "../public/members/brooklyn-wiggins.png";
// import Camille from "../public/members/camille-eamon.jpeg";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts } from "../sections/about";

import { Title } from "../components";
import PlaceholderGraphic from "../public/home/impact-section-graphic-3.svg";

const calgaryBoard = [
  {
    name: "Brookyln Wiggins",
    avatar: Brooklyn,
  },
];
export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <Title
          title="About Us"
          description="Get to know the PuMP family."
          image={PlaceholderGraphic}
        />
        <ValueSection />
        <QuickFacts />
        <BoardSection
          board="Calgary Board"
          boardDescription="Est. 2018 | 74 Members"
          boardMembers={calgaryBoard}
        />
      </PageLayout>
    </div>
  );
}
