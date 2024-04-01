import React from "react";
import { Button, Input } from "../../../components";
import { useNavigate } from "react-router-dom";
import { ROUTES_DATA } from "../../../constants/routes";

export const UnlimitedMovies = () => {
  const navigate = useNavigate();

  const onGetStarted = () => {
    navigate(ROUTES_DATA.signup);
  };

  return (
    <div className="absolute z-10 top-[300px] w-full text-center">
      <p className="text-5xl font-bold">Unlimited movies, TV shows and more</p>
      <p className="text-2xl font-semibold mt-4">
        Watch anywhere. Cancel anytime.
      </p>
      <p className="text-xl font-semibold mt-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex justify-center items-center mt-4">
        <div className="w-[365px]">
          <Input placeholder="Email address" value="" readOnly />
        </div>
        <Button
          className="w-[210px] h-14 text-2xl font-bold ml-2"
          label="Get Started"
          type="button"
          onClick={onGetStarted}
        />
      </div>
    </div>
  );
};
