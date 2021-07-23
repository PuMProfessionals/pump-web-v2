/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const DIGEST_PATHS = path.join(process.cwd(), "_digest");

function getProjectFilePaths() {
  const releaseNames = fs.readdirSync(DIGEST_PATHS);
  const postNames = [];
  for (const release of releaseNames) {
    const releasePath = path.join(DIGEST_PATHS, release);
    const fileNames = fs.readdirSync(releasePath);
    const fileInfo = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(DIGEST_PATHS, release, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id,
        title: matterResult.data.title,
        summary: matterResult.data.summary,
        date: matterResult.data.date,
        author: matterResult.data.author,
        release_batch: matterResult.data.release_batch,
        author_images: matterResult.data.author_images,
        tags: matterResult.data.tags
      };
    });
    for (const file of fileInfo) {
      postNames.push(file);
    }
  }
  return `export const postNames = ${JSON.stringify(postNames)}`;
}

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/blog.js", getProjectFilePaths(), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Posts cached.");
});
