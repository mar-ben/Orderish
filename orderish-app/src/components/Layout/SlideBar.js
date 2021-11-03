import classes from "./SlideBar.module.css";
import { Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const SlideBar = (props) => {
  return (
    <div className={classes.slidebar}>
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Order</a>
        </li>
        <li>
          <a href="/#">Product</a>
        </li>
      </ul>
    </div>
  );
};
export default SlideBar;
