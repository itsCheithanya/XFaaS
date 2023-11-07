import React, { useState, useEffect } from 'react';
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
  { id: 'wf_deployment_id', label: 'Deployment ID', align: 'center', minWidth: 170 },
  { id: 'wf_deployment_time', label: 'Deployment Date/Time', align: 'center', minWidth: 100 },
  { id: 'wf_deployment_name', label: 'Deployment Name', align: 'center', minWidth: 100 },
];

function createData(wf_deployment_id, wf_deployment_time, wf_deployment_name) {
  return { wf_deployment_id, wf_deployment_time, wf_deployment_name };
}

export default function DeployTable({ alldep }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const temprows = [];
  
  useEffect(() => {
    alldep.forEach((dep) => {
      temprows.push(createData(dep.wf_deployment_id, dep.wf_deployment_time, dep.wf_deployment_name));
    });
    setRows(temprows);
  }, [alldep]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Create a function that filters rows based on the search query
  const filteredRows = rows.filter((row) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      row.wf_deployment_id.toString().toLowerCase().includes(lowerCaseSearchQuery) ||
      row.wf_deployment_name.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: '0 auto', marginBottom: '20px', paddingBottom: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius: '10px' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '15px' }}>
        <input
          type="text"
          placeholder="Search by Deployment ID or Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            fontSize: '1rem',
            padding: '8px',
            width: '300px',
            height: '40px',
            background: 'black',
            color: 'white',
            border: 'none',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5)',
            borderRadius: '10px',
          }}
        />
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: '1.5rem', color: 'white', backgroundColor: 'black' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.wf_deployment_id}>
                    <TableCell
                      key={columns[0].id}
                      align={columns[0].align}
                      style={{ fontSize: '0.8rem' }}
                    >
                      <Link
                        to={`/wf/deployment?wf_deployment_id=${row.wf_deployment_id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {row.wf_deployment_id}
                      </Link>
                    </TableCell>
                    <TableCell
                      key={columns[1].id}
                      align={columns[1].align}
                      style={{ fontSize: '1rem' }}
                    >
                      {row.wf_deployment_time}
                    </TableCell>
                    <TableCell
                      key={columns[2].id}
                      align={columns[2].align}
                      style={{ fontSize: '1rem' }}
                    >
                      <Link
                        to={`/wf/deployment?wf_deployment_id=${row.wf_deployment_id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {row.wf_deployment_name}
                      </Link>
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
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}