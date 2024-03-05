import { prisma } from "../../../prisma/index";
import { validateToken } from "../../../middlewares/auth";
import { sanitizeClient } from "../../../utils/methods/secure";

function _notifyGuestUser(res) {
  res.json({ guestUser: true });
}

export default async (req, res) => {
  validateToken(req, res);

  if (req.user == null) return _notifyGuestUser(res);

  const user = await prisma.adminUser.findUnique({
    where: {
      id: req.user.id,
    },
  });
  if (user == null) return _notifyGuestUser(res);

  // format user info before sending information to client
  sanitizeClient(user);

  res.status(200).json({ loggedIn: true, user });
};
