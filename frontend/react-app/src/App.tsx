import { Box, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { SortOrder } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// Define the structure of the game query state
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
  searchText: string | null;
}

function App() {
  // Initialize the game query state
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      // Define the grid layout for different screen sizes
      templateAreas={{
        base: `"nav" "main"`, // Layout for small screens
        lg: `"nav nav" "aside main"`, // Layout for large screens
      }}
      templateColumns={{
        base: "1fr", // Single column layout for small screens
        lg: "200px 1fr", // Two-column layout for large screens
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          // Update the game query state with the search text
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area={"aside"} hideBelow="lg" paddingX={5}>
        <GenreList
          // Pass the selected genre and handler to update the game query state
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"} paddingX={2}>
        <Box boxShadow={"md"} borderRadius={10} padding={5}>
          <GameHeading gameQuery={gameQuery} />
          <Stack direction={"row"} gap={5} marginBottom={5}>
            <Flex>
              <Box marginRight={1}>
                <PlatformSelector
                  // Pass the selected platform and handler to update the game query state
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                  selectedPlatform={gameQuery.platform}
                />
              </Box>
              <Box>
                <SortSelector
                  // Pass the selected sort order and handler to update the game query state
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                  selectedSortOrder={gameQuery.sortOrder}
                />
              </Box>
            </Flex>
          </Stack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
