import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { posts } from "../../cache/cache";
import { Input, Loading, Multiselector, Title, Text } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";
import SpeechBubble from "../../public/blog/written-speech-bubble.svg";
import { media } from "../../utils";

const customError = () => (
  <div>
    <span role="img" arial-label="waving-hand">
      👋
    </span>{" "}
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
      </Head>
      <PageLayout>
        <ToastContainer />
        <Wrapper {...props}>
          <Title
            title="Welcome To PuMP Digest"
            image={SpeechBubble}
            imageWidth={150}
            imageHeight={150}
          />
          <InputsWrapper>
            <SInput
              placeholder="Search blog"
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
              <SMultiselector
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
              <SMultiselector
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
                placeholder="Filter by tag..."
                setList={setTags}
                searchValue={searchParameter}
                tagValue={tags}
                otherValue={releaseBatch}
                handleChange={handleChange}
              />
            </FilterWrapper>
            <ResultsWrapper>
              {isLoading ? (
                <Loading color={baseTheme.colors.navy} />
              ) : (
                <>
                  {!!blogPosts &&
                    blogPosts.map(({ title, slug }) => (
                      <div key={title}>
                        <Link href={`/resources/blog/${slug}`}>
                          <a style={{ color: baseTheme.colors.navy }}>{title}</a>
                        </Link>
                      </div>
                    ))}
                </>
              )}
            </ResultsWrapper>
          </BottomWrapper>
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div``;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  ${media(
    "mobile",
    `
        margin-top: 20px;
        `
  )};
`;

const SInput = styled(Input)`
  width: 80%;
  margin-top: 10px;
  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
  @media only screen and (min-width: 1600px) {
    width: 60%;
  }
  ${media(
    "tablet",
    `
        width: 60%;
        margin-top: 0;
        margin-bottom: 30px;
        `
  )};
`;

const FilterTitle = styled(Text)`
  margin: ;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;

const SMultiselector = styled(Multiselector)`
  width: 80%;
  margin-top: 10px;
  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
  @media only screen and (min-width: 1600px) {
    width: 60%;
  }
  ${media(
    "tablet",
    `
      margin-top: 0;
      margin-bottom: 30px;
      `
  )};
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  ${media(
    "tablet",

    `   flex-direction: row;
        justify-content: center;
          max-width 5000px:
          `
  )};
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media(
    "tablet",
    `
        margin-top: 20px;
        flex-direction: column;
        `
  )};
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
