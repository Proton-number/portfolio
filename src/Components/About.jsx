import React from "react";
import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import me from "/src/images/IMG_2149.jpg";

function About() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "30px", sm: "70px", lg: "100px" } }}
      >
        About me
      </Typography>
      <Stack
        spacing={{ xs: 2, sm: 6, lg: 14 }}
        direction={{ sm: "row" }}
        sx={{
          alignItems: "center",
          padding: { xs: "30px", sm: "20px", lg: "70px" },
        }}
      >
        <Box
          component="img"
          src={me}
          sx={{
            width: { xs: "200px", sm: "300px", lg: "400px" },
            height: "auto",
          }}
        />
        <Stack sx={{ width: "50%", margin: "auto" }}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            natus? Odio sequi earum animi illo eligendi architecto aliquam nemo.
            Vero dolor error atque autem dignissimos quisquam eum quas quis
            sapiente quasi quibusdam natus esse, ipsa impedit, explicabo unde.
            Neque, dolorum.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            natus? Odio sequi earum animi illo eligendi architecto aliquam nemo.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default About;
