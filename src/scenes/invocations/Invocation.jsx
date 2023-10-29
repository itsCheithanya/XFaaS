import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import InvocationData from './Data';
import { Link } from 'react-router-dom';

const Invocation = () => {
  const [invocationList, setInvocationList] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    setInvocationList(InvocationData);
  }, []);

  //useEffect(() => {
  //  const fetchData = async () => {
  //   try {
  //     const response = await fetch('YOUR_API_ENDPOINT'); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
  //      if (!response.ok) {
  //        throw new Error('Network response was not ok');
  //      }
  //      const data = await response.json();
  //      setInvocationList(data);
  //    } catch (error) {
  //      console.error('Error fetching data:', error);
        // Handle errors or set a default state here if the fetch fails
  //    }
  //  };

  //  fetchData();
  //}, []);

  const getLastFunctionEndTime = (functions, invocationStartTime) => {
    const functionEntries = Object.entries(functions);
    if (functionEntries.length === 0) {
      return null;
    }

    const maxEndTime = Math.max(...functionEntries.map(([_, func]) => func.end_delta_ms));
    const lastFunctionEndTime = new Date(invocationStartTime + maxEndTime).toLocaleString();
    return lastFunctionEndTime;
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredInvocationList = invocationList.filter(item => item.workflow_invocation_id.startsWith(filterValue));

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box p={2} paddingTop='10%'>
          <TextField
            label="Filter by ID"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </Box>
        <Box width="70%" p={5} border="2px solid blue" margin="0 auto" marginTop="2%">
          <TableContainer sx={{ bgcolor: 'background.paper' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b>Invocation ID</b></TableCell>
                  <TableCell align="center"><b>Start Time</b></TableCell>
                  <TableCell align="center"><b>End Time</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvocationList.map(item => (
                  <TableRow key={item.workflow_invocation_id}>
                    <TableCell align="center">
                      <Link to={`/wf/invocations/${item.workflow_invocation_id}`}>{item.workflow_invocation_id}</Link>
                    </TableCell>
                    <TableCell align="center">{new Date(item.invocation_start_time_ms).toLocaleString()}</TableCell>
                    <TableCell align="center">
                      {getLastFunctionEndTime(item.functions, item.invocation_start_time_ms)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Invocation;
