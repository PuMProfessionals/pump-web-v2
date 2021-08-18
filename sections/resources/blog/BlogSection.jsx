import styled from "styled-components";

import { BlogCard } from "../../../components";
import { media } from "../../../utils";
import DefaultProfile from "../../../public/about/tiedye-rect.png";

export const BlogSection = () => (
  <Wrapper>
    <SBlogCard
      title={`What Does Being a Doctor Look Like Around the World?`}
      description={`Around the world, the conditions and lifestyle that comes with being a doctor heavily varies. There are over 190 different countries, each with unique experiences and benefits to offer...`}
      tags={["career", "health sciences"]}
      avatar={DefaultProfile}
      authors={["Helen Yin", "Jocelyn Liu"]}
      publishedDate="July 28th, 2021"
    />
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
