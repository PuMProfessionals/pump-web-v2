import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import AromaCafe from "../public/sponsors/AromaCafe.png";
import BasilBox from "../public/sponsors/Basil Box.png";
import BrainPower from "../public/sponsors/Brain Power.png";
import Cetaphil from "../public/sponsors/Cetaphil.png";
import Chipotle from "../public/sponsors/Chipotle.png";
import CJAY from "../public/sponsors/CJAY.png";
import CMHF from "../public/sponsors/cmhf.png";
import CODEX from "../public/sponsors/CODEX.png";
import CutenSmol from "../public/sponsors/CutenSmol.png";
import DaanGoLab from "../public/sponsors/DaanGoLab.png";
import DavidsTea from "../public/sponsors/DavidsTea.png";
import FreshFusion from "../public/sponsors/fresh_fusion_logo.png";
import GingerCupcakeDesserts from "../public/sponsors/GingerCupcakeDesserts.png";
import Kelseys from "../public/sponsors/Kelseys.png";
import LSA from "../public/sponsors/LSA.png";
import Maker from "../public/sponsors/Maker.png";
import MDConsultants from "../public/sponsors/MDConsultants.png";
import Mediclo from "../public/sponsors/Mediclo.png";
import Microbi from "../public/sponsors/Microbi.png";
import MorganCrossing from "../public/sponsors/MorganCrossing.png";
import NDNextDoor from "../public/sponsors/NDNextDoor.png";
import Oztrekk from "../public/sponsors/oztrekk_logo.png";
import Pearson from "../public/sponsors/pearson.png";
import Reptilla from "../public/sponsors/Reptilia.png";
import Roche from "../public/sponsors/roche_logo.png";
import ROM from "../public/sponsors/ROM.png";
import Smash from "../public/sponsors/Smash.png";
import StickerGiant from "../public/sponsors/StickerGiant.png";
import StickerMule from "../public/sponsors/StickerMule.png";
import TheKeg from "../public/sponsors/TheKeg.png";
import TKS from "../public/sponsors/TKS_logo.png";
import Yellofruit from "../public/sponsors/Yellofruit.png";
import YGOJuiceTea from "../public/sponsors/YGOJuiceTea.png";
import Leap from "../public/sponsors/Leap.png";
import STEMFellowship from "../public/sponsors/StemFellowship.png";
import StudentsForHerdImmunity from "../public/sponsors/StudentsForHerdImmunity.png";
import YorkU from "../public/sponsors/york_u_logo.png";

import CST from "../public/sponsors/CST.jpeg";
import CTVNews from "../public/sponsors/CTVNews.png";
import GoogleAds from "../public/sponsors/GoogleAds.png";
import GovernmentOfCanada from "../public/sponsors/GovernmentOfCanada.png";
// import GSuite from "../public/sponsors/GSuite.png";
import TakingItGlobal from "../public/sponsors/Taking-It-Global-Rising-Logo.png";

import { Title, Text, ContactForm } from "../components";
import { PageLayout } from "../sections/hoc";
import { ImpactSection } from "../sections/sponsors";
import { media } from "../utils";

const sponsors = [
  {
    title: "Aroma Cafe Bar",
    image: AromaCafe,
    width: 120,
    height: 120,
  },
  {
    title: "Basil Box",
    image: BasilBox,
    width: 180,
    height: 150,
  },
  {
    title: "Brain Power",
    image: BrainPower,
    width: 350,
    height: 90,
  },
  {
    title: "Cetaphil",
    image: Cetaphil,
    width: 230,
    height: 150,
  },
  {
    title: "CMHF",
    image: CMHF,
    width: 330,
    height: 150,
  },
  {
    title: "Chipotle",
    image: Chipotle,
    width: 180,
    height: 180,
  },
  {
    title: "CJAY Tea",
    image: CJAY,
    width: 200,
    height: 180,
  },
  {
    title: "CODEX",
    image: CODEX,
    width: 200,
    height: 180,
  },
  {
    title: "CutenSmol",
    image: CutenSmol,
    width: 180,
    height: 180,
  },
  {
    title: "Daan Go Lab",
    image: DaanGoLab,
    width: 180,
    height: 180,
  },
  {
    title: "DavidsTea",
    image: DavidsTea,
    width: 220,
    height: 80,
  },
  {
    title: "FreshFusion",
    image: FreshFusion,
    width: 220,
    height: 80,
  },
  {
    title: "GingerCupcakeDesseerts",
    image: GingerCupcakeDesserts,
    width: 180,
    height: 120,
  },
  {
    title: "Kelseys",
    image: Kelseys,
    width: 200,
    height: 180,
  },
  {
    title: "LSA",
    image: LSA,
    width: 180,
    height: 180,
  },
  {
    title: "Maker",
    image: Maker,
    width: 180,
    height: 180,
  },
  {
    title: "MD Consultants",
    image: MDConsultants,
    width: 200,
    height: 60,
  },
  {
    title: "Mediclo",
    image: Mediclo,
    width: 180,
    height: 180,
  },
  {
    title: "Microbi",
    image: Microbi,
    width: 240,
    height: 120,
  },
  {
    title: "Morgan Crossing",
    image: MorganCrossing,
    width: 240,
    height: 120,
  },
  {
    title: "ND Next Door",
    image: NDNextDoor,
    width: 200,
    height: 180,
  },
  {
    title: "Oztrekk",
    image: Oztrekk,
    width: 200,
    height: 180,
  },
  {
    title: "Pearson",
    image: Pearson,
    width: 250,
    height: 180,
  },
  {
    title: "Reptilla",
    image: Reptilla,
    width: 200,
    height: 180,
  },
  {
    title: "Roche",
    image: Roche,
    width: 200,
    height: 180,
  },
  {
    title: "ROM",
    image: ROM,
    width: 220,
    height: 100,
  },
  {
    title: "Smash",
    image: Smash,
    width: 180,
    height: 180,
  },
  {
    title: "Sticker Giant",
    image: StickerGiant,
    width: 180,
    height: 130,
  },
  {
    title: "Sticker Mule",
    image: StickerMule,
    width: 180,
    height: 130,
  },
  {
    title: "The Keg",
    image: TheKeg,
    width: 200,
    height: 180,
  },
  {
    title: "TKS",
    image: TKS,
    width: 280,
    height: 100,
  },
  {
    title: "Yellofruit",
    image: Yellofruit,
    width: 200,
    height: 80,
  },
  {
    title: "YGOJuiceTea",
    image: YGOJuiceTea,
    width: 200,
    height: 180,
  },
  {
    title: "YorkU",
    image: YorkU,
    width: 350,
    height: 100,
  },
];

const communityPartners = [
  {
    title: "Leap",
    image: Leap,
    width: 160,
    height: 150,
  },
  {
    title: "STEM Fellowship",
    image: STEMFellowship,
    width: 350,
    height: 90,
  },
  {
    title: "Students for Herd Immunity",
    image: StudentsForHerdImmunity,
    width: 250,
    height: 100,
  },
];

const supporters = [
  {
    title: "CST",
    image: CST,
    width: 220,
    height: 100,
  },
  {
    title: "CTV News",
    image: CTVNews,
    width: 250,
    height: 140,
  },
  {
    title: "Google Ads",
    image: GoogleAds,
    width: 250,
    height: 80,
  },
  {
    title: "Government of Canada",
    image: GovernmentOfCanada,
    width: 250,
    height: 100,
  },
  {
    title: "TakingItGlobal",
    image: TakingItGlobal,
    width: 250,
    height: 100,
  },
];

export default function Community() {
  return (
    <div>
      <Head>
        <title>PuMP | Community</title>
        <meta name="description" content="Find out more about PuMP's community." />
      </Head>
      <PageLayout>
        <Title title="Community" />
        <Wrapper>
          <Description>
            At PuMP, donations go directly into supporting our operations. As a
            growing organization, the support of local businesses and community
            members allows us to grow, reach out, and give back. PuMP is incredibly
            grateful to have an amazing network of community partners and sponsors
            without which our impact would not be possible - thank you.
          </Description>
          <ImpactSection style={{ paddingTop: "5%" }} />
          {/* <TopWrapper>
            <LeftImageTextLayout
              titleText="What We Offer"
              graphic={SponsorshipGraphic}
              imageWidth={300}
              imageHeight={400}
              descriptions={[
                `At PuMP, donations will go towards a variety of key initiatives in our
                operations, making local businesses’ support a critical resource. In-kind
                donations such as gift baskets, gift cards and coupons can be featured at
                our events through booths and banners. The sponsorship rewards listed above aim to reflect our commitment to our sponsors as much as possible. Email us for a copy of our sponsorship package.`,
              ]}
              buttons={[
                {
                  text: "Email Us",
                  link: `mailto:community@pumprofessionals.org`,
                  external: true,
                },
              ]}
            />
          </TopWrapper> */}
          <div style={{ margin: "8% 5% 5% 5%" }}>
            <ContactForm
              title="Partner with us!"
              descriptionText="A representative will reply back to your email within 3-5 business days."
            />
          </div>
          <Subtitle style={{ marginTop: "7%" }}>Our Community Partners</Subtitle>
          <SponsorsWrapper>
            {communityPartners.map((partner) => (
              <ImageContainer key={`Partners__Logo__${partner.title}`}>
                <Image
                  src={partner.image}
                  height={partner.height}
                  width={partner.width}
                  alt={`Logo for ${partner.title}`}
                />
              </ImageContainer>
            ))}
          </SponsorsWrapper>
          <Subtitle>Our Supporters</Subtitle>
          <SponsorsWrapper>
            {supporters.map((sponsor) => (
              <ImageContainer key={`supporters__Logo__${sponsor.title}`}>
                <Image
                  src={sponsor.image}
                  height={sponsor.height}
                  width={sponsor.width}
                  alt={`Logo for ${sponsor.title}`}
                />
              </ImageContainer>
            ))}
          </SponsorsWrapper>
          <Subtitle>Our Sponsors</Subtitle>
          <SponsorsWrapper>
            {sponsors.map((sponsor) => (
              <ImageContainer key={`Sponsors__Logo__${sponsor.title}`}>
                <Image
                  src={sponsor.image}
                  height={sponsor.height}
                  width={sponsor.width}
                  alt={`Logo for ${sponsor.title}`}
                />
              </ImageContainer>
            ))}
          </SponsorsWrapper>
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 0 2%;
  margin-top: 5%;
  ${media(
    "tablet",
    `   
            padding: 0 6%;
        `
  )};
  ${media(
    500,
    `   
            margin-top: 10%;
        `
  )};
`;
const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5% 0;
  justify-content: space-evenly;
  align-items: center;
  ${media(
    500,
    `   
            margin: 10% 0;
        `
  )};
`;
const ImageContainer = styled.div`
  margin: 2% 2% 0 0;
`;
const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
const Description = styled(Text)`
  display: flex;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 5%;
`;
