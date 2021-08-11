import { prisma } from "../../prisma/index";
import { posts } from "../../cache/cache";

/*
    params: 
    - search = search directly for post
    - release = release batch
    - tags = tags to filter
*/
export default async (req, res) => {
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
  let allResults = []
  let filteredResults;
  if (req.query.tags) {
    for (let tag of req.query.tags.split(",")) {
      tag = tag.trim()
      filteredResults = results.filter((post) => post.tags.includes(tag));
      allResults.push(filteredResults)
    }
    results = allResults
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
