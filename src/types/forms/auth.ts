import * as yup from "yup";

export const EmailSchema = yup
  .string()
  .lowercase()
  .email("Invalid email address")
  .required("Email address is required");

export const LoginSchema = yup.object().shape({
  email: EmailSchema,
  password: yup
    .string()
    .required("Password is required")
    // atleast 1 caps letter, 1 small letter and 1 number
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password is not valid"
    ),
});

export const SignupSchema = LoginSchema.shape({
  username: yup.string().required("User Name is required"),
});

export type EmailFormType = yup.InferType<typeof EmailSchema>;
export type LoginFormType = yup.InferType<typeof LoginSchema>;
export type SignupFormType = yup.InferType<typeof SignupSchema>;
