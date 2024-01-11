import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import LoadingComponent from "./Components/LoadingComponent";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typography } from "@mui/material";
import Name from "./Components/Name";
import Talk from "./Components/Talk";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <Box className="background">
      {/* <LoadingComponent /> */}
      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ backgroundColor: "#E7F1FD", color: "black" }}
        >
          <Name />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.8}
          style={{ backgroundColor: " #687791" }}
        >
          <Talk />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.1}
          speed={1.4}
          style={{ backgroundColor: "lightblue", color: "black" }}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.1}
          style={{ backgroundColor: "cyan", color: "black" }}
        >
          <Services />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.6}
          speed={1.2}
          style={{ backgroundColor: "purple", color: "black" }}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.8}
          speed={1.1}
          style={{ backgroundColor: "lightblue", color: "black" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}

export default App;
