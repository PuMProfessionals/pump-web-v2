import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { posts } from "../../cache/cache";
import { Input, Loading, Multiselector, Title, Text } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";
import PuMPDigest from "../../public/home/MainGraphic.png";
import { media } from "../../utils";
import { BlogSection } from "../../sections/resources/blog";

const customError = () => (
  <div>
    <span role="img" arial-label="waving-hand">
      👋
    </span>
    Unfortunately, we could not reach our database due to an internal server error.
    We&apos;re doing our best to fix this for you soon. Sorry for the inconvenience!
  </div>
);

export default function Blog({ blogs, ...props }) {
  const [searchParameter, setSearchParameter] = useState("");
  const [tags, setTags] = useState("");
  const [releaseBatch, setReleaseBatch] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setBlogPosts(blogs);
    setIsLoading(false);
  }, []);

  const handleChange = (searchValue, tagValues, releaseValues) => {
    setIsLoading(true);
    axios
      .get(
        `/api/blog?search=${searchValue}&tags=${tagValues}&release=${releaseValues}`
      )
      .then((res) => {
        setBlogPosts(res.data.results);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(customError);
      });
  };

  const handleSearch = (e) => {
    setSearchParameter(e.target.value);
    handleChange(e.target.value, tags, releaseBatch);
  };

  return (
    <div>
      <Head>
        <title>PuMP | Digest</title>
        <meta
          property="description"
          content="Read advice about interview dos and don'ts, medical school tips, careers in health sciences, and much more. All under one roof!"
        />
      </Head>
      <PageLayout>
        <ToastContainer />
        <div {...props}>
          <Title
            title="Welcome To PuMP Digest"
            image={PuMPDigest}
            arrowLink="/resources"
            imageWidth={230}
            imageHeight={150}
          />
          <InputsWrapper>
            <SInput
              placeholder="Search by Title"
              name="blog-name"
              type="text"
              value={searchParameter}
              onChange={handleSearch}
            />
          </InputsWrapper>
          <BottomWrapper>
            <FilterWrapper>
              <FilterTitle size={baseTheme.size.h2} bold="true">
                Filters
              </FilterTitle>
              <FilterTitle size={baseTheme.size.h3}>Release Batch</FilterTitle>
              <Multiselector
                options={["January 2021", "October 2020"]}
                displayValue="name"
                placeholder="Release Batch"
                setList={setReleaseBatch}
                searchValue={searchParameter}
                tagValue={tags}
                otherValue={releaseBatch}
                handleChange={handleChange}
                isFilterTag={false}
              />
              <FilterTitle size={baseTheme.size.h3}>Tags</FilterTitle>
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
                displayValue="name"
                placeholder="Filter by Tag"
                setList={setTags}
                searchValue={searchParameter}
                tagValue={tags}
                otherValue={releaseBatch}
                handleChange={handleChange}
              />
            </FilterWrapper>
            <BlogWrapper>
              {isLoading ? (
                <Loading color={baseTheme.colors.navy} />
              ) : (
                <BlogSection blogPosts={blogPosts} />
              )}
            </BlogWrapper>
          </BottomWrapper>
        </div>
      </PageLayout>
    </div>
  );
}

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  ${media(
    "tablet",
    `
        margin-top: 40px;
        `
  )};
`;

const SInput = styled(Input)`
  width: 50%;
  margin-top: 10px;
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
  @media only screen and (min-width: 1600px) {
    width: 50%;
  }
  @media only screen and (max-width: 1050px) {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 30px;
  }
`;

const FilterTitle = styled(Text)`
  padding: 20px;
  margin: 0;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;

const FilterWrapper = styled.div`
  max-width: 250px;
  margin: 10px 50px 30px 80px;
  @media only screen and (max-width: 1050px) {
    margin: 0 3%;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1050px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

const BlogWrapper = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: center;
   {
    /* should be removed/changed to accomodate filter section */
  }
`;

export async function getStaticProps() {
  let blogs;
  try {
    blogs = await prisma.post.findMany();
  } catch (e) {
    blogs = posts;
  }
  blogs = blogs
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1))
    .filter((post) => post.published);

  return {
    props: { blogs },
  };
}
