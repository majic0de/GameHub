import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";

const GameGrid = ({ selectedGenre }: { selectedGenre: Genre | null }) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
            <GameCardContainer key={skeletonID}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
