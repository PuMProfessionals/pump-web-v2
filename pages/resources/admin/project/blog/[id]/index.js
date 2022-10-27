import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, Multiselector } from "../../../../../../components";
import MDEditor from "../../../../../../components/MDEditor";
import {
  AdminProjectEditorContainer,
  AdminProjectHeader,
  MetadataFormContainer,
  MetadataInput,
  ProjectEditorContainer,
  ProjectEditorSidebar,
} from "../../../../../../components/resourcesAdmin/ProjectComponentStyles";
import { useResourcesAdmin } from "../../../../../../contexts/ResourcesAdminProvider";
import { BLOG_METADATA_MAP } from "../../../../../../utils/constants";

export default function BlogProject() {
  const [blogProject, setBlogProject] = useState(null);
  const { blogTemplates } = useResourcesAdmin();

  const router = useRouter();

  useEffect(() => {
    if (router.query == null) return;

    setBlogProject(blogTemplates.find((blog) => blog.id === router.query.id));
  }, [router.query]);

  const renderMetadataInput = (metadata) => {
    switch (metadata.inputType) {
      case "input":
      // return <Input />;

      // eslint-disable-next-line no-fallthrough
      case "textarea":
        // change later maybe
        return <Input placeholder={metadata.name} />;

      case "tag_multiselector":
        return (
          <Multiselector
            options={[
              "Productivity",
              "Student Life",
              "Extracurriculars",
              "High School",
              "Mental Health",
              "Skills",
              "Informative",
              "Informational",
              "Professions",
              "Apps",
              "Research",
              "Postsecondary",
              "Pathways",
              "Interviews",
              "Covid 19",
            ]}
          />
        );

      default:
        return <h1>metadata input not exist</h1>;
    }
  };

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
          <MetadataFormContainer>
            <h1>Provide data the about blog</h1>
            {/* {BLOG_METADATA_MAP.map((meta) => renderMetadataInput(meta))} */}
            {BLOG_METADATA_MAP.map((meta) => (
              <MetadataInput key={meta.code}>
                <div className="info">
                  {meta.name} {meta.helperText && `(${meta.helperText})`}
                </div>
                {renderMetadataInput(meta)}
              </MetadataInput>
            ))}

            <MDEditor placeholderText={"## Space starts here\n\nand ends here"} />
          </MetadataFormContainer>

          <h1>The body</h1>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
          <p>hasdkljalsdj</p>
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
