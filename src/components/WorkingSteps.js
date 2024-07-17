import React from "react";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HandshakeIcon from "@mui/icons-material/Handshake";

const iconStyle = {
  color: "#bda588",
  fontSize: 40,
};

const steps = [
  {
    id: 1,
    title: "Contract",
    icon: <HomeIcon sx={iconStyle} />,
    description:
      "Mauris rhoncus orci injanairi imperdiet placerat. aroiko Vestibulum euismod nislko suscipit ligula akorks.",
  },
  {
    id: 2,
    title: "Location",
    icon: <LocationOnIcon sx={iconStyle} />,
    description:
      "Mauris rhoncus orci injanairi imperdiet placerat. aroiko Vestibulum euismod nislko suscipit ligula akorks.",
  },
  {
    id: 3,
    title: "Start Small",
    icon: <TrendingUpIcon sx={iconStyle} />,
    description:
      "Mauris rhoncus orci injanairi imperdiet placerat. aroiko Vestibulum euismod nislko suscipit ligula akorks.",
  },
  {
    id: 4,
    title: "Hire Agent",
    icon: <HandshakeIcon sx={iconStyle} />,
    description:
      "Mauris rhoncus orci injanairi imperdiet placerat. aroiko Vestibulum euismod nislko suscipit ligula akorks.",
  },
];

const StepComponent = ({ step }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar
        sx={{ bgcolor: "rgba(255, 204, 153, 0.3)", width: 120, height: 120 }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
        >
          <Typography fontSize={24} color={"black"}>
            {step.id}
          </Typography>
          {step.icon}
        </Grid>
      </Avatar>
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
        {step.title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
        {step.description}
      </Typography>
    </Box>
  </Grid>
);

const WorkingSteps = () => (
  <Container>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography fontSize={32} fontWeight={600} align="center">
          Working Steps
        </Typography>
      </Grid>
      {steps.map((step) => (
        <StepComponent key={step.id} step={step} />
      ))}
    </Grid>
  </Container>
);

export default WorkingSteps;
