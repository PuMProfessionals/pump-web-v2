import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { Input } from "../../components";
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

export default function Opportunities({ opps, ...props }) {
  const [searchParameter, setSearchParameter] = useState("");
  const [oppPosts, setOppPosts] = useState([]);
  useEffect(() => {
    opps.sort((opp1, opp2) => (opp1.date > opp2.date ? 1 : -1));
    setOppPosts(opps);
  }, []);

  const handleChange = (e) => {
    setSearchParameter(e.target.value);
    if (searchParameter.length >= 2) {
      axios
        .get(`/api/opportunity?search=${e.target.value}`)
        .then((res) => {
          setOppPosts(res.data.results);
        })
        .catch(() => {
          toast.error(customError);
        });
    }
  };
  return (
    <div>
      <Head>
        <title>PuMP | Direct</title>
      </Head>
      <PageLayout>
        <ToastContainer />
        <Wrapper {...props}>
          <Title
            title="Browse Opportunities"
            image={SpeechBubble}
            imageWidth={150}
            imageHeight={150}
          />
          <Input
            placeholder="Search opportunities"
            name="opportunity-name"
            type="text"
            value={searchParameter}
            onChange={handleChange}
          />
          {!!oppPosts &&
            oppPosts.map(({ postingName, slug }) => (
              <div key={postingName}>
                <Link href={`/resources/opportunity/${slug}`}>
                  <a style={{ color: baseTheme.colors.navy }}>{postingName}</a>
                </Link>
              </div>
            ))}
        </Wrapper>
      </PageLayout>
    </div>
  );
}

const Wrapper = styled.div``;

export async function getStaticProps() {
  let opps = await prisma.posting.findMany();
  opps = opps.sort((opp1, opp2) => (opp1.postedDate > opp2.postedDate ? 1 : -1));

  return {
    props: { opps },
  };
}
