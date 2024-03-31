import * as React from "react";
import ProfileTile from "./components/ProfileTile";
import { PROFILE_DATA } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { ProfileTileType, ProviderDataEntity } from "../../types";
import { useNavigate } from "react-router-dom";
import { setSelectedProfile } from "../../store/slice/profileSlice";
import ProfileIcon5 from "../../assets/svgs/profile-icon-5.svg";
import { Header } from "../../components";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector((store: RootState) => store.user);

  const onPressTile = (payload: ProfileTileType) => {
    dispatch(setSelectedProfile(payload));
    navigate("/browse");
  };

  if (!userData?.providerData?.length) return null;
  const ProfileTileData = userData?.providerData.map(
    (item: ProviderDataEntity) => {
      return {
        id: item.uid,
        name: item.displayName,
        resource: ProfileIcon5,
      };
    }
  );
  const ProfileData = [...ProfileTileData, ...PROFILE_DATA];

  return (
    <>
      <Header />
      <div className="bg-coal-black flex flex-col h-screen w-full">
        <div className="h-1/3 flex justify-center items-end">
          <div className="text-6xl p-4">{"Who's watching?"}</div>
        </div>
        <div className="h-[35%] flex justify-center items-start gap-6">
          {ProfileData.map((profile: ProfileTileType) => {
            return (
              <ProfileTile
                key={profile?.id}
                profile={profile}
                onPressTile={onPressTile}
              />
            );
          })}
        </div>

        <div className="flex justify-center items-center">
          <div className="border border-coal-gray text-coal-gray text-lg px-8 py-2 cursor-pointer">
            Manage Profiles
          </div>
        </div>
      </div>
    </>
  );
};
