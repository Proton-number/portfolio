import { Box, Stack, Typography, Paper, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import sanityClient from "../Client";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      description,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <ParallaxLayer
      offset={4}
      speed={1.4}
      // factor={3}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Box>projects..</Box>

      <Grid container>
        {projects &&
          projects.map((project, index) => (
            <Grid item key={index}>
              <Paper>
                <Stack>
                  <Box
                    component={motion.div}
                    sx={{
                      overflow: "hidden",
                    }}
                  >
                    {project.mainImage && (
                      <Box
                        component={motion.img}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05, opacity: "96%" }}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                        }}
                        src={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                      />
                    )}
                  </Box>
                  <Typography variant="p">
                    <b> Title:</b> {project.title}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </ParallaxLayer>
  );
}

export default Projects;
