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
      post.title.toLowerCase().includes(req.query.search)
    );
  }
  if (req.query.release) {
    results = results.filter(
      (post) => post.release_batch.replace(" ", "") === req.query.release
    );
  }
  if (req.query.tags) {
    for (let tag of req.query.tags.split(",")) {
      results = results.filter((post) => post.tags.includes(tag));
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
