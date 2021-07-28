/*
For example, see UAS page.
*/
import Image from "next/image";
import styled from "styled-components";

import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media } from "../utils";

export const LeftImageTextLayout = ({
  titleText,
  graphic,
  descriptionText,
  ...props
}) => (
  <Wrapper {...props}>
    <TitleSection>
      <Title size={baseTheme.size.h2} bold="true">
        {titleText}
      </Title>
    </TitleSection>
    <InfoSection>
      <Graphic src={graphic} width={300} height={240} />
      <Description>{descriptionText}</Description>
    </InfoSection>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 8vh 0;
`;
const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;

const Description = styled(Text)`
  flex: 1;
`;

const Graphic = styled(Image)`
  margin-right: 5%;
  ${media(
    700,
    `
        margin: 0px;
    `
  )}
`;

const TitleSection = styled.div`
  margin: 5% 5% 0%;
`;

const InfoSection = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  ${media(
    700,
    `
        flex-direction: column;
        align-items: center;
    `
  )}
`;
