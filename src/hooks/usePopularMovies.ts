import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store";
import { addPopularMovies } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const popularMovies = useAppSelector(
    (store: RootState) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchPopularMovies,
    });
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
