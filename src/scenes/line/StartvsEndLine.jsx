import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import StartvsEndLineChart from "../../components/StartvsEnd";

const CustomButton = styled(Button)({
  background: "white",
  color: "blue",
  "&:hover": {
    background: "white"
  },
});

const StartvsEndLine = ({ invocationId }) => {
  const [showLineChart, setShowLineChart] = useState(false);

  const handleClick = () => {
    setShowLineChart(true);
  };

  return (
    <Box m="10px">
      <CustomButton variant="contained" onClick={handleClick}>
        Invocations
      </CustomButton>
      {showLineChart && (
        <Box height="45vh" width="40vw" paddingTop="50px" paddingLeft="50px">
          <StartvsEndLineChart/>
        </Box>
      )}
    </Box>
  );
};

export default StartvsEndLine;
