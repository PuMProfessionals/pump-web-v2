import styled from "styled-components";

import { Author, Text } from "../components";
import DefaultProfile from "../public/about/tiedye-rect.png";

export const BlogCard = () => (
  <Wrapper> 
    <Row position="top">
      <LeftSection>
        <BlogTitle>What Does Being a Doctor Look Like Around the World?</BlogTitle>
      </LeftSection>
      <RightSection>
        <p>tags</p>
      </RightSection>
    </Row>
    <Row>
      <LeftSection>
        <SText>
          Around the world, the conditions and lifestyle that comes with being a
          doctor heavily varies. There are over 190 different countries, each with
          unique experiences and benefits to offer...
        </SText>
      </LeftSection>
      <RightSection>
        <Author
          avatar={DefaultProfile}
          names={["Helen Yin", "Jocelyn Liu"]}
          width={50}
        />
        <DayInfo>
          <SText>July 28th, 2021</SText>
        </DayInfo>
      </RightSection>
    </Row>
  </Wrapper>
);

const Wrapper = styled.div`
  ${({ theme }) => `
      box-shadow: ${theme.boxShadow.topBottom}; 
      border-radius: ${theme.radius.border}; 
  `};
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  padding: 3%;
  border-radius: 100px;
  ${({ position }) => ` 
      background-color: ${position === "top" ? "lightblue" : "red"}; 
      border-radius: ${position === "top" ? "20px 20px 0 0" : "0 0 20px 20px"}; 
  `};
`;

const LeftSection = styled.div`
  width: 65%;
  padding-right: 4rem; 
`;

const RightSection = styled.div`
  width: 35%;
`;

const BlogTitle = styled.h2`
  margin: 0; 
`; 
const SText = styled(Text)`
  margin: 0;
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;
