import classes from "./Order.module.css";
import { Fab } from "@mui/material";
import OrderList from "./OrderList";
import AddIcon from "@mui/icons-material/Add";
import ListActionBar from "../Layout/ListActionBar";
import { ButtonGroup, Button } from "@mui/material";
const Order = (props) => {
  return (
    <div>
      <ListActionBar>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Approve</Button>
          <Button>Export</Button>
        </ButtonGroup>
      </ListActionBar>
      <OrderList />
      <div className={classes.bottomActionContainer}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};
export default Order;
