import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { Input, Loading } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";
import { Title } from "../../components";
import SpeechBubble from "../../public/blog/written-speech-bubble.svg";

const customError = () => (
  <div>
    <span role="img" arial-label="waving-hand">
      👋
    </span>{" "}
    Unfortunately, we could not reach our database due to an internal server error.
    We&apos;re doing our best to fix this for you soon. Sorry for the inconvenience!
  </div>
);

export default function Blog({ posts, ...props }) {
  const [searchParameter, setSearchParameter] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    posts.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
    setBlogPosts(posts);
    setIsLoading(false);
  }, []);

  const handleChange = (e) => {
    setSearchParameter(e.target.value);
    setIsLoading(true);
    axios
      .get(`/api/blog?search=${e.target.value}`)
      .then((res) => {
        setBlogPosts(res.data.results);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(customError);
      });
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
            <Input
              placeholder="Search blog"
              name="blog-name"
              type="text"
              value={searchParameter}
              onChange={handleChange}
            />
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
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div``;

export async function getStaticProps() {
  let posts;
  try {
    posts = await prisma.post.findMany();
  } catch (e) {
    posts = posts.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  }

  return {
    props: { posts },
  };
}
