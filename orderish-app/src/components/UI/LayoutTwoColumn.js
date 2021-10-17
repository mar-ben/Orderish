import React from "react";
import SlideBar from "../Layout/SlideBar";
import classes from "./LayoutTwoColumn.module.css";
const LayoutTwoColumn = (props) => {
  return (
    <React.Fragment>
      <main className={classes.flexcontainer}>
        <aside className={classes.sidebar}>
          <SlideBar />
        </aside>
        <section className={classes.maincontent}>{props.mainContent}</section>
      </main>
    </React.Fragment>
  );
};
export default LayoutTwoColumn;
