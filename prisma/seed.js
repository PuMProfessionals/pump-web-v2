/* eslint-disable no-undef, no-console */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { prisma } = require("../prisma/index");

const DIGEST_PATHS = path.join(process.cwd(), "_digest");
const AUTHOR_PATHS = path.join(process.cwd(), "_author");
const OPPORTUNITIES_PATHS = path.join(process.cwd(), "_direct");

const main = async () => {
  const posts = getPosts();
  const authors = getAuthors();
  const postings = getPostings();
  await insertPost(posts);
  await insertAuthor(authors);
  await insertPosting(postings);
};

/*
  Get all file project paths for filtering and building cache
  @returns array of all posts in _digest folder
*/
function getPosts() {
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
        tags: matterResult.data.tags,
      };
    });
    for (const file of fileInfo) {
      postNames.push(file);
    }
  }
  return postNames;
}

/*
  Get all file author paths for filtering and building cache
  @returns array of all authors in _author folder
*/
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
      board: matterResult.data.board ? matterResult.data.board : "National",
      about: matterResult.data.about ? matterResult.data.about : "",
    };
  });
  return authorNames;
}

/*
  Get all file opporunities paths for filtering and building cache
  @returns array of all opportunities in _direct folder
*/
function getPostings() {
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
      lat: matterResult.data.lat ? matterResult.data.lat : "-1000",
      long: matterResult.data.lon ? matterResult.data.long : "-1000",
      tags: matterResult.data.tags,
      published: matterResult.data.published ? matterResult.data.published : true,
      archived: matterResult.data.archived ? matterResult.data.archived : false,
      postedDate: matterResult.data.postedDate,
    };
  });
  return opportunities;
}

/*
 * Upsert posts
 * @param posts - Posts to upsert
 */
const insertPost = async (postsName) => {
  const postsUpserts = [];
  for (let postName of postsName) {
    const { slug, ...rest } = postName;
    const postUpsert = await prisma.post.upsert({
      where: { slug: slug },
      update: { ...rest },
      create: { slug, ...rest },
    });
    postsUpserts.push(postUpsert);
    console.log({ postUpsert });
  }
};

/*
 * Upsert authors
 * @param authors - Authors to upsert
 */
const insertAuthor = async (authors) => {
  const authorsUpserts = [];
  for (let author of authors) {
    const { slug, ...rest } = author;
    const authorUpsert = await prisma.author.upsert({
      where: { slug: slug },
      update: { ...rest },
      create: { slug, ...rest },
    });
    authorsUpserts.push(authorUpsert);
    console.log({ authorUpsert });
  }
};

/*
 * Upsert opportunities
 * @param opportunities - Opportunities to upsert
 */
const insertPosting = async (opportunities) => {
  const oppUpserts = [];
  for (let opp of opportunities) {
    const { slug, ...rest } = opp;
    const oppUpsert = await prisma.posting.upsert({
      where: { slug: slug },
      update: { ...rest },
      create: { slug, ...rest },
    });
    oppUpserts.push(oppUpsert);
    console.log({ oppUpsert });
  }
};

// Execute seeding
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
