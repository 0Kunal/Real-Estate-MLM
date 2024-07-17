import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ padding: "20px 2vw" }}>
      <Grid
        container
        sx={{
          border: "4px solid #bda588",
          borderRadius: "10px",
          padding: "20px 2vw",
        }}
      >
        <Grid item xs={12}>
          <Typography
            fontSize={34}
            fontWeight={700}
            align="center"
            sx={{ textDecoration: "underline" }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={28} fontWeight={500} align="center">
            Welcome to Kaveri Developers and Marketing Pvt Ltd, your number one
            source for all real estate solutions. We're dedicated to providing
            you the very best of residential land, with an emphasis on quality,
            integrity and appreciation. We as a team providing our customers
            with the finest residential projects available in the market, which
            will definitely yield returns in the short term. We know the value
            of your hard earned money, that's why all of our projects are
            located in prominent places, which guarantee you peace of mind. We
            served our customers with loyalty, honesty and integrity and will
            continue to do so.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
