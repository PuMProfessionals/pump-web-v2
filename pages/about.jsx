import Head from "next/head";
import styled from "styled-components";

import AboutUs from "../public/about/AboutUs-Top.png";
import ImpactReport from "../public/about/impact-report-2023.png";
import Shirothie from "../public/members/Shirothie-Puwaneswaran.png";
import Bryan from "../public/members/Bryan-Liu.jpg";
import Selim from "../public/members/Selim-Choi.png";
import Joshua from "../public/members/JoshuaCheruvathur.png";
import Catherine from "../public/members/CatherineJiang.png";
import Nihal from "../public/members/Nihal-Yapici.png";
import Vasharna from "../public/members/Vasharna-Thangavel.png";
import Stephanie from "../public/members/Stephanie-Murariu.jpg";
import Victoria from "../public/members/Victoria-Yu.jpg";
import Phoebe from "../public/members/Phoebe-Yu.jpg";
import Vivian from "../public/members/Vivian-Song.png";
import Daniel from "../public/members/Daniel-Zhang.png";
import Anushka from "../public/members/Anushka-Dsouza.png";
import Max from "../public/members/Max-Li.png";
import Rhienna from "../public/members/Rhienna-Patel.png";
import Amaan from "../public/members/Amaan-Khera.png";
import Williams from "../public/members/Williams-Thottungal.png";
import Adam from "../public/members/Adam-Yeh.png";
import Kathy from "../public/members/Kathy-Tong.jpg";
import Isabella from "../public/members/Isabella-Quartly.jpg";
import Orchee from "../public/members/Orchee-Haque.png";
import Default from "../public/members/card-fill.png";

import { Title, LeftImageTextLayout, SectionWrapper } from "../components";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts, OurStory } from "../sections/about";
import { baseTheme } from "../theme";

const nationalBoard = [
  {
    name: "Shirothie Puwaneswaran",
    avatar: Shirothie,
    position: "President",
    cardHeight: 370,
    imageWidth: 250,
  },
  {
    name: "Bryan Liu",
    avatar: Bryan,
    position: "VP Project Development",
    cardHeight: 370,
    imageWidth: 205,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Selim Choi",
    avatar: Selim,
    position: "VP Project Development",
    cardHeight: 370,
    imageWidth: 250,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Joshua Cheruvathur",
    avatar: Joshua,
    position: "VP of Eastern Regional Operations",
    cardHeight: 370,
    fontColor: baseTheme.colors.turquoise,
  },
  {
    name: "Catherine Jiang",
    avatar: Catherine,
    position: "VP of Western Regional Operations",
    imageWidth: 240,
    cardHeight: 370,
  },
  {
    name: "Nihal Yapici",
    avatar: Nihal,
    position: "VP Community",
    cardHeight: 370,
    imageWidth: 240,
    fontColor: baseTheme.colors.yellow,
  },
];

const torontoBoard = [
  {
    name: "Vasharna Thangavel",
    avatar: Vasharna,
    position: "President",
    cardHeight: 370,
  },
  {
    name: "Stephanie Murariu",
    avatar: Stephanie,
    position: "VP of Logistics",
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Victoria Yu",
    avatar: Victoria,
    position: "VP of Finance",
    cardHeight: 370,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Phoebe Yu",
    avatar: Phoebe,
    position: "VP of Public Relations",
    cardHeight: 370,
    fontColor: baseTheme.colors.turquoise,
  },
  {
    name: "Vivian Song",
    avatar: Vivian,
    position: "VP of Public Relations",
    cardHeight: 370,
  },
];

const vancouverBoard = [
  {
    name: "Daniel Zhang",
    avatar: Daniel,
    position: "President",
    cardHeight: 370,
  },
  {
    name: "Anushka Dsouza",
    avatar: Anushka,
    position: "VP of Logistics",
    cardHeight: 370,
    imageWidth: 210,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Max Li",
    avatar: Max,
    position: "VP of Finance",
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Rhienna Patel",
    avatar: Rhienna,
    position: "VP of Public Relations",
    cardHeight: 370,
    fontColor: baseTheme.colors.turquoise,
  },
  {
    name: "Amaan Khera",
    avatar: Amaan,
    position: "VP of Public Relations",
    cardHeight: 370,
    imageWidth: 240,
  },
];

const calgaryBoard = [
  {
    name: "Isabella Quartly",
    avatar: Isabella,
    position: "President",
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Orchee Haque",
    avatar: Orchee,
    position: "VP of Internal Affairs",
    cardHeight: 370,
    imageWidth: 240,
  },
  {
    name: "Kausar Virji",
    avatar: Default,
    position: "VP of External Affairs",
    cardHeight: 370,
    fontColor: baseTheme.colors.gold,
  },
];

const ottawaBoard = [
  {
    name: "Williams Thottungal",
    avatar: Williams,
    position: "President",
    imageWidth: 220,
    cardHeight: 370,
  },
  {
    name: "Adam Yeh",
    avatar: Adam,
    position: "VP of Finance",
    cardHeight: 370,
    imageWidth: 250,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Kathy Tong",
    avatar: Kathy,
    position: "VP of Public Relations",
    cardHeight: 370,
    fontColor: baseTheme.colors.brightBlue,
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
          description="Get to know the PuMP family!"
          image={AboutUs}
        />
        <OurStory />
        <QuickFacts />
        <ValueSection />
        <LeftImageTextLayout
          id="impact-report"
          titleText="Our Impact Report"
          graphic={ImpactReport}
          imageWidth={400}
          imageHeight={282}
          descriptions={[
            `Read about our projects from the 2022-2023 fiscal year in our impact report below!`,
            `Our team is dedicated to upholding our core values of community, transparency, and youth empowerment. We look forward to releasing next year's annual report and cannot wait to see what the future holds.`,
          ]}
          buttons={[
            {
              text: "Click to View",
              link: "/about/PuMP_Impact_Report_2022-23.pdf",
              external: true,
            },
          ]}
          style={{ marginTop: "5%" }}
        />
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
            boardDescription="Est. 2021 | 21 Members"
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
