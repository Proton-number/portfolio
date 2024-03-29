import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import LoadingComponent from "./Components/LoadingComponent";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated } from "@react-spring/web";
import Name from "./Components/Name";
import Talk from "./Components/Talk";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Servicesmobile from "./Components/Servicesmobile";
import chicken from "/src/images/cute chicken-rafiki.png";
import programmer from "/src/images/Programmer-pana.png";

function App() {
  return (
    <>
      <>
        <LoadingComponent />

        <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 4 } }}
        >
          <Parallax
            pages={6}
            style={{
              backgroundColor: "#919191",
              color: "#040404",
              height: "100vh",
            }}
          >
            <Name />

            <Talk />

            <About />

            <Services />
            <Servicesmobile />

            <Projects />

            <Contact />

            <ParallaxLayer
              offset={1.3}
              speed={-0.3}
              style={{ pointerEvents: "none" }}
            >
              <Box
                component={animated.img}
                whileHover={{ scale: 1.2 }}
                src={chicken}
                sx={{
                  width: { xs: "40%", sm: "30%", lg: "15%" },
                  marginLeft: { xs: "66%", sm: "70%" },
                }}
              />
            </ParallaxLayer>

            <ParallaxLayer
              offset={3.8}
              speed={0.6}
              style={{ pointerEvents: "none" }}
            >
              <Box
                component={motion.img}
                src={programmer}
                sx={{
                  width: { xs: "52%", sm: "34%", lg: "15%" },
                  marginLeft: { xs: "50%", sm: "10%" },
                }}
              />
            </ParallaxLayer>
          </Parallax>
        </Box>
      </>
    </>
  );
}

export default App;
