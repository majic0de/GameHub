import useGenres, { Genre } from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error } = useGenres();

  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item key={genre.id}>{genre.name}</List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
