import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { Input } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";

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
  useEffect(() => {
    posts.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
    setBlogPosts(posts);
  }, []);

  const handleChange = (e) => {
    setSearchParameter(e.target.value);
    if (searchParameter.length >= 2) {
      axios
        .get(`/api/blog?search=${e.target.value}`)
        .then((res) => {
          setBlogPosts(res.data.results);
        })
        .catch(() => {
          toast.error(customError);
        });
    }
  };
  return (
    <PageLayout>
      <ToastContainer />
      <Wrapper {...props}>
        <Input
          placeholder="Search blog"
          name="blog-name"
          type="text"
          value={searchParameter}
          onChange={handleChange}
        />
        {!!blogPosts &&
          blogPosts.map(({ title, slug }) => (
            <div key={title}>
              <Link href={`/resources/blog/${slug}`}>
                <a style={{ color: baseTheme.colors.navy }}>{title}</a>
              </Link>
            </div>
          ))}
      </Wrapper>
    </PageLayout>
  );
}

const Wrapper = styled.div``;

export async function getStaticProps() {
  let posts = await prisma.post.findMany();
  posts = posts.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));

  return {
    props: { posts },
  };
}
