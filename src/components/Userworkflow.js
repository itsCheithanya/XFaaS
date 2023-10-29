import  Graph  from 'react-graph-vis';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {useMode} from "../theme"
import {ThemeProvider} from "@mui/material"
import GraphTable from '../components/GraphTable';


const GraphWrapper = () => {
  const navigate = useNavigate();

  const HandleNodeClick = (event) => {
    const nodeId = event.nodes[0];
    if (nodeId) {
      navigate('/wf/CodeViewer');
    }
  };

  const options = {
    layout: {
      hierarchical: {
        enabled:true,
        direction:'LR'
      },
    },
      edges: {
        arrows: 'to',
      },
      height: '400px',
      interaction: {
        zoomView: false, 
        hover: true, 
        hoverConnectedEdges: false,
        selectConnectedEdges: true,
     
      },
      nodes: {
  
      fixed:{
        x:true,
        y:true
      },
      opacity: 1,
  
      shape:"square",
  
      font: {
        "size": 18,
        "face": "ariel",
        
      },
  
  
    },
  
      
    
  };

  const graph = {
    nodes: [
        { id: 1, label: "1", color: "#41e0c9" },
        { id: 2, label: "2", color: "#41e0c9" },
        { id: 3, label: "3", color: "#41e0c9" },
        { id: 4, label: "4", color: "#41e0c9" },
        { id: 5, label: "5", color: "#41e0c9" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
  };

 

  return (
    <div className="graphcontainer">
      <div className="graphbox">
        <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
      </div>
    </div>
  );
};


function Userworkflow() {

    const [activeComponent, setActiveComponent] = useState('GraphWrapper');
  
    const handlegraphClick = () => {
      setActiveComponent('GraphWrapper');
    };
  
    const handleTableClick = () => {
      setActiveComponent('GraphTable');
    };
   
  const [theme]=useMode();
    return (
      <>
        <ThemeProvider theme={theme}>
          <div className="app">
            <div className="button-container">
            <Button 
              color="primary"
              size="large"
              variant="outlined"
              onClick={handlegraphClick}>Graph View
            </Button>
            <Button
              color="primary"
              size="large"
              variant="outlined"
              onClick={handleTableClick}>Table View
              </Button>
          </div>
          {activeComponent === 'GraphWrapper' ? <GraphWrapper /> : <GraphTable />}
            <main className="context">
  
            </main>
          </div>
          
        </ThemeProvider>
  
    </>
    
    );
  }
  
  export default Userworkflow;