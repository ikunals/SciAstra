import {
  Avatar,
  Box,
  Button,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import "./Team.css";
import Profile from "./Profile";

function Mentors() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <Box display={"flex"} flexDir={"column"} h={"auto"} w={"auto"}>
      <Box h={"auto"} w={"100%"}>
        <Stack display={"flex"} alignItems={"center"} w={"100%"}>
          <HStack display={"flex"} textAlign={"center"} mt={"5%"}>
            <Text
              fontSize={{ lg: "50px", md: "50px", base: "35px" }}
              fontWeight="800"
              // fontFamily="Poppins"
              id="heading"
            >
              Meet Your Mentors
            </Text>
          </HStack>

          <motion.div>
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
              gap={{ lg: "10", base: "0" }}
              my={"5%"}

              // mx={"10%"}
            >
              <Profile
                src={"https://bit.ly/dan-abramov"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/ryan-florence"}
                name={"Ryan Florence"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/kent-c-dodds"}
                name={"John Doe"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/prosper-baba"}
                name={"Prosper Otemuyiwa"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/code-beast"}
                name={"Christian Nwamba"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/sage-adebayo"}
                name={"Segun Adebayo"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/prosper-baba"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/dan-abramov"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/dan-abramov"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/ryan-florence"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/code-beast"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
              <Profile
                src={"https://bit.ly/sage-adebayo"}
                name={"Dan Abrahmov"}
                university={"University of California"}
              />
            </SimpleGrid>
          </motion.div>
        </Stack>
      </Box>
      <Box>
        <HStack
          mx={{ lg: "20", base: "20" }}
          fontSize={{ base: "2xl", lg: "4xl", md: "4xl" }}
          color={"purple.600"}
          fontWeight={"bold"}
        >
          <Text>Mentor & Advisor</Text>
        </HStack>
        <SimpleGrid
          templateRows="repeat(1, 1fr)"
          templateColumns={{
            lg: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={10}
          //   my={"5%"}
          // mx={"10%"}
        >
          <Stack
            p={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"blue.600"}
            fontWeight={"bold"}
            fontFamily={"'Bitter', serif;"}
          >
            <Avatar size={"2xl"} name="D R" />
            <Text>Dr Omkar</Text>
            <Text>Principle Project Scientist</Text>
            <Text>IIT-Madras</Text>
          </Stack>
          <Stack
            p={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"blue.600"}
            fontWeight={"bold"}
            fontFamily={"'Bitter', serif;"}
          >
            <Avatar size={"2xl"} name="Akhil Tripathi" />
            <Text>Akhil Tripathi</Text>
            <Button color={"blue.600"}>Message him now</Button>
          </Stack>
          <Stack
            p={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"blue.600"}
            fontWeight={"bold"}
            fontFamily={"'Bitter', serif;"}
          >
            <Avatar size={"2xl"} name="Vivek Dwivedi" />
            <Text>Vivek Dwivedi</Text>
            <Button color={"blue.600"}>Message him now</Button>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Mentors;
