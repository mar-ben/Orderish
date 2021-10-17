import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import classes from "./ListActionBar.module.css";

const ListActionBar = (props) => {
  return <div className={classes.ListActionBar}>{props.children}</div>;
};
export default ListActionBar;
