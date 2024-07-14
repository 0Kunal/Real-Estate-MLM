import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
