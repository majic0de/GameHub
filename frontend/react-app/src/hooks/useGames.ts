import { GameQuery } from "@/App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

// Define the structure of a Game object
export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// Custom hook to fetch games based on the game query
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games", // API endpoint to fetch games
    {
      params: {
        genres: gameQuery.genre?.id, // Filter by genre ID
        platforms: gameQuery.platform?.id, // Filter by platform ID
        ordering: gameQuery.sortOrder?.value, // Sort order
        search: gameQuery.searchText, // Search text
      },
    },
    [gameQuery] // Dependencies array for useEffect
  );

export default useGames;
