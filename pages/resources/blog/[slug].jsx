import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { prisma } from "../../../prisma/index";
import { posts } from "../../../cache/cache";
import { PageLayout } from "../../../sections/hoc";
import { getSlug } from "../../../utils/markdownUtils";

const BlogsPage = ({ source, frontMatter }) => {
  return (
    <PageLayout title={frontMatter.title}>
      <Wrapper>
        <MDXRemote {...source} />
      </Wrapper>
    </PageLayout>
  );
};

export default BlogsPage;

export const getStaticProps = async ({ params }) => {
  const { data, content } = getSlug("blog", params?.slug);

  const mdxSource = await serialize(content, { scope: data });
  // eslint-disable-next-line no-console
  console.log(data);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  let postPaths;
  try {
    postPaths = await prisma.post.findMany();
  } catch (e) {
    postPaths = posts;
  }

  const paths = postPaths.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Wrapper = styled.div``;
