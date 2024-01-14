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
      speed={1}
      factor={1.8}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Stack
        // component={motion.div}
        // initial={{ opacity: 0, y: 55 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: { delay: 0.8, duration: 1.1 },
        // }}
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
          <Stack sx={{ width: "50%", margin: "auto" }}>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              ihil commodi a accusantium lectus repellendus laudantium placeat
              sunt tempore deserunt? Possimus vero aliquam iure quos! Desectetur
              suscipit. Hic excepturi, dolorem ad reprehenderit doloremque
              facere animi possimus officia!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              natus? Odio sequi earum animi illo eligendi architecto aliquam
              nemo.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default About;
