import React, { useEffect, useState } from "react";
import { HOME_LITERALS } from "../../constants";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import { GradientImageProps } from "../../types";

const GradientImage: React.FC<GradientImageProps> = ({ height = "" }) => {
  const [bgIndex, setBgIndex] = useState<number>(-1);

  useEffect(() => {
    const randomBgIndex = randomNumberGenerator(0, 2);
    setBgIndex(randomBgIndex);
  }, []);
  return (
    <div className="relative">
      <img
        className={`w-full ${height || "h-screen"} object-cover`}
        src={HOME_LITERALS?.bgUrl[bgIndex]}
        alt="logo"
      />
      <div
        className="bg-gradient-black absolute top-0 right-0 bottom-0 left-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>
    </div>
  );
};

export default GradientImage;
