import {
  Avatar,
  Card,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import "./University.css";

function Profile(props) {
  return (
    <Stack>
      <Stack
        p={10}
        display={"flex"}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"blue.600"}
        fontWeight={"bold"}
        fontFamily={"'Bitter', serif;"}
      >
        <Avatar size={"2xl"} name="Segun Adebayo" src={props.src} />
        <Text>{props.name}</Text>
        <Text>{props.university}</Text>
      </Stack>
    </Stack>
  );
}

export default Profile;
