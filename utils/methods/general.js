import forge from "node-forge";

export function capitalizeEveryWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function objectFill(obj, fillWith = "") {
  /**
   * Clear all values in an object
   *
   * objectFill({ a: 1, b: 2 }, "a") // { a: "a", b: "a" }
   */

  return Object.fromEntries(Object.entries(obj).map(([key]) => [key, fillWith]));
}

export function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomChoice(arraylike) {
  return arraylike[randomInt(arraylike.length - 1)];
}

const lcLetsNumbs = "abcdefghijklmnopqrstuvwxyz0123456789";
export function simpleUUID(length) {
  return Array.from({ length }, () => randomChoice(lcLetsNumbs)).join("");
}

export function lowercaseDashString(str) {
  return str.toLowerCase().trim().replaceAll(" ", "-");
}

export function hashString(msg, encoding) {
  /**
   * sha256
   */

  const hashSource = forge.md.sha256.create();
  hashSource.update(msg, encoding);
  return hashSource.digest().toHex();
}
