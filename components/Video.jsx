import styled from "styled-components";

import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media } from "../utils";

export const Video = ({ embedId, titleText, descriptionText, ...props }) => {
  return (
    <Wrapper {...props}>
      <TitleSection>
        <Title size={baseTheme.size.h2} bold="true">
          {titleText}
        </Title>
      </TitleSection>
      <InfoSection>{descriptionText}</InfoSection>
      <VideoSection>
        <SIframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoSection>
    </Wrapper>
  );
};

const SIframe = styled.iframe`
  ${media(
    750,
    `
      width: 80%;
      height: 50vw;
    `
  )};
`;
const Wrapper = styled.div`
  padding: 2% 0 10% 0;
  ${media(
    750,
    `
      padding-bottom: 12%;
    `
  )};
`;
const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      text-align: center;
  `};
`;
const InfoSection = styled(Text)`
  display: flex;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 10%;
`;
const TitleSection = styled.div`
  margin: 5% 10% 0;
`;
const VideoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  ${media(
    750,
    `
      margin-top: 10vh;
    `
  )};
`;
