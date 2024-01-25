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
import { ParallaxLayer } from "@react-spring/parallax";

function About() {
  return (
    <ParallaxLayer
      offset={2}
      speed={0.8}
      factor={1.43}
      style={{ backgroundColor: "white" }}
    >
      <Stack
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.3 },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          marginTop: { xs: "120px", sm: 0, lg: "60px" },
        }}
        spacing={{ xs: 4 }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "60px", sm: "70px", lg: "100px" } }}
        >
          About me
        </Typography>
        <Stack
          spacing={{ xs: 4, sm: 6, lg: 8 }}
          direction={{ sm: "row" }}
          sx={{
            alignItems: "center",
            padding: { sm: "20px", lg: "70px" },
          }}
        >
          <Box
            component="img"
            src={me}
            sx={{
              width: { xs: "280px", sm: "300px", lg: "420px" },
              height: "auto",
            }}
          />
          <Stack>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "40px", sm: "42px", lg: "68px" },
                fontWeight: { xs: 350 },
                marginBottom: { xs: "10px", lg: "30px" },
              }}
            >
              <b> Who is Favour?</b>
            </Typography>
            <Stack
              spacing={{ xs: 2, sm: 4, lg: 3 }}
              sx={{
                width: { xs: "80%", sm: "90%", lg: "70%" },
                margin: "auto",
              }}
            >
              <Typography sx={{ textAlign: "justify" }}>
                I am a front end developer based in Lagos, Nigeria. When i am
                not a developer, i'm a mechanical engineering student in the
                Federal University of Technology, Akure.
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                I love bringing ideas to life through code and to give the best
                user experience with them. Experiences like animations but i'm
                also looking to branch into 3d animation with tools like React
                three fiber.
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                When i'm not coding,i watch anime or football. I am a huge
                Barcelona fan! and of course, Messi is the GOAT. I listen to
                music too. Artistes like Eminem, Doja, Brent, Drake and Billie
                really get to me.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default About;
