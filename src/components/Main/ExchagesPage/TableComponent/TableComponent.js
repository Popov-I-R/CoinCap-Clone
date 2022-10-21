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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RowComponent from "./TableRowComponent";


// Here the response will be from the CoinCap API !! At the homePage we will use CoinRankinng API 
let arrOfFakeResponse = [
  {uuid: "-zdvbieRdZ",
  rank: 1,
  name: "Binance",
  iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
  verified: false,
  recommended: true,
  numberOfMarkets: 1370,
  numberOfCoins: 345,
  marketShare: 22.81,
  coinrankingUrl: "https://coinranking.com/exchange/-zdvbieRdZ+binance",
  volume: 10285613821
  },
  {
    uuid: "s8lbIYDTH",
    rank: 2,
    name: "AAX",
    iconUrl: "https://cdn.coinranking.com/JBWyndh_c/853.png",
    verified: false,
    recommended: true,
    numberOfMarkets: 243,
    numberOfCoins: 226,
    marketShare: 5.81,
    coinrankingUrl: "https://coinranking.com/exchange/s8lbIYDTH+aax",
    volume: "2771075054"
  },
  {
    uuid: "-4x6SL_Cv",
    rank: 4,
    name: "Kucoin",
    iconUrl: "https://cdn.coinranking.com/A-hAjR-hN/kucoin.png",
    verified: false,
    recommended: true,
    numberOfMarkets: 1064,
    numberOfCoins: 612,
    marketShare: 2.67,
    coinrankingUrl: "https://coinranking.com/exchange/-4x6SL_Cv+kucoin",
    volume: "1274644623"
  }
];

//  da napravq rank, name(with logo), trading pairs, volume, marketShare i recommended (koeto moje da ima nqkakva qka emoticon-ka, ako e true)
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

const headCells = [
  {
    id: "rank",
    numeric: true,
    disablePadding: false,
    label: "Rank",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "tradingPairs",
    numeric: true,
    disablePadding: false,
    label: "Trading Pairs",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "Volume",
  },
  {
    id: "marketShare",
    numeric: true,
    disablePadding: false,
    label: "Market Share",
  },
  {
    id: "recommended",
    numeric: true,
    disablePadding: false,
    label: "Is Recommended",
  },
];

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
  const [selected, setSelected] = React.useState([]); 

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, rank) => {
    event.stopPropagation();

    const selectedIndex = selected.indexOf(rank);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, rank];
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (rank) => selected.indexOf(rank) !== -1;

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
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody sx={{ background: "white" }}>
              {arrOfFakeResponse
                .slice()
                .sort(getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.rank);
                  const labelId = { "aria-label": "Checkbox Heart" };
                  return (
                    <RowComponent
                      key={row.rank}
                      row={row}
                      handleClick={handleClick}
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
