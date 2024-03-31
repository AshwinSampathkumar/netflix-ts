import React from "react";
import { HOME_LITERALS } from "../../constants";
import Button from "../form/Button";

const Header: React.FC = () => {
  const onSignin = () => {};
  return (
    <header className="absolute z-10 w-full flex justify-center">
      <div className="flex w-full justify-between items-center max-w-[1200px]">
        <img
          className="w-44 mx-auto md:mx-0"
          src={HOME_LITERALS.logo}
          alt="logo"
        />
        <Button className="w-[74px] h-8" label="Sign in" onClick={onSignin} />
      </div>
    </header>
  );
};

export default Header;
