// eslint-disable-next-line no-undef
require("dotenv").config();

// eslint-disable-next-line no-undef
const { JWT_SECRET_KEY, GITHUB_KEY, REPO_OWNER, MAIN_REPO } = process.env;

const ENVS = {
  JWT_SECRET_KEY,
  GITHUB_KEY,
};
// console.log(ENVS);

for (const [k, val] of Object.entries(ENVS)) {
  if (val == null) throw new Error(`undef. env var: ${k}, val: ${val}`);
}

ENVS["REPO_OWNER"] = REPO_OWNER;
ENVS["MAIN_REPO"] = MAIN_REPO;

for (const [k, val] of Object.entries(ENVS)) {
  // eslint-disable-next-line no-console
  if (val == null) console.warn(`undef. env var: ${k}, val: ${val}`);
}

export { ENVS };
