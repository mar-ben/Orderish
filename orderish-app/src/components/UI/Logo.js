import logo from "./orderishLogo2.png";
import classes from "./Logo.module.css";
const Logo = (props) => {
  return <img className={classes.logo} src={logo} alt="Logo"></img>;
};
export default Logo;
