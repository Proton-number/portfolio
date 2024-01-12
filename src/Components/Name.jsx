import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Name() {
  const font = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  });

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.8 },
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={font}>
        <Typography variant="h1" sx={{ fontSize: { sm: "70px", lg: "120px" } }}>
          HEY, I'M FAVOUR
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { sm: "70px", lg: "120px" } }}>
          HEY, I'M FAVOUR
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { sm: "70px", lg: "120px" } }}>
          HEY, I'M FAVOUR
        </Typography>
      </ThemeProvider>
    </Stack>
  );
}

export default Name;
