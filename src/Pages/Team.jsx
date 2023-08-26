import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Team.css";
import { motion } from "framer-motion";
import University from "./University";

function Team() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },

    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <Box display={"flex"} flexDir={"column"} h={"auto"} w={"auto"}>
      <Box h={"auto"} w={"100%"} display={"flex"}>
        <Stack display={"flex"} alignItems={"center"} w={"100%"}>
          <HStack display={"flex"} textAlign={"center"} mt={"5%"}>
            <Text
              fontSize={{ lg: "50px", md: "50px", base: "40px" }}
              fontWeight="800"
              // fontFamily="Poppins"
              id="heading"
            >
              Meet Our Team
            </Text>
          </HStack>
          <HStack>
            <Text
              mx={4}
              fontSize={{ lg: "3xl", md: "2xl", base: "lg" }}
              color="gray.400"
            >
              Learn from Scientists, research scholars from the top institute in
              the world
            </Text>
          </HStack>
          <motion.div
            whileInView={animations.whileInView}
            initial={animations.twoAndThree}
          >
            <SimpleGrid
              templateRows={{
                lg: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                base: "repeat(4, 1fr)",
              }}
              templateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3, 1fr)",
                base: "repeat(2, 1fr)",
              }}
              gap={6}
              my={"5%"}
              mx={"10%"}
            >
              <University name={"Cambridge University"} />
              <University name={"Harvard University"} />
              <University name={" University of California"} />
              <University name={"ETH Zurich"} />
              <University name={"Max Planck"} />
              <University name={" University of Edinberg"} />
              <University name={" John's Hopkins"} />
              <University name={"Michigon University"} />
              <University name={" University of Illinois"} />
              <University name={"Humboldt University Berlin "} />
              <Text
                fontSize={"4xl"}
                mt={"2em"}
                display={{ base: "none", lg: "block", md: "block" }}
              >
                {" "}
                ..and So on
              </Text>
            </SimpleGrid>
          </motion.div>
        </Stack>
      </Box>
    </Box>
  );
}

export default Team;
