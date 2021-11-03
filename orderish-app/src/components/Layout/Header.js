import * as React from "react";
import classes from "./Header.module.css";
import Logo from "../UI/Logo";
import Navigation from "../UI/Navigation";
import SearchBox from "../UI/SearchBox";

const Header = (props) => {
  const SelectNavItemHandler = (item) => {
    console.log("onSelectNavHandler");
    props.onSelectNavigation(item);
  };

  return (
    <div class={classes["header-container"]}>
      <Logo />
      <SearchBox />
      <Navigation onSelect={SelectNavItemHandler}></Navigation>
    </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="small"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <Logo />
    //       </IconButton>

    //
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};
export default Header;
