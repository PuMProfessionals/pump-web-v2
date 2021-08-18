import styled from "styled-components";

import Connect from "../../public/about/AboutUs-Connect.png";
import Involve from "../../public/about/AboutUs-Involve.png";
import Empower from "../../public/about/AboutUs-Empower.png";
import { ImpactCard, Text } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export const ValueSection = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <TopWrapper>
        <Title size={baseTheme.size.h1} bold="true">
          Our Impact
        </Title>
        <Description>
          PuMP looks to make a difference by connecting student with learning
          opportunities, while also encouraging community involvement by providing
          resources, local events and conferences. By creating transparency between
          students and this ever-changing, competitive field, the organization looks
          to empower youth to continue exploring possible careers in medicine.
        </Description>
      </TopWrapper>
      <ImpactWrapper>
        <ImpactCard
          thumbnail={Connect}
          isImageTop={false}
          cardTitle="CONNECT"
          textColour={baseTheme.colors.yellow}
          titleSize={2.5}
        />
        <ImpactCard
          thumbnail={Involve}
          isImageTop={false}
          cardTitle="INVOLVE"
          textColour={baseTheme.colors.brightBlue}
          titleSize={2.5}
        />
        <ImpactCard
          thumbnail={Empower}
          isImageTop={false}
          cardTitle="EMPOWER"
          textColour={baseTheme.colors.turquoise}
          titleSize={2.5}
        />
      </ImpactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;
const Title = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
const TopWrapper = styled.div`
  padding: 0 5% 60px 5%;
`;
const Description = styled(Text)`
  display: flex;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 5%;
`;
const ImpactWrapper = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media(
    "tablet",
    `
      flex-direction: column;
      margin-bottom: 5%;
      `
  )};
`;
