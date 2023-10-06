import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Introduction from "./Components/Introduction";
import LoadingComponent from "./Components/LoadingComponent";
import Name from "./Components/Name";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <LoadingComponent />
      <Box component={motion.div} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.2, }} >
        <Name />
        <Introduction />
      </Box>
    </>
  );
}

export default App;
