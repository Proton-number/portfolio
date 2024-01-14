import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import LoadingComponent from "./Components/LoadingComponent";
import { motion } from "framer-motion";
import { Parallax } from "@react-spring/parallax";
import Name from "./Components/Name";
import Talk from "./Components/Talk";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Servicesmobile from "./Components/Servicesmobile";

function App() {
  return (
    <Box className="background">
      {/* <LoadingComponent /> */}
      <Box
      // component={motion.div}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, y: 0, transition: { delay: 4 } }}
      >
        <Parallax pages={6} style={{ backgroundColor: "black" }}>
          <Name />

          <Talk />

          <About />

          <Services />
          <Servicesmobile />

          <Projects />

          <Contact />
        </Parallax>
      </Box>
    </Box>
  );
}

export default App;
