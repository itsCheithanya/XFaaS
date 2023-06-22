import React, { useState, useEffect } from 'react';
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Line from '../line/Line';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Invocation = () => {
  const [invocationList, setInvocationList] = useState([]);
  const [selectedInvocation, setSelectedInvocation] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = () => {
      try {
        // Replace this with your actual API call
        // const response = await fetch('url');
        // const json = await response.json();
        const json = {
          workflow_deployment_id: 'uuid',
          workflow_invocation_id: 'uuid',
          client_request_time_ms: 1669527328928,
          invocation_start_time_ms: 1669527329557,
          functions: {
            10: {
              start_delta_ms: 0,
              end_delta_ms: 90
            },
            20: {
              start_delta_ms: 462,
              end_delta_ms: 522
            },
            30: {
              end_delta_ms: 1423,
              start_delta_ms: 1333
            },
            40: {
              end_delta_ms: 1907,
              start_delta_ms: 1707
            },
            50: {
              end_delta_ms: 2360,
              start_delta_ms: 2160
            },
            60: {
              end_delta_ms: 2693,
              start_delta_ms: 2653
            },
            70: {
              end_delta_ms: 3199,
              start_delta_ms: 3099
            }
          }
        };
        setInvocationList(json.functions);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleInvocation = (id) => {
    if (id !== selectedInvocation) {
      setSelectedInvocation(id);
    }
  };

  return (
    <Box display="flex" width="70%" justifyContent="space-around" p={5} border="2px solid blue" marginLeft="10%" marginBottom="20%"  marginTop="10%">
      <TableContainer sx={ {bgcolor: 'background.paper'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invocation ID</TableCell>
              <TableCell>Execution Time</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(invocationList).map(([key, value]) => {
              const executionTime = value.end_delta_ms - value.start_delta_ms;
              return (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{executionTime}</TableCell>
                  <TableCell>{value.end_delta_ms}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="moreinfo" onClick={() => handleInvocation(key)}>
                      <MoreHorizIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedInvocation && <Line invocationId={selectedInvocation} />}
    </Box>
  );
};

export default Invocation;
