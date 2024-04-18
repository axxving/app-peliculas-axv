import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavListDrawer } from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    title: "Home",
    path: "#",
  },

  {
    title: "Login",
    path: "#login",
  },

  {
    title: "Register",
    path: "#register",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            color="inherit"
            size="large"
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks}></NavListDrawer>
      </Drawer>
    </>
  );
}
