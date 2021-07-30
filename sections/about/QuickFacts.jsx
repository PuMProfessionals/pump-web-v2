import styled from "styled-components";

import TieDye1 from "../../public/about/tie-dye-rect.jpg";
import { Text, ImageCard } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const QuickFacts = ({ ...props }) => (
  <Wrapper {...props}>
    <Title size={baseTheme.size.h1} bold="true">
      Quick Facts
    </Title>
    <ImageCard
      image={TieDye1}
      cardTitle="2018"
      description="YEAR FOUNDED"
      textColour={baseTheme.colors.yellow}
      opacity={0.95}
      titleSize={6.5}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 10vh;
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;

const Title = styled(Text)`
  padding: 0 5%;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
