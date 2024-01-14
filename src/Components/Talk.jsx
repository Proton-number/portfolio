import React from "react";
import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

function Talk() {
  return (
    <ParallaxLayer
      offset={1}
      speed={0.6}
      factor={1.5}
      style={{ backgroundColor: "green" }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 55 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 1.4 },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: { xs: "80%", lg: "50%" },
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          I am a frontend developer who likes to build cool stuff and connect
          people through it.{" "}
        </Typography>
      </Box>
    </ParallaxLayer>
  );
}

export default Talk;
