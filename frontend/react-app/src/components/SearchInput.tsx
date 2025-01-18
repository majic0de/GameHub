import { Box, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box flex={1}>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup startElement={<BsSearch />} width={"100%"}>
          <Input
            placeholder="Search games..."
            borderRadius={20}
            ref={ref}
            variant={"subtle"}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
