import { prisma } from "../../../prisma/index";
import { hashString } from "../../../utils/methods/general";
import { setCookie } from "cookies-next";
import { COOKIE_KEYS } from "../../../utils/constants";
import { createJWT, sanitizeClient } from "../../../utils/methods/secure";

export default async (req, res) => {
  const { name, password } = req.body;

  const user = await prisma.adminUser.findUnique({
    where: {
      name: name.toLowerCase(),
    },
  });

  if (user == null || hashString(password) !== user.password) {
    res.status(200).json({ wrongCombination: true });
  } else {
    const accessToken = createJWT({ clientId: user.id });
    setCookie(COOKIE_KEYS.AccessToken, accessToken, {
      req,
      res,
      maxAge: 60 * 60 * 24 * 7, // in seconds
      httpOnly: true,
    });
    sanitizeClient(user);

    res.status(200).json({ loggedIn: true, user });
  }
};
