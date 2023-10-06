import React, { useState, useEffect } from "react";
import { Waveform } from "@uiball/loaders";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";

function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {loading && (
        <Box
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          component={motion.div}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
        </Box>
      )}
    </AnimatePresence>
  );
}

export default LoadingComponent;
