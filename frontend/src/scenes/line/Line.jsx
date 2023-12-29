// // import { Box } from "@mui/material";


// // import LineChart from "../../components/LineChart";

// // const Line = ({invocationId}) => {
              
// //   return (
// //     <Box m="10px">
// //       <Box height="45vh" width="40vw">
// //         <LineChart invocationId={invocationId} />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Line;
// import React, { useState } from "react";
// import { Box, Button, styled } from "@mui/material";
// import { ResponsiveLine } from "@nivo/line";
// import axios from "axios";
// import { useTheme } from "@emotion/react";
// import { tokens } from "../../theme";

// const LineChart = ({ chartData }) => {

//   return (
//     <ResponsiveLine
  
//       data={[{ id: "invocations", data: chartData }]}
//       margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//       xScale={{ type: "point" }}
//       yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
//       curve="linear"
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "Time",
//         legendPosition: "middle",
//         legendOffset: 32,
//       }}
//       pointSize={10}
//       pointColor={{ theme: 'background' }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: 'serieColor' }}
//       pointLabelYOffset={-12}
//       useMesh={true}
//       axisLeft={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "Number of Invocations",
//         legendPosition: "middle",
//         legendOffset: -40,
//       }}
//       enablePointLabel={true}

//       colors={"lightblue"}
//       role="application"
//       ariaLabel="Nivo line chart demo"
//       pointLabel="y"
     
     
//     />
//   );
// };

// const CustomButton = styled(Button)({
//   background: "white",
//   color: "blue",
//   "&:hover": {
//     background: "white",
//   },
// });

// const Line = () => {
//   const [chartData, setChartData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.post("/api/deploymentId/invocations",{"wf_deployment_id":"5fa74fb4-bb52-4ce7-932a-d0d30936b3d3"});
//       const { workflow_deployment_id, no_of_invocations } = response.data;
//       const currentTime = new Date().toLocaleTimeString(); 

//       setChartData((prevData) => [
//         ...prevData,
//         {
//           x: currentTime,
//           y: no_of_invocations,
//         },
//       ]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <Box m="10px">
//       <CustomButton variant="contained" onClick={fetchData}>
//         Invocations
//       </CustomButton>
//       <Box height="45vh" width="40vw">
//         <LineChart chartData={chartData} />
//       </Box>
//     </Box>
//   );
// };

// export default Line;

// import { Box } from "@mui/material";


// import LineChart from "../../components/LineChart";

// const Line = ({invocationId}) => {
              
//   return (
//     <Box m="10px">
//       <Box height="45vh" width="40vw">
//         <LineChart invocationId={invocationId} />
//       </Box>
//     </Box>
//   );
// };

// export default Line;
import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const LineChart = ({ chartData }) => {

  return (
    <ResponsiveLine
  
      data={[{ id: "invocations", data: chartData }]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Time",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Invocations",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enablePointLabel={true}

      colors={"lightblue"}
      role="application"
      ariaLabel="Nivo line chart demo"
      pointLabel="y"
     
     
    />
  );
};

const CustomButton = styled(Button)({
  background: "white",
  color: "blue",
  "&:hover": {
    background: "white",
  },
});

const Line = () => {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post("/api/deploymentId/invocations",{"wf_deployment_id":"5fa74fb4-bb52-4ce7-932a-d0d30936b3d3"});
      const { workflow_deployment_id, no_of_invocations } = response.data;
      const currentTime = new Date().toLocaleTimeString(); 

      setChartData((prevData) => [
        ...prevData,
        {
          x: currentTime,
          y: no_of_invocations,
        },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box m="10px">
      <CustomButton variant="contained" onClick={fetchData}>
        Invocations
      </CustomButton>
      <Box height="45vh" width="40vw">
        <LineChart chartData={chartData} />
      </Box>
    </Box>
  );
};

export default Line;