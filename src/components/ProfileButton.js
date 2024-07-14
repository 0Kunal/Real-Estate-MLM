import React, { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileButton = ({ setLoading }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  return (
    <>
      <Button
        onClick={(event) => setAnchorElUser(event.currentTarget)}
        sx={{
          borderRadius: 10,
          border: "1px solid #fff",
          padding: "3px",
          minWidth: "auto",
        }}
      >
        <Typography
          fontSize={14}
          fontWeight={500}
          sx={{ color: "#fff", marginX: "5px" }}
        >
          Kunal Kamat
        </Typography>
      </Button>
      <Menu
        sx={{ mt: 1 }}
        id="account-menu"
        anchorEl={anchorElUser}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={() => setAnchorElUser(null)}
      >
        <MenuItem
          onClick={() => {
            setLoading(true);
            setAnchorElUser(null);
            navigate("/login");
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileButton;
