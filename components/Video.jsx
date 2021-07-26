import React from 'react';
import styled from "styled-components";
import ReactPlayer from 'react-player';

import { Text } from "./Text";
import { baseTheme } from "../theme";


 
export const Video = ({
    videoLink,
    titleText,
    descriptionText,
    ...props
}) => {
  return(
    <Wrapper {...props}>
      <TitleSection>
        <Title size={baseTheme.size.h2} bold="true"> 
          {titleText} 
        </Title>
      </TitleSection>
      <InfoSection> 
        {descriptionText} 
      </InfoSection>

      <VideoSection>
        <ReactPlayer
          url = {videoLink}
        />
      </VideoSection>
    </Wrapper>

  );
};

const Wrapper = styled.div`
    padding = 8vh 0;
`;
    
const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};

  text-align: left;
`};
`
const InfoSection = styled.text`
  display: flex;
  
  text-align: left;
  font-size: 1rem;
  padding-left: 10%;
  padding-right: 10%;
  
`;
const TitleSection = styled.div`
  margin: 5% 10% 0%;
`;

const VideoSection = styled(Text)`
  height: 80vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
 
`;









  


