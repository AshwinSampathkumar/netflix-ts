import * as React from "react";
import { HOME_LITERALS } from "../../constants";
import { GradientImage, Header } from "../../components";
import { ViewersContentDataProps } from "../../types";
import { UnlimitedMovies } from "./components/UnlimitedMovies";
import { ViewersContent } from "./components/ViewersContent";
import { FAQ } from "./components/FAQ";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { ROUTES_DATA } from "../../constants/routes";

export const Home: React.FC = () => {
  const userData = useAppSelector((store: RootState) => store.user);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (userData?.uid) {
      navigate(ROUTES_DATA.profile);
    }
  }, [userData]);

  return (
    <div className="relative bg-black">
      <Header />
      <GradientImage height="h-[700px]" />
      <UnlimitedMovies />
      {HOME_LITERALS?.viewersContent?.map((item: ViewersContentDataProps) => {
        return <ViewersContent data={item} key={item.id} />;
      })}
      <div className="bg-divider-gray w-full h-3" />
      <FAQ />
    </div>
  );
};
