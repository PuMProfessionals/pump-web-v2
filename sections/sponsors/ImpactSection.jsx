import styled from "styled-components";

import ImpactGraphic1 from "../../public/home/impact-section-graphic-1.svg";
import ImpactGraphic2 from "../../public/home/impact-section-graphic-2.svg";
import ImpactGraphic3 from "../../public/home/impact-section-graphic-3.svg";
import { ImpactCard, Text, Button } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export const ImpactSection = ({ ...props }) => {
  return (
    <div {...props}>
      <TopWrapper>
        <Title size={baseTheme.size.h1} bold="true">
          Our Impact
        </Title>
        <Button>
          <a
            href="https://www.flipsnack.com/pumprofessionals/impact-report-2020-2021.html"
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
          cardTitle="30,000"
          description="Students reached directly through our services"
          textColour={baseTheme.colors.navy}
        />
        <ImpactCard
          thumbnail={ImpactGraphic2}
          cardTitle="3,000"
          description="Following our events across social media"
          textColour={baseTheme.colors.navy}
        />
        <ImpactCard
          thumbnail={ImpactGraphic3}
          cardTitle="70K"
          description="In total reached across Canada"
          textColour={baseTheme.colors.navy}
        />
      </ImpactWrapper>
    </div>
  );
};

const ImpactWrapper = styled.div`
  padding: 0 5%;
  margin-bottom: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media(
    "tablet",
    `
      flex-direction: column;
      margin-bottom: 12%;
      `
  )};
`;
const Title = styled(Text)`
  margin-bottom: 20px;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
const TopWrapper = styled.div`
  padding: 0 5% 60px 5%;
`;
