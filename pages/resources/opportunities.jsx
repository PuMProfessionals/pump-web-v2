import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { opportunities } from "../../cache/cache";
import { Input, Loading, Multiselector } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";
import { Title } from "../../components";
import PumpDirect from "../../public/resources/PuMPDirect.png";

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
  const [tags, setTags] = useState("");
  const [cities, setCity] = useState("");
  const [oppPosts, setOppPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setOppPosts(opps);
    setIsLoading(false);
  }, []);

  const handleChange = (searchValue, tagValues, cityValues) => {
    setIsLoading(true);
    axios
      .get(
        `/api/opportunity?search=${searchValue}&tags=${tagValues}&city=${cityValues}`
      )
      .then((res) => {
        setOppPosts(res.data.results);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(customError);
      });
  };

  const handleSearch = (e) => {
    setSearchParameter(e.target.value);
    handleChange(e.target.value, tags, cities);
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
            title="PuMP Direct"
            description="Browse our opportunities."
            image={PumpDirect}
            imageWidth={150}
            imageHeight={150}
          />
          <Input
            placeholder="Search opportunities"
            name="opportunity-name"
            type="text"
            value={searchParameter}
            onChange={handleSearch}
          />
          <Multiselector
            options={["North York", "Los Angeles", "Toronto", "Scarborough"]}
            displayValue="name"
            placeholder="Search by City"
            setList={setCity}
            searchValue={searchParameter}
            tagValue={tags}
            otherValue={cities}
            handleChange={handleChange}
            isFilterTag={false}
          />
          <Multiselector
            options={[
              "Volunteering",
              "Summer Program",
              "Shadowing",
              "Internship (Unpaid)",
            ]}
            displayValue="name"
            placeholder="Filter by tag..."
            setList={setTags}
            searchValue={searchParameter}
            tagValue={tags}
            otherValue={cities}
            handleChange={handleChange}
          />
          {isLoading ? (
            <Loading color={baseTheme.colors.navy} />
          ) : (
            <>
              {!!oppPosts &&
                oppPosts.map(({ postingName, slug }) => (
                  <div key={postingName}>
                    <Link href={`/resources/opportunities/${slug}`}>
                      <a style={{ color: baseTheme.colors.navy }}>{postingName}</a>
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
  let opps;
  try {
    opps = await prisma.posting.findMany();
  } catch (e) {
    opps = opportunities;
  }
  opps = opps.sort((opp1, opp2) => (opp1.postedDate > opp2.postedDate ? 1 : -1));
  opps = opps.filter((opp) => opp.published);

  return {
    props: { opps },
  };
}
