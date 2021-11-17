import Head from "next/head";
import styled from "styled-components";

import PumpPlus from "../public/events/pump-plus.png";
import PowerUp from "../public/events/power-up.png";
import Covid19Support from "../public/events/COVID-19Support.png";
import CracktheCase from "../public/events/CracktheCase.png";
import DocTalks from "../public/events/DocTalks.png";
import Laborastory from "../public/events/Laborastory.png";
import MedChat from "../public/events/MedChat.png";
import MedHunt from "../public/events/MedHunt.png";
import MedSpecs from "../public/events/MedSpecs.png";
import MedWeb from "../public/events/MedWeb.png";
import OnDiseases from "../public/events/OnDiseasesDisorders.png";
import PathwaysinMedicine from "../public/events/PathwaysinMedicine.png";
import PuMPSpark from "../public/events/PuMPSpark.png";
import UniversityTakeover from "../public/events/UniversityTakeovers.png";
import URECS from "../public/events/URECS.png";
import { Title, Text } from "../components";
import { EventsCarousel } from "../sections/events";
import { PageLayout } from "../sections/hoc";
import { baseTheme } from "../theme";

export default function Events() {
  return (
    <div>
      <Head>
        <title>PuMP | Events</title>
        <meta
          name="description"
          content="Whether it's career planning, questions about post-secondary education, or networking in the science community, PuMP has got you covered!"
        />
      </Head>
      <PageLayout>
        <Title title="Events" />
        <Wrapper>
          <SEventsCarousel
            title="Annual Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            backgroundColor={baseTheme.colors.pastelNavy}
            cardHeight={750}
            slides={[
              {
                title: "PuMP+",
                date: "Spring 2021 ",
                tags: ["All regional boards"],
                description:
                  "| A fair where organizations host booths to share opportunities for students to engage in STEM. Meet 50+ institutions like SickKids, Sanofi Biogenius, and more!",
                thumbnail: PumpPlus,
                buttonText: "Learn More",
                linkTo: "/events/pump-plus",
              },
              {
                title: "MedHunt",
                tags: ["National"],
                date: "Aug. 2021 ",
                thumbnail: MedHunt,
                description:
                  "| MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
              },
              {
                title: "PowerUp Mentorship Program",
                tags: ["Ongoing", "National"],
                date: "Ongoing ",
                description:
                  "| PowerUp pairs high school students to undergraduate mentors studying the health, life, or biological sciences. Through virtual coffee chats, students can seek guidance on anything from post-secondary applications to scholarships to campus life!",
                thumbnail: PowerUp,
                buttonText: "Learn More",
                linkTo: "/events/power-up",
              },
            ]}
          />
          <SEventsCarousel
            title="Digital Events"
            component={
              <>
                <Description size={baseTheme.size.h4} color={baseTheme.colors.navy}>
                  Opportunities that are accessible to students all-year round. Check
                  it out on our social media, and watch the recordings on our&nbsp;
                  <a
                    href="https://www.youtube.com/channel/UCkfxszq-xngSW5TKuyK4Aqg"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: baseTheme.colors.navy, fontWeight: "bold" }}
                  >
                    Youtube
                  </a>
                  !
                </Description>
              </>
            }
            backgroundColor={baseTheme.colors.yellow}
            textColor={baseTheme.colors.navy}
            cardHeight={680}
            slides={[
              {
                title: "University Takeovers",
                tags: ["National"],
                date: "Jan. 2021 ",
                thumbnail: UniversityTakeover,
                description:
                  "| Social media features by university students sharing their day-to-day life and answering questions about their programs.",
              },
              {
                title: "MedWeb",
                tags: ["Toronto"],
                date: "Oct. 2020 - Dec. 2020 ",
                thumbnail: MedWeb,
                description:
                  "| A webinar series featuring 6 speakers working in neuroscience, pharmacology and pediatrics, exposing students to their respective fields.",
              },
              {
                title: "Pathways in Medicine",
                tags: ["Vancouver"],
                date: "July 2020 ",
                thumbnail: PathwaysinMedicine,
                description:
                  "| A webinar-style series featuring speakers in healthcare specialties ranging from exercise medicine to clinical care.",
              },
              {
                title: "MedChat",
                tags: ["Vancouver"],
                thumbnail: MedChat,
                date: "Sept. 2020",
                description:
                  "| A social media Q&A where students submitted questions to panelists regarding various topics from extracurriculars to medical school.",
              },
              {
                title: "COVID-19 Support",
                tags: ["Toronto"],
                date: "June 2020 - Aug. 2020 ",
                thumbnail: Covid19Support,
                description:
                  "| With the help of TakingItGlobal and Rising Youth, PuMP donated $1500 worth of groceries and essential goods to various shelters and long term care homes.",
              },
            ]}
          />
          <SEventsCarousel
            title="Past Events"
            description="Curious about what else we've been up to? Check out our past events here."
            cardHeight={680}
            slides={[
              {
                title: "Doc Talks",
                tags: ["National"],
                date: "Nov. 2020 ",
                thumbnail: DocTalks,
                description:
                  "| A career pathways webinar series featuring physicians and academics. Learn about specialties like emergency medicine, craniofacial surgery, internal medicine, anesthesiology, and ophthalmology through our Youtube recordings",
                buttonText: "Learn More",
                linkTo:
                  "https://www.youtube.com/watch?v=RKq2up1o6fE&list=PL-0XD-IS_2MKIPyRF3NHlTErIS-_Cch-o",
              },
              {
                title: "On Diseases and Disorders",
                tags: ["Calgary"],
                date: "Mar. 2021 ",
                thumbnail: OnDiseases,
                description:
                  "| A social media series where guest speakers share insight into challenges with diagnosis and treatment of Parkinson’s disease to raise awareness. Watch on our Youtube!",
                buttonText: "Learn More",
                linkTo:
                  "https://www.youtube.com/watch?v=59Vjzrfv67o&list=PL-0XD-IS_2MLljU5Qy1Tmy5F-IEGbWWsQ",
              },
              {
                title: "MedSpecs",
                tags: ["Calgary"],
                thumbnail: MedSpecs,
                date: "Dec. 2020 ",
                description:
                  "| A webinar series giving students a behind-the-scenes view to the lives of doctors, researchers and various other medical professionals, where panelists shared their path in medicine.",
                buttonText: "Learn More",
                linkTo: "https://www.youtube.com/watch?v=-pIdQ61IOm4",
              },
              {
                title: "LaboraStory",
                tags: ["National"],
                thumbnail: Laborastory,
                date: "July 2021",
                description:
                  "| A summer workshop series based around a detective crime scene where participants try to complete all the stations as fast as possible, partnering with iGem.",
              },
              {
                title: "URECS",
                thumbnail: URECS,
                tags: ["Toronto"],
                date: "April 2019",
                description:
                  "| A workshop for students to explore the software COBWEB and learn about research models from high school and university students.",
              },
              {
                title: "Crack the Case",
                tags: ["Vancouver"],
                date: "Nov. 2020 ",
                thumbnail: CracktheCase,
                description:
                  "| A medical case study challenge where teams raced to submit answers after analyzing the cases.",
              },
              {
                title: "PuMP Spark",
                tags: ["Toronto"],
                date: "July 2019 ",
                thumbnail: PuMPSpark,
                description:
                  "| An interactive workshop featuring 3 guest speakers from the medical field, held at Richvale Library.",
              },
            ]}
          />
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 5%;
`;
const SEventsCarousel = styled(EventsCarousel)`
  margin-bottom: 10vh;
`;
const Description = styled(Text)`
  padding: 0 5% 3% 5%;
`;
