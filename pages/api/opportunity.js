import { prisma } from "../../prisma/index";
import { opportunities } from "../../cache/cache";

/*
    params: 
    - search = search directly for opportunity (posted name)
    - posted_date = posted date
    - address = address (location of opportunity) --> should this be added?
    - tags = tags to filter
*/
export default async (req, res) => {
  let results;
  try {
    results = await prisma.posting.findMany(); //good
  } catch (e) {
    results = opportunities; //good
  }

  if (req.query.search) {
    results = results.filter((opp) =>
      opp.posting_name.toLowerCase().includes(req.query.search)
    );
  }
  if (req.query.posted_date) {
    results = results.filter((opp) => opp.posted_date === req.query.posted_date);
  }
  if (req.query.address) {
    results = results.filter((opp) =>
      opp.address.toLowerCase().includes(req.query.address)
    );
  }
  if (req.query.tags) {
    for (let tag of req.query.tags.split(",")) {
      results = results.filter((opp) => opp.tags.includes(tag));
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
