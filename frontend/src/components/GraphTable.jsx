import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';


const columns = [
  { id: 'Fn', label: 'Func Name', align: 'center', minWidth: 170 },
  { id: 'ID', label: 'Func ID', align: 'center', minWidth: 170 },
  { id: 'CSP', label: 'CSP', align: 'center', minWidth: 100 },
  { id: 'Status', label: 'Status', align: 'center', minWidth: 100 },
];

function createData(Fn,ID, CSP, Status) {
  return { Fn,ID, CSP, Status };
}

const rows = [
  createData("Mobilenet",101, "Azure", "Executed"),
  createData("Squeezenet",102, "Azure", "Executed"),
  createData("Resnet",103, "AWS", "Running"),
  createData("Union",104, "AWS", "Waiting"),
  createData("CollectLogs",105, "AWS", "Waiting"),
];

export default function GraphTable({depdetails}) {
  const deploymentdet=depdetails
  console.log(deploymentdet);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Paper sx={{width: '70%', overflow: 'hidden',margin: '0 auto', border: '2px solid black', marginBottom: '20px', paddingBottom: '20px' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                  <TableRow>
                  {columns.map((column) => (
                      <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      >
                      {column.label}
                      </TableCell>
                  ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                          <TableCell key={columns[0].id} align={columns[0].align}>
                          {row[columns[0].id]}
                        </TableCell>
                        <TableCell key={columns[1].id} align={columns[1].align}>
                        <Link to="/wf/CodeViewer">{row[columns[1].id]}</Link>
                        </TableCell>
                    
                        <TableCell key={columns[2].id} align={columns[2].align}>
                          {row[columns[2].id]}
                        </TableCell>
                        <TableCell key={columns[3].id} align={columns[3].align}>
                          {row[columns[3].id]}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        
        </Paper>
    
  );
}


