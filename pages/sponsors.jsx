import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import AromaCafe from "../public/sponsors/AromaCafe.png";
import BasilBox from "../public/sponsors/Basil Box.png";
import BrainPower from "../public/sponsors/Brain Power.png";
import Cetaphil from "../public/sponsors/Cetaphil.png";
import Chipotle from "../public/sponsors/Chipotle.png";
import CJAY from "../public/sponsors/CJAY.png";
import CODEX from "../public/sponsors/CODEX.png";
import CutenSmol from "../public/sponsors/CutenSmol.png";
import DaanGoLab from "../public/sponsors/DaanGoLab.png";
import DavidsTea from "../public/sponsors/DavidsTea.png";
import GingerCupcakeDesserts from "../public/sponsors/GingerCupcakeDesserts.png";
import Kelseys from "../public/sponsors/Kelseys.png";
import Maker from "../public/sponsors/Maker.png";
import MDConsultants from "../public/sponsors/MDConsultants.png";
import Mediclo from "../public/sponsors/Mediclo.png";
import Microbi from "../public/sponsors/Microbi.png";
import MorganCrossing from "../public/sponsors/MorganCrossing.png";
import NDNextDoor from "../public/sponsors/NDNextDoor.png";
import Reptilla from "../public/sponsors/Reptilia.png";
import ROM from "../public/sponsors/ROM.png";
import Smash from "../public/sponsors/Smash.png";
import StickerGiant from "../public/sponsors/StickerGiant.png";
import StickerMule from "../public/sponsors/StickerMule.png";
import TheKeg from "../public/sponsors/TheKeg.png";
import Yellofruit from "../public/sponsors/Yellofruit.png";
import YGOJuiceTea from "../public/sponsors/YGOJuiceTea.png";
import Leap from "../public/sponsors/Leap.png";
import STEMFellowship from "../public/sponsors/StemFellowship.png";
import StudentsForHerdImmunity from "../public/sponsors/StudentsForHerdImmunity.png";

import SponsorshipGraphic from "../public/sponsors/sponsor-benefits.png";
import { Title, Text, LeftImageTextLayout, ContactForm } from "../components";
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
    title: "Reptilla",
    image: Reptilla,
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

export default function Sponsors() {
  return (
    <div>
      <Head>
        <title>PuMP | Sponsors</title>
        <meta
          name="description"
          content="Find out why you should sponsor PuMP today."
        />
      </Head>
      <PageLayout>
        <Title title="Sponsors" />
        <Wrapper>
          <Subtitle style={{ marginTop: "5%" }}>Why Sponsor PuMP</Subtitle>
          <Description>
            Aside from medical-related learning opportunities, youth reaching out to
            PuMP are on the lookout for resources that local businesses can help
            provide. Your support will enable us to continue offering out platform
            for real world connections.
          </Description>
          <Description>
            At PuMP, donations will go towards a variety of key initiatives in our
            operations, making local businesses’ support a critical resource. In-kind
            donations such as gift baskets, gift cards and coupons can be featured at
            our events through booths and banners.
          </Description>
          <ImpactSection style={{ paddingTop: "5%" }} />
          <TopWrapper>
            <LeftImageTextLayout
              titleText="What We Offer"
              graphic={SponsorshipGraphic}
              imageWidth={300}
              imageHeight={400}
              descriptions={[
                `In return, we offer a variety of ways to feature your business. Our online platforms on Instagram, Facebook and LinkedIn reach  more than 1000 youth across the GTA. The sponsorship rewards listed above aim to reflect our commitment to our sponsors as much as possible.`,
              ]}
              buttons={[
                {
                  text: "View our Sponsorship Package",
                  link: "/sponsors/PuMPSponsorshipPackage.pdf",
                  external: true,
                },
              ]}
            />
          </TopWrapper>
          <div style={{ margin: "8% 5% 0 5%" }}>
            <ContactForm
              title="Become a sponsor"
              descriptionText="A representative will reply back to your email within 24 hours."
            />
          </div>
          <SponsorsWrapper>
            <Subtitle>A Thank You To Our Sponsors</Subtitle>
            <Description>
              As a growing organization, the support of local businesses and
              community members allows us to grow, reach out, and give back. PuMP is
              extremely grateful for these contributions, which have helped us truly
              realize the potential of medicine in the students of our communities
              through our various events and outreach efforts. To our sponsors –
              thank you.
            </Description>
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
          <Subtitle>And Our Community Partners</Subtitle>
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
const TopWrapper = styled.div`
  padding-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
