import Head from "next/head";

import Lucy from "../public/members/lucy-zhao.png";
import Asma from "../public/members/asma-khamis.png";
import Shiro from "../public/members/shiro-puwa.png";
import RachelLin from "../public/members/rachel-lin.png";
import Brooklyn from "../public/members/brooklyn-wiggins.png";
import YiAn from "../public/members/yi-an-wang.jpeg";
import Camille from "../public/members/camille-eamon.jpeg";
import { Title } from "../components";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts } from "../sections/about";
import { baseTheme } from "../theme";

const nationalBoard = [
  {
    name: "Lucy Zhao",
    avatar: Lucy,
    position: "Founder & President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Asma Khamis",
    avatar: Asma,
    position: "VP of Operations",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow
  },
  {
    name: "Shiro Puwa",
    avatar: Shiro,
    position: "VP of Human Resources",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue
  },
  {
    name: "Rachel Lin",
    avatar: RachelLin,
    position: "VP of Communications",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.turquoise
  },
];

const calgaryBoard = [
  {
    name: "Brookyln Wiggins",
    avatar: Brooklyn,
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Yi An (Annie) Wang",
    avatar: YiAn,
    position: "Vice President",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold
  },
  {
    name: "Camille Eamon",
    avatar: Camille,
    position: "Vice President",
    imageWidth: 260,
    imageHeight: 210,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP | About Us</title>
      </Head>
      <PageLayout>
        <Title title="About Us" />
        <ValueSection />
        <QuickFacts />
        <BoardSection 
          board="National Board"
          boardDescription="Est. 2018 | 74 members"
          boardMembers={nationalBoard}
        />
        <BoardSection
          board="Calgary Board"
          boardDescription="Est. 2020 | 27 Members"
          boardMembers={calgaryBoard}
        />
      </PageLayout>
    </div>
  );
}
