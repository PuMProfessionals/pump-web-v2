import styled from "styled-components";
import Link from "next/link";

import ImpactGraphic1 from "../../public/home/impact-section-graphic-1.svg";
import ImpactGraphic2 from "../../public/home/impact-section-graphic-2.svg";
import ImpactGraphic3 from "../../public/home/impact-section-graphic-3.svg";
import { ImpactCard, Text, Button } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const ImpactSection = ({ ...props }) => {
  return (
    <Wrapper>
      <TopWrapper>
        <Title size={baseTheme.size.h1} bold="true">
          Our Impact
        </Title>
        <Button>
          <Link href="/">
            <a style={{ color: baseTheme.colors.navy }} alt="View More">
              View More
            </a>
          </Link>
        </Button>
      </TopWrapper>

      <ImpactWrapper>
        <ImpactCard
          thumbnail={ImpactGraphic1}
          impactNum="4,000"
          description="Students reached directly through our services"
        />
        <ImpactCard
          thumbnail={ImpactGraphic2}
          impactNum="2,000"
          description="Following our events across social media"
        />
        <ImpactCard
          thumbnail={ImpactGraphic3}
          impactNum="32K"
          description="In total reached across Canada"
        />
      </ImpactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 15vh;
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;
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
      margin-bottom: 15%;
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
