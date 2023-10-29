import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import InvocationData from './Data';

const InvocationDetails = () => {
  const [filterValue, setFilterValue] = useState('');
  const [invocationList, setInvocationList] = useState([]);
  const { id } = useParams();

  const convertInvocationList = () => {
    const instance = InvocationData.find(data => data.workflow_invocation_id === id);
    const invocationStartTime = instance ? instance.invocation_start_time_ms : 0; // Fetch the invocation start time
    const functions = instance ? instance.functions : {};

    const convertMsToDateTime = (ms) => {
      const date = new Date(invocationStartTime + ms); // Calculate date based on the invocation start time
      return date.toLocaleString();
    };

    for (const key in functions) {
      if (functions.hasOwnProperty(key)) {
        const func = functions[key];
        func.start_time_formatted = convertMsToDateTime(func.start_delta_ms);
        func.end_time_formatted = convertMsToDateTime(func.end_delta_ms);
      }
    }
    return functions;
  };

  useEffect(() => {
    const formattedInvocationList = convertInvocationList();
    setInvocationList(formattedInvocationList);
  }, [id]);

  //useEffect(() => {
  //  const fetchData = async () => {
  //    try {
  //      const response = await fetch('YOUR_API_ENDPOINT/' + id); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
  //      if (!response.ok) {
  //        throw new Error('Network response was not ok');
  //      }
  //      const data = await response.json();
  //      const formattedInvocationList = convertInvocationList(data);
  //      setInvocationList(formattedInvocationList);
  //    } catch (error) {
  //      console.error('Error fetching data:', error);
        // Handle errors or set a default state here if the fetch fails
  //    }
  //  };

  //  fetchData();
  //}, [id]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Filter and sort functions based on start time in ascending order
  const filteredInvocationList = Object.entries(invocationList)
    .filter(([key]) => key.startsWith(filterValue))
    .sort(([, a], [, b]) => b.end_delta_ms - a.end_delta_ms);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box p={2} paddingTop='10%'>
          <TextField
            label="Filter by ID"
            value={filterValue}
            onChange={handleFilterChange}
            variant="outlined"
          />
        </Box>
        <Box width="70%" p={5} border="2px solid blue" margin="0 auto" marginTop="2%" marginBottom='10%'>
          <TableContainer sx={{ bgcolor: 'background.paper' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'><b>Function ID</b></TableCell>
                  <TableCell align='center'><b>Start Time (UTC+5:30)</b></TableCell>
                  <TableCell align='center'><b>End Time (UTC+5:30)</b></TableCell>
                  <TableCell align='center'><b>Execution Time (ms)</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvocationList.map(([key, value]) => {
                  const executionTime = value.end_delta_ms - value.start_delta_ms;
                  return (
                    <TableRow key={key}>
                      <TableCell align='center'>{key}</TableCell>
                      <TableCell align='center'>{value.start_time_formatted}</TableCell>
                      <TableCell align='center'>{value.end_time_formatted}</TableCell>
                      <TableCell align='center'>{executionTime}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default InvocationDetails;
