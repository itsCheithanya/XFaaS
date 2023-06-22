import AllwfTable from './components/Allwf';
import ResponsiveAppBar from './components/App-bar';
import "./App.css";
import Welcome from './components/Welcome';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">      
        <ResponsiveAppBar />
      </header>

      <Welcome />

      <div className="tabs">

      </div>
         <AllwfTable /> 
      <div className="FooterBox">

      </div>
    </div>
  );
}

export default App;
