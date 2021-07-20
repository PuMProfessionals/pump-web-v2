import styled from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media } from "../utils";

export const ContactForm = ({
  title, // string
  descriptionText, // string
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Title size={baseTheme.size.h2} bold="true">
        {title}
      </Title>
      <Text>{descriptionText}</Text>
      <InputsWrapper>
        <FirstInputWrapper>
          <SInput placeholder="Full Name" />
          <SInput placeholder="Email Address" />
        </FirstInputWrapper>
        <TextArea placeholder="Write a Message..." />
      </InputsWrapper>
      <Button style={{ marginTop: "30px" }}>Send Message</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
  padding: 3% 6% 6% 6%;
`;
const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  ${media(
    "tablet",
    `
        flex-direction: column;
        margin-bottom: 0;
        `
  )};
`;
const SInput = styled(Input)`
  width: 37%;
  margin-top: 10px;
  ${media(
    "tablet",
    `
        width: auto;
        margin-top: 0;
        margin-bottom: 30px;
        `
  )};
`;
