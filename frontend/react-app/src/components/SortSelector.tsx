import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  label: string;
  value: string;
}

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrder: SortOrder | null;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Averate rating" },
  ];
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order By {selectedSortOrder?.label || "Relevence"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder)}
            value={sortOrder.value}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
