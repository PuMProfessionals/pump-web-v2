import Head from "next/head";
import styled from "styled-components";

import Lucy from "../public/members/lucy-zhao.png";
import Asma from "../public/members/asma-khamis.png";
import Shiro from "../public/members/shiro-puwa.png";
import RachelLin from "../public/members/rachel-lin.png";
import Ellie from "../public/members/ellie-tiliakou.png";
import Angela from "../public/members/angela-yang.jpg";
import Dhruv from "../public/members/dhruv-dhall.png";
import Helen from "../public/members/helen-yin.png";
import Kaya from "../public/members/kaya-januszewska.png";
import Andreea from "../public/members/andreea-murariu.jpg";
import Aneeya from "../public/members/aneeya-johal.jpg";
import MarkShort from "../public/members/mark-short.png";
import Catherine from "../public/members/catherine-jiang.png";
import Brooklyn from "../public/members/brooklyn-wiggins.png";
import YiAn from "../public/members/yi-an-wang.png";
import Camille from "../public/members/camille-eamon.jpeg";
import Ashley from "../public/members/ashley-lam.jpeg";
import Joshua from "../public/members/joshua-cheruvathur.png";
import Bryan from "../public/members/bryan-liu.jpg";
import Emily from "../public/members/emily-hu.jpg";
import AboutUs from "../public/about/AboutUs-Top.png";
import ImpactReport from "../public/about/impact-report.svg";

import { Title, LeftImageTextLayout, SectionWrapper } from "../components";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts, OurStory } from "../sections/about";
import { baseTheme } from "../theme";

const nationalBoard = [
  {
    name: "Lucy Zhao",
    avatar: Lucy,
    position: "Founder & President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 370,
  },
  {
    name: "Asma Khamis",
    avatar: Asma,
    position: "VP of Community",
    imageWidth: 230,
    imageHeight: 220,
    cardHeight: 370,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Shiro Puwa",
    avatar: Shiro,
    position: "VP of National Operations",
    imageWidth: 230,
    imageHeight: 220,
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Rachel Lin",
    avatar: RachelLin,
    position: "VP of Promotions",
    imageWidth: 250,
    imageHeight: 200,
    cardHeight: 360,
    fontColor: baseTheme.colors.turquoise,
  },
  {
    name: "Ellie Tiliakou",
    avatar: Ellie,
    position: "VP of Regional Operations",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 370,
  },
  {
    name: "Richard Xi",
    position: "VP of Regional Operations",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 370,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Angela Yang",
    avatar: Angela,
    position: "VP of Corporate Affairs",
    imageWidth: 240,
    imageHeight: 240,
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const torontoBoard = [
  {
    name: "Dhruv Dhall",
    avatar: Dhruv,
    position: "President",
    imageWidth: 260,
    imageHeight: 240,
    cardHeight: 380,
  },
  {
    name: "Helen Yin",
    avatar: Helen,
    position: "VP of Internal Affairs",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 380,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Andreea Murariu",
    avatar: Andreea,
    position: "VP of External Affairs",
    imageWidth: 220,
    imageHeight: 255,
    cardHeight: 380,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Emily Hu",
    avatar: Emily,
    position: "Secretary",
    imageWidth: 215,
    imageHeight: 260,
    cardHeight: 380,
    fontColor: baseTheme.colors.turquoise,
  },
];

const vancouverBoard = [
  {
    name: "Aneeya Johal",
    avatar: Aneeya,
    position: "President",
    imageWidth: 220,
    imageHeight: 220,
    cardHeight: 370,
  },
  {
    name: "Kaya Januszewska",
    avatar: Kaya,
    position: "VP of External Affairs",
    imageWidth: 230,
    imageHeight: 210,
    cardHeight: 370,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Mark Short",
    avatar: MarkShort,
    position: "VP of Internal Affairs",
    imageWidth: 230,
    imageHeight: 200,
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Catherine Jiang",
    avatar: Catherine,
    position: "Secretary",
    imageWidth: 230,
    imageHeight: 230,
    cardHeight: 370,
    fontColor: baseTheme.colors.turquoise,
  },
];

const calgaryBoard = [
  {
    name: "Brookyln Wiggins",
    avatar: Brooklyn,
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 370,
  },
  {
    name: "Yi An (Annie) Wang",
    avatar: YiAn,
    position: "Vice President",
    imageWidth: 240,
    imageHeight: 230,
    cardHeight: 370,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Camille Eamon",
    avatar: Camille,
    position: "Vice President",
    imageWidth: 250,
    imageHeight: 190,
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const ottawaBoard = [
  {
    name: "Joshua Cheruvathur",
    avatar: Joshua,
    position: "Senior Board",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Ashley Lam",
    avatar: Ashley,
    position: "VP of Internal Affairs",
    imageWidth: 245,
    imageHeight: 190,
    cardHeight: 370,
  },
  {
    name: "Bryan Liu",
    avatar: Bryan,
    position: "VP of External Affairs",
    imageWidth: 210,
    imageHeight: 240,
    cardHeight: 370,
    fontColor: baseTheme.colors.gold,
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP | About Us</title>
        <meta name="description" content="Get to know the PuMP family" />
      </Head>
      <PageLayout>
        <Title
          title="About Us"
          description="Get to know the PuMP family."
          image={AboutUs}
        />
        <OurStory />
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
              external: true,
            },
          ]}
          style={{ marginTop: "5%" }}
        />
        <QuickFacts />
        <PhotoCollageSectionWrapper
          backgroundPath="/about/photo-collage-large.png"
          mobilePath="/about/photo-collage-large.png"
          mobileThreshold={1000}
        >
          <SBoardSection
            board="National Board"
            boardDescription="Est. 2020 | 74 members"
            boardMembers={nationalBoard}
          />
          <SBoardSection
            board="Toronto Board"
            boardDescription="Est. 2018 | 50 members"
            boardMembers={torontoBoard}
            align="right"
          />
          <SBoardSection
            board="Vancouver Board"
            boardDescription="Est. 2020 | 31 members"
            boardMembers={vancouverBoard}
          />
          <SBoardSection
            board="Calgary Board"
            boardDescription="Est. 2020 | 28 members"
            boardMembers={calgaryBoard}
            align="right"
          />
          <SBoardSection
            board="Ottawa Board"
            boardDescription="Est. 2021 | 5 Members"
            boardMembers={ottawaBoard}
          />
        </PhotoCollageSectionWrapper>
      </PageLayout>
    </div>
  );
}

const PhotoCollageSectionWrapper = styled(SectionWrapper)`
  padding-top: 5%;
  padding-bottom: 10%;
  background-repeat: repeat;
  border-top-left-radius: 64px;
  border-top-right-radius: 64px;
`;
const SBoardSection = styled(BoardSection)`
  ${({ theme }) => `
      background-color: ${theme.colors.greyBlue};
      border-radius: 72px;
      padding: 5%;
      margin: 3%;
  `};
`;
