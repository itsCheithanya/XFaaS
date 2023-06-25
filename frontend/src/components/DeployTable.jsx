import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Invocation from '../scenes/invocations/Invocation'
import { ListItem } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';


const columns = [
  { id: 'wf_refactored_id', label: 'Deployment ID', align: 'center', minWidth: 170 },
  { id: 'wf_deployment_time', label: 'Deployment Date/Time', align: 'center', minWidth: 100 },
  { id: 'wf_deployment_name', label: 'Deployment name', align: 'center', minWidth: 100 },
];

function createData(wf_refactored_id, wf_deployment_time, wf_deployment_name) {
  return { wf_refactored_id, wf_deployment_time, wf_deployment_name };
}


export default function DeployTable({alldep}) {
  const location=useLocation();
  const [rows,setRows]=useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const deparray=alldep;


console.log(deparray)

useEffect(() => {
  const temprows=[]
  deparray.forEach((dep)=>{
   temprows.push(createData(dep.wf_refactored_id, dep.wf_deployment_time, dep.wf_deployment_name)); 
  })

  setRows(temprows);
},);
console.log(rows);

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
                        <Link to={`/wf/deployment?wf_deployment_id=${row[columns[0].id]}`}>
                          {row[columns[0].id]}
                          </Link>
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


