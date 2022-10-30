import octokit from "../../../../../lib/octokit";
import { validateToken } from "../../../../../middlewares/auth";
import { mdxStr } from "../../../../../utils/methods/format";
import { ENVS } from "../../../../../lib/envs";

export default async (req, res) => {
  /**
   * Ref: https://docs.github.com/en/rest/repos/contents#get-repository-content--status-codes
   */

  validateToken(req, res);
  // console.log(req.user);

  if (req.user.id == null) return res.status(400).json({ unauthorized: true });

  const { title, date, releaseBatch, authors, tags, summary, body } = req.body;

  try {
    // console.log(`_digest/queue/${title.trim().replaceAll(" ", "-")}.mdx`);

    const ghRes = await octokit.request(
      "PUT /repos/{owner}/{repo}/contents/{path}",
      {
        owner: ENVS.REPO_OWNER,
        repo: ENVS.MAIN_REPO,
        path: `_digest/queue/${title.trim().replaceAll(" ", "-")}.mdx`,
        message: `New blog - ${title}`,
        committer: {
          name: "PuMP Resource Bot",
          email: "NA@gmail.com",
        },
        // eslint-disable-next-line no-undef
        content: Buffer.from(mdxStr({ ...req.body }), "utf8").toString("base64"),
      }
    );
    // console.log(ghRes);

    res.status(200).json({ done: true });
  } catch (err) {
    res.json({ failed: true });
  }
};
