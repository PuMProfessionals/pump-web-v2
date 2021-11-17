import Image from "next/image";
import styled from "styled-components";

import ContactGraphic from "../../public/home/contact-section-graphic.svg";
import { ContactForm } from "../../components";
import { media } from "../../utils";

export const ContactSection = () => {
  return (
    <Wrapper>
      <SContactForm
        title="Contact Us"
        descriptionText="Want to join our team, sign up for an event, or partner with us? Send us your questions and comments below."
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
    1000,
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
    1000,
    `
        margin-right: 0%;
        width: 90%;
        `
  )};
`;
const ImageContainer = styled.div`
  ${media(
    1000,
    `
            display: none;
        `
  )};
`;
