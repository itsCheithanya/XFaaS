// import React, { useEffect } from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import {  Link} from 'react-router-dom';
// import axios from 'axios'

// const columns = [
//   { id: 'workflowID', label: 'Workflow ID', align: 'center', minWidth: 80 },
//   { id: 'workflow', label: 'Workflow Name', align: 'center', minWidth: 80 },
// ];

// function createData(workflowID,workflow) {
//   return {workflowID,workflow};
// }



// export default function AllwfTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [rows,setRows]=React.useState([]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   React.useEffect(()=>{
//     axios.get('/api/allWorkflows').then(response=>{
//       var rows=[]
//       response.data.forEach(ele=>{
//         rows.push(createData(ele["wfId"],ele["workflowName"]))
//       });
//       setRows(rows);
//     }).catch(err=>{
//       console.error(err) 
//   })
//   },[])


//   return (
//       <Paper sx={{width: '70%', overflow: 'hidden',margin: '0 auto',  marginBottom: '20px', paddingBottom: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius: '10px' }}>
//         <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//             <TableHead sx={{}}>
//                 <TableRow>
//                 {columns.map((column) => (
//                     <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{ minWidth: column.minWidth , fontSize: '1.5rem', color: 'white', backgroundColor: 'black' }}
//                     >
//                     {column.label}
//                     </TableCell>
//                 ))}
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {rows
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => {
//                     return (
//                       <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>

//                         <TableCell key={columns[0].id} align={columns[0].align} style={{ fontSize: '1rem' }}>
//                         <Link to={`/wf?wfid=${row[columns[0].id]}`}
//                         style={{ textDecoration: 'none', color: 'black' }}>
//                         {row[columns[0].id]}</Link>               
//                         {/* {row[columns[0].id]} */}
//                         </TableCell>             

//                         <TableCell key={columns[1].id} align={columns[1].align} style={{ fontSize: '1rem' }}>
//                         <Link to={`/wf?wfid=${row[columns[0].id]}`}
//                         style={{ textDecoration: 'none', color: 'black' }}>
//                         {row[columns[1].id]}</Link>
//                         {/* {row[columns[1].id]} */}
//                         </TableCell> 

//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//         </TableContainer>
//         <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={rows.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//         />        
//       </Paper>    
//   );
// }

import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

const columns = [
  { id: 'workflowID', label: 'Workflow ID', align: 'center', minWidth: 80 },
  { id: 'workflow', label: 'Workflow Name', align: 'center', minWidth: 80 },
];

function createData(workflowID, workflow) {
  return { workflowID, workflow };
}

export default function AllwfTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get('/api/allWorkflows')
      .then(response => {
        const newRows = response.data.map(ele => createData(ele['wfId'], ele['workflowName']));
        setRows(newRows);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  // Create a function that filters rows based on the search query
  const filteredRows = rows.filter((row) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      row.workflowID.toString().toLowerCase().includes(lowerCaseSearchQuery) ||
      row.workflow.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <Paper sx={{ width: '70%', overflow: 'hidden', margin: '0 auto', marginBottom: '20px', paddingBottom: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius: '10px' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '15px' }}>
        <input
          type="text"
          placeholder="Search by Workflow ID or Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            fontSize: '1rem',
            padding: '8px',
            width: '300px', // Adjust width as needed
            height: '40px', // Adjust height as needed
            background: 'black',
            color: 'white',
            border: 'none',
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5)',
            borderRadius: '10px'
          }}
        />
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{}}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.workflowID}>
                    <TableCell
                      key={columns[0].id}
                      align={columns[0].align}
                      style={{ fontSize: '0.8rem' }}
                    >
                      <Link
                        to={`/wf?wfid=${row.workflowID}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {row.workflowID}
                      </Link>
                    </TableCell>
                    <TableCell
                      key={columns[1].id}
                      align={columns[1].align}
                      style={{ fontSize: '1rem' }}
                    >
                      <Link
                        to={`/wf?wfid=${row.workflowID}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {row.workflow}
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
