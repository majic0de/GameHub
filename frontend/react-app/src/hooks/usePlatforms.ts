import useData from "./useData";

// Define the structure of a Platform object
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

// Custom hook to fetch platforms
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
