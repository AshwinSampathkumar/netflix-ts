import { IMG_CDN_URL } from "../../../constants";
import { MovieCardProps } from "../../../types";

const MovieCard: React.FC<MovieCardProps> = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <img
      className="block w-36 max-h-[250px] h-auto md:w-48 pr-4 cursor-pointer object-contain transition-transform duration-[450ms] hover:scale-[1.08]"
      alt="Movie Card"
      src={IMG_CDN_URL + posterPath}
    />
  );
};
export default MovieCard;
