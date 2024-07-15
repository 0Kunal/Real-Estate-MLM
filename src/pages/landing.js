import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/thunk/user";
import { getAuth } from "firebase/auth";

const Landing = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await dispatch(getAllUsers()).unwrap();
      console.log("uaer Data", data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuth = () => {
    const auth = getAuth();
    console.log(auth.currentUser);
  };
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
            <button type="button" onClick={fetchData}>
              Get Users
            </button>
            <button type="button" onClick={checkAuth}>
              Check Auth
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
