import { prisma } from "../../prisma/index";
import { posts } from "../../cache/cache";

/*
    params: 
    - search = search directly for post
    - release = release batch
    - tags = tags to filter
*/
export default async (req, res) => {
  // console.log("tt", req.query);
  let results;
  try {
    results = await prisma.post.findMany();
  } catch (e) {
    results = posts;
  }

  if (req.query.search) {
    results = results.filter((post) =>
      post.title.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  const selectedTags = req.query.tags.split(",");
  if (selectedTags.length) {
    results = results.filter((post) =>
      post.tags.some((tag) => selectedTags.includes(tag))
    );
  }

  let allResults = [];
  let filteredResults;
  if (req.query.release) {
    for (const release of req.query.release.split(",")) {
      filteredResults = results.filter((post) => post.releaseBatch === release);
      allResults.push(...filteredResults);
    }
    results = allResults;
  }

  results = results.filter((result) => result.published);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
