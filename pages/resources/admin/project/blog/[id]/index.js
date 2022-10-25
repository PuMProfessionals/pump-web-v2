import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../../../components";
import {
  AdminProjectEditorContainer,
  AdminProjectHeader,
  ProjectEditorContainer,
  ProjectEditorSidebar,
} from "../../../../../../components/resourcesAdmin/ProjectComponentStyles";
import { useResourcesAdmin } from "../../../../../../contexts/ResourcesAdminProvider";

export default function BlogProject() {
  const [blogProject, setBlogProject] = useState(null);
  const { blogTemplates } = useResourcesAdmin();

  const router = useRouter();

  useEffect(() => {
    if (router.query == null) return;

    setBlogProject(blogTemplates.find((blog) => blog.id === router.query.id));
  }, [router.query]);

  if (blogProject == null) return <h1>wtf? can&apos;t find blog</h1>;
  return (
    <BlogProjectEditorContainer>
      <AdminProjectHeader>
        <Button onClick={() => alert("Coming soon")}>Menu</Button>
        <Button>
          <SeeProjectsLink href="/resources/admin">Projects</SeeProjectsLink>
        </Button>

        <p className="project-name">Current project: {blogProject.name}</p>
      </AdminProjectHeader>

      <AdminProjectEditorContainer>
        <ProjectEditorSidebar>
          <h1>h</h1>
          <div style={{ fontSize: "2rem" }}>Utility sidebar coming soon ..</div>
        </ProjectEditorSidebar>

        <div className="width-adjustor" onClick={() => alert("unavailable rn")} />

        <ProjectEditorContainer>
          <h1>h</h1>
        </ProjectEditorContainer>
      </AdminProjectEditorContainer>
    </BlogProjectEditorContainer>
  );
}

const BlogProjectEditorContainer = styled.div`
  /*  */
`;

const SeeProjectsLink = styled.a`
  color: inherit;
`;
