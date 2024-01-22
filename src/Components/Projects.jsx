import { Box, Stack, Typography, Paper, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import sanityClient from "../Client";
import { motion } from "framer-motion";
import BlockContent from "@sanity/block-content-to-react";
import Block from "./Block";

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
      },
      body,
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
      <Grid container spacing={4} columns={{ lg: 10 }}>
        {projects &&
          projects.map((project, index) => (
            <Grid item key={index} lg={4}>
              <Paper elevation={8}>
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
                        }}
                        src={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                      />
                    )}
                  </Box>
                  <Typography variant="p">
                    <b> Title:</b> {project.title}
                  </Typography>
                  {/* BlockContent */}

                  <Block body={project.body} />
                </Stack>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </ParallaxLayer>
  );
}

export default Projects;
