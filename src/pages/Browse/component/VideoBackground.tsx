import { MovieTrailerType, VideoBackgroundType } from "../../../types";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground: React.FC<VideoBackgroundType> = ({ movieId }) => {
  const trailerVideo: MovieTrailerType | null = useAppSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
