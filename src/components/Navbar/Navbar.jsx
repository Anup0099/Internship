import React from "react";
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Stack,
  Button,
} from "@mui/material";
import images from "../images";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Navbar = () => {
  return (
    <AppBar position="static" color="transparent"  style={{boxShadow:"none"}}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        <IconButton size="large" aria-label="logo" edge="start">
          <img src={images.home} alt="image" />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Button color="primary" style={{color: 'white'}}>
            <SearchIcon fontSize="medium" />
            Search
          </Button>
          <Button color="primary" style={{color: 'white'}}>Help </Button>
          <Button color="primary" style={{color: 'white'}}>Account </Button>
          <Button color="primary" style={{color: 'white'}}>
            <ShoppingBagIcon />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
