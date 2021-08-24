import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Title, ImageCardCarousel, Button } from "../../components";
import { PageLayout } from "../../sections/hoc";
import TieDye from "../../public/about/tiedye-rect.png";
import Navy from "../../public/about/navy-rect.png";
import PowerImage from "../../public/events/power-up.png";
import { baseTheme } from "../../theme";

const PowerUp = () => {
  return (
    <PageLayout>
      <Title title="PowerUp Mentorship Program" arrowLink="/events" />
      <Wrapper>
        <CarouselWrapper>
          <ImageCardCarousel
            id="quick-facts"
            slides={[
              {
                image: Navy,
                cardTitle: "600+",
                description: "MEETINGS HELD",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 4.5,
                descriptionSize: 1.3,
              },
              {
                image: TieDye,
                cardTitle: "139",
                description: "MENTORS",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 4.5,
                descriptionSize: 1.3,
              },
              {
                image: Navy,
                cardTitle: "5",
                description: "PROVINCES",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 4.5,
                descriptionSize: 1.3,
              },
              {
                image: TieDye,
                cardTitle: "300",
                description: "HIGH SCHOOLS REACHED",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 4.5,
                descriptionSize: 1.0,
              },
            ]}
          />
        </CarouselWrapper>
        <div>
          <p>
            Partnered with the STEM Fellowship, this free annual program pairs high
            school students who are interested in pursuing the biological sciences
            with an undergraduate mentor. Through one-to-one calls, PowerUp offers a
            tailored mentorship where mentees can learn about how to fund their
            education, applying to post-secondary programs, preparing for campus
            life, and more. PowerUp strives to support disadvantaged youth and last
            year, connected with the Children’s Aid Society and Indigenous community
            organizations to support traditionally underrepresented communities in
            STEM.
          </p>
        </div>
        <ImageWrapper>
          <Image src={PowerImage} alt="Power Up photo" width={300} height={220} />
        </ImageWrapper>
        <ButtonWrapper>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc7DeXtxbPpKQLj-MowdDOXYuXIHjRdErKo0S_fgRmAhLN28Q/viewform">
            <a>
              <Button style={{ marginRight: "3%" }}>Apply to be a Mentor</Button>
            </a>
          </Link>
          <Link href="https://forms.gle/rGj32Go4jdYsrzsL8">
            <a>
              <Button style={{ marginLeft: "3%" }}>Apply to be a Mentee</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </PageLayout>
  );
};

export default PowerUp;

const Wrapper = styled.div`
  padding: 5%;
`;
const CarouselWrapper = styled.div`
  margin: 5%;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  padding: 5%;
`;
