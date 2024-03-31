import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer: React.FC = () => {
  const movies = useAppSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );

  if (!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
