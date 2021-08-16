import styled from "styled-components";

import { Author } from "../components";
import DefaultProfile from "../public/about/tiedye-rect.png";
import { baseTheme } from "../theme";

export const BlogCard = () => (
  <Wrapper>
    <TopSection>
      <LeftSection>
        <h2>What Does Being a Doctor Look Like Around the World?</h2>
      </LeftSection> 
      <RightSection> 
        <p>tags</p>
      </RightSection>
    </TopSection>
    <BottomSection>
      <LeftSection> 
        <p>long paragraph </p>
      </LeftSection>
      <RightSection>
      <Author avatar={DefaultProfile} names={["author1"]} />{" "}
      </RightSection> 
      {/* invisible box shadow? */}
    </BottomSection>
    <div>
      <p>July 28th, 2021</p>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  ${({ theme }) => `
      box-shadow: ${baseTheme.boxShadow.topBottom}; 
      border-radius: ${theme.radius.border}; 
  `};
  width: 50%;
`;

const TopSection = styled.div`
  display: flex;
`;

const BottomSection = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 60%;
`; 

const RightSection = styled.div`
  width: 40%; 
`; 

