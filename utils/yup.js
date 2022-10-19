import * as yup from "yup";

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
