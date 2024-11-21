import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text>Nav Bar</Text>
        <ColorModeButton>Dark Mode</ColorModeButton>
      </HStack>
    </>
  );
};

export default NavBar;
