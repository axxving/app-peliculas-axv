import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { NavListDrawer } from "./NavListDrawer";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="container" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer 
      open={open} 
      anchor="left" 
      onClose={() => setOpen(false)}

      >
        <NavListDrawer></NavListDrawer>
      </Drawer>
    </>
  );
}
