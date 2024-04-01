import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import MovieList from "./MoviesList";

const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    trendingMovies,
    popularMovies,
    movies,
    topRatedMovies,
  } = useAppSelector((store: RootState) => store.movies);

  const data = [
    {
      id: 1,
      title: "Now Playing",
      dataset: nowPlayingMovies,
    },
    {
      id: 2,
      title: "Trending",
      dataset: trendingMovies,
    },
    {
      id: 3,
      title: "Popular",
      dataset: popularMovies,
    },
    {
      id: 4,
      title: "Trending",
      dataset: movies,
    },
    {
      id: 5,
      title: "Upcoming Movies",
      dataset: trendingMovies,
    },
    {
      id: 6,
      title: "Critically acclaimed TV Shows",
      dataset: topRatedMovies,
    },
  ];

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-80 pl-4 md:pl-12 relative z-20">
        {data.map((item) => {
          return (
            <MovieList key={item.id} title={item.title} movies={item.dataset} />
          );
        })}
      </div>
    </div>
  );
};
export default SecondaryContainer;
