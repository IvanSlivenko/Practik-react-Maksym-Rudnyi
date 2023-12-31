import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
    Divider,
  Hidden,
    Menu,
    MenuItem,
Link
    
 
 
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";


import Settings from "@mui/icons-material/Settings";

const Navigation = () =>{
  const [isDrawerOpen, setdrawerOpen] = useState(false);

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link component={RouterLink} to="settings">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setdrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "wheat", flexGrow: 1 }}
            >
              Movies recommendation
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>   
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={RouterLink}
                to="settings"
              >
                Settings
              </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setdrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}

export default Navigation;


