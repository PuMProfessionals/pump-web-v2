import styled from "styled-components";

import { Author, Text } from "../components";
import DefaultProfile from "../public/about/tiedye-rect.png";
import { baseTheme } from "../theme";
import { media } from "../utils";

export const BlogCard = ({
  topBgColor = baseTheme.colors.greyBlue,
  bottomBgColor = baseTheme.colors.white,
  ...props
}) => (
  <Wrapper {...props}>
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
        <AuthorSection>
          <Author
            avatar={DefaultProfile}
            names={["Helen Yin", "Jocelyn Liu"]}
            width={50}
          />
        </AuthorSection>
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
  ${media(
    "tablet",
    `
      width: 90%; 
    `
  )};
`;

const Row = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 100px;
  ${({ position, topbgcolor, bottombgcolor }) => ` 
      background-color: ${position === "top" ? topbgcolor : bottombgcolor}; 
      border-radius: ${position === "top" ? "20px 20px 0 0" : "0 0 20px 20px"}; 
  `};
  ${media(
    "tablet",
    `
    display: flex; 
    flex-direction: column; 
    padding: 1.5rem; 
    `
  )};
  ${media(
    "mobile",
    `
    padding: 1rem;
    `
  )};
`;

const LeftSection = styled.div`
  width: 65%;
  padding-right: 2%;
   {
    /* TODO: thin white border */
  }
  ${media(
    "tablet",
    `
    width: auto; 
    text-align: center; 
    display: flex; 
    padding: 0;
    `
  )};
`;

const RightSection = styled.div`
  width: 35%;
  padding-left: 2%;
  ${media(
    "tablet",
    `
    width: auto; 
    padding: 3% 0 0; 
    `
  )};
`;

const BlogTitle = styled.h2`
  margin: 0;
  color: white;
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    font-size: ${theme.size.h2}; 
  `};
`;

const TagSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  ${media(
    "tablet",
    `
    justify-content: center;
    `
  )};
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
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

const AuthorSection = styled.div`
  width: auto;
  ${media(
    "tablet",
    `
    display: flex; 
    justify-content: center; 
    `
  )};
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;
