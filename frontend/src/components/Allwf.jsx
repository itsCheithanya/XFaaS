import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {  Link } from 'react-router-dom';
import axios from 'axios'

const columns = [
  { id: 'workflowID', label: 'Workflows ID', align: 'center', minWidth: 80 },
  { id: 'workflow', label: 'All workflows', align: 'center', minWidth: 80 },
  { id: 'time', label: 'Executed at', align: 'center', minWidth:80},
];

function createData(workflowID,workflow, time) {
  return {workflowID,workflow,time};
}



export default function AllwfTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows,setRows]=React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(()=>{
    axios.get('/api/allWorkflows').then(response=>{
      console.log(response.data)
      var rows=[]
      response.data.forEach(ele=>{
        rows.push(createData(ele["wfid"],ele["wfname"],ele["executedTime"]))
      });
      setRows(rows);
    }).catch(err=>{
      console.error(err) 
  })

  },[])



  

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
                        <Link to={`/wf?wfid=${row[columns[0].id]}`}>{row[columns[0].id]}</Link>
                
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