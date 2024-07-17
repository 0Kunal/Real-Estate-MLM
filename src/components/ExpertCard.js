import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const ExpertCard = ({
  imageUrl,
  name,
  location,
  experience,
  completedProjects,
  occupation,
}) => {
  return (
    <Card
      sx={{
        width: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" height="300" image={imageUrl} alt={name} />
      <CardContent>
        <Typography
          fontSize={22}
          fontWeight={700}
          gutterBottom
          textAlign={"center"}
        >
          {name}({occupation})
        </Typography>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography fontSize={16} fontWeight={700}>
              Experience: {experience} years
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={16} fontWeight={700} gutterBottom>
              Projects: {completedProjects}
            </Typography>
          </Grid>
        </Grid>
        <Typography fontSize={16} fontWeight={700} color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
