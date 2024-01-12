import React from "react";
import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";

function Services() {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 1.4},
      }}
      sx={{
        width: { sm: "92%", lg: "84%" },
        margin: "auto",
        alignItems: "center",
      }}
      spacing={{ sm: 4, lg: 5 }}
    >
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Services
      </Typography>
      <Stack direction={{ sm: "row" }}>
        <Stack spacing={{ sm: 8 }}>
          <Stack spacing={{ sm: 2 }}>
            <Typography variant="h3">My Expertises</Typography>
            <Typography variant="h6" sx={{ width: { sm: "80%", lg: "50%" } }}>
              I focus on everything web design and my goal is to deliver a very
              good digital experience for everyone.
            </Typography>
          </Stack>
          <Stack spacing={{ sm: 2 }}>
            <Typography variant="h3">Tech Stack</Typography>
            <Typography variant="h6" sx={{ width: { sm: "80%", lg: "50%" } }}>
              These are my current tech stack when i want any project to happen.
              I am open to learn more and i'm still learning more on the ones i
              already use.
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={{ sm: 4 }}>
          <Stack>
            <Typography variant="h3">Web development</Typography>
            <Typography variant="h3">Web design</Typography>
          </Stack>
          <Stack>
            <Typography variant="h3">HTML</Typography>
            <Typography variant="h3">CSS</Typography>
            <Typography variant="h3">JavaScript</Typography>
            <Typography variant="h3">React</Typography>
            <Typography variant="h3">Material UI</Typography>
            <Typography variant="h3">Framer Motion</Typography>
            <Typography variant="h3">Sanity</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Services;
