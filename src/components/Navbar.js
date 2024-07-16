"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoadingOverlay from "./LoadingOverlay";
import ProfileButton from "./ProfileButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AppBar component="nav">
      {loading && <LoadingOverlay />}
      <Toolbar>
        <img
          src="https://www.vhv.rs/dpng/d/573-5732729_yourlogo-png-transparent-png.png"
          alt="brand logo"
          style={{ height: "40px", objectFit: "contain" }}
          onClick={() => navigate("/")}
        />
        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 1,
            marginRight: 1,
          }}
        >
          <Button
            sx={{ color: "white", fontSize: 14, fontWeight: 700 }}
            onClick={() => {
              navigate("/properties");
            }}
          >
            Properties
          </Button>
          <Button
            sx={{ color: "white", fontSize: 14, fontWeight: 700 }}
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            About Us
          </Button>
          <Button
            sx={{ color: "white", fontSize: 14, fontWeight: 700 }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Button>
        </Box>

        <ProfileButton setLoading={setLoading} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
