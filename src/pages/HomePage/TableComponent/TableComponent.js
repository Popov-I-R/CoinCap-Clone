import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import RowComponent from "./TableRowComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../../../userManager/activeUser";
import MainTableHead from "./MainTableHead";
import { addToWatchlistRedux, removeFromWatchlistRedux } from "../../../store/WatchlistReducer";
import { addToFetchSlice } from "../../../store/FetchSlice";

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

export default function MainTable(props) {
  const watchlist = useSelector((state) => state.watchlistSlice.watchlist);
  
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("rank");
  const [selectedForWatchlist, setSelectedForWatchlist] = useState(watchlist); 
  const [coins, error, loading] = props.FetchCoins();
  const [wsInitialized, setWsInitialized] = useState(false);

  const dispatch = useDispatch();

  const [pageInitialized, setPageInitialized] = useState(true);

  useEffect(() => {
    let convertedNameCoinsArray = [...coins];
    dispatch(
      addToFetchSlice(
        convertedNameCoinsArray
      )
    );
  }, [coins, dispatch]);

  let fetchedCoins = useSelector((state) => state.fetchSlice.fetchCoins);


  function getUUIDs() {
    let uuids = fetchedCoins.map((e) => {
      return e.uuid;
    });
    return uuids;
  }

  // ------------------ SOCKET START ------------------

  // useEffect(() => {
    
  //   if (fetchedCoins?.length && !wsInitialized) {
  //     const connection = new WebSocket(
  //       "wss://api.coinranking.com/v2/real-time/rates?x-access-token=coinrankingf8578fd99a951143edc7ee38782623b8b680181be6137259"
  //     );
  //     setWsInitialized(true);
  //     let uuidsReqArr = getUUIDs();
      
  //     connection.onopen = () => {
  //       const subscriptions = {
  //         throttle: "10s",
  //         uuids: uuidsReqArr,
  //       };

  //       connection.send(JSON.stringify(subscriptions));
  //       connection.onmessage = function (msg) {
  //         let receivedData = JSON.parse(msg.data);
  //         console.log(receivedData);

  //         let newArr = [];
  //         newArr = fetchedCoins.slice().map((e) => {
  //           if (e.uuid === receivedData.currencyUuid) {
  //             let newObj = { ...e };
  //             newObj.price = receivedData.price;
  //             return newObj;
  //           } else {
  //             return e;
  //           }
  //         });

  //         dispatch(addToFetchSlice(newArr));
  //       };
  //     };
  //   }


  // }, [fetchedCoins]);

  

  
  // ------------------ SOCKET END ------------------

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClickAddToWatchlist = (event, uuid) => {
    event.stopPropagation();

    const isLogged = JSON.parse(localStorage.getItem("activeUser"));
    if (isLogged === null) {
      console.log(isLogged); // for the watchlsit tests
      return;
    }

    const selectedIndex = selectedForWatchlist.indexOf(uuid);
    let newSelected = [];
    if (selectedIndex === -1) {
      addToWatchlist(uuid);
      newSelected = [...selectedForWatchlist, uuid];
      dispatch(addToWatchlistRedux(newSelected));
    } else {
      removeFromWatchlist(uuid);
      newSelected = newSelected.concat(
        selectedForWatchlist.slice(0, selectedIndex),
        selectedForWatchlist.slice(selectedIndex + 1)
      );
      dispatch(removeFromWatchlistRedux(newSelected));
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
              {fetchedCoins
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
