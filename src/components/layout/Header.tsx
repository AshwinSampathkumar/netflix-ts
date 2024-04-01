import React from "react";
import { HOME_LITERALS } from "../../constants";
import Button from "../form/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import ProfileSelect from "./ProfileSelect";
import { ROUTES_DATA } from "../../constants/routes";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = useAppSelector((store: RootState) => store.user);
  const selectedProfile = useAppSelector(
    (store: RootState) => store.profiles.selectedProfile
  );

  const onSignin = () => {
    navigate(ROUTES_DATA.login);
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
          className="w-44 mx-auto md:mx-0 cursor-pointer"
          src={HOME_LITERALS.logo}
          alt="logo"
          onClick={() => navigate(ROUTES_DATA.entry)}
        />
        {pathName === ROUTES_DATA.entry && !userData && (
          <Button
            className="w-[74px] h-8"
            label="Sign in"
            type="button"
            onClick={onSignin}
          />
        )}
        {userData && selectedProfile && (
          <div className="flex">
            {/* GPT API key expired. need to recharge if needed */}
            {/* {pathName === ROUTES_DATA.browse && (
              <Button
                label="GPT Search"
                className="px-4 py-1 mr-3"
                onClick={() => navigate(ROUTES_DATA.gptSearch)}
              />
            )} */}
            <ProfileSelect profile={selectedProfile} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
