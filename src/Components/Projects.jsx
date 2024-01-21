import { Box, Stack, Typography, Paper, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import sanityClient from "../Client";

function Projects() {
  const [projects, setProjects] = useState("");

  useEffect(() => {}, []);

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
