import Head from "next/head";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { prisma } from "../../../prisma/index";
import { posts } from "../../../cache/cache";
import { Title, MDXWrapper, Author, Tag, Text } from "../../../components";
import { PageLayout } from "../../../sections/hoc";
import { getSlug } from "../../../utils/markdownUtils";
import DefaultProfile from "../../../public/about/tiedye-rect.png";

const BlogsPage = ({ source, frontMatter }) => {
  return (
    <div>
      <Head>
        <title>PuMP | {frontMatter.title}</title>
        <meta property="description" content={frontMatter.description} />
      </Head>
      <PageLayout>
        <Title title={frontMatter.title} arrowLink="/resources/blog" />
        <InfoWrapper>
          <TagWrapper>
            {frontMatter.tags.map((tag) => (
              <Tag key={`${frontMatter.title}__${tag}`} label={tag} />
            ))}
          </TagWrapper>
          <AuthorWrapper>
            <Author names={frontMatter.authors} avatar={DefaultProfile} />
            <Text>{frontMatter.date}</Text>
          </AuthorWrapper>
        </InfoWrapper>
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
`;
const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3% 0;
`;
const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
