import { prisma } from "../../../prisma/index";
import { hashString } from "../../../utils/methods/general";
import { setCookie } from "cookies-next";

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
    // console.log("wtdf");
    setCookie("key", "value", {});
    // console.log("wtdf");

    res.status(200).json({ loggedIn: true });
  }
};
