import styled from "styled-components";
import { StudentResource } from "../../components";
import PuMPDirect from "../../public/resources/PuMPDirect.png";
import PuMPDigest from "../../public/blog/written-speech-bubble.svg";
import UASLogo from "../../public/resources/uas-logo.png";
import { baseTheme } from "../../theme";

/* TODO-2022: Edit Resources to fit SectionWrapper */
export const ResourcesSection = () => {
  const resources = [
    {
      titleText: "PuMP Direct",
      descriptionText: `Browse and filter our database of local opportunities in
        healthcare`,
      buttons: [
        {
          color: "yellow",
          text: "Browse Opportunities",
          link: "/resources/opportunities",
        },
      ],
      graphic: PuMPDirect,
      isGraphicLeft: false,
    },
    {
      titleText: "University Admissions Server (UAS)",
      descriptionText: `Join a Discord comunity for high school and
        undergraduate students to learn more about diverse medical university
        programs.`,
      buttons: [
        {
          color: "white",
          text: "Join our Community of 800+ Students",
          link: "https://discord.com/invite/vpyF7nCtkm",
          external: true,
        },
        {
          color: "yellow",
          text: "Learn more",
          link: "/resources/uas",
        },
      ],
      graphic: UASLogo,
      graphicWidth: 300,
      graphicHeight: 300,
    },
    {
      titleText: "PuMP Digest",
      descriptionText: `Read advice about interview dos and don'ts, medical
        school tips, time management skills, careers in health sciences, and much
        more. All under one roof!`,
      buttons: [
        {
          color: "yellow",
          text: "Read Blog",
          link: "/resources/blog",
        },
      ],
      graphic: PuMPDigest,
      isGraphicLeft: false,
      graphicWidth: 250,
      graphicHeight: 250,
    },
  ];

  /* TODO: add wrapper to increase margin around resources */
  return (
    <>
      <StudentResource
        key={resources[0].titleText}
        titleText={resources[0].titleText}
        descriptionText={resources[0].descriptionText}
        buttons={resources[0].buttons}
        graphic={resources[0].graphic}
        graphicWidth={resources[0].graphicWidth}
        graphicHeight={resources[0].graphicHeight}
        isGraphicLeft={resources[0].isGraphicLeft}
        style={{ marginTop: "5%" }}
      />
      <MiddleStudentResource
        key={resources[1].titleText}
        titleText={resources[1].titleText}
        descriptionText={resources[1].descriptionText}
        buttons={resources[1].buttons}
        graphic={resources[1].graphic}
        graphicWidth={resources[1].graphicWidth}
        graphicHeight={resources[1].graphicHeight}
        isGraphicLeft={resources[1].isGraphicLeft}
        textColor={baseTheme.colors.white}
      />
      <StudentResource
        key={resources[2].titleText}
        titleText={resources[2].titleText}
        descriptionText={resources[2].descriptionText}
        buttons={resources[2].buttons}
        graphic={resources[2].graphic}
        graphicWidth={resources[2].graphicWidth}
        graphicHeight={resources[2].graphicHeight}
        isGraphicLeft={resources[2].isGraphicLeft}
        style={{ margin: "5% 0" }}
      />
    </>
  );
};

const MiddleStudentResource = styled(StudentResource)`
  padding: 5%;
  margin: 5%;
  border-radius: 72px;
  ${({ theme }) => `
    background-color: ${theme.colors.greyBlue};
  `};
`;
