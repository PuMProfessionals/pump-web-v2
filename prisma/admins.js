// run manually
// add to gitignore mayb
/* eslint-disable no-undef */

// import { prisma } from ".";
const { prisma } = require(".");
const forge = require("node-forge");

const hashString = (msg, encoding) => {
  /**
   * sha256
   */

  const hashSource = forge.md.sha256.create();
  hashSource.update(msg, encoding);
  return hashSource.digest().toHex();
};

const MIN_PWD_LEN = 2;
const ADMIN_AUTHORITY = Object.freeze({
  Super: 3,
  Mid: 2,
  Regular: 1,
});

const credErrStr = (cred, dataType) => {
  return `Credential: ${cred} not ${dataType}`;
};
const createAccount = (
  name,
  password,
  authority = ADMIN_AUTHORITY.Regular,
  email = null
) => {
  for (const cred of [name, password]) {
    if (typeof cred !== "string") {
      throw new Error(credErrStr(cred, "string"));
    }
  }

  for (const cred of [authority]) {
    if (typeof cred !== "number") {
      throw new Error(credErrStr(cred, "number"));
    }
  }

  if (!Object.values(ADMIN_AUTHORITY).includes(authority)) {
    throw new Error("inval pow");
  }

  if (password.length < MIN_PWD_LEN) {
    // eslint-disable-next-line no-console
    console.warn(`pwd <${MIN_PWD_LEN} c`);
  }

  return {
    name: name.toLowerCase(),
    email: email,
    password: hashString(password),
    authority,
  };
};

const ADMINS = [
  createAccount("gOOd Name", "pwd"),
  createAccount("somebody qwe", "goodpas"),
  createAccount("nice nice", "casing dont mattr"),
];
// console.log(ADMINS);

async function seedAdmins() {
  for (const admin of ADMINS) {
    const user = await prisma.adminUser.create({
      data: { ...admin },
    });

    // console.log(user);
  }
}
seedAdmins();
