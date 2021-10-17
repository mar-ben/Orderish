import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const onClickNavItemHandler = (item) => {
    props.onSelect(item);
  };
  return (
    <div className={classes.container}>
      <nav>
        <ul>
          <li className={classes.list}>
            <a
              className={classes.link}
              href="/#"
              onClick={() => onClickNavItemHandler("Home")}
            >
              Home{" "}
            </a>
          </li>
          <li className={classes.list}>
            <a
              className={classes.link}
              href="/#"
              onClick={() => onClickNavItemHandler("Orders")}
            >
              Orders
            </a>
          </li>
          <li className={classes.list}>
            <a
              className={classes.link}
              href="/#"
              onClick={() => onClickNavItemHandler("Products")}
            >
              Products
            </a>
          </li>
          <li className={classes.list}>
            <a
              className={classes.link}
              href="/#"
              onClick={() => onClickNavItemHandler("Vendors")}
            >
              Vendors
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
