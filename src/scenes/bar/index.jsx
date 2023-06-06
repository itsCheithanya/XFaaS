import { Box } from "@mui/material";

import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="10px">
      <Box height="45vh" width="40vw">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;