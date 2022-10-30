import { Octokit } from "octokit";
import { ENVS } from "./envs";

// console.log(ENVS.GITHUB_FGPAT);
export default new Octokit({
  auth: ENVS.GITHUB_KEY,
});
