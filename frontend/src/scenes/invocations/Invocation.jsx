// import React, { useState, useEffect } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Select } from '@mui/material';
// import { useLocation } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import Line from '../line/Line';

// const Invocation = () => {
//   const [invocationList, setInvocationList] = useState([]);
//   const [filterValue, setFilterValue] = useState('');
//   const [filterTime, setFilterTime] = useState('all');
//   const [deploymentId,setDeploymentId]=useState("");

//   const location=useLocation();
  
//   useEffect(() => {
//   const params=new URLSearchParams(location.search);
// const depid=params.get("wf_deployment_id");
// setDeploymentId(depid)
// axios.post("/api/deploymentId/listAllInvocations/",{"wf_deployment_id":depid}).then(res=>{
//   const invo=res.data
 
//   setInvocationList(invo);

// }).catch(err=>
//   console.error(err))
// },[location])


//   const getLastFunctionEndTime = (functions, invocationStartTime) => {
//     const functionEntries = Object.entries(functions);
//     if (functionEntries.length === 0) {
//       return null;
//     }

//     const maxEndTime = Math.max(...functionEntries.map(([_, func]) => func.end_delta_ms));
//     const lastFunctionEndTime = new Date(invocationStartTime + maxEndTime).toLocaleString();
//     return lastFunctionEndTime;
//   };

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const handleFilterByTime = (timeValue) => {
//     setFilterTime(timeValue);
//   };

//   const applyTimeFilter = (filteredData) => {
//     if (filterTime === 'all') {
//       return filteredData;
//     } else {
//       const now = Date.now();
//       const filterTimes = {
//         last1Hour: now - 3600000,
//         lastDay: now - 86400000,
//         lastMonth: now - 2629746000,
//         last6Months: now - 15778476000,
//         last12Months: now - 31556952000,
//       };
//       return filteredData.filter(item => {
//         const startTime = new Date(item.invocation_start_time_ms).getTime();
//         return startTime > filterTimes[filterTime];
//       });
//     }
//   };

//   const filteredInvocationListByID = invocationList.filter(item => item.workflow_invocation_id.startsWith(filterValue));

//   const filteredByTime = applyTimeFilter(filteredInvocationListByID);

//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Line/>
//         <Box p={2} paddingTop='10%'>
//           <TextField
//             label="Filter by ID"
//             value={filterValue}
//             onChange={handleFilterChange}
//           />
//           <Select
//             value={filterTime}
//             onChange={(event) => handleFilterByTime(event.target.value)}
//             displayEmpty
//           >
//             <MenuItem value="" disabled>
//               Filter by Time
//             </MenuItem>
//             <MenuItem value="all">All</MenuItem>
//             <MenuItem value="last1Hour">Last 1 hour</MenuItem>
//             <MenuItem value="lastDay">Last day</MenuItem>
//             <MenuItem value="lastMonth">Last month</MenuItem>
//             <MenuItem value="last6Months">Last 6 months</MenuItem>
//             <MenuItem value="last12Months">Last 12 months</MenuItem>
//           </Select>
//         </Box>
//         <Box width="70%" p={5} border="2px solid blue" margin="0 auto" marginTop="2%">
//           <TableContainer sx={{ bgcolor: 'background.paper' }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="center"><b>Invocation ID</b></TableCell>
//                   <TableCell align="center"><b>Start Time</b></TableCell>
//                   <TableCell align="center"><b>End Time</b></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredByTime.map(item => (
//                   <TableRow key={item.workflow_invocation_id}>
//                     <TableCell align="center">
//                       <Link to={`/wf/invocations/${item.workflow_invocation_id}`}>{item.workflow_invocation_id}</Link>
//                     </TableCell>
//                     <TableCell align="center">{new Date(item.invocation_start_time_ms).toLocaleString()}</TableCell>
//                     <TableCell align="center">
//                       {getLastFunctionEndTime(item.functions, item.invocation_start_time_ms)}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Invocation

import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Select } from '@mui/material';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import Line from '../line/Line';
import StartvsEndScatterPlot from '../line/Line2';
import ResponsiveAppBar from '../../components/App-bar';
import {useMode} from '../../theme'
import {ThemeProvider} from "@mui/material"
import Paper from '@mui/material/Paper';

const Invocation = () => {
  const [invocationList, setInvocationList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filterTime, setFilterTime] = useState('all');
  const [deploymentId,setDeploymentId]=useState("");

  const location=useLocation();
  
  useEffect(() => {
  const params=new URLSearchParams(location.search);
const depid=params.get("wf_deployment_id");
setDeploymentId(depid)
axios.post("/api/deploymentId/listAllInvocations/",{"wf_deployment_id":depid}).then(res=>{
  const invo=res.data
 
  setInvocationList(invo);

}).catch(err=>
  console.error(err))
},[location])



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

  const [theme]=useMode();

  return (
<>
<ThemeProvider theme={theme}>
    <div className='app'>
    <ResponsiveAppBar/>
    <div>
    
      <Box display="flex" flexDirection="column" alignItems="center">

      {/* <Box height="45vh" width="80vw" paddingTop="50px" paddingLeft="50px" 
        sx={{
              overflow: 'hidden',
              margin: '8rem auto',
              marginBottom: '20px',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              borderRadius: '6px',
            }}>
        <Line/> 
        </Box> */}
     
        <Box sx={{
              overflow: 'hidden',
              margin: '4rem auto',
              marginBottom: '20px',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              borderRadius: '6px',
            }}>
        <Line/> 
        </Box>



        {/* <Box height="45vh" width="80vw" paddingTop="50px" paddingLeft="50px"
        >
        <StartvsEndScatterPlot/>
        </Box> */}

        <Box height="45vh" width="80vw" paddingTop="50px" paddingLeft="50px" sx={{
              margin: '4rem auto',
              marginBottom: '20px',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              borderRadius: '6px',
              height:"50rem",              
              paddingBottom: '8rem'
            }}>
        <StartvsEndScatterPlot/>
        </Box>
       
        

        <Box
            p={2}
            padding='6px'
            sx={{
              overflow: 'hidden',
              margin: '8rem auto',
              marginBottom: '20px',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              borderRadius: '6px',
            }}
          >
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

        

        <Paper sx={{ width: '80%', overflow: 'hidden', margin: '0 auto', marginBottom: '20px', paddingBottom: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius: '10px' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '15px' }}>
        
      </div>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontSize: '1.5rem', color: 'white', backgroundColor: 'black' }}>Invocation ID</TableCell>
                  <TableCell align="center" style={{ fontSize: '1.5rem', color: 'white', backgroundColor: 'black' }}>Start Time</TableCell>
                  <TableCell align="center" style={{ fontSize: '1.5rem', color: 'white', backgroundColor: 'black' }}>End Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredByTime.map(item => (
                  <TableRow key={item.workflow_invocation_id}>
                    <TableCell align="center" style={{ fontSize: '1rem' }}>
                      <Link to={`/wf/invocations/${item.workflow_invocation_id}`}
                      style={{ color: 'black' }}>{item.workflow_invocation_id}</Link>
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: '1rem' }}>{new Date(item.invocation_start_time_ms).toLocaleString()}</TableCell>
                    <TableCell align="center" style={{ fontSize: '1rem' }}>
                      {getLastFunctionEndTime(item.functions, item.invocation_start_time_ms)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
      </Box>
    </div>
    </div>
    </ThemeProvider>
    </>
  );
};

export default Invocation