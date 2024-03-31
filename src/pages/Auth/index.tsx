import React from "react";
import { Button, GradientImage, Header, Input } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import {
  LoginFormType,
  LoginSchema,
  SignupFormType,
  SignupSchema,
} from "../../types/forms/auth";
import { useFormik } from "formik";

export const Auth: React.FC = () => {
  const { authType } = useParams();
  const navigate = useNavigate();

  const onLoginSubmit = (payload: LoginFormType | SignupFormType) => {
    if (payload) {
      // console.log("inside onLoginSubmit payload", payload);
    }
  };

  const onSignupSubmit = (payload: LoginFormType | SignupFormType) => {
    if (payload) {
      // console.log("inside onSignupSubmit payload", payload);
    }
  };

  const loginFormik = useFormik<LoginFormType>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onLoginSubmit,
    validationSchema: LoginSchema,
  });
  const signupFormik = useFormik<SignupFormType>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: onSignupSubmit,
    validationSchema: SignupSchema,
  });

  const formik: any = {
    login: loginFormik,
    signup: signupFormik,
  };
  if (!authType) return null;

  return (
    <div className="relative">
      <Header />
      <GradientImage />
      <div className="absolute z-10 top-24 flex justify-center w-full">
        <div className="w-[450px] bg-[rgb(0,0,0,0.8)] pt-12 pb-24 px-16">
          <h1 className="text-[32px] font-bold mb-7">
            {authType === "login" ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik[authType].handleSubmit(e);
            }}
          >
            {authType === "signup" && (
              <div className="mb-3">
                <Input
                  placeholder="User Name"
                  name="username"
                  value={formik[authType]?.values.username}
                  error={
                    formik[authType]?.touched.username &&
                    formik[authType]?.errors.username
                  }
                  onChange={formik[authType]?.handleChange}
                  onBlur={formik[authType]?.handleBlur}
                />
              </div>
            )}
            <div className="mb-3">
              <Input
                placeholder="Email or phone number"
                name="email"
                value={formik[authType]?.values.email}
                error={
                  formik[authType]?.touched.email &&
                  formik[authType]?.errors.email
                }
                onChange={formik[authType]?.handleChange}
                onBlur={formik[authType]?.handleBlur}
              />
            </div>
            <div className="mb-3">
              <Input
                placeholder="Password"
                name="password"
                value={formik[authType]?.values.password}
                error={
                  formik[authType]?.touched.password &&
                  formik[authType]?.errors.password
                }
                onChange={formik[authType]?.handleChange}
                onBlur={formik[authType]?.handleBlur}
              />
            </div>
            <Button
              className="w-full h-10 mb-3"
              label={authType === "login" ? "Sign In" : "Sign up"}
              type="submit"
            />
          </form>
          <p>
            {authType === "login" ? (
              <>
                New to Netflix?{" "}
                <strong
                  className="cursor-pointer"
                  onClick={() => navigate("/auth/signup")}
                >
                  Sign up now.
                </strong>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <strong
                  className="cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Sign in now.
                </strong>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
