import styled from "styled-components";

import { Author } from "../components";
import DefaultProfile from "../public/about/tiedye-rect.png";
import { baseTheme } from "../theme";

export const BlogCard = () => (
  <Wrapper>
    <TopSection>
      <div>
        <h2>Blog Title</h2>
      </div>
      <div>
        <p>tags</p>
      </div>
    </TopSection>
    <BottomSection>
      <div>
        <p>long paragraph </p>
      </div>
      <Author avatar={DefaultProfile} names={["author1"]} />{" "}
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
