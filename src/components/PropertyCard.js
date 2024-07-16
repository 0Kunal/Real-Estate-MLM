import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

const PropertyCard = ({
  title,
  discription,
  category,
  address,
  landmark,
  city,
  state,
  country,
  price,
  area,
  images,
}) => {
  return (
    <Card
      sx={{
        width: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={images[0]}
        alt={title}
      />
      <CardContent>
        <Typography
          fontSize={22}
          fontWeight={700}
          gutterBottom
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={700}
          color="text.secondary"
          gutterBottom
        >
          Location: {city}, {state}, {country}
        </Typography>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography fontSize={16} fontWeight={700}>
              Price: Rs {price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={16} fontWeight={700} gutterBottom>
              Area: {area} sqft
            </Typography>
          </Grid>
        </Grid>
        <Typography fontSize={16} fontWeight={700} color="text.secondary">
          Type: {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
