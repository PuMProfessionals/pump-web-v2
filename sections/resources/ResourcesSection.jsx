import { StudentResource } from "../../components";

export const ResourcesSection = () => (
  /* create list of resources, map to StudentResource component each*/
  <StudentResource
    titleText="PuMP Direct"
    descriptionText="Browse and filter our database of local opportunities in healthcare"
    buttons={[
      {
        color:"yellow",
        text:"Learn more",
        link:"https://example.org"
      }
    ]}
    graphic="https://via.placeholder.com/500x350"
  />
);
