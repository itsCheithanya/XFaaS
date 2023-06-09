import React, { useState, useEffect } from 'react';
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Line from '../line';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ResponsiveAppBar from '../../components/App-bar';
import { useAuthStatus } from '../../hooks/useAuthStatus';

const Invocation = () => {
  const [invocationList, setInvocationList] = useState([]);
  const [selectedInvocation, setSelectedInvocation] = useState(null);
  const [result,setResult]=useAuthStatus();
  const {isLoading,isAuthorized,username}=result;
  console.log(isAuthorized);

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
              end_delta_ms: 100
            },
            20: {
              start_delta_ms: 462,
              end_delta_ms: 562
            },
            30: {
              end_delta_ms: 1423,
              start_delta_ms: 1323
            },
            40: {
              end_delta_ms: 1907,
              start_delta_ms: 1807
            },
            50: {
              end_delta_ms: 2360,
              start_delta_ms: 2260
            },
            60: {
              end_delta_ms: 2753,
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

  return (<>
    <ResponsiveAppBar/>
  
{isAuthorized?<> 
  
  <Box display="flex" width="100%" justifyContent="space-around" p={5}>
      <TableContainer sx={ {bgcolor: 'background.paper'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invocation ID</TableCell>
              <TableCell>Start Delta</TableCell>
              <TableCell>End Delta</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(invocationList).map(([key, value]) => (
              <TableRow key={key} >
                {[key, value.start_delta_ms, value.end_delta_ms].map((cellValue, index) => (
                  <TableCell key={index}>{cellValue}</TableCell>
                ))}
                <TableCell align="right">
                  <IconButton aria-label="moreinfo" onClick={() => handleInvocation(key)}>
                  <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedInvocation && <Line invocationId={selectedInvocation} />}
    </Box>
</>:<>
<h1>404</h1>
<h5>NOT AUTHORISED USER..</h5>
</>}
  
    </>
  );
};

export default Invocation;

// import React, { useState, useEffect } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { Box, IconButton } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Line from '../line';
// import Bar from '../bar';

// const Invocation = () => {
//   const [invocationList, setInvocationList] = useState([]);
//   const [selectedInvocation, setSelectedInvocation] = useState(null);

//   useEffect(() => {
//     // Simulating fetching data from an API
//     const fetchData = () => {
//       try {
//         // Replace this with your actual API call
//         // const response = await fetch('url');
//         // const json = await response.json();
//           var json={ "workflow_deployment_id": "uuid",
//           "workflow_invocation_id": "uuid",
//           "client_request_time_ms": 1669527328928,
//           "invocation_start_time_ms": 1669527329557,
//           "functions": {
//             "10": {
//               "start_delta_ms": 0,
//               "end_delta_ms": 100
//             },
//             "20": {
//               "start_delta": 462,
//               "end_delta": 562,
//             },
//                "30": {
//     "end_delta": 1423,
//     "start_delta": 1323
//    },
//    "40": {
//     "end_delta": 1907,
//     "start_delta": 1807
//    },
//    "50": {
//     "end_delta": 2360,
//     "start_delta": 2260
//    },
//    "60": {
//     "end_delta": 2753,
//     "start_delta": 2653
//    },
//    "70": {
//     "end_delta": 3199,
//     "start_delta": 3099
//    }
//           }
//         }
//         setInvocationList(json.functions);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInvocation = (id) => {
//     if (id !== selectedInvocation) {
//       setSelectedInvocation(id);
//     }
      
//   }

//   return (
    

   
//       <>
      
//         <Box display="flex" width= '100%' justifyContent="space-around"  p={30} >
//       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <h1>Invocations</h1>
//         {Object.keys(invocationList).map((key) => (
//           <ListItem
//             key={key}
//             disableGutters
//             secondaryAction={
//               <IconButton aria-label="moreinfo"  onClick={() => handleInvocation(key)}>
//                 <MoreHorizIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary={`Invocation ID: ${key}` }  />
//           </ListItem>
//         ))}

//       </List>
//       { selectedInvocation &&  <Line invocationId={selectedInvocation}/> }
     
  
//     </Box>
//       </>
   
    
     
//   );
// };

// export default Invocation;
