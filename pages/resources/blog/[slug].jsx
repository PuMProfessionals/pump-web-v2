import Head from "next/head";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { prisma } from "../../../prisma/index";
import { posts } from "../../../cache/cache";
import { Title, MDXWrapper, Author } from "../../../components";
import { PageLayout } from "../../../sections/hoc";
import { getSlug } from "../../../utils/markdownUtils";

const BlogsPage = ({ source, frontMatter }) => {
  return (
    <div>
      <Head>
        <title>PuMP | {frontMatter.title}</title>
      </Head>
      <PageLayout>
        <Title title={frontMatter.title} />
        <AuthorWrapper>
          <Author names={frontMatter.authors} />
        </AuthorWrapper>
        <MDXWrapper>
          <MDXRemote {...source} />
        </MDXWrapper>
      </PageLayout>
    </div>
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

  postPaths = postPaths.filter((postPath) => postPath.published);

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

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
