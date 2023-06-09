import './App.css';
import  Graph  from 'react-graph-vis';
//import React, { useState } from "react";
import MyTable from './components/Table';
import ResponsiveAppBar from './components/App-bar';

const App = () => { 

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      arrows: 'to',
    },
    height: '400px',
    interaction: {
      zoomView: false, // Disable zooming
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

    shape:"circle",

    font: {
      "size": 16,
      "face": "ariel",
      
    },


  },

    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -3000,
        centralGravity: 0.1,
        springLength: 100,
        springConstant: 0.04,
        damping: 0.09,
      },
      stabilization: {
        enabled: false
      },

      layout: {
        randomSeed: 42, 
      },

      
    },
  
  };
    const graph= {
      nodes: [
        { id: 1, label: "1", color: "41e0c9" },
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

    const HandleNodeClick = (event) => {
      const nodeId = event.nodes[0];
      if (nodeId) {
        const alertText = `You clicked on Node ${nodeId}`;
        alert(alertText);
        //window.location.href = '/path/to/redirect';
      }
    };
    
  
  return (
    <div className="App">
      <header className="App-header">
        
      <ResponsiveAppBar />

      </header>
      <body>
        <div className ="box">
          <p>Workflow ID: </p>
        </div>

        <div className="box">
          <p>Workflow Name: </p>
        </div>

        <div className="box1">
          <p>Workflow Parameters: </p>
        </div>

        <p>
          <div className="graphcontainer">
            <div className="graphbox">
              <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
            </div>
          </div>  
        </p>
        
        <MyTable></MyTable>
      
      </body>
      <div className="FooterBox">

      </div>
    </div>

  );
}

export default App;






  