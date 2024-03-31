import * as React from "react";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import { HOME_LITERALS } from "../../constants";
import { Header } from "../../components";
import { UnlimitedMovies } from "./components/UnlimitedMovies";
import { ViewersContent } from "./components/ViewersContent";
import { FAQ } from "./components/FAQ";

export const Home: React.FC = () => {
  const randomBgIndex = randomNumberGenerator(0, 2);

  return (
    <div className="relative text-white bg-black">
      <Header />
      <div className="relative">
        <img
          className="w-full h-[700px] object-cover"
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
      <UnlimitedMovies />
      {HOME_LITERALS?.viewersContent?.map((item, i) => {
        return <ViewersContent data={item} />;
      })}
      <div className="bg-divider-gray w-full h-3" />
      <FAQ />
    </div>
  );
};
