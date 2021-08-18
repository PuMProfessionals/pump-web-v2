import styled from "styled-components";

import { BlogCard } from "../../../components";
import { media } from "../../../utils";

export const BlogSection = () => (
  <Wrapper>
    <SBlogCard />
    <SBlogCard />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  ${media(
    "tablet",
    `
      width: auto; 
    `
  )};
`;

const SBlogCard = styled(BlogCard)`
  margin: 2rem 0;
`;
