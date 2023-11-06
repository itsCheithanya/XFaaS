import AllwfTable from './components/Allwf';
import ResponsiveAppBar from './components/App-bar';
import "./App.css";
import { useMode } from './theme';
import {Box, ThemeProvider} from "@mui/material"
import TypewriterEffect from './TypeWriterEffect';

function App() {
  const [theme]=useMode();

  return (
 
    <ThemeProvider theme={theme}> 
      <ResponsiveAppBar />
      <div className="App">
      <TypewriterEffect text="Manage your workflows with XFaaS" />
        <AllwfTable /> 
      </div>
    </ThemeProvider>  
  );
}

export default App;
