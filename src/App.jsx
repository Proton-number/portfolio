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
        <Parallax pages={6}>
          {/* Page 1 */}
          <ParallaxLayer
            offset={0}
            speed={2}
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Name />
          </ParallaxLayer>

          {/* Page 2 */}
          <ParallaxLayer offset={1} speed={1}>
            <Talk />
          </ParallaxLayer>

          {/* Page 3 */}
          <ParallaxLayer offset={2} speed={1.6}>
            <About />
          </ParallaxLayer>

          {/* Page 4 */}
          <ParallaxLayer offset={3} speed={1.2}>
            <Services />
            <Servicesmobile />
          </ParallaxLayer>

        

          {/* Page 5 */}
          <ParallaxLayer
            offset={4}
            speed={2.1}
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Projects />
          </ParallaxLayer>

          {/* Page 6 */}
          <ParallaxLayer offset={5} speed={3.5}>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </Box>
    </Box>
  );
}

export default App;
