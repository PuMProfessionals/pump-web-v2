import { prisma } from "../../../prisma/index";
import { validateToken } from "../../../middlewares/auth";
import { sanitizeClient } from "../../../utils/methods/secure";

export default async (req, res) => {
  validateToken(req, res);

  if (req.user == null) {
    return res.json({ guestUser: true });
  }

  const user = await prisma.adminUser.findUnique({
    where: {
      id: req.user.id,
    },
  });
  sanitizeClient(user);

  res.status(200).json({ loggedIn: true, user });
};
