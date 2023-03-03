import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, Multiselector } from "../../../../../../components";
import { SInput } from "../../../../../../components/Input";
import MDEditor from "../../../../../../components/MDEditor";
import {
  AdminProjectEditorContainer,
  AdminProjectHeader,
  InputErrorHelper,
  MetadataFormContainer,
  MetadataInput,
  ProjectEditorContainer,
  ProjectEditorSidebar,
  ProjectName,
  WidthAdjustor,
} from "../../../../../../theme/ResourcesAdminStyles";
import { useResourcesAdmin } from "../../../../../../contexts/ResourcesAdminProvider";
import { BLOG_METADATA_MAP } from "../../../../../../utils/constants";
import { ADMIN_BLOG_SCHEMA } from "../../../../../../utils/yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Head from "next/head";

const AUTOSAVE_SECONDS_INTERVAL = 3;

export default function BlogProject() {
  const [blogProject, setBlogProject] = useState(null);
  const { blogTemplates, setBlogTemplates } = useResourcesAdmin();
  const { register, handleSubmit, formState, reset, getValues } = useForm({
    resolver: yupResolver(ADMIN_BLOG_SCHEMA),
  });
  const [tags, setTags] = useState([]);
  const [mde, setMde] = useState(null);
  const [tagsHelperMsg, setTagsHelperMsg] = useState("");
  const [blogBodyHelperMsg, setBlogBodyHelperMsg] = useState("");
  const [publishing, setPublishing] = useState(false);

  const router = useRouter();

  // update post with url params
  useEffect(() => {
    if (router.query.id == null) return;

    const blog = blogTemplates.find((blog) => blog.id === router.query.id);
    setBlogProject(blog);
    reset({ ...blog });
    setTags(blog.tags);
  }, [router.query.id]);

  const saveProject = (extraAttributes) => {
    const updatedProjects = blogTemplates.map((project) => {
      if (project.id !== router.query.id) return project;

      const updatedProject = {
        ...blogProject,
        ...getValues(),
        lastSaved: Date.now(),
        body: mde.value(),
        tags,

        ...extraAttributes,
      };

      setBlogProject(updatedProject);
      return updatedProject;
    });

    setBlogTemplates(updatedProjects);
  };

  // auto save project details
  useEffect(() => {
    let interval = setInterval(() => {
      saveProject();
    }, AUTOSAVE_SECONDS_INTERVAL * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [saveProject, blogProject]);

  const renderMetadataInput = (metadata) => {
    switch (metadata.inputType) {
      case "input":
      // return <Input />;

      // eslint-disable-next-line no-fallthrough
      case "textarea":
        // change later
        return <SInput placeholder={metadata.name} {...register(metadata.code)} />;

      case "tag_multiselector":
        return (
          <div>
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
              placeholder="Add tags"
              tagValue={tags}
              setList={setTags}
              handleChange={() => setTagsHelperMsg("")}
            />
            <InputErrorHelper>{tagsHelperMsg}</InputErrorHelper>
          </div>
        );

      default:
        return <h1>metadata input not unknown</h1>;
    }
  };

  const handleSubmitBlog = async (blogMetadata) => {
    if (publishing) {
      return toast.warn(() => <div>Already publishing!</div>);
    }
    setPublishing(true);

    if (tags.length < 1) {
      return setTagsHelperMsg("Must have at least 1 tag");
    } else if (!mde || !mde.value().length) {
      return setBlogBodyHelperMsg("Body is required");
    }

    saveProject();

    const res = await axios.post("/api/admin/resources/blogs", {
      ...blogMetadata,
      body: mde.value(),
    });

    if (res.data.failed) {
      toast.error(() => (
        <div>
          <span role="img" arial-label="waving-hand">
            👋
          </span>
          <div>Blog with the same title already exists</div>
        </div>
      ));
    } else {
      toast.success(() => (
        <div>
          <div>Post published! Go back to dashboard?</div>
          <Button onClick={() => router.push("/resources/admin")}>Yes</Button>
        </div>
      ));
    }

    setPublishing(false);
  };

  if (blogProject == null) return <h1>can&apos;t find blog</h1>;
  return (
    <BlogProjectEditorContainer>
      <ToastContainer />
      <Head>
        <title>PuMP | Admin blog - {blogProject.name ?? ""}</title>
        <meta property="description" content="admin dashboard to handle resources" />
      </Head>

      <AdminProjectHeader>
        {/* TODO: extract inline css later () */}
        <section style={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => alert("Coming soon")}>Menu</Button>
          <Button>
            <SeeProjectsLink href="/resources/admin">Dashboard</SeeProjectsLink>
          </Button>

          <ProjectName>Current project: {blogProject.name}</ProjectName>
        </section>

        {/* also extract this css later */}
        <section style={{ marginRight: "20rem" }}>
          <Button onClick={handleSubmit(handleSubmitBlog)}>PuMP Publish</Button>
        </section>
      </AdminProjectHeader>

      <AdminProjectEditorContainer>
        <ProjectEditorSidebar>
          <h1>h</h1>
          <div style={{ fontSize: "2rem" }}>Utility sidebar coming soon ..</div>
        </ProjectEditorSidebar>

        <WidthAdjustor onClick={() => alert("unavailable rn")} />

        <ProjectEditorContainer>
          <MetadataFormContainer>
            <PortionHeader>Provide Data</PortionHeader>
            {BLOG_METADATA_MAP.map((meta) => (
              <MetadataInput key={meta.code}>
                <div>
                  <span style={{ fontWeight: "bold" }}>{meta.name}</span>{" "}
                  {meta.helperText && `(${meta.helperText})`}
                  {formState.errors[meta.code] && (
                    <InputErrorHelper>
                      {" "}
                      | {formState.errors[meta.code]?.message}
                    </InputErrorHelper>
                  )}
                </div>
                {renderMetadataInput(meta)}
              </MetadataInput>
            ))}

            <PortionHeader>The Body</PortionHeader>
            <MDEditor
              placeholderText={"## Space starts here\n\nand ends here"}
              mdeRecordSetter={setMde}
              initialValue={blogProject.body}
            />
            <InputErrorHelper>{blogBodyHelperMsg}</InputErrorHelper>
          </MetadataFormContainer>

          {/* <p>End</p> */}
        </ProjectEditorContainer>
      </AdminProjectEditorContainer>
    </BlogProjectEditorContainer>
  );
}

// Template for changes to page container styles
const BlogProjectEditorContainer = styled.div`
  /*  */
`;

const SeeProjectsLink = styled.a`
  color: inherit;
`;

const PortionHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
