import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTrailerVideo } from "../store/slice/moviesSlice";
import { axiosBaseQuery } from "../axios";
import { MovieTrailerType } from "../types";

const useMovieTrailer = (movieId: number | string) => {
  const dispatch = useAppDispatch();

  const trailerVideo = useAppSelector(
    (store: RootState) => store.movies.trailerVideo
  );

  const getMovieVideos = async () => {
    const { data }: any = await axiosBaseQuery()({
      url: "/movie/" + movieId + "/videos?language=en-US",
    });
    const filterData = data.results.filter(
      (video: MovieTrailerType) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
