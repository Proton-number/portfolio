import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Introduction() {
  const information =
    " I work with tools like Html, Css, Javascript, React, Material Ui and Framer-Motion. Everyday i am learning new things and i aim to work with more technologies so as to grow more".split(
      ""
    );

  return (
    <Stack
     sx={{display:'flex', justifyContent:'center', alignItems:'center'}}
    >
    <Box>
        <Typography
          variant="h2"
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 3.5, duration:.8 }}
          component={motion.h2}
        >
          A front end developer.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ width: "50%" }}>
        {information.map((text, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: 3 + index * 0.1 }}
          >
            {text}
          </motion.span>
        ))}
      </Typography>
    </Stack>
  );
}

export default Introduction;
