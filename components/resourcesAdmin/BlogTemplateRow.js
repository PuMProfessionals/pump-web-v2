import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";
import { latestTimeAgo } from "../../utils/methods/time";

export default function BlogTemplateRow({ blog }) {
  return (
    <BlogTemplateRowWrapper>
      <BlogInformationContainer>
        <Input disabled type="checkbox" />

        <ResourceProjectTitle href={`/resources/admin/project/blog/${blog.id}`}>
          {blog.name}
        </ResourceProjectTitle>
        <ModifiedTimeStamp>
          Last opened {latestTimeAgo(blog.lastSaved)} ago
        </ModifiedTimeStamp>
      </BlogInformationContainer>

      <BlogControlContainer>
        <Button onClick={() => alert("Coming soon")}>Copy</Button>
        <Button onClick={() => alert("Coming soon")}>Archive</Button>
        <Button onClick={() => alert("Coming soon")}>Trash</Button>
      </BlogControlContainer>
    </BlogTemplateRowWrapper>
  );
}

const BlogTemplateRowWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  min-height: 2vh;
  background-color: whitesmoke;
  margin-bottom: 0.1rem;
  padding: 0.3rem;
  color: black;
  border-left: 1px solid white;
  border-right: 1px solid white;
  overflow-x: auto;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogInformationContainer = styled.section`
  display: flex;
  align-items: center;

  * {
    margin-right: 1.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ModifiedTimeStamp = styled.div`
  font-size: 1.1rem;
`;

const BlogControlContainer = styled.section`
  display: flex;
  align-items: center;

  * {
    margin-right: 0.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ResourceProjectTitle = styled.a`
  font-size: 1.2rem;
  margin-right: 4rem;
  font-weight: bold;
  color: #3e70bb;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
