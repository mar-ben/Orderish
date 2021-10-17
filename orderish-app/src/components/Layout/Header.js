import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "../UI/Logo";
import Navigation from "../UI/Navigation";

const Header = (props) => {
  const SelectNavItemHandler = (item) => {
    console.log("onSelectNavHandler");
    props.onSelectNavigation(item);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>

          <Navigation onSelect={SelectNavItemHandler}></Navigation>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
