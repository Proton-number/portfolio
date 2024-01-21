import React, { useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import me from "/src/images/IMG_2149.jpg";
import { ParallaxLayer } from "@react-spring/parallax";

function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <ParallaxLayer
      offset={2}
      speed={1}
      factor={1}
      style={{ backgroundColor: "white", }}
    >
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 55 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration:.8 },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          alignItems: "center",
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
          <Stack
            spacing={{ sm: 2, lg: 3 }}
            sx={{ width: "50%", margin: "auto" }}
          >
            <Typography variant="h2">
              <b> Who is Favour?</b>
            </Typography>
            <Typography>
              I am a front end developer based in Lagos, Nigeria. When i am not
              a developer, i'm a mechanical engineering student in the Federal
              University of Technology, Akure.
            </Typography>
            <Typography>
              I love bringing ideas to life through code and to give the best
              user experience with them. Experiences like animations but i'm
              also looking to branch into 3d animation with tools like React
              three fiber.
            </Typography>
            <Typography>
              When i'm not coding,i watch anime or football. I am a huge
              Barcelona fan! and of course, Messi is the GOAT. I listen to music
              too. Artistes like Eminem, Doja, Brent, Drake and Billie really
              get to me.
            </Typography>
          </Stack>
        </Stack>
      </Stack>

    
    </ParallaxLayer>
  );
}

export default About;
