import styled from "styled-components";
import Link from "next/link";

import { BlogCard } from "../../../components";
import { media } from "../../../utils";
import DefaultProfile from "../../../public/about/tiedye-rect.png";

export const BlogSection = ({ blogPosts }) => (
  <Wrapper>
    {!!blogPosts &&
      blogPosts.map(({ id, slug, title, date, summary, tags, authors }) => (
        <Post key={id}>
          <Link href={`/resources/blog/${slug}`}>
            <a>
              <BlogCard
                title={title}
                description={summary}
                tags={tags}
                avatar={DefaultProfile}
                authors={authors}
                publishedDate={date}
              />
            </a>
          </Link>
        </Post>
      ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  ${media(
    "tablet",
    `
      width: auto; 
    `
  )};
`;

const Post = styled.div`
  margin: 2rem 0;
  width: 100%;
`;
