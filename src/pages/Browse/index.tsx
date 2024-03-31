import React from "react";
import { Header } from "../../components";
import usePopularMovies from "../../hooks/usePopularMovies";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./component/MainContainer";
import SecondaryContainer from "./component/SecondaryContainer";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useTvShows from "../../hooks/useTvShows";
import useMovies from "../../hooks/useMovies";

export const Browse: React.FC = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useTvShows();
  useMovies();

  return (
    <div>
      <Header containerClassName="max-w-full mx-16" />
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};
