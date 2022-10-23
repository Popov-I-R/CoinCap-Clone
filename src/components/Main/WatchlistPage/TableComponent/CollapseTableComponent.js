import { TableRow, TableCell,Table,TableHead,Typography,Box,TableBody } from '@mui/material'
import Collapse from '@mui/material/Collapse';


export default function CollapseTable(props) {
  return (
    <TableRow key={`${props.row.rank}collapse`}>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {props.row.history.map((historyRow, row) => (
                  <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>
                    <TableCell>{historyRow.customerId}</TableCell>
                    <TableCell align="right">{historyRow.amount}</TableCell>
                    <TableCell align="right">
                      {Math.round(historyRow.amount * props.row.price * 100) /
                        100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
