import * as yup from "yup";
import { BLOG_METADATA_MAP } from "./constants";

const MIN_PASSWORD_LENGTH = 5;
const MAX_PASSWORD_LENGTH = 1000;

const NAME_YUP = yup.string().required("Name is required");
const PASSWORD_YUP = yup
  .string()
  .required("Password is required")
  .min(
    MIN_PASSWORD_LENGTH,
    `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
  )
  .max(
    MAX_PASSWORD_LENGTH,
    `Password must be less than ${MAX_PASSWORD_LENGTH} characters`
  );

export const ADMIN_LOGIN_SCHEMA = yup.object().shape({
  name: NAME_YUP,
  password: PASSWORD_YUP,
});

export const ADMIN_BLOG_SCHEMA = yup.object().shape(
  BLOG_METADATA_MAP.reduce((acc, meta) => {
    // don't add tags since they'll be handled separately
    if (["tags"].includes(meta.code)) return acc;

    return {
      ...acc,
      [meta.code]: yup.string().required(`${meta.name} is a required field`),
    };
  }, {})
);
