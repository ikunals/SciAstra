import React from "react";
import { Box, Icon, Image } from "@chakra-ui/react";
import logo from "../assets/sciastralogo.png";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  return (
    <div>
      <Box h={"6em"} display={"flex"}>
        <Image src={logo} borderRadius={"50%"} h="80%" ml={"5%"} my={"0.8%"} />
        <Icon
          as={BiMenuAltRight}
          ml={{ lg: "80%", base: "60%", md: "75%" }}
          boxSize={"4em"}
          my={"0.8%"}
          cursor={"pointer"}
        />
      </Box>
    </div>
  );
}

export default Header;
