import { Box } from "@mui/material";
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

function Projects() {
  return (
    <ParallaxLayer
      offset={4}
      speed={1.4}
      // factor={3}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Box>projects..</Box>
    </ParallaxLayer>
  );
}

export default Projects;
