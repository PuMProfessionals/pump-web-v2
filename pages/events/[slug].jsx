import Head from "next/head";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { Title } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { getSlug, getEventSlugs } from "../../utils/markdownUtils";

const EventsPage = ({ source, frontMatter }) => {
  return (
    <div>
      <Head>
        <title>PuMP | {frontMatter.title}</title>
      </Head>
      <PageLayout>
        <Title title={frontMatter.title} />
        <Wrapper>
          <MDXRemote {...source} />
        </Wrapper>
      </PageLayout>
    </div>
  );
};

export default EventsPage;

export const getStaticProps = async ({ params }) => {
  const { data, content } = getSlug("event", params?.slug);

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
  const eventPaths = getEventSlugs();

  const paths = eventPaths.map((post) => ({
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
