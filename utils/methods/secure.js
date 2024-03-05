import { sign } from "jsonwebtoken";
import { ENVS } from "../../lib/envs";
import { capitalizeEveryWord } from "./general";

export function createJWT(client) {
  // eslint-disable-next-line no-undef
  const accessToken = sign(client, ENVS.JWT_SECRET_KEY, {
    noTimestamp: true,
  });

  return accessToken;
}

export function sanitizeClient(user) {
  /**
   * Remove sensitive user data from user queries.
   * Used before sending a user object to the client.
   */
  
  delete user.id;
  delete user.password;

  user.name = capitalizeEveryWord(user.name);
}
