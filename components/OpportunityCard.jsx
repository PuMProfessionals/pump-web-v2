import styled from "styled-components";
import { Text } from "./Text";
import { media } from "../utils";

export const OpportunityCard = ({
  name,
  location,
  category,
  organization,
  postingDate,
  logo,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Logo src={logo} />
      <RightContainer>
        <InfoContainer>
          <div>
            <Name>{name}</Name>
            <Organization>{organization}</Organization>
          </div>
          <div>
            <Category>{category}</Category>
            <BottomText>
              <Location>{location}</Location>
              <PostingDate>Posted {postingDate}</PostingDate>
            </BottomText>
          </div>
        </InfoContainer>
      </RightContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => `
			border-color: ${theme.font.text};
			box-shadow: ${theme.boxShadow.topBottom};
		`};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  width: calc(100%-40px);
  height: 190px;
  padding: 0;
  margin: 10px;
  align-items: center;
  ${media(
    600,
    `
			height: 140px;
			border-radius: 10px;
		`
  )};
  ${media(
    400,
    `
			height: 95px;
			border-radius: 5px;
		`
  )};
`;

const BottomText = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.h2`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
		color: ${theme.colors.navy};
		font-size: ${theme.size.defaultLarger};
	`};
  font-weight: bold;
  margin: 0;
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.default};
		`};
  }
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const Organization = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
		font-size: ${theme.size.defaultLarger};
	`};
  color: #868e9f;
  margin: 0;
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
  @media only screen and (max-width: 400px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const Category = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
		color: ${theme.colors.navy};
	`};
  font-size: 1.2rem;
  text-align: right;
  margin: 0;
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
    margin-top: 5px;
  }
  @media only screen and (max-width: 400px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const Location = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
	`};
  font-size: 1.2rem;
  color: #868e9f;
  margin: 0;
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
  @media only screen and (max-width: 400px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const PostingDate = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
	`};
  font-size: 1.2rem;
  color: #868e9f;
  text-align: right;
  margin: 0;
  @media only screen and (max-width: 600px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
  @media only screen and (max-width: 400px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const Logo = styled.img`
  box-shadow: 0px 0 5px -2px #888;
  object-fit: contain;
  display: flex;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px 0 0 20px;
  ${media(
    600,
    `
			border-radius: 10px 0 0 10px;
		`
  )};
  ${media(
    400,
    `
			border-radius: 5px 0 0 5px;
		`
  )};
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-flow: column wrap;
  overflow: hidden;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  ${media(
    400,
    `
			padding: 5px;
		`
  )};
`;
