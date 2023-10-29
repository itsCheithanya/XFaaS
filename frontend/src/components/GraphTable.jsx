import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const columns = [
  { id: 'Label', label: 'Label', align: 'center', minWidth: 100 },
  { id: 'ID', label: 'Func ID', align: 'center', minWidth: 170 },
  { id: 'CSP', label: 'CSP', align: 'center', minWidth: 100 },
];

function createData(Label, ID, CSP) {
  return { Label, ID, CSP };
}

export default function GraphTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const location=useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const wf_deployment_id= params.get("wf_deployment_id");
    axios.post("/api/workflowId/refactoredID", { "wf_deployment_id": wf_deployment_id })
      .then(response => {
        const nodes = response.data.graphs.nodes;
        const updatedRows = nodes.map(node => {
          return createData(node.label, node.id, node.color === "#0080FF" ? "Azure" : "AWS");
        });
        setRows(updatedRows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '70%', overflow: 'hidden', margin: '0 auto', border: '2px solid blue', marginBottom: '20px', paddingBottom: '20px' }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                    <TableCell key={columns[0].id} align={columns[0].align}>
                      <Link to="/wf/CodeViewer">{row[columns[0].id]}</Link>
                    </TableCell>
                    <TableCell key={columns[1].id} align={columns[1].align}>
                      {row[columns[1].id]}
                    </TableCell>
                    <TableCell key={columns[2].id} align={columns[2].align}>
                      {row[columns[2].id]}
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


