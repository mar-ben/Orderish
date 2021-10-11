import React from "react";
import classes from "./LayoutTwoColumn.module.css";
const LayoutTwoColumn = (props) => {
  return (
    <React.Fragment>
      <main className={classes.flexcontainer}>
        <section className={classes.maincontent}>{props.mainContent}</section>
      </main>
    </React.Fragment>
  );
};
export default LayoutTwoColumn;
