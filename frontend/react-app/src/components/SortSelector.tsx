import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Sort By
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="1">Relevance</MenuItem>
        <MenuItem value="2">Date added</MenuItem>
        <MenuItem value="3">Name</MenuItem>
        <MenuItem value="4">Release date</MenuItem>
        <MenuItem value="5">Popularity</MenuItem>
        <MenuItem value="6">Averate rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
