import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import {MdStarBorder} from "react-icons/md"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

// just for the tests 
function createData(rank, logoNameSymbolArray, price, marketCap, supply,volume,change) {
  return {
    rank,
    logoNameSymbolArray,
    price,
    marketCap,
    supply,
    volume,
    change
  };
}

const rows = [
// this is just for the test 
    //Rank /    Name(logo,name,sumbol)             /Price               /MarketC   /Supply/        Volume              /Change
createData(1,     ["logo","name","symbol"],   23223,              37426,                   1918,      1104,           19),
createData(2,     ["logo","name","symbol"],   1951094,            37426,                   1918,       1104,      299),
createData(3,     ["logo","name","symbol"],   152232,             37426,                     1918,     114,           399),
];

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'rank',
    numeric: true,
    disablePadding: true,
    label: 'rank',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'marketCap',
    numeric: true,
    disablePadding: false,
    label: 'MarketCap',
  },
  {
    id: 'supply',
    numeric: true,
    disablePadding: false,
    label: 'Supply',
  },
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Volume',
  },
  {
    id: 'change',
    numeric: true,
    disablePadding: false,
    label: 'Change',
  },
];

function MainTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        <MdStarBorder
            color="black"
            xs = {{align: "center"}}
        />
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

MainTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  
};

const CurrentTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Watchlist is empty
        </Typography>
      )}
    </Toolbar>
  );
};

CurrentTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function MainTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, rank) => {
    const selectedIndex = selected.indexOf(rank);
    let newSelected = [];
    
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, rank);
    } 
    else  {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (rank) => selected.indexOf(rank) !== -1;
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, }}>
        <CurrentTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750,columns: 2 }}
            aria-labelledby="tableTitle"
          >
            <MainTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              
            />
            <TableBody>
              {rows.slice().sort(getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.rank);
                  const labelId = {'aria-label': 'Checkbox Heart'};
                  return (
                    <TableRow
                      hover
                    //   onClick={(event) => handleClick(event, row.rank)} Тук е удобно да направя функцията за колапс бокс-а
                      role="checkbox"
                      tabIndex={-1}
                      key={row.rank}
                    >
                      <TableCell padding="checkbox">
                      <Checkbox
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.rank)}
                       {...labelId} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.rank}
                      </TableCell>
                      <TableCell align="right">{row.logoNameSymbolArray}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.marketCap}</TableCell>
                      <TableCell align="right">{row.supply}</TableCell>
                      <TableCell align="right">{row.volume}</TableCell>
                      <TableCell align="right">{row.change}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
