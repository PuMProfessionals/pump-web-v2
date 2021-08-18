import Head from "next/head";
import styled from "styled-components";

import { Video, TestimonialCarousel, Text, SectionWrapper } from "../components";
import { PageLayout } from "../sections/hoc";
import { TopSection, WhatsHappening, ContactSection } from "../sections/home";
import { baseTheme } from "../theme";

const testimonials = [
  {
    testimonial:
      "One of Manulife Kids Science & Technology's goals are to help students become interested in pursuing a career in science, and when PuMP reached out to us to participate in a virtual conference and to speak to high school students about these opportunities, we were happy to help. The conference was very well done, the representatives were all very kind, and I look forward to working with them again to reach more students!",
    author: "David Manly, SickKids Manulife Science and Technology",
  },
  {
    testimonial:
      "I think PuMP+ has really informed me about my future career path because I was given the opportunity to see how different experiences and connections can lead to pathways. I believe that previously, I had a very one-track mind in terms of how I wanted my career path to go. However, through PuMP+, I learned that there are so many career fields that I haven't even known about and so many opportunities that can help me access the future that I want to create for myself. Overall, PuMP+ has broadened my horizon and has invoked a newfound passion for learning more!",
    author: "Anonymous",
  },
  {
    testimonial:
      "I joined PuMP in Grade 9 because of, what was, in essence, a fear of people - I was incredibly shy and wanted to get out of my comfort zone and learn how to talk to others. In the past 2 years, I’ve accomplished that goal and so much more. Being in a position where I was constantly interacting with others forced me to break out of my shell and helped me build much more self-confidence. I’ve had the privilege of meeting a group of hardworking, passionate peers through PuMP, and hope to help foster an environment where everyone can find their voice.",
    author: "Dhruv Dhall, President, Toronto Board",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP | Home</title>
        <meta
          property="description"
          content="A registered charity dedicated to connecting aspiring students to health sciences opportunities."
        />
      </Head>
      <PageLayout>
        <TopSection />
        <WhatsHappening />
        <Video
          embedId="f5jsJWl5WS0"
          titleText="Who Are We?"
          descriptionText="Founded in March 2018, Prospective Medical Professionals or PuMP for short is a Canadian charity founded by youth, led by youth. Our objective is to help aspiring life and health sciences students better prepare for a future in the biology by connecting them to real life experiences."
        />
        <Title size={baseTheme.size.h1} bold="true">
          Our Testimonials
        </Title>
        <TestimonialCarousel
          className="regular-carousel"
          slides={testimonials}
          style={{ padding: "0 5vh 10vh 5vh" }}
        />
        <SectionWrapper
          backgroundPath="/home/contact-section-large.svg"
          mobilePath="/home/contact-section-mobile.svg"
          mobileThreshold={1000}
        >
          <ContactSection />
        </SectionWrapper>
      </PageLayout>
    </div>
  );
}

const Title = styled(Text)`
  padding: 0 5%;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
