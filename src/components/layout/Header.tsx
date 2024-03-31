import React, { useEffect } from "react";
import { HOME_LITERALS } from "../../constants";
import Button from "../form/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import ProfileSelect from "./ProfileSelect";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../store/slice/userSlice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const userData = useAppSelector((store: RootState) => store.user);
  const selectedProfile = useAppSelector(
    (store: RootState) => store.profiles.selectedProfile
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

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
