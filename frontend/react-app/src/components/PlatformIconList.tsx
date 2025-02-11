import { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaWindows,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    iphone: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: FaApple,
    sega: SiSega,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          <Icon key={platform.id} color="gray.500">
            {IconComponent ? (
              <IconComponent />
            ) : (
              <Text>{platform.name[0]}</Text>
            )}
          </Icon>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
