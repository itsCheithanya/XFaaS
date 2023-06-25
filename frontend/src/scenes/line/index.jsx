import { Box } from "@mui/material";


import LineChart from "../../components/LineChart";

const Line = ({invocationId}) => {
              
  return (
    <Box m="10px">
      <Box height="45vh" width="40vw">
        <LineChart invocationId={invocationId} />
      </Box>
    </Box>
  );
};

export default Line;