import styled from "styled-components";

import ImpactGraphic1 from "../../public/sponsors/OurImpact1.png";
import ImpactGraphic2 from "../../public/sponsors/OurImpact2.png";
import ImpactGraphic3 from "../../public/sponsors/OurImpact3.png";
import { ImpactCard, Text, Button } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export const ImpactSection = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <TopWrapper>
        <Title size={baseTheme.size.h1} bold="true">
          Our Impact
        </Title>
        <Button>
          <a
            href="/about/PuMP_Impact_Report_2022-23.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: baseTheme.colors.navy }}
          >
            View More
          </a>
        </Button>
      </TopWrapper>
      <ImpactWrapper>
        <ImpactCard
          thumbnail={ImpactGraphic1}
          cardTitle="3,000"
          description="Students reached directly through our services"
          textColour={baseTheme.colors.white}
          cardHeight={300}
        />
        <ImpactCard
          thumbnail={ImpactGraphic2}
          cardTitle="5,000"
          description="Following our events across social media"
          textColour={baseTheme.colors.white}
          cardHeight={300}
        />
        <ImpactCard
          thumbnail={ImpactGraphic3}
          cardTitle="70K"
          description="Reached across Canada"
          textColour={baseTheme.colors.white}
          cardHeight={300}
        />
      </ImpactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 10%;
  margin-top: 5%;
  ${({ theme }) => `
      background-color: ${theme.colors.greyBlue};
      border-radius: 44px;
  `};
`;
const ImpactWrapper = styled.div`
  padding: 3% 5%;
  margin-bottom: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media(
    "tablet",
    `
      flex-direction: column;
      margin-bottom: 10%;
      `
  )};
`;
const Title = styled(Text)`
  margin-bottom: 20px;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.white};
  `};
`;
const TopWrapper = styled.div`
  padding: 0 5%;
`;
