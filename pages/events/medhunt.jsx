import styled from "styled-components";
import { Title, Video, ImageCardCarousel } from "../../components";
import { PageLayout } from "../../sections/hoc";
import TieDye from "../../public/about/tiedye-rect.png";
import Navy from "../../public/about/navy-rect.png";
import { baseTheme } from "../../theme";

const MedHunt = () => {
  return (
    <PageLayout>
      <Title title="MedHunt" />
      <Wrapper>
        <CarouselWrapper>
          <ImageCardCarousel
            id="quick-facts"
            slides={[
              {
                image: Navy,
                cardTitle: "68",
                description: "TEAMS",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 5.5,
                descriptionSize: 1.3,
              },
              {
                image: TieDye,
                cardTitle: "106",
                description: "PARTICIPANTS",
                textColour: baseTheme.colors.yellow,
                opacity: 0.95,
                titleSize: 5.5,
                descriptionSize: 1.3,
              },
              {
                image: Navy,
                cardTitle: "20",
                description: "CLUES",
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
            MedHunt is an annual online scavenger hunt, hosted by our national board,
            where participants race to piece together 20 clues scattered across
            social media in order to solve a case study. The first MedHunt, which was
            hosted in July 2020, ended with a virtual discussion about bioethics and
            systemic racism.
          </p>
          <p>
            In August 2021, the second annual MedHunt was hosted. It featured the 20
            clue scavenger hunt as well as two additional synchronous components: an
            escape room and a final challenge.
          </p>
        </div>
        <Video embedId="YG80bmJtDp8" style={{ padding: 0 }} />
      </Wrapper>
    </PageLayout>
  );
};

export default MedHunt;

const Wrapper = styled.div`
  padding: 5%;
`;
const CarouselWrapper = styled.div`
  margin: 5%;
`;
