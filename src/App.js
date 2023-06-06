import { useState,useEffect,useMemo } from "react";
import {ColorModeContext,useMode} from "./theme"
import {ThemeProvider} from "@mui/material"
import Topbar from "./scenes/global/Topbar";
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
import Bar from "./scenes/bar";
import Line from "./scenes/line"
import Invocation from "./scenes/invocations/Invocation";
import UserGraphs from "./scenes/graphs/Usergraphs";






function App() {
const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className="app"> 
              <main className="context">
                <Topbar />
             
              
        <Routes>
          <Route path="/" element={<Invocation/>}/>
            
           {/* <Route path="/" element={<Bar/>}/> */}
        

        </Routes>
           
              </main>
              </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
  
  
  );
}

export default App;
