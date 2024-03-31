import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addNowPlayingMovies } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const nowPlayingMovies = useAppSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchNowPlaying,
    });
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
