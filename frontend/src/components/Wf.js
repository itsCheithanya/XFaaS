import './Wf.css';
import  Graph  from 'react-graph-vis';
import DeploymentTable from './DeployTable';
import ResponsiveAppBar from './App-bar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const GraphWrapper = (props) => {
  const navigate = useNavigate();

  const HandleNodeClick = (event) => {
    const nodeId = event.nodes[0];
    if (nodeId) {
      navigate('/wf/CodeViewer');
    }
  };

  const options = {
    layout: {
        hierarchical: false,
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

  // const graph = {
  //   nodes: [
  //       { id: 1, label: "1", color: "41e0c9" },
  //       { id: 2, label: "2", color: "#41e0c9" },
  //       { id: 3, label: "3", color: "#41e0c9" },
  //       { id: 4, label: "4", color: "#41e0c9" },
  //       { id: 5, label: "5", color: "#41e0c9" }
  //     ],
  //     edges: [
  //       { from: 1, to: 2 },
  //       { from: 1, to: 3 },
  //       { from: 2, to: 4 },
  //       { from: 2, to: 5 }
  //     ]
  // }; 

  const graph = {
      nodes: props.node,
        edges: props.edge
    }; 

  

  return (
    <div className="graphcontainer">
      <div className="graphbox">
        <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
      </div>
    </div>
  );
};




const Wf = (props) => {

    //initialize it with a dummy data to prevent loading error
    const [wfdetails, setWfdetails] = useState({
      "wfid": "",
      "wfname": "",
      "executedTime": "",
      "nodee": [
        { "id": 1, "label": "Node A", "color": "41e0c9" },
        { "id": 2, "label": "Node B", "color": "#41e0c9" },
        { "id": 3, "label": "Node C", "color": "#41e0c9" },
        { "id": 4, "label": "Node D", "color": "#41e0c9" },
        { "id": 5, "label": "Node E", "color": "#41e0c9" }
      ],
      "edgee": [
        { "from": 1, "to": 2 },
        { "from": 1, "to": 5 },
        { "from": 1, "to": 3 },
        { "from": 2, "to": 4 },
        { "from": 2, "to": 5 }
      ]
    })
    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);    
      const wfnametemp = params.get('wfname');

      axios.post('/getwfdetails', {"wfname":wfnametemp})
      .then(response => {
        console.log(response.data);
         const d =  {
          "wfid": "WF002",
          "wfname": "Workflow 2",
          "executedTime": "2023-06-23 12:45:00",
          "nodee": new Array({ "id": 1, "label": "Node A", "color": "41e0c9" }, { "id": 2, "label": "Node B", "color": "#41e0c9" }, { "id": 3, "label": "Node C", "color": "#41e0c9" }, { "id": 4, "label": "Node D", "color": "#41e0c9" }, { "id": 5, "label": "Node E", "color": "#41e0c9" }),
          "edgee": [
            { "from": 1, "to": 2 },
            { "from": 1, "to": 5 },
            { "from": 1, "to": 3 },
            { "from": 2, "to": 4 },
            { "from": 2, "to": 5 },
            { "from": 2, "to": 3 },
            { "from": 3, "to": 3 }
          ]
        }

        setWfdetails(d)
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

    //   fetch('/getwfdetails', {method: 'get'})
    //   .then(response => {
    //   if (!response.ok) {
    //     throw new Error(response.status + ' ' + response.statusText);
    //   }
    //   return response.json();
    //   })
    //   .then(data => {
    //     const d =  {
    //       "wfid": "WF002",
    //       "wfname": "Workflow 2",
    //       "executedTime": "2023-06-23 12:45:00",
    //       "nodee": new Array({ "id": 1, "label": "Node A", "color": "41e0c9" }, { "id": 2, "label": "Node B", "color": "#41e0c9" }, { "id": 3, "label": "Node C", "color": "#41e0c9" }, { "id": 4, "label": "Node D", "color": "#41e0c9" }, { "id": 5, "label": "Node E", "color": "#41e0c9" }),
    //       "edgee": [
    //         { "from": 1, "to": 2 },
    //         { "from": 1, "to": 5 },
    //         { "from": 1, "to": 3 },
    //         { "from": 2, "to": 4 },
    //         { "from": 2, "to": 5 },
    //         { "from": 2, "to": 3 },
    //       ]
    //     }

    //     setWfdetails(d)

    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });


    }, [location]);
    
    return(
    <div className="App">
    <header className="wf-header">
      
    <ResponsiveAppBar />

    </header>
    <body>
      <div className ="box">
        <p>Workflow ID: {wfdetails.wfid}</p>
      </div>

      <div className="box">
        <p>Workflow Name: {wfdetails.wfname}</p>
      </div>

      <div className="box1">
        <p>Workflow Parameters: {} </p>
      </div>
       <GraphWrapper node={wfdetails.nodee.map(item => ({ ...item }))} edge={wfdetails.edgee.map(item => ({ ...item }))}/> 

      <DeploymentTable></DeploymentTable>
    
    </body>
    <div className="FooterBox">

    </div>
  </div>

  );
};

export default Wf;
