import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Title, TestimonialCarousel, Button, Video } from "../../components";
import { PageLayout } from "../../sections/hoc";

const testimonials = [
  {
    testimonial:
      "I was able to determine my top choice program through a PowerUp mentorship session. Hearing the first-hand experiences of my mentors proved to be incomparable to any other resources I could find online (during the pandemic).  Looking back on my university applications journey, I honestly don't know how I would've navigated the process without PowerUp! I am beyond grateful to be back on this program as a mentor and to take part in continuing this mission!",
    author: "Jayne Kang, First year, Queen's Health Sci Student",
  },
  {
    testimonial:
      "The PowerUp program has been an incredible initiative for myself as a mentor as I am able to offer up my own advice and experiences that I have gone through as a previous university applicant within the science area. I definitely wish that I could have had access to this resource during my time as an applicant, thus I highly encourage those eligible to take advantage of this fabulous opportunity!",
    author: "Valerie Phu",
  },
  {
    testimonial:
      "I took part in the 2020 and 2021 PowerUp program, and I was fortunate enough to meet with two exceptional mentors. As a newcomer to this country, I found that there are limited resources that would help me with university applications. Being in a foreign country makes it harder to access academic support, but through the PowerUp program, I could learn more about some details about my dream program, campus life, advice for transitioning from high school to university, and so much more! I highly recommend this program, not only because it provides you such an amazing opportunity to connect with an undergraduate student, but also it makes the information that you need about university more transparent and accessible!",
    author: "Roy Zhaokai Zhang",
  },
  {
    testimonial:
      "I am incredibly appreciative for stumbling upon the PowerUp mentorship program during my Grade 12 year. I was able to have a “coffee chat” with an amazing, down-to-earth mentor who provided an in-depth look at the university application process. Furthermore, they gave me details about course content that you would be unable to find online, dispelling much of the fear I had when making my university selections. Ultimately, the experience was beneficial and has influenced me to become a PowerUp mentor myself!",
    author: "Justin Phung",
  },
  {
    testimonial:
      "My mentor was really kind and supportive! I went into the session feeling intimidated by the admissions system and afraid to talk to a university student, but I came out feeling confident that I could tackle the process. If you're researching universities, getting to know others’ personal experiences is way more useful and less stress-inducing than what you can find on websites.",
    author: "Elaine Jiang",
  },
];

const PowerUp = () => {
  return (
    <>
      <Head>
        <title>PuMP | PowerUp</title>
        <meta
          name="description"
          content="PowerUp pairs high school students to undergraduate mentors studying the health, life, or biological sciences."
        />
      </Head>
      <PageLayout>
        <Title title="PowerUp Mentorship Program" arrowLink="/events" />
        <Wrapper>
          <Subtitle>About</Subtitle>
          <div>
            <p>
              Prospective Medical Professionals and STEM Fellowship have partnered to
              create PowerUp, a free mentorship program for those interested in
              pursuing life and health sciences in university. High school students
              can connect with experienced and passionate university mentors from a
              variety of disciplines including life/health sciences, biomedical
              engineering, nursing, and more! Mentors will conduct one-time virtual
              meetings (“coffee chats”) with mentees and receive insight regarding
              the application process, campus life, or other university-related
              affairs.
            </p>
          </div>
          <CarouselWrapper>
            <TestimonialCarousel
              className="regular-carousel"
              slides={testimonials}
              style={{ padding: "0 5vh 10vh 5vh" }}
            />
          </CarouselWrapper>
          <Subtitle>PowerUp Registration</Subtitle>
          <div>
            <p>
              If you are in high school and would benefit from speaking with a
              current university student, sign up to be a PowerUp mentee! If you are
              a university student currently studying in a life/ health
              science-related program, sign up to be a mentor!
            </p>
          </div>
          <ButtonWrapper>
            <Link
              href="https://forms.gle/rGj32Go4jdYsrzsL8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a>
                <Button style={{ marginRight: "3%" }}>Apply to be a Mentor</Button>
              </a>
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc7DeXtxbPpKQLj-MowdDOXYuXIHjRdErKo0S_fgRmAhLN28Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a>
                <Button style={{ marginLeft: "3%" }}>Apply to be a Mentee</Button>
              </a>
            </Link>
          </ButtonWrapper>
          <Subtitle>Features</Subtitle>
          <div>
            <p>
              PowerUp was featured on CTV Toronto (August 2020) and Global News
              Halifax (August 2021)! Check out the features below:
            </p>
          </div>
          <Video embedId="NOZUFspRePo" />
          <Video embedId="MsUBVE9eiiI" />
        </Wrapper>
      </PageLayout>
    </>
  );
};

export default PowerUp;

const Wrapper = styled.div`
  padding: 5%;
`;
const CarouselWrapper = styled.div`
  margin: 5%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  padding: 5%;
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
