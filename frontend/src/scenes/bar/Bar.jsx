// import { Box } from "@mui/material";

// import BarChart from "../../components/BarChart";

// const Bar = () => {
//   return (
//     <Box m="10px">
//       <Box height="45vh" width="40vw">
//         <BarChart />
//       </Box>
//     </Box>
//   );
// };

// export default Bar;
import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import axios from "axios";

const BarChart = ({ chartData }) => {
  const [totalInvocations, setTotalInvocations] = useState(0);

  return (
    <ResponsiveBar
      data={chartData}
      keys={["invocations"]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      indexScale={{ type: "point" }}
      yScale={{ type: "linear", min: 0, max: 100, stacked: true, reverse: false }}
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
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Percentage of Invocations",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enablePointLabel={true}
      useMesh={true}
      colors={["lightblue"]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      pointLabel="y"
      pointLabelYOffset={-12}
      pointSize={8}
      onMouseLeave={() => {
        setTotalInvocations(0);
      }}
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

const Bar = () => {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post("/api/deploymentId/invocations",{"wf_deployment_id":"5fa74fb4-bb52-4ce7-9324-d0d30936b3d3"});
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
        <BarChart chartData={chartData} />
      </Box>
    </Box>
  );
};

export default Bar;
