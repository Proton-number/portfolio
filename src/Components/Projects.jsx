import { Box, Stack, Typography, Paper, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import sanityClient from "../Client";
import { motion } from "framer-motion";
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
      factor={1.2}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Grid
        container
        spacing={4}
        columns={{ xs: 6, sm: 8, lg: 10 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "10px" },
          marginTop: { xs: "40px", lg: 0 },
        }}
      >
        {projects &&
          projects.map((project, index) => (
            <Grid item key={index} xs={3} sm={4} lg={3.3}>
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
                  <Stack
                    sx={{ padding: { xs: "12px", sm: "10px", lg: "20px" } }}
                  >
                    <Typography variant="p">
                      <b>{project.title}</b>
                    </Typography>
                    {/* BlockContent */}

                    <Block body={project.body} />
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </ParallaxLayer>
  );
}

export default Projects;
