import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from "axios";


const InvocationDetails = () => {
  const [filterValue, setFilterValue] = useState('');
  const [invocationList, setInvocationList] = useState([]);
  const [InvocationData,setInvocationData]=useState([]);
  const { id } = useParams();
  const location=useLocation();
  
  useEffect(() => {
    const params=new URLSearchParams(location.search);
  const depid=params.get("wf_deployment_id");
  axios.post("/api/deploymentId/listAllInvocations/",{"wf_deployment_id":depid}).then(res=>{
    const invo=res.data
   
    setInvocationData(invo);
  
  }).catch(err=>
    console.error(err))
  },[location])

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
   
  },)
  

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
 
// import React, { useState, useEffect } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, MenuItem, Select } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const InvocationDetails = () => {
//   const [filterValue, setFilterValue] = useState('');
//   const [filterTime, setFilterTime] = useState('all'); 
//   const [invocationList, setInvocationList] = useState([]);
//   const [InvocationData,setInvocationData]=useState([]);
//   const { id } = useParams();

//     const location=useLocation();
  
//   useEffect(() => {
//     const params=new URLSearchParams(location.search);
//   const depid=params.get("wf_deployment_id");
//   axios.post("/api/deploymentId/listAllInvocations/",{"wf_deployment_id":depid}).then(res=>{
//     const invo=res.data
   
//     setInvocationData(invo);
  
//   }).catch(err=>
//     console.error(err))
//   },[location])
//   const convertInvocationList = () => {
//     const instance = InvocationData.find(data => data.workflow_invocation_id === id);
//     const invocationStartTime = instance ? instance.invocation_start_time_ms : 0; 
//     const functions = instance ? instance.functions : {};

//     const convertMsToDateTime = (ms) => {
//       const date = new Date(invocationStartTime + ms); 
//       return date.toLocaleString();
//     };

//     for (const key in functions) {
//       if (functions.hasOwnProperty(key)) {
//         const func = functions[key];
//         func.start_time_formatted = convertMsToDateTime(func.start_delta_ms);
//         func.end_time_formatted = convertMsToDateTime(func.end_delta_ms);
//       }
//     }
//     return functions;
//   };

//   useEffect(() => {
//     const formattedInvocationList = convertInvocationList();
//     setInvocationList(formattedInvocationList);
//   }, );

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
  
//       return filteredData.filter(([_key, value]) => {
//         const startTime = new Date(value.start_time_formatted).getTime();
//         return startTime > filterTimes[filterTime];
//       });
//     }
//   };

//   const filteredInvocationList = Object.entries(invocationList)
//     .filter(([key]) => key.startsWith(filterValue))
//     .sort(([, a], [, b]) => b.end_delta_ms - a.end_delta_ms);

//   const filteredByTime = applyTimeFilter(filteredInvocationList);

//   return (
//     <div>
//       <Box p={2} display="flex" alignItems="center" paddingTop='10%'>
//           <Box mr={2}>
//             <TextField
//               label="Filter by ID"
//               value={filterValue}
//               onChange={handleFilterChange}
//               variant="outlined"
//             />
//           </Box>
//           <Box>
//             <Select
//               value={filterTime}
//               onChange={(event) => handleFilterByTime(event.target.value)}
//               variant="outlined"
//               displayEmpty
//             >
//               <MenuItem value="" disabled>
//                 Filter by Time
//               </MenuItem>
//               <MenuItem value="all">All</MenuItem>
//               <MenuItem value="last1Hour">Last 1 hour</MenuItem>
//               <MenuItem value="lastDay">Last day</MenuItem>
//               <MenuItem value="lastMonth">Last month</MenuItem>
//               <MenuItem value="last6Months">Last 6 months</MenuItem>
//               <MenuItem value="last12Months">Last 12 months</MenuItem>
//             </Select>
//           </Box>
//         </Box>

//         <Box width="70%" p={5} border="2px solid blue" margin="0 auto" marginTop="2%" marginBottom='10%'>
//           <TableContainer sx={{ bgcolor: 'background.paper' }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell align='center'><b>Function ID</b></TableCell>
//                   <TableCell align='center'><b>Start Time (UTC+5:30)</b></TableCell>
//                   <TableCell align='center'><b>End Time (UTC+5:30)</b></TableCell>
//                   <TableCell align='center'><b>Execution Time (ms)</b></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredByTime.map(([key, value]) => {
//                   const executionTime = value.end_delta_ms - value.start_delta_ms;
//                   return (
//                     <TableRow key={key}>
//                       <TableCell align='center'>{key}</TableCell>
//                       <TableCell align='center'>{value.start_time_formatted}</TableCell>
//                       <TableCell align='center'>{value.end_time_formatted}</TableCell>
//                       <TableCell align='center'>{executionTime}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </TableContainer>
        
//       </Box>
//     </div>
//   );
// };

// export default InvocationDetails;