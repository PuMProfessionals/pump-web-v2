import Image from "next/image";
import styled from "styled-components";

import ContactGraphic from "../../public/home/contact-section-graphic.svg";
import { ContactForm } from "../../components";
import { media } from "../../utils";

export const ContactSection = () => {
  return (
    <Wrapper>
      <SContactForm
        title="Feeling Inspired?"
        descriptionText="Contact us about our initiatives, joining the team, becoming a partner, 
                or anything else you want to chat about!"
      />
      <ImageContainer>
        <Image
          src={ContactGraphic}
          alt="Three people together"
          height={400}
          width={400}
        />
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media(
    "tablet",
    `
        flex-direction: column;
        padding-bottom: 15%;
        `
  )};
`;
const SContactForm = styled(ContactForm)`
  width: 60%;
  margin-right: 5%;
  ${media(
    "tablet",
    `
        margin-right: 0%;
        width: 70%;
        `
  )};
`;
const ImageContainer = styled.div`
  ${media(
    "tablet",
    `
            display: none;
        `
  )};
`;
