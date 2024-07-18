import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ContactCard = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(contactData);
  };

  return (
    <Box
      sx={{
        border: "4px solid #bda588",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            fontSize={24}
            fontWeight={700}
            align="center"
            sx={{ textDecoration: "underline" }}
          >
            Leave a Message
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            name="name"
            label="Full Name"
            fullWidth
            value={contactData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            name="email"
            label="Email Address"
            fullWidth
            value={contactData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            name="phone"
            label="Phone No."
            fullWidth
            value={contactData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            name="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            value={contactData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactCard;
