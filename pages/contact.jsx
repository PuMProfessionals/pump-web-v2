import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Instagram from "../public/contact/ig-outline.svg";
import Email from "../public/contact/email-outline.svg";
import Facebook from "../public/contact/fb-outline.svg";
import { Title, ContactForm, Text, Button } from "../components";
import { PageLayout } from "../sections/hoc";
import { baseTheme } from "../theme";
import { CONSTANTS, media } from "../utils";

const contactInfo = [
  {
    logo: Instagram,
    info: "@pumpprofessionals",
    link: CONSTANTS.instagram,
  },
  {
    logo: Email,
    info: CONSTANTS.email,
    link: `mailto:${CONSTANTS.email}`,
  },
  {
    logo: Facebook,
    info: "@pumprofessionals",
    link: CONSTANTS.facebook,
  },
];

export default function Contact() {
  return (
    <div>
      <Head>
        <title>PuMP | Contact Us</title>
        <meta
          name="description"
          content="Interested in joining PuMP, want to partner, or curious about PuMP? Reach out to us!"
        />
      </Head>
      <PageLayout>
        <Title
          title="Contact Us"
          description="Whether you’re interested in partnerships or joining the team — or just curious about PuMP in general, feel free to reach out to us!"
        />
        <Wrapper>
          <Subtitle>Get in touch!</Subtitle>
          <ContactWrapper>
            {contactInfo.map((contact) => (
              <InfoWrapper key={`infoWrapper__contactInfo__${contact.link}`}>
                <Image src={contact.logo} width={50} height={50} />
                <SText>
                  <a href={contact.link} style={{ color: baseTheme.colors.navy }}>
                    {contact.info}
                  </a>
                </SText>
              </InfoWrapper>
            ))}
          </ContactWrapper>
          <ContactForm
            title="Or, contact us directly!"
            descriptionText="A representative will reply back to your email within 24 hours. Feel free to contact us about our initiatives, joining the team, becoming a partner, or anything else you want to chat about!"
          />
        </Wrapper>
        <SponsorshipWrapper>
          <SponsorshipText>
            For sponsorships, email&nbsp;
            <SponsorshipsBreak />
            <EmailText href="mailto:community@pumprofessionals.org">
              community@pumprofessionals.org
            </EmailText>
          </SponsorshipText>
          <SponsorshipText>or</SponsorshipText>
          <div style={{ margin: "30px auto" }}>
            <Button>
              <Link href="/community">
                <a style={{ color: baseTheme.colors.navy, fontWeight: "bold" }}>
                  Visit the Community page
                </a>
              </Link>
            </Button>
          </div>
        </SponsorshipWrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 5% 10% 0 10%;
  margin-bottom: 5%;
  background: linear-gradient(
    180deg,
    rgba(142, 158, 194, 0.2) 50.72%,
    rgba(142, 158, 194, 0) 76.07%
  );
`;
const ContactWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${media(
    "tablet",
    `
      flex-direction: column;
    `
  )};
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8%;
  text-align: center;
  ${({ theme }) => `
    :hover {
          transform: scale(1.1);
          transition: ${theme.transitions.cubicBezier};
    }
  `};
`;
const SponsorshipWrapper = styled.div`
  display: flex;
  padding: 12% 0 5% 0;
  flex-direction: column;
  ${({ theme }) => `
    background-color: ${theme.colors.greyBlue};
    border-top-left-radius: 44px;
    border-top-right-radius: 44px;
  `}
`;
const SponsorshipText = styled(Text)`
  font-weight: 900;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: -10px;
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    color: ${theme.colors.white};
  `}
`;
const EmailText = styled.a`
  ${({ theme }) => `
    color: ${theme.colors.yellow};
    :hover {
        color: ${theme.colors.gold};
        transition: ${theme.transitions.cubicBezier};
    }
  `}
  ${media(
    500,
    `
      font-size: 1rem;
    `
  )};
`;
const SText = styled(Text)`
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
  `}
`;
const SponsorshipsBreak = styled.br`
  display: none;
  ${media(
    "tablet",
    `
      display: inline-block;
    `
  )};
`;
const Subtitle = styled.h2`
  ${({ theme }) => `
    font-weight: 900;
    text-align: center;
    font-size: 2rem;
    color: ${theme.colors.navy};
  `}
`;
