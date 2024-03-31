import { MoviesListProps, MoviesType } from "../../../types";
import MovieCard from "./MovieCard";

const MovieList: React.FC<MoviesListProps> = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex p-5 overflow-y-hidden">
          {movies?.map((movie: MoviesType) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
