import { capitalizeEveryWord } from "./general";

export function mdxStr({ title, date, releaseBatch, summary, authors, tags, body }) {
  const matterDetails = {
    title,
    date,
    releaseBatch,
    summary,
    // clean formatting for authors
    authors: authors.split(",").map((author) => capitalizeEveryWord(author.trim())),
    tags,
  };

  // quick random check for types
  [matterDetails.authors, matterDetails.tags].forEach((item) => {
    if (!Array.isArray(item)) throw new Error("a");
  });

  const matterBody =
    "---\n" +
    Object.entries(matterDetails)
      .map(
        ([matterCode, matterContent]) =>
          `${matterCode}: ${
            Array.isArray(matterContent)
              ? JSON.stringify(matterContent)
              : matterContent
          }\n`
      )
      .join("") +
    "---";

  return `${matterBody}\n\n${body}`;
}
