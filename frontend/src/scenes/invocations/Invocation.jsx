import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Line from '../line';
import Bar from '../bar';
import { useMode } from '../../theme';
import { ThemeProvider } from '@emotion/react';
import ResponsiveAppBar from "../../components/App-bar";


const Invocation = (InvId) => {
 const id= InvId;
  const [invocationList, setInvocationList] = useState([]);
  const [selectedInvocation, setSelectedInvocation] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = () => {
      try {
        // Replace this with your actual API call
        // const response = await fetch('url');
        // const json = await response.json();
          var json={ "workflow_deployment_id": "uuid",
          "workflow_invocation_id": "uuid",
          "client_request_time_ms": 1669527328928,
          "invocation_start_time_ms": 1669527329557,
          "functions": {
            "10": {
              "start_delta_ms": 0,
              "end_delta_ms": 100
            },
            "20": {
              "start_delta": 462,
              "end_delta": 562,
            },
               "30": {
    "end_delta": 1423,
    "start_delta": 1323
   },
   "40": {
    "end_delta": 1907,
    "start_delta": 1807
   },
   "50": {
    "end_delta": 2360,
    "start_delta": 2260
   },
   "60": {
    "end_delta": 2753,
    "start_delta": 2653
   },
   "70": {
    "end_delta": 3199,
    "start_delta": 3099
   }
          }
        }
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
      
  }

 
  const [theme]=useMode();
  return (
    <>
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
        <Box display="flex" width= '100%' justifyContent="space-around"  p={2}  >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <h1>Deployment Invocations</h1>
        {Object.keys(invocationList).map((key) => (
          <ListItem
            key={key}
            disableGutters
            secondaryAction={
              <IconButton aria-label="moreinfo"  onClick={() => handleInvocation(key)}>
                <MoreHorizIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Invocation ID: ${key}` }  />
          </ListItem>
        ))}

      </List>
      { selectedInvocation &&  <Line invocationId={selectedInvocation}/> }
     <Bar/>
  
    </Box>
    </ThemeProvider>
      </>

   
    
     
  );
};

export default Invocation;
