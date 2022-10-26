import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import RowComponent from "./TableRowComponent";
import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlist, removeFromWatchlist } from "../../../userManager/activeUser";
import MainTableHead from "./MainTableHead";
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/coinranking";

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

export default function MainTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("rank");
  const [selectedForWatchlist, setSelectedForWatchlist] = useState([]); // Watchlist array test
  const navigate = useNavigate()

  const coinsLimit = 25

  const [coins,error,loading] = useAxios({
    axiosInstance: axios,
    method: `GET`,
    url: `coins?timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${coinsLimit}&offset=0`,
    requestConfig: {
      // headers: {
      //   "limit" : "25"
      // }
    }
  })

  // const watchlist = useSelector(state => state.watchlist);
  // const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClickAddToWatchlist = (event, uuid) => {
    event.stopPropagation();
    
    const selectedIndex = selectedForWatchlist.indexOf(uuid);
    let newSelected = [];
    if (selectedIndex === -1) {
      addToWatchlist(uuid)
      newSelected = [...selectedForWatchlist, uuid];
    } else {
      removeFromWatchlist(uuid)
      newSelected = newSelected.concat(
        selectedForWatchlist.slice(0, selectedIndex),
        selectedForWatchlist.slice(selectedIndex + 1)
      );
    }
    setSelectedForWatchlist(newSelected);
  };

  const isSelected = (uuid) => selectedForWatchlist.indexOf(uuid) !== -1;

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
              numSelected={selectedForWatchlist.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody sx={{ background: "white" }}>
              {coins
                .slice()
                .sort(getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.uuid);
                  const labelId = { "aria-label": "Checkbox Heart" };
                  return (
                    <RowComponent
                      key={row.uuid}
                      row={row}
                      handleClickAddToWatchlist={handleClickAddToWatchlist}
                      labelId={labelId}
                      isItemSelected={isItemSelected}
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
