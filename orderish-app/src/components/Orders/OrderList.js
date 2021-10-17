import classes from "./OrderList.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { React } from "react";
//temp data

const OrderList = (props) => {
  const onClickRowHandler = (event, cellValues) => {
    debugger;
  };

  const columns = [
    {
      field: "orderNumber",
      headerName: "Order Number",
      minWidth: 200,
      flex: 1,
    },
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
      renderCell: (cellValues) => {
        return (
          <Button
            onClick={(event) => {
              onClickRowHandler(event, cellValues);
            }}
          >
            view
          </Button>
        );
      },
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

  return (
    <div className={classes.container}>
      <div className={classes.datagridcontainer}>
        <DataGrid
          className={classes.datagrid}
          pagination
          rowsPerPageOptions={[5]}
          columns={columns}
          rows={rows}
          autoHeight={true}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default OrderList;
