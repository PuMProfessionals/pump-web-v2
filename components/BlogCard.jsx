import styled from "styled-components";

import { Author, Text } from "../components";
import DefaultProfile from "../public/about/tiedye-rect.png";
import { baseTheme } from "../theme";

export const BlogCard = ({
  topBgColor = baseTheme.colors.greyBlue,
  bottomBgColor = baseTheme.colors.white,
}) => (
  <Wrapper>
    <Row position="top" topbgcolor={topBgColor}>
      <LeftSection>
        <BlogTitle>What Does Being a Doctor Look Like Around the World?</BlogTitle>
      </LeftSection>
      <RightSection>
        <TagSection>
          <Tag>
            <Circle /> <SText>career</SText>
          </Tag>
          <Tag>
            <Circle /> <SText>health sciences</SText>
          </Tag>
        </TagSection>
      </RightSection>
    </Row>
    <Row position="bottom" bottombgcolor={bottomBgColor}>
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
  padding: 4%;
  border-radius: 100px;
  ${({ position, topbgcolor, bottombgcolor }) => ` 
      background-color: ${position === "top" ? topbgcolor : bottombgcolor}; 
      border-radius: ${position === "top" ? "20px 20px 0 0" : "0 0 20px 20px"}; 
  `};
`;

const LeftSection = styled.div`
  width: 65%;
  padding-right: 2%;
   {
    /* TODO: thin white border */
  }
`;

const RightSection = styled.div`
  width: 35%;
  padding-left: 2%;
`;

const BlogTitle = styled.h2`
  margin: 0;
  color: white;
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
  `};
`;

const TagSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin: 0 0.5rem 0.5rem 0;
  ${({ theme }) => `
    border-radius: ${theme.radius.border};
    background-color: ${theme.colors.yellow}; 
  `};
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
  ${({ theme }) => `
    background-color: ${theme.colors.greyBlue}; 
  `};
`;

const SText = styled(Text)`
  margin: 0;
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;
