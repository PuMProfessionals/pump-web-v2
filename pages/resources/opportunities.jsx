import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { prisma } from "../../prisma/index";
import { opportunities } from "../../cache/cache";
import { Input, Loading, Multiselector, Text } from "../../components";
import { PageLayout } from "../../sections/hoc";
import { baseTheme } from "../../theme";
import { Title } from "../../components";
import PumpDirect from "../../public/resources/PuMPDirect.png";
import { media } from "../../utils";

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
        <meta
          property="description"
          content="Browse and filter our database of local opportunities in healthcare."
        />
      </Head>
      <PageLayout>
        <ToastContainer />
        <div {...props}>
          <Title
            title="PuMP Direct"
            description="Browse our opportunities."
            image={PumpDirect}
            arrowLink="/resources"
            imageWidth={150}
            imageHeight={150}
          />
          <InputsWrapper>
            <SInput
              placeholder="Search opportunities"
              name="opportunity-name"
              type="text"
              value={searchParameter}
              onChange={handleSearch}
            />
          </InputsWrapper>
          <BottomWrapper>
            <FilterWrapper>
              <FilterTitle size={baseTheme.size.h2} bold="true">
                Filters
              </FilterTitle>
              <FilterTitle size={baseTheme.size.h3}>City</FilterTitle>
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
              <FilterTitle size={baseTheme.size.h3}>Tags</FilterTitle>
              <Multiselector
                options={[
                  "Volunteering",
                  "Summer Program",
                  "Shadowing",
                  "Internship (Unpaid)",
                ]}
                displayValue="name"
                placeholder="Filter by Tag"
                setList={setTags}
                searchValue={searchParameter}
                tagValue={tags}
                otherValue={cities}
                handleChange={handleChange}
              />
            </FilterWrapper>
            <ResultsWrapper>
              {isLoading ? (
                <Loading color={baseTheme.colors.navy} />
              ) : (
                <>
                  {!!oppPosts &&
                    oppPosts.map(({ postingName, slug }) => (
                      <div key={postingName}>
                        <Link href={`/resources/opportunities/${slug}`}>
                          <a style={{ color: baseTheme.colors.navy }}>
                            {postingName}
                          </a>
                        </Link>
                      </div>
                    ))}
                </>
              )}
            </ResultsWrapper>
          </BottomWrapper>
        </div>
      </PageLayout>
    </div>
  );
}

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  ${media(
    "mobile",
    `
        margin-top: 20px;
        `
  )};
`;

const SInput = styled(Input)`
  width: 50%;
  margin-top: 10px;
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
  @media only screen and (min-width: 1600px) {
    width: 50%;
  }
  ${media(
    "tablet",
    `
        width: 80%;
        margin-top: 0;
        margin-bottom: 30px;
        `
  )};
`;

const FilterTitle = styled(Text)`
  padding: 20px;
  margin: 0;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;

const FilterWrapper = styled.div`
  max-width: 250px;
  margin: 10px 50px 30px 80px;
  ${media(
    "tablet",

    `   
      margin: 0 10px;
      flex-direction: column;
      justify-content: center;
      min-width:100%;
        `
  )};
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media(
    "tablet",
    `
        margin-top: 20px;
        flex-direction: column;
        `
  )};
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
