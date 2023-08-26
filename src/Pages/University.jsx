import { Card, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
// import "./University.css";

function University(props) {
  return (
    <>
      <Card id="card" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
        <CardHeader textAlign={"center"}>
          <Heading
            color={"blue.600"}
            size={{ lg: "xl", base: "lg", md: "xl" }}
            fontFamily={""}
          >
            {" "}
            {props.name}
          </Heading>
        </CardHeader>
      </Card>
    </>
  );
}

export default University;
