import Head from "next/head";
import styled from "styled-components";

import PumpDigest from "../public/resources/pump-digest.png";
import PumpPlus from "../public/events/pump-plus.png";
import PowerUp from "../public/events/power-up.png";
import { Title } from "../components";
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
          content="Find out more about our events like MedHunt, MedVlogs, and more"
        />
      </Head>
      <PageLayout>
        <Title title="Events" />
        <Wrapper>
          <SEventsCarousel
            title="Annual Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            backgroundColor={baseTheme.colors.pastelNavy}
            cardHeight={600}
            slides={[
              {
                title: "PuMP+",
                date: "April 2021 ",
                tags: ["All boards"],
                description:
                  "| Connecting high school students to a variety of opportunities. Meet institutions such as the Sanofi Biogenius Challenge, Vex Robotics, and The Knowledge Society! Join 500+ students and 20+ booths!",
                thumbnail: PumpPlus,
                buttonText: "Learn More",
                linkTo: "/events/pump-plus",
              },
              {
                title: "MedHunt",
                tags: ["National"],
                date: "Aug. 2021 ",
                description:
                  "| MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
                buttonText: "Learn More",
                linkTo: "/events/medhunt",
              },
              {
                title: "PowerUp Mentorship Program",
                tags: ["Ongoing", "National"],
                date: "Ongoing ",
                description:
                  "| Partnered with The STEM Fellowship, high school students are paired with university students where they can talk about scholarships, post-secondary applications, or university life.",
                thumbnail: PowerUp,
                buttonText: "Learn More",
                linkTo: "/events/power-up",
              },
            ]}
          />
          <SEventsCarousel
            title="Digital Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            backgroundColor={baseTheme.colors.yellow}
            textColor={baseTheme.colors.navy}
            cardHeight={580}
            slides={[
              {
                title: "University Takeovers",
                tags: ["National"],
                date: "Jan. 2021 ",
                description:
                  "| Social media features by university students sharing their day-to-day life and answering questions about their programs.",
              },
              {
                title: "University Admissions Server",
                tags: ["Ongoing", "National"],
                date: "Ongoing ",
                description:
                  "| A Discord community where high school students network and learn about undergraduate programs in health sciences by directly chatting with mentors.",
                buttonText: "Learn More",
                linkTo: "/resources/uas",
              },
              {
                title: "PuMP Digest",
                tags: ["Ongoing", "National"],
                date: "Ongoing ",
                thumbnail: PumpDigest,
                description:
                  "| A student blog with seasonal releases on topics ranging from novel biomedical research to student life to post-secondary journeys.",
                buttonText: "Learn More",
                linkTo: "/resources/blog",
              },
              {
                title: "PuMP Direct",
                tags: ["Ongoing", "National"],
                date: "Ongoing ",
                description:
                  "| A database of STEM opportunities throughout Canada, from hospital volunteer positions to science competitions and programs.",
                buttonText: "Learn More",
                linkTo: "/resources/opportunities",
              },
              {
                title: "MedSpecs",
                tags: ["Calgary"],
                date: "Dec. 2020 ",
                description:
                  "| A webinar series exposing students to the lives of doctors, researchers and various other medical professionals, where panelists shared their path in medicine.",
              },
              {
                title: "On Diseases and Disorders",
                tags: ["Calgary"],
                date: "Mar. 2021 ",
                description:
                  "| A social media series where guest speakers share insight into challenges with diagnosis and treatment of Parkinson’s disease to raise awareness.",
              },
              {
                title: "MedWeb",
                tags: ["Toronto"],
                date: "Oct. 2020 - Dec. 2020 ",
                description:
                  "| A webinar series featuring 6 speakers working in neuroscience, pharmacology and pediatrics, exposing students to their respective fields.",
              },
              {
                title: "Pathways in Medicine",
                tags: ["Vancouver"],
                date: "July 2020 ",
                description:
                  "| A webinar-style series featuring speakers in healthcare specialties ranging from exercise medicine to clinical care.",
              },
              {
                title: "MedChat",
                tags: ["Vancouver"],
                date: "Sept. 2020",
                description:
                  "| A social media Q&A where students submitted questions to panelists regarding various topics from extracurriculars to medical school.",
              },
            ]}
          />
          <SEventsCarousel
            title="Past Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            slides={[
              {
                title: "Doc Talks",
                tags: ["National"],
                date: "Nov. 2020 ",
                description:
                  "| Connecting high school students to a variety of opportunities. Meet institutions such as the Sanofi Biogenius Challenge, Vex Robotics, and The Knowledge Society! Join 500+ students and 20+ booths!",
              },
              {
                title: "LaboraStory",
                date: "July 2021",
                description:
                  "| MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
              },
              {
                title: "URECS",
                date: "April 2019",
                description:
                  "| A workshop for students to explore the software COBWEB and learn about research models from high school and university students.",
              },
              {
                title: "COVID-19 Support",
                tags: ["Toronto"],
                date: "June 2020 - Aug. 2020 ",
                description:
                  "| With the help of TakingItGlobal and Rising Youth, PuMP donated $1500 worth of groceries and essential goods to various shelters and long term care homes.",
              },
              {
                title: "Crack the Case",
                tags: ["Vancouver"],
                date: "Nov. 2020 ",
                description:
                  "| A medical case study challenge where teams raced to submit answers after analyzing the cases.",
              },
              {
                title: "PuMP Spark",
                date: "July 2019 ",
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
