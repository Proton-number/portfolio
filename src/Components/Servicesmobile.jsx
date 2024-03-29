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

function Servicesmobile() {
  return (
    <Box id="service-mobile">
      <ParallaxLayer
        offset={3}
        speed={1.1}
        factor={1.4}
        style={{ backgroundColor: "white" }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 55 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 1.1 },
          }}
          sx={{
            width: { sm: "92%", lg: "84%" },
            margin: "auto",
            alignItems: "center",
            padding: { xs: "20px" },
          }}
          spacing={4}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "80px" }, textAlign: "center" }}
          >
            Services
          </Typography>

          <Stack spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h2" sx={{ fontSize: { xs: "40px" } }}>
                My Expertises
              </Typography>
              <Typography variant="body1">
                I focus on everything web design and my goal is to deliver a
                very good digital experience for everyone.
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                Web development
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                Web design
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h2" sx={{ fontSize: { xs: "40px" } }}>
                Tech Stack
              </Typography>
              <Typography variant="body1">
                These are my current tech stack when i want any project to
                happen. I am open to learn more and i'm still learning more on
                the ones i already use.
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                HTML
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                CSS
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                JavaScript
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                React
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                Material UI
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                Framer Motion
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "30px" }}>
                Sanity
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </ParallaxLayer>
    </Box>
  );
}

export default Servicesmobile;
