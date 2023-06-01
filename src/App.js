import { useState,useEffect,useMemo } from "react";
import {ColorModeContext,useMode} from "./theme"
import {ThemeProvider} from "@mui/material"
import Topbar from "./scenes/global/Topbar";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className="app">
              <main className="context">
                <Topbar />
                
              </main>
              </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
  
  
  );
}

export default App;
