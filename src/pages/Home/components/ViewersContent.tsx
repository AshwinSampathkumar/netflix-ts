import React from "react";
import { ViewersContentProps } from "../../../types";

export const ViewersContent: React.FC<ViewersContentProps> = ({ data }) => {
  const { title, description, image, id } = data;
  return (
    <React.Fragment key={title}>
      <div className="bg-divider-gray w-full h-3" />
      <div className="bg-black flex justify-center items-center py-20">
        <div
          className={`max-w-[1200px] flex items-center gap-16 ${
            id - (1 % 2) ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-2xl font-semibold mt-2">{description}</p>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={image} alt="support-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
