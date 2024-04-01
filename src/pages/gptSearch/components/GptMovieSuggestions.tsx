import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import MovieList from "../../browse/component/MoviesList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useAppSelector(
    (store: RootState) => store.gpt
  );

  if (!movieNames.length || !movieResults.length) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieName: string, index: number) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
