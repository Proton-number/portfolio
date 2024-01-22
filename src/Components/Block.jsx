import { Box } from "@mui/material";
import React from "react";
import BlockContent from "@sanity/block-content-to-react";

function Block({ body }) {
  return (
    <Box>
      {body && (
        <BlockContent blocks={body} projectId="lrdlb8v4" dataset="production" />
      )}
    </Box>
  );
}

export default Block;
