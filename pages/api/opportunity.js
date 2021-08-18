import { prisma } from "../../prisma/index";
import { opportunities } from "../../cache/cache";

/*
    params: 
    - search = search directly for opportunity (posted name/posting)
    - city = city this opportunity is found in 
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
      filteredResults = results.filter((post) => post.tags.includes(tag));
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  allResults = [];
  if (req.query.city) {
    filteredResults = results.filter((opp) => opp.city === "Anywhere");
    allResults.push(...filteredResults);
    for (let city of req.query.city.split(",")) {
      filteredResults = results.filter((opp) => opp.city.includes(city));
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  results = results.filter((opp) => opp.published);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
