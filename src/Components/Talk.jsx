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
  const font = createTheme({
    typography: {
      fontFamily: "Raleway, sans-serif",
    },
  });
  return (
    <ParallaxLayer
      offset={1}
      speed={0.6}
      factor={1.5}
      style={{ backgroundColor: "white", color: "black" }}
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
          width: { xs: "80%", sm: "70%", lg: "50%" },
          margin: "auto",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={font}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "45px", sm: "60px" } }}
          >
            Building technolgies and connecting people through it.{" "}
          </Typography>
        </ThemeProvider>
      </Box>
    </ParallaxLayer>
  );
}

export default Talk;
