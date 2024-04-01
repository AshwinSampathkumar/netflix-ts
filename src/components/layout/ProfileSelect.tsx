import { ProfileSelectProps } from "../../types";
import IconDown from "../../assets/images/icon-down.png";
import { useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { ROUTES_DATA } from "../../constants/routes";
import { removeUser } from "../../store/slice/userSlice";
import { setSelectedProfile } from "../../store/slice/profileSlice";
import { useAppDispatch } from "../../store/hooks";
import useListenToOutsideClick from "../../hooks/useListenToOutsideClicks";

const ProfileSelect: React.FC<ProfileSelectProps> = ({ profile }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const blurRef = useRef(null);

  const [show, toggleDropdown] = useState<boolean>(false);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(setSelectedProfile(null));
        navigate(ROUTES_DATA.entry);
      })
      .catch((error) => {
        // console.log("error", error);
      });
  };

  useListenToOutsideClick(blurRef, () => toggleDropdown(false));

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        ref={blurRef}
        onClick={() => toggleDropdown(!show)}
      >
        <img
          className="w-8 h-8 rounded-sm"
          src={profile?.resource}
          alt="profile"
        />
        <img className="w-3 h-3 ml-2" src={IconDown} alt="down" />
      </div>
      {show && (
        <div
          className="absolute top-12 -left-14 bg-white bg-opacity-25 px-4 py-2 text-white cursor-pointer"
          onClick={onLogout}
        >
          Sign out
        </div>
      )}
    </div>
  );
};

export default ProfileSelect;
