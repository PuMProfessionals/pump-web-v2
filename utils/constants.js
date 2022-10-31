export const LOCAL_STORAGE_KEYS = Object.freeze({
  AdminBlogProjects: "admin-blaslkdj",
  AdminJobOppProject: "adjoboopporasddproejc",
});

export const COOKIE_KEYS = Object.freeze({
  AccessToken: "access-token",
});

export const ADMIN_AUTHORITY = Object.freeze({
  Super: 3,
  Mid: 2,
  Regular: 1,
});

export const SIZES = Object.freeze({
  Small: 1,
  Medium: 2,
  Large: 3,
});

function makeBlogMetadata(code, name, helperText, inputType = "input") {
  return { code, name, helperText, inputType };
}
export const BLOG_METADATA_MAP = Object.freeze([
  makeBlogMetadata("title", "Title"),
  makeBlogMetadata("date", "Date", "MM/DD/YYYY format"),
  makeBlogMetadata("releaseBatch", "Release batch", "idek"),
  makeBlogMetadata("summary", "Summary", "", "textarea"),
  makeBlogMetadata(
    "authors",
    "Author(s)",
    'Separate multiple authors with a comma ","'
  ),
  makeBlogMetadata("tags", "Tag(s)", "", "tag_multiselector"),
]);
