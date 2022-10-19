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
