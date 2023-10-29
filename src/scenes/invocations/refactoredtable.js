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
  { id: 'Refactored_function', label: 'Refactored function', align: 'center', minWidth: 170 },
  { id: 'Original_Functions', label: 'Original Functions', align: 'center', minWidth: 100 },
];

const wfFusionConfig = [
    {
      fused_func_id: "3ycp",
      original_func_ids: ["zxd0", "rysh", "37u3"],
    },
  ];

  function createData(Refactored_function, Original_Functions) {
    return { Refactored_function, Original_Functions };
  }
  
  const rows = wfFusionConfig.map(item => createData(item.fused_func_id, item.original_func_ids.join(', ')));
  

export default function RefactoredTable() {
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
      <Paper sx={{width: '55%', overflow: 'hidden',margin: '0 auto', border: '2px solid blue', marginBottom: '20px', paddingBottom: '20px' }}>
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
                        <Link to="/wf/CodeViewer">{row[columns[0].id]}</Link>
                        </TableCell>
                        <TableCell key={columns[1].id} align={columns[1].align}>
                          {row[columns[1].id]}
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
