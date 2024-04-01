import React from "react";
import { HOME_LITERALS } from "../../constants";
import Button from "../form/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import ProfileSelect from "./ProfileSelect";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = useAppSelector((store: RootState) => store.user);
  const selectedProfile = useAppSelector(
    (store: RootState) => store.profiles.selectedProfile
  );

  const onSignin = () => {
    navigate("/auth/login");
  };

  const pathName = location?.pathname;

  return (
    <header className="absolute z-10 w-full flex justify-center">
      <div
        className={`flex w-full justify-between items-center max-w-[1200px] ${
          pathName === "/browse" ? "max-w-full mx-16" : ""
        }`}
      >
        <img
          className="w-44 mx-auto md:mx-0"
          src={HOME_LITERALS.logo}
          alt="logo"
        />
        {pathName === "/" && !userData && (
          <Button
            className="w-[74px] h-8"
            label="Sign in"
            type="button"
            onClick={onSignin}
          />
        )}
        {userData && selectedProfile && (
          <ProfileSelect profile={selectedProfile} />
        )}
      </div>
    </header>
  );
};

export default Header;
