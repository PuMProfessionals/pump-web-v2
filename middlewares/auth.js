import { verify } from "jsonwebtoken";
import { ENVS } from "../lib/envs";
import { COOKIE_KEYS } from "../utils/constants";

export function validateToken(req, res) {
  const { [COOKIE_KEYS.AccessToken]: accessToken } = req.cookies;

  if (accessToken != null) {
    try {
      // eslint-disable-next-line no-undef
      const decodedToken = verify(accessToken, ENVS.JWT_SECRET_KEY);

      req.user = {
        id: decodedToken.clientId,
      };
    } catch (err) {
      // console.log("thee", err);
      // console.log("err done");
    }
  }
}
