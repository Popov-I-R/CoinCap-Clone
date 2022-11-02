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
  setSymbol
} from "../../../store/BlueBarAssets";

export default function RowComponent(props) {
  const [open, setOpen] = useState(false);
  const labelId = props.labelId;
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlistSlice.watchlist);
  

  function checkForCoin(uuid) {
    if (watchlist.includes(uuid)) {
      return true
    }
    return false
  }


  function handleOpen (symbol){
    dispatch(setSymbol(symbol));
    setOpen(!open)
  }
  const isLogged = JSON.parse(localStorage.getItem("activeUser"));
  return (
    <>
      <TableRow
        hover
        onClick={() => handleOpen(props.row.symbol)}
        role="checkbox"
        tabIndex={-1}
      >
        <TableCell padding="checkbox">
        {isLogged ? ( 
          <Checkbox
              checked={checkForCoin(props.row.uuid)}
              onClick={(event) =>
                props.handleClickAddToWatchlist(event, props.row.uuid)
              }
              {...labelId}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />) : (<Tooltip title="You need to be logged in for this future" placement="right-start">
            <Checkbox
              checked={checkForCoin(props.row.uuid)}
              onClick={(event) =>
                props.handleClickAddToWatchlist(event, props.row.uuid)
              }
              {...labelId}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </Tooltip>)}
          
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
