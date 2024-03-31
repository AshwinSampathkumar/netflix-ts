import * as React from "react";
import { HOME_LITERALS } from "../../constants";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import { GradientImageProps } from "../../types";

const GradientImage: React.FC<GradientImageProps> = ({ height }) => {
  const randomBgIndex = randomNumberGenerator(0, 2);
  return (
    <div className="relative">
      <img
        className={`w-full ${height} object-cover`}
        src={HOME_LITERALS?.bgUrl[randomBgIndex]}
        alt="logo"
      />
      <div
        className="bg-[rgb(0 0 0 / 40%)] absolute top-0 right-0 bottom-0 left-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>
    </div>
  );
};

export default GradientImage;
