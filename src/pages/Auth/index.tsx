import React, { useEffect, useState } from "react";
import { Button, GradientImage, Header, Input } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import {
  LoginFormType,
  LoginSchema,
  SignupFormType,
  SignupSchema,
} from "../../types/forms/auth";
import { useFormik } from "formik";
import { signin, signup } from "../../utils/firebaseActions";
import { addUser } from "../../store/slice/userSlice";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES_DATA } from "../../constants/routes";

export const Auth: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { user } = useAppSelector((store: RootState) => store);
  const { authType } = useParams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.uid) {
      navigate(ROUTES_DATA.profile);
    }
  }, [user]);

  const onLoginSubmit = async (payload: LoginFormType) => {
    setErrorMessage(null);
    if (authType && formik[authType].isValid) {
      const { email, password } = payload;
      const res: any = await signin(email, password);
      if (!res?.error) {
        dispatch(addUser(res?.data));
      } else {
        setErrorMessage(res?.data);
      }
    }
  };

  const onSignupSubmit = (payload: SignupFormType) => {
    setErrorMessage(null);
    if (authType && formik[authType].isValid) {
      const { username, email, password } = payload;
      const res: any = signup(username, email, password);
      if (!res?.error) {
        navigate(ROUTES_DATA.login);
      } else {
        setErrorMessage(res?.data);
      }
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
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <p>
            {authType === "login" ? (
              <>
                New to Netflix?{" "}
                <strong
                  className="cursor-pointer"
                  onClick={() => {
                    setErrorMessage(null);
                    navigate(ROUTES_DATA.signup);
                  }}
                >
                  Sign up now.
                </strong>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <strong
                  className="cursor-pointer"
                  onClick={() => {
                    setErrorMessage(null);
                    navigate(ROUTES_DATA.login);
                  }}
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
