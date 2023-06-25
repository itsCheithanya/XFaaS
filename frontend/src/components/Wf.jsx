import './Wf.css';
import  Graph  from 'react-graph-vis';
import DeploymentTable from './DeployTable';
import ResponsiveAppBar from './App-bar';
import { useNavigate } from 'react-router-dom';
import { useMode } from '../theme';
import {ThemeProvider} from "@mui/material"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { all } from 'axios';


const GraphWrapper = ({wfdetails}) => {
 //const {wfdetails} =wfdetails
 const graph={
  nodes:wfdetails.graphs["nodes"],
  edges:wfdetails.graphs["edges"]
 }
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
          direction:'LR',
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


  return (
    <div className="graphcontainer">
      <div className="graphbox">
        <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
      </div>
    </div>
  );
};

function createData(wf_deployment_id, wf_deployment_time, wf_deployment_name) {
  return { wf_deployment_id, wf_deployment_time, wf_deployment_name };
}

const Wf = () => {
  const [wfdetails,setWfdetails]=useState({
    "wfid": "",
    "wfname": "",
    "executedTime": "",
    "graphs":{
    "nodes": [
      { "id": 1, "label": "Node A",  },
      { "id": 2, "label": "Node B",  },
      { "id": 3, "label": "Node C", },
      { "id": 4, "label": "Node D", },
      { "id": 5, "label": "Node E", }
    ],
    "edges": [
      { "from": 1, "to": 2 },
      { "from": 1, "to": 5 },
      { "from": 1, "to": 3 },
      { "from": 2, "to": 4 },
      { "from": 2, "to": 5 }
    ]
    }
  });
  const [alldep,setAlldep]=useState([])
  const location=useLocation();
  //console.log(location)
  useEffect(()=>{
    const params=new URLSearchParams(location.search);
    const wfid=params.get("wfid");
    axios.post("/api/workflowId",{"wfid":wfid}).then(response=>{
      const resObj = JSON.parse(response.data);
      setWfdetails(resObj);

    }).catch(error => {
      console.error(error);
    });
  
  },[location]);
var deployments=[]

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const wfid = params.get("wfid");
  axios.post("/api/workflowId/deployments", { "wfid": wfid })
  .then(response => {
    response.data.forEach((dep)=>{
      deployments.push(createData(dep.wf_deployment_id, dep.wf_deployment_time, dep.wf_deployment_name));
    })
    const depArr = response.data;

   console.log(depArr);
   console.log(deployments);

    setAlldep(depArr);
  
  })
  .catch(error => {
    console.error(error);
  });
  }, [location]);
  console.log(alldep);
//   useEffect(()=>{
//     const params=new URLSearchParams(location.search);
//     const wfid=params.get("wfid");
//    axios.post("/api/workflowId/deployments",{"wfid":wfid}).then(response=>{
//     const depArr=response.data;
//     console.log(depArr);
//     setAlldep(depArr);
//     console.log(alldep);
    
//    }).catch(error => {
//     console.error(error);
//   });
//  },[wfdetails]);

  const [theme]=useMode();

    return(

    <ThemeProvider theme={theme}>
     
    <div className="App">

    <ResponsiveAppBar />


    <body>
    <div className ="box">
        <h3>Workflow ID: </h3>
        
        <div className='box'>{wfdetails.wfid}</div>
      </div>

      <div className="box">
        <h3>Workflow Name:  </h3>
        
        <div className='box'>{wfdetails.wfname}</div>
      </div>

      <div className="box">
        <h3>Workflow Parameters:  </h3>
        <div className='box'>{wfdetails.WorkflowDescription}</div>
      </div>
      <GraphWrapper wfdetails={wfdetails}/>
      <DeploymentTable alldep={alldep} />
      
    </body>
  
  </div>
</ThemeProvider>
  );
};

export default Wf;
