import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        gap={"10px"}
      >
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((skeletonID) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeletonID} />
            </GameCardContainer>
          ))}

        {games.map((game) => {
          return (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
