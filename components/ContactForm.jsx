/* eslint-disable no-undef, no-useless-escape */ //  (for process.env)
import { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Text } from "./Text";
import { baseTheme } from "../theme";
import { media, CONSTANTS } from "../utils";

const overMessageLimit = false;
const customError = () => (
  <div>
    <span role="img" arial-label="waving-hand">
      👋
    </span>{" "}
    Unfortunately, we could not send the form due to an internal server error. Please
    feel free to send us an email at&nbsp;
    <SLink href={`mailto:${CONSTANTS.email}`}>{CONSTANTS.email}</SLink>. Sorry for
    the inconvenience!
  </div>
);

export const ContactForm = ({
  title, // string
  descriptionText, // string
  ...props
}) => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(query.email)) {
      let params = {
        from_name: query.name,
        reply_to: query.email,
        message: query.message,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          params,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          () => {
            setQuery({
              name: "",
              email: "",
              message: "",
            });
            toast.success(
              "👋 An email has successfully been sent! Thank you for reaching out to us! We will get back to you shortly."
            );
          },
          () => {
            toast.error(customError);
          }
        );
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <Wrapper {...props}>
      <Title size={baseTheme.size.h2} bold="true">
        {title}
      </Title>
      <ToastContainer />
      <Text>{descriptionText}</Text>
      {!overMessageLimit ? (
        <form
          acceptCharset="UTF-8"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <InputsWrapper>
            <FirstInputWrapper>
              <SInput
                placeholder="Full Name"
                name="name"
                type="text"
                value={query.name}
                onChange={handleChange()}
              />
              <SInput
                placeholder="Email Address"
                name="email"
                type="email"
                value={query.email}
                onChange={handleChange()}
              />
            </FirstInputWrapper>
            <TextArea
              placeholder="Write a Message..."
              name="message"
              value={query.message}
              required={true}
              onChange={handleChange()}
            />
          </InputsWrapper>
          <Button style={{ marginTop: "30px" }}>Send Message</Button>
        </form>
      ) : (
        <Button style={{ marginTop: "30px" }}>
          <a
            href={`mailto:${CONSTANTS.email}`}
            style={{ color: baseTheme.colors.navy }}
          >
            Send Message
          </a>
        </Button>
      )}
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
const SLink = styled.a`
  text-decoration: underline;
  color: white;
  :hover {
    opacity: 70%;
    cursor: pointer;
    ${({ theme }) => `
        color: ${theme.colors.brightBlue};
    `};
  }
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
    "tablet",
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
