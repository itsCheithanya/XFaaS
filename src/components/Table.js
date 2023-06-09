import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'ID', label: 'Deployment ID', align: 'center', minWidth: 170 },
  { id: 'time', label: 'Deployment Date/Time', align: 'center', minWidth: 100 },
  { id: 'config', label: 'Configuration', align: 'center', minWidth: 100 },
];

function createData(ID, time, config) {
  return { ID, time, config };
}

const rows = [
  createData(100001, "10-6-2023", "config A"),
  createData(100002, "23-5-2023", "config B"),
  createData(100003, "07-6-2023", "config C"),
  createData(100004, "02-5-2023", "config D"),
  createData(100005, "19-5-2023", "config E"),
  createData(100006, "13-4-2023", "config F"),
  createData(100007, "29-5-2023", "config G"),
  createData(100008, "10-6-2023", "config H"),
  createData(100009, "25-5-2023", "config I"),
  createData(100010, "10-6-2023", "config J"),
  createData(100011, "20-3-2023", "config K"),
  createData(100012, "19-5-2023", "config L"),
  createData(100013, "01-1-2023", "config M"),


];

export default function MyTable() {
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
      <Paper sx={{width: '70%', overflow: 'hidden',margin: '0 auto', border: '2px solid blue', marginBottom: '20px', paddingBottom: '20px' }}>
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
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {value}
                            </TableCell>
                        );
                        })}
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
