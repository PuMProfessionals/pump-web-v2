/* eslint-disable no-undef, no-console */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { prisma } = require("../prisma/index");

const DIGEST_PATHS = path.join(process.cwd(), "_digest");

const main = async () => {
    const posts = getPosts();
    await insertPost(posts);
};

/*
  Get all file project paths for filtering and building cache
  @returns stringified array of all posts in _digest folder
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
                authorImages: matterResult.data.authorImages,
                tags: matterResult.data.tags
            };
        });
        for (const file of fileInfo) {
            postNames.push(file);
        }
    }
    return postNames;
}

/*
* Upsert posts
* @param posts - Posts to upsert
*/
const insertPost = async(postsName) => {
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
}

// Execute seeding
main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    }).finally(async() => {
        prisma.$disconnect();
    })
