import classes from "./SearchBox.module.css";
const SearchBox = (props) => {
  return (
    <div>
      <input className={classes["search-input"]}></input>
    </div>
  );
};
export default SearchBox;
