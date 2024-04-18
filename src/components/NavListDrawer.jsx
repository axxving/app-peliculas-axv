import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";

export function NavListDrawer() {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#trash">
              <ListItemText primary="Trash"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href="#trash">
              <ListItemText primary="Spam"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
