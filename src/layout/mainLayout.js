import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../components/Navbar";
import { auth } from "../firebaseConfig";

const MainLayout = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       navigate("/login", { replace: true });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
