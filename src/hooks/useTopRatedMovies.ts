import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTopRatedMovies } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const topRatedMovies = useAppSelector(
    (store: RootState) => store.movies.topRatedMovies
  );

  const getTopRatedMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchTopRatedMovies,
    });
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
