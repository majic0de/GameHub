import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  let color = score > 50 ? "green" : "red";
  return <Badge colorPalette={color}>{score}</Badge>;
};

export default CriticScore;
