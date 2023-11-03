import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Select } from '@mui/material';
import InvocationData from './Data';
import { Link } from 'react-router-dom';

const Invocation = () => {
  const [invocationList, setInvocationList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filterTime, setFilterTime] = useState('all');

  useEffect(() => {
    setInvocationList(InvocationData);
  }, []);

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

  const handleFilterByTime = (timeValue) => {
    setFilterTime(timeValue);
  };

  const applyTimeFilter = (filteredData) => {
    if (filterTime === 'all') {
      return filteredData;
    } else {
      const now = Date.now();
      const filterTimes = {
        last1Hour: now - 3600000,
        lastDay: now - 86400000,
        lastMonth: now - 2629746000,
        last6Months: now - 15778476000,
        last12Months: now - 31556952000,
      };
      return filteredData.filter(item => {
        const startTime = new Date(item.invocation_start_time_ms).getTime();
        return startTime > filterTimes[filterTime];
      });
    }
  };

  const filteredInvocationListByID = invocationList.filter(item => item.workflow_invocation_id.startsWith(filterValue));

  const filteredByTime = applyTimeFilter(filteredInvocationListByID);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box p={2} paddingTop='10%'>
          <TextField
            label="Filter by ID"
            value={filterValue}
            onChange={handleFilterChange}
          />
          <Select
            value={filterTime}
            onChange={(event) => handleFilterByTime(event.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Filter by Time
            </MenuItem>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="last1Hour">Last 1 hour</MenuItem>
            <MenuItem value="lastDay">Last day</MenuItem>
            <MenuItem value="lastMonth">Last month</MenuItem>
            <MenuItem value="last6Months">Last 6 months</MenuItem>
            <MenuItem value="last12Months">Last 12 months</MenuItem>
          </Select>
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
                {filteredByTime.map(item => (
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
