import { useState } from "react";
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Button, Input } from "../../../components";
import { addGptMovieResult } from "../../../store/slice/gptSlice";
import lang from "../../../constants/languages";
import { axiosBaseQuery } from "../../../axios";
import openai from "../../../utils/openai";
import { GPTSearchBarProps } from "../../../types";

const GptSearchBar: React.FC<GPTSearchBarProps> = ({ onError }) => {
  const dispatch = useAppDispatch();
  const langKey = useAppSelector((store: RootState) => store.config.lang);

  const [searchText, setSearchText] = useState<string>("");

  // search movie in TMDB
  const searchMovieTMDB = async (movie: string) => {
    const data: any = await axiosBaseQuery()(
      movie + "&include_adult=false&language=en-US&page=1"
    );

    return data.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText +
      ".Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Chittha, Bahubali, Don, Uthama villain, Raavanan";

    console.log("inside openain", openai);
    const gptResults: any = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      onError();
      dispatch(addGptMovieResult({ movieNames: [], movieResults: [] }));
    }

    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie: string) =>
      searchMovieTMDB(movie)
    );

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          value={searchText}
          onChange={(e: any) => setSearchText(e.target.value)}
        />
        <Button
          className="col-span-3 m-4 py-2 px-4"
          label={lang[langKey].search}
          onClick={handleGptSearchClick}
        />
      </form>
    </div>
  );
};
export default GptSearchBar;
