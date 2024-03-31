import React from "react";
import { ProfileTileProps } from "../../../types";

const ProfileTile: React.FC<ProfileTileProps> = ({
  title,
  imageSource,
  onPressTile,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        className="w-36 h-36 rounded-md object-cover cursor-pointer"
        src={imageSource}
        alt="Tile"
        onClick={() => onPressTile({ title, imageSource })}
      />
      <div className="text-lg text-tile-gray p-1 font-medium ">{title}</div>
    </div>
  );
};

export default ProfileTile;
