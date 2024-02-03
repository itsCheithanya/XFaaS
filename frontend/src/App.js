import AllwfTable from './components/Allwf';
import ResponsiveAppBar from './components/App-bar';
import "./App.css";
import { useMode } from './theme';
import {Box, ThemeProvider} from "@mui/material"
import TypewriterEffect from './components/TypeWriterEffect';
import Footer from './components/Footer';

function App() {
  const [theme]=useMode();

  return (
 
    <ThemeProvider theme={theme}> 
      <ResponsiveAppBar />
      <div className="App">
      <TypewriterEffect text="Manage your workflows with XFaaS" />
        <AllwfTable /> 
      </div>
      <Footer></Footer>
    </ThemeProvider>  
  );
}

export default App;
