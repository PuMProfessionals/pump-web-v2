// only temporary
/* eslint-disable no-console */
import { verify } from "jsonwebtoken";
import { COOKIE_KEYS } from "../utils/constants";

export function validateToken(req, res) {
  const { [COOKIE_KEYS.AccessToken]: accessToken } = req.cookies;
  console.log(accessToken);

  if (accessToken != null) {
    try {
      // eslint-disable-next-line no-undef
      const decodedToken = verify(accessToken, process.env.JWT_SECRET_KEY);
      console.log("decodedToken", decodedToken);

      req.user = {
        id: decodedToken.clientId,
      };
      console.log(req.user);
    } catch (err) {
      console.log("thee", err);
      console.log("err done");
    }
  }
}
