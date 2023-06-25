import AllwfTable from './components/Allwf';
import ResponsiveAppBar from './components/App-bar';
import "./App.css";
import Welcome from './components/Welcome';
import { useMode } from './theme';
import {Box, ThemeProvider} from "@mui/material"
import { useAuthStatus } from './hooks/useAuthStatus';


function App() {
  const [theme]=useMode();
  const [result,setResult]=useAuthStatus();
  const {isLoading,isAuthorized,username}=result;
  console.log(isAuthorized);

  return (
 
    <ThemeProvider theme={theme}>
 
        <ResponsiveAppBar />
     {/* {isAuthorized? */}
    <div className="App">     
      <Welcome />
      <div className="tabs">
      </div>
      <AllwfTable /> 
    </div>
    {/* :  <>
    <Box >
<h1> ...404...</h1>
<h5> ...NOT AUTHORISED USER...</h5>
</Box>
</>
} */}
    </ThemeProvider>
  
  );
}

export default App;
