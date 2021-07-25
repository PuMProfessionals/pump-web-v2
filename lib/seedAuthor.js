/* eslint-disable no-undef, no-console */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import prisma from "prisma";

const AUTHOR_PATHS = path.join(process.cwd(), "_authors");

/*
  Get all authors in _authors folder to insert into database
  @returns Array of authors
*/
export function getAuthors() {
    const authorDirectory = fs.readdirSync(AUTHOR_PATHS);
    const authorInfo = authorDirectory.map(author => {
        const slug = author.replace(/\.mdx?$/, "");
        const fullPath = path.join(AUTHOR_PATHS, author);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            slug,
            name: matterResult.data.name,
            position: matterResult.data.position ? matterResult.data.position : null,
            email: matterResult.data.email ? matterResult.data.email : null,
            about: matterResult.data.about ? matterResult.data.about : null,
        }
    });
    return authorInfo;
}

const insertBatch = async () => {
    const authors = getAuthors();
    await authorUpsert(authors);
}

/*
* Upsert authors
* @param authors - Authors to upsert
*/
const authorUpsert = async(
    authors
) => {
    const authorUpserts = [];
    for (let author of authors) {
        const authorUpsert = await prisma.authors.upsert({
            where: { email: author.email },
            update: {
                position: author.position,
                about: author.about,
                name: author.name,
                email: author.email,
            },
            create: {
                position: author.position,
                about: author.about,
                name: author.name,
                email: author.email,
            }
        })
        authorUpserts.push(authorUpsert);
        // eslint-disable-next-line no-console
        console.log({ authorUpsert });
    }
};

// Execute seeding
insertBatch()
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
