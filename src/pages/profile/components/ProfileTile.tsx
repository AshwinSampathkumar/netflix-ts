import React from "react";
import { ProfileTileProps } from "../../../types";

const ProfileTile: React.FC<ProfileTileProps> = ({ profile, onPressTile }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        className="w-36 h-36 rounded-md object-cover cursor-pointer"
        src={profile?.resource}
        alt="Tile"
        onClick={() => onPressTile(profile)}
      />
      <div className="text-lg text-tile-gray p-1 font-medium ">
        {profile?.name}
      </div>
    </div>
  );
};

export default ProfileTile;
