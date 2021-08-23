import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { prisma } from "../../../prisma/index";
import { Title, MDXWrapper, Tag, Text, Button } from "../../../components";
import { PageLayout } from "../../../sections/hoc";
import { opportunities } from "../../../cache/cache";
import { getSlug } from "../../../utils/markdownUtils";

const OpportunitiesPage = ({ source, frontMatter }) => {
  return (
    <div>
      <Head>
        <title>PuMP | {frontMatter.postingName}</title>
        <meta
          name="description"
          content={`Opportunity posting for ${frontMatter.title}`}
        />
      </Head>
      <PageLayout>
        <Title
          title={frontMatter.postingName}
          arrowLink="/resources/opportunities"
        />
        <TopWrapper>
          <TagWrapper>
            {frontMatter.tags.map((tag) => (
              <Tag key={`${frontMatter.title}__${tag}`} label={tag} />
            ))}
          </TagWrapper>
          <Text>{frontMatter.postedDate}</Text>
        </TopWrapper>
        <ImageWrapper>
          <Image
            src={frontMatter.orgImages}
            alt={`Logo for ${frontMatter.orgName}`}
            height={frontMatter.height ? frontMatter.height : 200}
            width={frontMatter.width ? frontMatter.width : 200}
          />
        </ImageWrapper>
        <MDXWrapper>
          <MDXRemote {...source} />
        </MDXWrapper>
        <ImageWrapper style={{ marginBottom: "5%" }}>
          <a href={frontMatter.linkTo} target="_blank" rel="noreferrer nofollower">
            <Button>View More</Button>
          </a>
        </ImageWrapper>
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2% 3%;
`;
const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
