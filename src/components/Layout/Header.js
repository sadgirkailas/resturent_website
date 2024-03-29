import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
} from "@mui/material";
import Divider from '@mui/material/Divider';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 , my: 2}}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active"  to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink >
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/menu"}>Menu</NavLink >
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/about"}>About</NavLink >
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/contact"}>Contact</NavLink >
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
