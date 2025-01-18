import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
// import Emoji from "./Emoji";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Card.Title>
          {game.name}
          {/* <Emoji rating={game.rating_top} /> */}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
