import { useState,useEffect,useMemo } from "react";
import {ColorModeContext,useMode} from "./theme"
import {ThemeProvider} from "@mui/material"
import Topbar from "./scenes/global/Topbar";
import CssBaseline from '@mui/material/CssBaseline';
import { Navigate, Route, Routes } from "react-router-dom";
import Bar from "./scenes/bar";
import Line from "./scenes/line"
import Invocation from "./scenes/invocations/Invocation";
import UserGraphs from "./scenes/graphs/Usergraphs";
import GraphComponent from "./scenes/graphs/Refgraph";
import GraphVisualization from "./scenes/graphs/Refgraph";
import ResponsiveAppBar from "./components/App-bar";
import Login from "./scenes/login/Login";
import { useSelector } from "react-redux";
import { useAuthStatus } from "./hooks/useAuthStatus";





function App() {
// const isAuthorizedfromstate=useSelector((state)=>state.isAuthorized)
// const usernamefromstate=useSelector((state)=>state.user)
const [result,setResult]=useAuthStatus();
const {isLoading,isAuthorized,username}=result;
const isAuth=Boolean(isAuthorized);

 
const [theme,colorMode]=useMode();
  return (
    <>
    
    <ColorModeContext.Provider value={colorMode}>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className="app"> 
              <main className="context">
          
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Invocation/>}/>
           <Route path="/bar" element={<Bar/>}/>
        </Routes>
           
              </main>
              </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
  </>
  
  );
}

export default App;









// <h1>Name:{name}</h1>
// <h1>Status:{isAuth.toString()}</h1>
// <h1>Status from state:{isAuthorizedfromstate.toString()}</h1>
// <h1>username:{username}</h1>
// <h1>username from state:{usernamefromstate}</h1>