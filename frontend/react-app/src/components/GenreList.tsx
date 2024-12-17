import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginY={2}>Genres</Heading>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={1} listStyle={"none"}>
            <HStack>
              <Image
                borderRadius="5px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
                boxSize={"32px"}
              />
              <Button
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
                textAlign="left"
                alignContent="left"
                variant={"plain"}
                paddingX={1}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
