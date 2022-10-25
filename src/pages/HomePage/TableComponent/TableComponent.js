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
import {MainHeadCells} from "./MainHeadCells"
import  { useState, useEffect } from "react";

// let arrOfFakeResponses = [
//   {
//     uuid: "Qwsogvtv82FCd",
//     symbol: "BTC", // za arr
//     name: "Bitcoin", // za arr
//     color: "#f7931A", // za arr
//     iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg", // za arr
//     marketCap: "367904651022",
//     price: "19177.88890978937",
//     change: "0.15",
//     rank: 1,
//     sparkline: [
//       "19200.057101513456",
//       "19322.11879539638",
//       "19234.05318990269",
//       "19315.282269506035",
//       "19302.0040214545",
//       "19312.562588969293",
//       "19333.89087979287",
//       "19294.127385748583",
//       "19313.32856048934",
//       "19293.408134642585",
//       "19296.371661777073",
//       "19285.11912438783",
//       "19267.54487247283",
//       "19240.755881837256",
//       "19238.319211398735",
//       "19205.321914211218",
//       "19208.79169363669",
//       "19233.47751076396",
//       "19205.51321622781",
//       "19197.75745282478",
//       "19180.38642598224",
//       "19179.36903724825",
//       "19179.68078630328",
//       "19215.919949727795",
//       "19194.294560919294",
//     ],
//     volume: "26251389928",
//   },
//   {
//     uuid: "razxDUgYGNAdQ",
//     symbol: "ETH",
//     name: "Ethereum",
//     color: "#3C3C3D",
//     iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
//     marketCap: "158147399041",
//     price: "1296.2000810831187",
//     change: "-0.96",
//     rank: 111,
//     sparkline: [
//       "1309.4412263860181",
//       "1300.1705059968745",
//       "1301.1146328233747",
//       "1310.6058949854137",
//       "1311.0273286722522",
//       "1312.4528987881476",
//       "1311.0053012736375",
//       "1307.1678278763889",
//       "1306.49337126147",
//       "1305.4533402530644",
//       "1305.5144149636178",
//       "1303.4929633526224",
//       "1302.0584709835566",
//       "1298.1088653249703",
//       "1299.452376708154",
//       "1298.6314899823558",
//       "1302.893945654682",
//       "1303.6531037274274",
//       "1298.7884511140978",
//       "1299.3765452760015",
//       "1300.0892176589753",
//       "1298.3705805781005",
//       "1298.6490172700576",
//       "1300.9524391273824",
//       "1298.7471551417475",
//     ],
//     volume: "8383280048",
//   },
// ];


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

const headCells = MainHeadCells()

function MainTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" padding="checkbox">
          <FavoriteBorder align="center" />
        </TableCell>
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

// const CurrentTableToolbar = (props) => {
//   const { numSelected } = props;
//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Watchlist is empty
//         </Typography>
//       )}
//     </Toolbar>
//   );
// };

export default function MainTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("rank");
  const [selectedForWatchlist, setSelectedForWatchlist] = useState([]); // Watchlist array test
  const [arrOfFakeResponse, setCoins] = useState([]);
 
  useEffect(() => {
    // let arr = [];

    const optionsReq = {
        method: "GET",
        headers: {
          "x-access-token": "coinrankingf8578fd99a951143edc7ee38782623b8b680181be6137259"
        },
      };
    const limitPage = 25
      fetch(`https://api.coinranking.com/v2/coins?timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limitPage}&offset=0`,optionsReq)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data.coins)})
  }, []);


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
      newSelected = [...selectedForWatchlist, uuid];
    } else {
      newSelected = newSelected.concat(
        selectedForWatchlist.slice(0, selectedIndex),
        selectedForWatchlist.slice(selectedIndex + 1)
      );
    }
    setSelectedForWatchlist(newSelected);
    console.log(selectedForWatchlist);
  };

  const isSelected = (uuid) => selectedForWatchlist.indexOf(uuid) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <CurrentTableToolbar numSelected={selected.length} /> */}
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
              {arrOfFakeResponse
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
