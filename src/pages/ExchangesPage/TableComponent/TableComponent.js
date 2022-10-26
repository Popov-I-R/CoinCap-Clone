import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import RowComponent from "./TableRowComponent";
import {TableHeadCells} from "./TableHeadCells"
import  { useState, useEffect } from "react";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = TableHeadCells()

function MainTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ExchangesTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("rank");

  const [arrOfFakeResponse, setExchanges] = useState([]);
 
  useEffect(() => {
    // let arr = [];
    const optionsReq = {
        method: "GET",
        headers: {
          "x-access-token": "coinrankingf8578fd99a951143edc7ee38782623b8b680181be6137259"
        },
      };
    const limitPage = 25
      fetch(`https://api.coinranking.com/v2/exchanges?limit=${limitPage}&offset=0&orderBy=24hVolume&orderDirection=desc`,optionsReq)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.exchanges)
        setExchanges(data.data.exchanges)})
  }, []);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750, columns: 8, background: "#FAFAFA" }}
            aria-labelledby="tableTitle"
            aria-label="collapsible table"
          >
            <MainTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody sx={{ background: "white" }}>
              {arrOfFakeResponse
                .slice()
                .sort(getComparator(order, orderBy))
                .map((row, index) => {
                  return (
                    <RowComponent
                      key={row.uuid}
                      row={row}
                      onRequestSort={handleRequestSort}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
