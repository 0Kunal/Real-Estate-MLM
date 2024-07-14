import { Box, Grid } from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <Box style={{ width: "100vw", overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <h1>Welcome to the Landing Page</h1>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
