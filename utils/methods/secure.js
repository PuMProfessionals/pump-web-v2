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
  delete user.id;
  delete user.password;

  user.name = capitalizeEveryWord(user.name);
}
