import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media, CONSTANTS } from "../utils";

{
  /* TODO: setup STMP? - issues about security*/
}
export const ContactForm = ({
  title, // string
  descriptionText, // string
  ...props
}) => {
  const [fullName, setFullName] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Wrapper {...props}>
      <Title size={baseTheme.size.h2} bold="true">
        {title}
      </Title>
      <Text>{descriptionText}</Text>
      <InputsWrapper>
        <FirstInputWrapper>
          <SInput
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <SInput
            placeholder="Subject line"
            onChange={(e) => setSubjectLine(e.target.value)}
          />
        </FirstInputWrapper>
        <TextArea
          placeholder="Write a Message..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </InputsWrapper>
      <Button style={{ marginTop: "30px" }}>
        <a
          style={{ color: baseTheme.colors.navy }}
          href={`mailto:${CONSTANTS.email}?subject=${subjectLine} from ${fullName}
                &body=${message}`}
        >
          Send Message
        </a>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
  padding: 3% 6% 6% 6%;
  ${media(
    "tablet",
    `
        padding: 5% 10% 10% 10%;
        `
  )};
  ${media(
    "mobile",
    `
        padding: 5% 10% 14% 10%;
        `
  )};
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
  ${media(
    "mobile",
    `
        margin-top: 20px;
        `
  )};
`;
const FirstInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  ${media(
    1000,
    `
        flex-direction: column;
        margin-bottom: 0;
        `
  )};
`;
const SInput = styled(Input)`
  width: 35%;
  margin-top: 10px;
  @media only screen and (min-width: 1200px) {
    width: 39%;
  }
  @media only screen and (min-width: 1600px) {
    width: 41%;
  }
  ${media(
    "tablet",
    `
        width: auto;
        margin-top: 0;
        margin-bottom: 30px;
        `
  )};
`;
