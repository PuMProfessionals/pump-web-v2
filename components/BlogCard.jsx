import styled from "styled-components";
import PropTypes from "prop-types";

import { Author, Text } from "../components";
import { baseTheme } from "../theme";
import { media } from "../utils";

/**
 *
 * BlogCard component
 * @prop {string} title - Blog title
 * @prop {string} description - Blog description
 * @prop {array} tags - Array of blog tags
 * @prop {object} avatar - Author avatar
 * @prop {number} avatarWith - Width of avatar, default is 50px
 * @prop {array} authors - Array of blog authors
 * @prop {string} publishedDate - Day blog was published
 * @prop {string} topBgColor - Color of the top half of blog card
 * @prop {string} bottomBgColor - Color of the bottom half of blog card
 */

export const BlogCard = ({
  title,
  description,
  tags,
  avatar,
  avatarWidth = 50,
  authors,
  publishedDate,
  topBgColor = baseTheme.colors.greyBlue,
  bottomBgColor = baseTheme.colors.white,
  ...props
}) => (
  <Wrapper {...props}>
    <Row position="top" topbgcolor={topBgColor}>
      <LeftSection>
        <BlogTitle>{title}</BlogTitle>
      </LeftSection>
      <RightSection>
        <TagSection tags={tags}>
          {!!tags &&
            tags.map((tag) => (
              <Tag key={tag}>
                <Circle />
                <SText>{tag}</SText>
              </Tag>
            ))}
        </TagSection>
      </RightSection>
    </Row>
    <Row position="bottom" bottombgcolor={bottomBgColor}>
      <LeftSection>
        <SText>{description}</SText>
      </LeftSection>
      <RightSection>
        <AuthorSection>
          <Author avatar={avatar} names={authors} width={avatarWidth} />
        </AuthorSection>
        <DayInfo>
          <SText>{publishedDate}</SText>
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

BlogCard.proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  avatar: PropTypes.object,
  avatarWidth: PropTypes.number,
  authors: PropTypes.array,
  publishedDate: PropTypes.string,
  togBgColor: PropTypes.string,
  bottomBgColor: PropTypes.string,
};
