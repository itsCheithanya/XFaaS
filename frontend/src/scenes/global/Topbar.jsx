
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Toolbar=()=>{
    const theme = useTheme();
    const colors=tokens(theme.palette.mode)
    const colorMode=useContext(ColorModeContext)


    return <Box display="flex" justifyContent="space-around"
     p={2} >

        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            
           
        <IconButton type="button" sx={{ p: 1 }}>
        <div color="blue">XFaaS</div>
        </IconButton>
            </Box>

      <Box  display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
             {theme.palette.mode === "dark#" ?( <DarkModeOutlinedIcon/>): (<LightModeOutlinedIcon /> ) }
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon />
        </IconButton>
        </Box>

        
    </Box>
}

export default Toolbar