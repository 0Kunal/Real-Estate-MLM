"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import LoadingOverlay from "../components/LoadingOverlay";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/thunk/user";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "password123",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const user = await dispatch(login(formData)).unwrap();
      setLoading(false);
      if (user) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {loading && <LoadingOverlay />}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/021/885/298/small_2x/miniature-house-with-keys-on-wooden-background-real-estate-concept-ai-generated-artwork-photo.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 10,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              autoFocus
              id="email"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 5 }}
            >
              Copyright © Company Name 2024.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
