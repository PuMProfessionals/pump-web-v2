import styled from "styled-components";
import { Text } from "./Text";

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
      <InfoContainer>
        <Name>{name}</Name>
        <Organization>{organization}</Organization>
        <Category>{category}</Category>
        <BottomText>
          <Location>{location}</Location>
          <PostingDate>Posted {postingDate}</PostingDate>
        </BottomText>
      </InfoContainer>
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
  height: 130px;
  padding: 10px;
  margin: 10px;
  align-items: center;
  @media only screen and (max-width: 800px) {
    height: 100px;
    padding: 5px;
  }
`;

const BottomText = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
		color: ${theme.colors.navy};
		font-size: ${theme.size.defaultLarger};
	`};
  font-weight: bold;
  margin: 0;
  @media only screen and (max-width: 800px) {
    ${({ theme }) => `
			font-size: ${theme.size.default};
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
  @media only screen and (max-width: 800px) {
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
  @media only screen and (max-width: 800px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
    margin-top: 5px;
  }
`;

const Location = styled(Text)`
  ${({ theme }) => `
		font-family: ${theme.font.lato};
	`};
  font-size: 1.2rem;
  color: #868e9f;
  margin: 0;
  @media only screen and (max-width: 800px) {
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
  @media only screen and (max-width: 800px) {
    ${({ theme }) => `
			font-size: ${theme.size.small};
		`};
  }
`;

const Logo = styled.img`
  object-fit: cover;
  display: flex;
  height: 110px;
  aspect-ratio: 1 / 1;
  margin: 10px;
  border-radius: 10px;
  @media only screen and (max-width: 800px) {
    height: 90px;
    margin: 5px;
  }
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  margin: 5px;
`;
