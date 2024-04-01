import React, { useEffect } from "react";
import { Header } from "../../components";
import usePopularMovies from "../../hooks/usePopularMovies";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./component/MainContainer";
import SecondaryContainer from "./component/SecondaryContainer";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useTvShows from "../../hooks/useTvShows";
import useMovies from "../../hooks/useMovies";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

export const Browse: React.FC = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useTvShows();
  useMovies();

  const userData = useAppSelector((store: RootState) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};
