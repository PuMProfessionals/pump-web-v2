import { prisma } from "../../../prisma/index";
import { validateToken } from "../../../middlewares/auth";

export default async (req, res) => {
  validateToken(req, res);

  /**
   * asdjkh
   *
   * stuff
   */

  if (req.user == null) {
    return res.json({ guestUser: true });
  }

  const user = await prisma.adminUser.findUnique({
    where: {
      id: req.user.id,
    },
  });
  delete user.id;
  delete user.password;

  res.status(200).json({ loggedIn: true, user });
};
