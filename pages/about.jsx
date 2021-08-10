import Head from "next/head";

import Lucy from "../public/members/lucy-zhao.png";
import Asma from "../public/members/asma-khamis.png";
import Shiro from "../public/members/shiro-puwa.png";
import RachelLin from "../public/members/rachel-lin.png";
import Dhruv from "../public/members/dhruv-dhall.png";
import Kaya from "../public/members/kaya-januszewska.png";
import Aneeya from "../public/members/aneeya-johal.jpg";
import MarkShort from "../public/members/mark-short.png";
import Brooklyn from "../public/members/brooklyn-wiggins.png";
import YiAn from "../public/members/yi-an-wang.jpeg";
import Camille from "../public/members/camille-eamon.jpeg";
import Ashley from "../public/members/ashley-lam.jpeg";
import Joshua from "../public/members/joshua-cheruvathur.png";
import Bryan from "../public/members/bryan-liu.jpg";
import PlaceholderGraphic from "../public/home/impact-section-graphic-3.svg";
import { Title } from "../components";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts } from "../sections/about";
import { baseTheme } from "../theme";
import { LeftImageTextLayout } from "../components";
import ImpactReport from "../public/about/impact-report.svg";

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
    position: "VP of Community",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Shiro Puwa",
    avatar: Shiro,
    position: "VP of National Ops",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Rachel Lin",
    avatar: RachelLin,
    position: "VP of Promotions",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.turquoise,
  },
  {
    name: "Ellie Tiliakou",
    position: "VP of Western Reg. Ops",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340
  },
  {
    name: "Richard Xi",
    position: "VP of Eastern Reg. Ops",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Angela Yang",
    position: "VP of Corporate Affairs",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const torontoBoard = [
  {
    name: "Dhruv Dhall",
    avatar: Dhruv,
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Andreea Murariu",
    position: "VP of External Affairs",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Helen Yin",
    position: "VP of Internal Affairs",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Emily Hu",
    position: "Secretary",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.turquoise,
  },
];

const vancouverBoard = [
  {
    name: "Aneeya Johal",
    avatar: Aneeya,
    position: "President",
    imageWidth: 240,
    imageHeight: 240,
    cardHeight: 340,
  },
  {
    name: "Kaya Januszewska",
    avatar: Kaya,
    position: "VP of External Affairs",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Mark Short",
    avatar: MarkShort,
    position: "VP of Internal Affairs",
    imageWidth: 260,
    imageHeight: 230,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
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
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Camille Eamon",
    avatar: Camille,
    position: "Vice President",
    imageWidth: 260,
    imageHeight: 210,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const ottawaBoard = [
  {
    name: "Joshua Cheruvathur",
    avatar: Joshua,
    position: "Senior Board",
    imageWidth: 230,
    imageHeight: 210,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Ashley Lam",
    avatar: Ashley,
    position: "VP of Internal Affairs",
    imageWidth: 245,
    imageHeight: 190,
    cardHeight: 340,
  },
  {
    name: "Bryan Liu",
    avatar: Bryan,
    position: "VP of External Affairs",
    imageWidth: 210,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold,
  }
];

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP | About Us</title>
      </Head>
      <PageLayout>
        <Title
          title="About Us"
          description="Get to know the PuMP family."
          image={PlaceholderGraphic}
        />
        <ValueSection />
        <LeftImageTextLayout
          titleText="Our Impact Report"
          graphic={ImpactReport}
          imageWidth={400}
          imageHeight={282}
          descriptions={[
            `This summer, we are excited to head into our third year of operations! Read about our projects from the 2020-2021 fiscal year in our first ever impact report below.`,
            `Our team is dedicated to upholding our core values of community, transparency, and youth empowerment. We look forward to releasing next year's annual report and cannot wait to see what the future holds.`,
          ]}
          buttons={[
            {
              text: "Click to View",
              link: "https://www.flipsnack.com/pumprofessionals/impact-report-2020-2021.html",
            },
          ]}
        />
        <QuickFacts />
        <BoardSection
          board="National Board"
          boardDescription="Est. 2020 | 74 members"
          boardMembers={nationalBoard}
        />
        <BoardSection
          board="Toronto Board"
          boardDescription="Est. 2018 | 50 members"
          boardMembers={torontoBoard}
          align="right"
        />
        <BoardSection
          board="Vancouver Board"
          boardDescription="Est. 2020 | 30 members"
          boardMembers={vancouverBoard}
        />
        <BoardSection
          board="Calgary Board"
          boardDescription="Est. 2020 | 50 members"
          boardMembers={calgaryBoard}
          align="right"
        />
        <BoardSection
          board="Ottawa Board"
          boardDescription="Est. 2021 | 5 Members"
          boardMembers={ottawaBoard}
        />
      </PageLayout>
    </div>
  );
}
