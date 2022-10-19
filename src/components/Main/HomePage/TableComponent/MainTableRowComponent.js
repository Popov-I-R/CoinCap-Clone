import CollapseTable from "./CollapseTableComponent";
import { useState } from "react";

import { TableRow, TableCell } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export default function RowComponent(props) {
  const [open, setOpen] = useState(false);
  const labelId = props.labelId;
  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(!open)}
        role="checkbox"
        tabIndex={-1}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={props.isItemSelected}
            onClick={(event) => props.handleClick(event, props.row.rank)}
            {...labelId}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </TableCell>
        <TableCell component="th" id={props.labelId} scope="row" padding="none">
          {props.row.rank}
        </TableCell>
        <TableCell align="right">{props.row.logoNameSymbolArray}</TableCell>
        <TableCell align="right">{props.row.price}</TableCell>
        <TableCell align="right">{props.row.marketCap}</TableCell>
        <TableCell align="right">{props.row.supply}</TableCell>
        <TableCell align="right">{props.row.volume}</TableCell>
        <TableCell align="right">{props.row.change}</TableCell>
      </TableRow>
      <CollapseTable
        row={props.row}
        open={open}
        handleClickOpen={props.handleClickOpen}
        keyC={`${props.row.rank}collapse`}
      ></CollapseTable>
    </>
  );
}
