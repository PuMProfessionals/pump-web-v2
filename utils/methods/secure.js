import { sign } from "jsonwebtoken";
import { fakeTSObjCheck } from "./debug";

export function createJWT(client) {
  fakeTSObjCheck(client, ["clientId"]);

  // eslint-disable-next-line no-undef
  const accessToken = sign(client, process.env.JWT_SECRET_KEY, {
    noTimestamp: true,
  });

  return accessToken;
}
