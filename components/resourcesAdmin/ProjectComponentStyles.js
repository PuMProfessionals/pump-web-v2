import styled from "styled-components";

const HEADER_COLOUR = "#1e2530";
const HEADER_HEIGHT = "6vh";

export const AdminProjectHeader = styled.header`
  display: flex;
  align-items: center;

  height: ${HEADER_HEIGHT};
  background-color: ${HEADER_COLOUR};
  color: white;

  .project-name {
    padding: 0;
    margin: 0;

    font-size: 1.5rem;
    margin-left: 6rem;
  }
`;

export const AdminProjectEditorContainer = styled.div`
  display: flex;

  background-color: whitesmoke;
  height: calc(100vh - ${HEADER_HEIGHT});

  .width-adjustor {
    width: 0.8vw;
    background-color: ${HEADER_COLOUR};

    &:hover {
      cursor: ew-resize;
    }
  }
`;

export const ProjectEditorSidebar = styled.section`
  display: flex;
  flex-direction: column;

  width: 25vw;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: #455265;
  color: white;
`;

export const ProjectEditorContainer = styled.section`
  overflow-y: scroll;
  width: 100%;
  padding: 1rem;
`;

export const MetadataFormContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MetadataInput = styled.div`
  margin-bottom: 1rem;

  * {
    width: 70%;
  }

  .info {
    font-size: 1.2rem;
  }
`;
