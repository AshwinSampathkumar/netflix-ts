import React from "react";
import { Button, GradientImage, Header, Input } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

export const Auth: React.FC = () => {
  const { authType } = useParams();
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <Header />
      <GradientImage />
      <div className="absolute z-10 top-24 flex justify-center w-full">
        <div className="w-[450px] bg-[rgb(0,0,0,0.8)] py-12 px-16">
          <h1 className="text-[32px] font-bold mb-7">
            {authType === "login" ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={onSubmit}>
            {authType === "signup" && (
              <div className="mb-3">
                <Input placeholder="Username" />
              </div>
            )}
            <div className="mb-3">
              <Input placeholder="Email or phone number" />
            </div>
            <div className="mb-3">
              <Input placeholder="Password" />
            </div>
            <Button
              className="w-full h-10 mb-3"
              label="Sign In"
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
