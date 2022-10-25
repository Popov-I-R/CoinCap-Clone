import { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import "./TableComponent.css"

export default function RowComponent(props) {

  return (
    <>
      <TableRow
        hover
        // onClick={() => setOpen(!open)}

      >
        <TableCell align="center" component="th"  id={props.labelId} scope="row" padding="none">
          {props.row.rank}
        </TableCell>
        <TableCell 
        align="right">
        <div className="symbolNameLogoContainerCellContainer">
        <img 
            width="35px"
            src={props.row.iconUrl} alt="logo">
        </img>
          <div className="symbolAndLogoCell">
            <a href="#">{props.row.name}</a>
            <p>{props.row.symbol}</p>
          </div>
        </div>
        </TableCell>
        <TableCell align="right">{props.row.numberOfCoins}</TableCell>
        <TableCell align="right">{`$${Number(props.row.volume).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</TableCell>
        <TableCell align="right">{`${props.row.marketShare} %`}</TableCell>
        <TableCell align="right">{props.row.recommended === true ? "Препоръчано" : "Не"}</TableCell>
        <TableCell align="right">
        </TableCell>
      </TableRow>
    </>
  );
}
