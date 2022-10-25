import { prisma } from "../../../prisma/index";
import { hashString } from "../../../utils/methods/general";
import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";

export default async (req, res) => {
  /**
   * asdjkh
   *
   * stuff
   */

  const { name, password } = req.body;

  const user = await prisma.adminUser.findUnique({
    where: {
      name: name.toLowerCase(),
    },
  });

  if (user != null && hashString(password) !== user.password) {
    res.status(200).json({ wrongCombination: true });
  } else {
    setCookie("server-key", "value", { req, res, maxAge: 60 * 60 * 24 });
    getCookie("key", { req, res });
    getCookies({ req, res });
    deleteCookie("key", { req, res });

    res.status(200).json({ loggedIn: true });
  }
};
