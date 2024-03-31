import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addMovies } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const useMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const movies = useAppSelector((store: RootState) => store.movies.movies);

  const getMoviesMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchMovies,
    });
    dispatch(addMovies(data.results));
  };

  useEffect(() => {
    !movies && getMoviesMovies();
  }, []);
};

export default useMovies;
