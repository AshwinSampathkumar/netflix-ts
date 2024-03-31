import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTvShows } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import requests from "../constants/requests";

const useTvShows = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const tvShows = useAppSelector((store: RootState) => store.movies.tvShows);

  const getTvShowsMovies = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: requests.fetchTVShows,
    });
    dispatch(addTvShows(data.results));
  };

  useEffect(() => {
    !tvShows && getTvShowsMovies();
  }, []);
};

export default useTvShows;
