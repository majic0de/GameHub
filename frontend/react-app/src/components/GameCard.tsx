import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card.Root overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
