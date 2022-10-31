import octokit from "../../../../../lib/octokit";
import { validateToken } from "../../../../../middlewares/auth";
import { mdxStr } from "../../../../../utils/methods/format";
import { ENVS } from "../../../../../lib/envs";
import { ADMIN_AUTHORITY } from "../../../../../utils/constants";
import { capitalizeEveryWord } from "../../../../../utils/methods/general";

export default async (req, res) => {
  /**
   * Ref:
   * https://docs.github.com/en/rest/repos/contents#get-repository-content--status-codes
   */

  // don't let non-authorized ppl post blog
  validateToken(req, res);
  if (req.user.id == null) return res.status(400).json({ unauthorized: true });

  const { title, date, releaseBatch, authors, tags, summary, body } = req.body;
  const { name, email, authority } = req.user;

  try {
    // console.log(`_digest/queue/${title.trim().replaceAll(" ", "-")}.mdx`);

    const ghRes = await octokit.request(
      "PUT /repos/{owner}/{repo}/contents/{path}",
      {
        owner: ENVS.REPO_OWNER,
        repo: ENVS.MAIN_REPO,
        path: `_digest/queue/${title.trim().replaceAll(" ", "-")}.mdx`,
        message: `New blog - ${title} by ${capitalizeEveryWord(name.trim())}`,

        // TODO: add github details to database and add to this committer field
        // committer: {},
        // eslint-disable-next-line no-undef
        content: Buffer.from(mdxStr({ ...req.body }), "utf8").toString("base64"),
      }
    );

    res.status(200).json({ done: true });
  } catch (err) {
    // console.log(err);

    switch (authority) {
      // undecided what 2 do yet

      // case ADMIN_AUTHORITY.Regular:
      // case ADMIN_AUTHORITY.Mid:
      // case ADMIN_AUTHORITY.Super:
      default:
        res.json({ failed: true });
    }
  }
};
