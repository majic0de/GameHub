// Import the useData hook for fetching data from an API endpoint
// import useData from "./useData";

// Import the static genres data
import genres from "../data/genres";

// Define the structure of a Genre object
export interface Genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
  image_background: string;
}

// Custom hook to fetch genres
// Uncomment the following line to use the useData hook for fetching genres from an API
// const useGenres = () => useData<Genre>("/genres");

// Temporary custom hook to return static genres data
const useGenres = () => ({ data: genres, isLoading: null, error: null });

export default useGenres;
