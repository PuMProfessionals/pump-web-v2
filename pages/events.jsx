import Head from "next/head";
import styled from "styled-components";

import PumpDigest from "../public/resources/pump-digest.png";
import { Title } from "../components";
import { EventsCarousel } from "../sections/events";
import { PageLayout } from "../sections/hoc";
import { baseTheme } from "../theme";

export default function Events() {
  return (
    <div>
      <Head>
        <title>PuMP | Events</title>
      </Head>
      <PageLayout>
        <Title title="Events" />
        <Wrapper>
          <SEventsCarousel
            title="Annual Events"
            description="Opportunities that assist high school students with career planning, relieve stress, and connect with others."
            backgroundColor={baseTheme.colors.pastelNavy}
            slides={[
              {
                title: "PuMP+",
                description:
                  "Connecting high school students to a variety of opportunities. Meet institutions such as the Sanofi Biogenius Challenge, Vex Robotics, and The Knowledge Society! Join 500+ students and 20+ booths!",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/events/pump-plus",
              },
              {
                title: "MedHunt",
                description:
                  "MedHunt is a virtual scavenger hunt where teams can participate to win some cool prizes! Participants will work in teams of 1 to 3 to solve puzzles! The team who completes the scavenger hunt first are the victors!",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/events/med-hunt",
              },
              {
                title: "PowerUp Mentorship Program",
                date: "Sept. 2020 - Jan. 2021 ",
                description:
                  "| Partnered with The STEM Fellowship, high school students are paired with university students where they can talk about scholarships, post-secondary applications, or university life.",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/",
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
                buttonText: "Learn More",
                linkTo: "/",
              },
              {
                title: "Connect U",
                description:
                  "Panel of medical and health science students answering questions about school and providing the must-knows.",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/",
              },
              {
                title: "MedVlogs",
                description:
                  "Social media features of medical students where they share a day in the life, study tips, internship experiences, and more.",
                thumbnail: PumpDigest,
                buttonText: "Learn More",
                linkTo: "/",
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
                buttonText: "Learn More",
                linkTo: "/",
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
                buttonText: "Learn More",
                linkTo: "/",
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
