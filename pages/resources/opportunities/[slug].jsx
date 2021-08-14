import Head from "next/head";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { prisma } from "../../../prisma/index";
import { Title } from "../../../components";
import { PageLayout } from "../../../sections/hoc";
import { opportunities } from "../../../cache/cache";
import { getSlug } from "../../../utils/markdownUtils";

const OpportunitiesPage = ({ source, frontMatter }) => {
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

export default OpportunitiesPage;

export const getStaticProps = async ({ params }) => {
  const { data, content } = getSlug("opp", params?.slug);

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
  let opportunityPaths;
  try {
    opportunityPaths = await prisma.posting.findMany();
  } catch (e) {
    opportunityPaths = opportunities;
  }
  opportunityPaths.filter((opp) => opp.published);

  const paths = opportunityPaths.map((opp) => ({
    params: {
      slug: opp.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Wrapper = styled.div``;
