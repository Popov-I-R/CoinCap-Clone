import CollapseTable from "./CollapseTableComponent";
import { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SparkLine from "./SparklineComponent/SparklineComponent";
import "./SparklineComponent/Sparkline.css";
import "./TableComponent.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import { API_KEY } from "../../../secrets";
import {
  setRank,
  setSymbol,
  setName,
  setPrice,
  setMarketCap,
  setVolume,
  setSupply,
  setWebsite,
  setIconUrl,
  setChange,
  setHigh,
  setLow,
  setAverage
} from "../../../store/BlueBarAssets";

export default function RowComponent(props) {
  const [open, setOpen] = useState(false);
  const labelId = props.labelId;
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlistSlice.watchlist);

  function updateBlueBarData(uuid) {
    fetch(`https://api.coinranking.com/v2/coin/${uuid}`, {
      method: "GET",
      headers: {
        "x-access-token": API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const coin = data.data.coin;
        dispatch(setRank(coin.rank));
        dispatch(setSymbol(coin.symbol));
        dispatch(setName(coin.name));
        dispatch(setPrice(Number(coin.price).toFixed(3)));
        const marketCap =
          coin.marketCap > 1000000000
            ? `${(coin.marketCap / 1000000000).toFixed(3)}b`
            : `${(coin.marketCap / 1000000).toFixed(3)}m`;
        dispatch(setMarketCap(marketCap));
        const volume =
          coin["24hVolume"] > 1000000000
            ? `${(coin["24hVolume"] / 1000000000).toFixed(3)}b`
            : `${(coin["24hVolume"] / 1000000).toFixed(3)}m`;
        dispatch(setVolume(volume));
        const supply =
          coin.supply.total > 1000000000
            ? `${(coin.supply.total / 1000000000).toFixed(3)}b`
            : `${(coin.supply.total / 1000000).toFixed(3)}m`;
        dispatch(setSupply(supply));
        dispatch(setWebsite(coin.websiteUrl));
        dispatch(setIconUrl(coin.iconUrl));
        dispatch(setChange(coin.change));
        const max = Math.max(...coin.sparkline);
        dispatch(setHigh(max.toFixed(2)));
        const min = Math.min(...coin.sparkline);
        dispatch(setLow(min.toFixed(2)));
        dispatch(setAverage(((max+min)/2).toFixed(2)));
      })
      .catch((err) => console.log("Hmmm... something went wrong"));
    }
  

  function checkForCoin(uuid) {
    if (watchlist.includes(uuid)) {
      return true
    }
    return false
  }


  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(!open)}
        role="checkbox"
        tabIndex={-1}
      >
        <TableCell padding="checkbox">
          <Tooltip title="Add To Watchlist" placement="right-start">
            <Checkbox
              checked={checkForCoin(props.row.uuid)}
              onClick={(event) =>
                props.handleClickAddToWatchlist(event, props.row.uuid)
              }
              {...labelId}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </Tooltip>
        </TableCell>
        <TableCell
          align="center"
          component="th"
          id={props.labelId}
          scope="row"
          padding="none"
        >
          {props.row.rank}
        </TableCell>
        <TableCell align="right">
          <div className="symbolNameLogoContainerCellContainer">
            <img width="35px" src={props.row.iconUrl} alt="logo"></img>
            <div className="symbolAndLogoCell">
              <Link
                to={`assets/${props.row.uuid}`}
                onClick={() => updateBlueBarData(props.row.uuid)}
              >
                {props.row.name}
              </Link>
              <p>{props.row.symbol}</p>
            </div>
          </div>
        </TableCell>
        <TableCell align="right">{`$${Number(props.row.price).toFixed(
          2
        )}`}</TableCell>
        <TableCell align="right">{`$${Number(
          props.row.marketCap
        ).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</TableCell>
        <TableCell align="right">{`$${Number(
          props.row["24hVolume"]
        ).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</TableCell>
        <TableCell align="right">{`${props.row.change}%`}</TableCell>
        <TableCell align="right">
          <SparkLine
            data={props.row.sparkline}
            change={props.row.change}
          ></SparkLine>
        </TableCell>
      </TableRow>
      <CollapseTable
        key={props.uuid}
        row={props.row}
        open={open}
        handleClickOpen={props.handleClickOpen}
        keyC={`${props.row.rank}collapse`}
      ></CollapseTable>
    </>
  );
}
