import React from "react";
import { Button, Input } from "../../../components";

export const UnlimitedMovies = () => {
  const onGetStarted = () => {};

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
        <Input className="w-[365px]" placeholder="Email address" />
        <Button
          className="w-[210px] h-14 text-2xl font-bold ml-2"
          label="Get Started"
          onClick={onGetStarted}
        />
      </div>
    </div>
  );
};
