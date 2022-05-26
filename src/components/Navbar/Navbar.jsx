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
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="large"
          aria-label="logo"
          edge="start"
         
        >
          <img src={images.home} alt="image" />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Button color="primary">
          
          <SearchIcon />
      
              Search </Button>
          <Button color="primary">Search </Button>
          <Button color="primary">Search </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
