import styled from "styled-components";

import { Text } from "../components/";

export const Tag = ({ label }) => (
  <Wrapper>
    <Circle />
    <SText>{label}</SText>
  </Wrapper>
);

const Wrapper = styled.div`
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
