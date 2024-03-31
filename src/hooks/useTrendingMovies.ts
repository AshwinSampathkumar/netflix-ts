import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTrendingMovies } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const trendingMovies = useAppSelector(
    (store: RootState) => store.movies.trendingMovies
  );

  const getTrendingMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchTrending,
    });
    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
