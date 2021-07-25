/* eslint-disable no-undef, no-console */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIGEST_PATHS = path.join(process.cwd(), "_digest");

/*
  Get all file project paths for filtering and building cache
  @returns stringified array of all posts in _digest folder
*/
function getProjectFilePaths() {
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
  return JSON.stringify(postNames);
}

const posts = `export const posts = ${getProjectFilePaths()};`;

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/blog.js", posts, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Posts cached.");
});
