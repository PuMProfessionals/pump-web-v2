import styled from "styled-components";
import { Title, ImageCardCarousel, TestimonialCarousel } from "../../components";
import { PageLayout } from "../../sections/hoc";
import TieDye from "../../public/about/tiedye-rect.png";
import Navy from "../../public/about/navy-rect.png";
import { baseTheme } from "../../theme";

const PumpPlus = () => {
  const testimonials = [
    {
      testimonial: `I think PuMP+ has really informed/influenced decisions about my future career path because I was given the opportunity to see how different experiences and connections can lead to pathways. I believe that previously, I had a very one-track mind in terms of how I wanted my career path to go. However, through PuMP+, I learned that there are so many career fields that I haven't even known about and so many opportunities that can help me access the future that I want to create for myself. Overall, PuMP+ has broadened my horizon and has invoked a newfound passion for learning more!`,
      author: `PuMP+ Attendee`,
    },
    {
      testimonial: `I just wanted to say thank you. It’s just a stressful time with being in high school and soon having to go into university. It’s tough planning out the future and this was really helpful.`,
      author: `PuMP+ Attendee`,
    },
  ];
  return (
    <PageLayout>
      <Title title="PuMP+" arrowLink="/events" />
      <Wrapper>
        <CarouselWrapper>
          <ImageCardCarousel
            id="quick-facts"
            slides={[
              {
                image: Navy,
                cardTitle: "1600",
                description: "Total Attendees",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 5.5,
                descriptionSize: 1.3,
              },
              {
                image: TieDye,
                cardTitle: "80",
                description: "Different Booths",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 5.0,
                descriptionSize: 1.3,
              },
              {
                image: Navy,
                cardTitle: "20+",
                description: "Sponsors",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 5.5,
                descriptionSize: 1.3,
              },
            ]}
          />
        </CarouselWrapper>
        <div>
          <p>
            PuMP+ is our annual STEM fair connecting high school students to various
            opportunities within the health sciences, from research to volunteering.
            Our first PuMP+ held in Toronto in February 2020, featured over 20 booths
            and had over 500 student attendees. Various institutions like Sanofi
            Biogenius Challenge, Vex Robotics, The Knowledge Society (TKS), and
            countless others.
          </p>

          <p>
            In 2021, with the challenges posed by the pandemic, we brought PuMP+ to
            Zoom, sharing opportunities in 3 different cities; Toronto, Vancouver and
            Calgary. Through interactive activities, live Q&As and presentations,
            organizations shared opportunities for students to engage in research,
            social advocacy, volunteering and leadership.
          </p>
        </div>
        <CarouselWrapper>
          <TestimonialCarousel slides={testimonials} className="regular-carousel" />
        </CarouselWrapper>
      </Wrapper>
    </PageLayout>
  );
};

export default PumpPlus;

const Wrapper = styled.div`
  padding: 0 5%;
`;

const CarouselWrapper = styled.div`
  margin: 5%;
`;