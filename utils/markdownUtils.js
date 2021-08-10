import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { posts } from "../cache/cache";

/* eslint-disable no-undef */
const DIGEST_PATHS = join(process.cwd(), "_digest");
const AUTHOR_PATHS = join(process.cwd(), "_author");
const OPPORTUNITIES_PATHS = join(process.cwd(), "_direct");
const EVENTS_PATHS = join(process.cwd(), "_events");

const MONTH = 0;

export function getSlug(pathType, slugName) {
  let folderPath;
  let matchedPost;
  let releaseBatch;
  switch (pathType) {
    case "blog":
      folderPath = DIGEST_PATHS;
      matchedPost = posts.find((post) => post.slug === slugName);
      releaseBatch = matchedPost.releaseBatch.split(" ");
      releaseBatch[MONTH] = releaseBatch[MONTH].toLowerCase();
      releaseBatch = releaseBatch.join("-");
      folderPath = folderPath.concat("/").concat(releaseBatch);
      break;
    case "author":
      folderPath = AUTHOR_PATHS;
      break;
    case "opp":
      folderPath = OPPORTUNITIES_PATHS;
      break;
    case "event":
      folderPath = EVENTS_PATHS;
      break;
    default:
      folderPath = "";
  }
  let fullPath = join(folderPath, `${slugName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export const getEventSlugs = () => {
  const allEventsPath = fs.readdirSync(EVENTS_PATHS);
  const events = allEventsPath.map((event) => {
    const slug = event.replace(/\.mdx?$/, "");
    return {
      slug,
    };
  });
  return events;
};

export const getOpportunitySlugs = () => {
  const allOpportunityPath = fs.readdirSync(OPPORTUNITIES_PATHS);
  const opportunities = allOpportunityPath.map((opp) => {
    const slug = opp.replace(/\.mdx?$/, "");
    return {
      slug,
    };
  });
  return opportunities;
};
