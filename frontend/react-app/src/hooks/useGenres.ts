import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: null, error: null });

export default useGenres;
