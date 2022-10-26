import { TableRow, TableCell,Table,TableHead,Typography,Box,TableBody } from '@mui/material'
import Collapse from '@mui/material/Collapse';


export default function CollapseTable(props) {
  return (
    <TableRow key={`${props.row.uuid}collapse`}>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
                <div>TEst</div>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
