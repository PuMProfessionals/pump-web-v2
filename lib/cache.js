/* eslint-disable no-undef, no-console */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const DIGEST_PATHS = path.join(process.cwd(), "_digest");
const AUTHOR_PATHS = path.join(process.cwd(), "_author");
const OPPORTUNITIES_PATHS = path.join(process.cwd(), "_direct");

/*
  Get all file project paths for filtering and building cache
  @returns stringified array of all posts in _digest folder
*/
function getProjects() {
  const releaseNames = fs.readdirSync(DIGEST_PATHS);
  const postNames = [];
  for (const release of releaseNames) {
    const releasePath = path.join(DIGEST_PATHS, release);
    const fileNames = fs.readdirSync(releasePath);
    const fileInfo = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(DIGEST_PATHS, release, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        title: matterResult.data.title,
        summary: matterResult.data.summary,
        date: matterResult.data.date,
        authors: matterResult.data.authors,
        releaseBatch: matterResult.data.releaseBatch,
        authorImages: matterResult.data.authorImages,
        tags: matterResult.data.tags,
      };
    });
    for (const file of fileInfo) {
      postNames.push(file);
    }
  }
  return JSON.stringify(postNames);
}

function getAuthors() {
  const allAuthorPaths = fs.readdirSync(AUTHOR_PATHS);
  const authorNames = allAuthorPaths.map((author) => {
    const authorPath = path.join(AUTHOR_PATHS, author);
    const fileContents = fs.readFileSync(authorPath, "utf8");
    const slug = author.replace(/\.mdx?$/, "");
    const matterResult = matter(fileContents);
    return {
      slug,
      name: matterResult.data.name,
      email: matterResult.data.email,
      position: matterResult.data.position,
      about: matterResult.data.about ? matterResult.data.about : "",
    };
  });
  return JSON.stringify(authorNames);
}

function getOpportunities() {
  const allOpportunitiesPath = fs.readdirSync(OPPORTUNITIES_PATHS);
  const opportunities = allOpportunitiesPath.map((opp) => {
    const oppPath = path.join(OPPORTUNITIES_PATHS, opp);
    const fileContents = fs.readFileSync(oppPath, "utf8");
    const slug = opp.replace(/\.mdx?$/, "");
    const matterResult = matter(fileContents);
    return {
      slug,
      postingName: matterResult.data.postingName,
      orgImages: matterResult.data.orgImages,
      orgName: matterResult.data.orgName,
      address: matterResult.data.address,
      tags: matterResult.data.tags,
      published: matterResult.data.published ? matterResult.data.published : true,
      archived: matterResult.data.archived ? matterResult.data.archived : false,
      postedDate: matterResult.data.postedDate,
    };
  });
  return JSON.stringify(opportunities);
}

const cache = `
  export const posts = ${getProjects()};
  export const authors = ${getAuthors()};
  export const opportunities = ${getOpportunities()};
`;

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/cache.js", cache, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Results cached.");
});
