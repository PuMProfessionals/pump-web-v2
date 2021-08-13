import styled from "styled-components";

import { Text } from "../../components";
import { media } from "../../utils";
import { baseTheme } from "../../theme";

export const OurStory = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <Title size={baseTheme.size.h1} bold="true">
        Our Story
      </Title>
      <Description>
        Prospective Medical Professionals, known as PuMP for short, is a federally
        registered charity on a mission to help Canadian high school and
        post-secondary students understand different career pathways in life and
        health sciences. Our goals are to: Increase the transparency of the entry
        process into medical career paths. Make learning experiences in the
        healthcare industry more accessible for high school and post-secondary
        students. Promote equal opportunity for all youth, regardless of
        socioeconomic status, gender, religion or race. Founded in 2018 by a group of
        high school students, our team first sought out to tackle the lack of
        accessible learning opportunities for youth.
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5% 2% 5% 2%;
  margin-bottom: 5%;
  ${({ theme }) => `
      background-color: ${theme.colors.greyBlue};
      border-bottom-left-radius: 72px;
      border-bottom-right-radius: 72px;
  `};
  ${media(
    1400,
    `   
            padding: 5% 6% 5% 6%;
        `
  )};
`;
const Title = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.white};
  `};
`;

const Description = styled(Text)`
  display: flex;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 5%;
  ${({ theme }) => `
      color: ${theme.colors.white};
  `};
`;
