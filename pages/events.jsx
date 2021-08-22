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
            cardHeight={580}
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
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/events/med-hunt",
              },
              {
                title: "PowerUp Mentorship Program",
                tags: ["National"],
                date: "Ongoing ",
                description:
                  "| Partnered with The STEM Fellowship, high school students are paired with university students where they can talk about scholarships, post-secondary applications, or university life.",
                thumbnail: PowerUp,
                buttonText: "Learn More",
                linkTo: "/power-up",
              },
            ]}
          />
          <SEventsCarousel
            title="Digital Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            backgroundColor={baseTheme.colors.yellow}
            textColor={baseTheme.colors.navy}
            cardHeight={470}
            slides={[
              {
                title: "University Takeovers",
                date: "Jan. 2021 ",
                description:
                  "| Social media features by university students sharing their day-to-day life and answering questions about their programs.",
                thumbnail: PumpDigest,
              },
              {
                title: "Connect U",
                description:
                  "Panel of medical and health science students answering questions about school and providing the must-knows.",
                thumbnail: PumpDigest,
              },
              {
                title: "MedVlogs",
                description:
                  "Social media features of medical students where they share a day in the life, study tips, internship experiences, and more.",
                thumbnail: PumpDigest,
              },
            ]}
          />
          <SEventsCarousel
            title="Past Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            slides={[
              {
                title: "Doc Talks",
                date: "Nov. 2020 ",
                description:
                  "| Connecting high school students to a variety of opportunities. Meet institutions such as the Sanofi Biogenius Challenge, Vex Robotics, and The Knowledge Society! Join 500+ students and 20+ booths!",
                thumbnail: PumpDigest,
              },
              {
                title: "LaboraStory",
                description:
                  "MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/",
              },
              {
                title: "URECS",
                description:
                  "Partnered with The STEM Fellowship, high school students are paired with university students where they can talk about scholarships, post-secondary applications, or university life.",
                thumbnail: PumpDigest,
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
