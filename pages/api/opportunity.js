import { prisma } from "../../prisma/index";
import { opportunities } from "../../cache/cache";

/*
    params: 
    - search = search directly for opportunity (posted name/posting)
    - city = city this opportunity is found in 
    - posted_date = posted date
    - tags = tags to filter
*/
export default async (req, res) => {
  let results;
  try {
    results = await prisma.posting.findMany();
  } catch (e) {
    results = opportunities;
  }

  if (req.query.search) {
    results = results.filter((opp) =>
      opp.postingName.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  let allResults = [];
  let filteredResults;
  if (req.query.tags) {
    for (let tag of req.query.tags.split(",")) {
      tag = tag.trim();
      filteredResults = results.filter((opp) => opp.tags.includes(tag));
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  allResults = [];
  if (req.query.city) {
    //include the option of anywhere???
    for (let city of req.query.city.split(",")) {
      city = city.trim().toLowerCase();
      filteredResults = results.filter(
        (opp) =>
          opp.address.toLowerCase().includes(city) ||
          opp.address.toLowerCase() === "anywhere"
      );
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  allResults = [];
  if (req.query.posted_date) {
    for (let posted_date of req.query.posted_date.split(",")) {
      posted_date = posted_date.trim();
      filteredResults = results.filter(
        (opp) => opp.postedDate.replace(" ", "") === posted_date
      );
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  results = results.filter((opp) => opp.published == true);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
