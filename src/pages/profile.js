import React, { useState } from "react";
import { Box, Grid, Avatar, Typography } from "@mui/material";
import ContactCard from "../components/ContactCard";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    image:
      "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
    firstName: "John",
    lastName: "Doe",
    experience: 5,
    completedProjects: 20,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    occupation: "Software Engineer",
    description: "Passionate developer with a love for coding and technology.",
    age: 30,
    city: "San Francisco",
    state: "California",
    country: "USA",
  });

  return (
    <Box sx={{ padding: "5vh 5vw" }}>
      <Grid container pb={2} spacing={2}>
        <Grid
          item
          xs={12}
          sm={5}
          paddingY={2}
          paddingX={5}
          alignContent={"center"}
        >
          <Avatar
            src={profileData.image}
            alt="Profile Picture"
            style={{
              height: "100%",
              width: "auto",

              borderRadius: "10%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography fontSize={34} fontWeight={700}>
                {`${profileData.firstName} ${profileData.lastName}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Experience:</b> {profileData.experience} years
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Completed Projects:</b> {profileData.completedProjects}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Email:</b> {profileData.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Phone:</b> {profileData.phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Occupation:</b> {profileData.occupation}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Age:</b> {profileData.age}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>City:</b> {profileData.city}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>State:</b> {profileData.state}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                <b>Country:</b> {profileData.country}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={20} fontWeight={500}>
            <b>Description:-</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={20} fontWeight={500}>
            {profileData.description}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ContactCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
