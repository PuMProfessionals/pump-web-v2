import styled from "styled-components";

import ImpactGraphic1 from "../../public/home/impact-section-graphic-1.svg";
import ImpactGraphic2 from "../../public/home/impact-section-graphic-2.svg";
import ImpactGraphic3 from "../../public/home/impact-section-graphic-3.svg";
import { ImpactCard } from "../../components";
import { media } from "../../utils";

export const ImpactSection = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
