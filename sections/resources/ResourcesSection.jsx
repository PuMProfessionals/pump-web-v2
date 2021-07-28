import { StudentResource } from "../../components";
import SampleGraphic from "../../public/home/top-section-graphic.svg";

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
          link: "/",
        },
      ],
      graphic: SampleGraphic,
      graphicWidth: 500,
      graphicHeight: 350,
      isGraphicLeft: false,
    },
    {
      titleText: "The Pathway Project",
      descriptionText: `Explore the complete timeline of a medical student, from
        high school to residency and beyond`,
      buttons: [
        {
          color: "yellow",
          text: "Launch Timeline",
          link: "/",
        },
      ],
      graphic: SampleGraphic,
      graphicWidth: 500,
      graphicHeight: 350,
      isGraphicLeft: true,
    },
    {
      titleText: "University Admissions Server (UAS)",
      descriptionText: `Join a Discord comunity for high school and
        undergraduate students to learn more about diverse medical university
        programs.`,
      buttons: [
        {
          color: "yellow",
          text: "Join our Community of 800+ Students",
          link: "/",
        },
        {
          color: "white",
          text: "Learn more",
          link: "/resources/uas",
        },
      ],
      graphic: SampleGraphic,
      graphicWidth: 500,
      graphicHeight: 350,
      isGraphicLeft: false,
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
          link: "/",
        },
      ],
      graphic: SampleGraphic,
      graphicWidth: 500,
      graphicHeight: 350,
      isGraphicLeft: true,
    },
  ];

  return resources.map((resource) => (
    <StudentResource
      key={resource.titleText}
      titleText={resource.titleText}
      descriptionText={resource.descriptionText}
      buttons={resource.buttons}
      graphic={resource.graphic}
      graphicWidth={resource.graphicWidth}
      graphicHeight={resource.graphicHeight}
      isGraphicLeft={resource.isGraphicLeft}
    />
  ));
};
