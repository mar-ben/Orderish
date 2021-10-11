import classes from "./OrderList.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Container } from "@mui/material";
import { React } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//temp data

const columns = [
  { field: "orderNumber", headerName: "Order Number", minWidth: 200, flex: 1 },
  {
    field: "vendor",
    headerName: "Vendor",
    minWidth: 200,
    type: "text",
    flex: 1,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    minWidth: 200,
    type: "date",
    flex: 1,
  },
  {
    field: "orderQty",
    headerName: "Order Qty",
    minWidth: 100,
    type: "number",
    flex: 1,
  },
  {
    field: "totalCost",
    headerName: "Total Cost",
    minWidth: 100,
    type: "number",
    flex: 1,
    valueFormatter: (params) => {
      const valueFormatted = Number(params.value * 100).toLocaleString();
      return `$ ${valueFormatted}`;
    },
  },

  {
    field: "orderStatus",
    headerName: "Order Status",
    minWidth: 200,
    type: "text",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    minWidth: 200,
    type: "actions",
    renderCell: () => <button>view</button>,
    flex: 1,
  },
];
const rows = [
  {
    id: 1,
    vendor: "Best Buy",
    orderNumber: 75,
    orderDate: "06/05/2021",
    orderQty: 1,
    totalCost: 100,
    orderStatus: "submitted",
  },
];

const OrderList = (props) => {
  return (
    <div className={classes.container}>
      <DataGrid
        pagination
        rowsPerPageOptions={[5]}
        columns={columns}
        rows={rows}
        autoHeight={true}
        checkboxSelection
      />
      <div className={classes.bottomActionContainer}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};
export default OrderList;
