import {useMode} from "./theme"
import {ThemeProvider} from "@mui/material"
import "./InvocationsPage.css"
import  Graph  from 'react-graph-vis';
import ResponsiveAppBar from './components/App-bar';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import GraphTable from './components/GraphTable';
import axios from "axios";
import { useLocation } from "react-router-dom";
import mermaid from "mermaid";


const MermaidDiagram = ({ definition }) => {
  const [mermaidInitialized, setMermaidInitialized] = useState(false);

  useEffect(() => {
    // Initialize Mermaid when the component mounts
    mermaid.initialize({ startOnLoad: true });
    setMermaidInitialized(true);
  }, []);

  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount');
    
    if (mermaidInitialized && (!reloadCount || parseInt(reloadCount) === 0)) {
      const timeout = setTimeout(() => {
        sessionStorage.setItem('reloadCount', '1'); // Set the flag to prevent further reloads
        window.location.reload();
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [mermaidInitialized]);

  return (
    <div>
      {mermaidInitialized ? (
        <div id="mermaid-diagram" className="mermaid">
          {definition}
        </div>
      ) : (
        <p>Loading Mermaid diagram...</p>
      )}
    </div>
  );
};


const GraphWrapper = ({depdetails}) => {
  const depploymentdetails=depdetails;
  //console.log(depploymentdetails);
  const navigate = useNavigate();
  const location=useLocation();
  const [graphdet,setGraphdet]=useState({});
  const [graph,setGraph]=useState({
    nodes:[],
    edges:[],
    mermaidGraphDefinition: ""
  });
  

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const wf_deployment_id= params.get("wf_deployment_id");
    axios.post("/api/workflowId/refactoredID", { "wf_deployment_id": wf_deployment_id })
    .then(response => {
 
    const ref = response.data;
    //console.log("logging ref");
    //console.log(ref);
    sessionStorage.removeItem('reloadCount');
    setGraphdet(ref);

    setGraph(ref.graphs)
    console.log("all logging");
    console.log(ref);
  
  })
  .catch(error => {
    console.error(error);
  });
  }, [location]);
 console.log(graph);  



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
    // <div className="graphcontainer">
    //   <div className="graphbox">
    //     <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
    //   </div>      
    // </div>

    <div className="MermaidGraphh">
      <h1></h1>
        <MermaidDiagram definition={graph.mermaidGraphDefinition} />
      </div>
    
  );
};






function InvocationsPage() {
  const location=useLocation();
  const [depdetails,setDepdetails]=useState({})
  const [deploymentId,setDeploymentId]=useState("");
  useEffect(()=>{
    const params=new URLSearchParams(location.search);
    const depid=params.get("wf_deployment_id");
    setDeploymentId(depid)
    axios.post("/api/workflowId/deployments/deploymentId/",{"wf_deployment_id":depid}).then(res=>{
      const depObj=res.data
      console.log("res");
      setDepdetails(depObj);

    }).catch(err=>
      console.error(err)
    )
  },[location])
  console.log(depdetails)

  const [activeComponent, setActiveComponent] = useState('GraphWrapper');
  const navigate=useNavigate();

  const handlegraphClick = () => {
    setActiveComponent('GraphWrapper');
  };

  const handleTableClick = () => {
    setActiveComponent('GraphTable');
  };
  const handleInvoClick=()=>{
          navigate(`/wf/deployment/invocations/?wfid=${deploymentId}`);
  }
 
const [theme]=useMode();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
         
              <ResponsiveAppBar />
        
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
            <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={handleInvoClick}>Invocations 
            </Button>
        </div>
        {activeComponent === 'GraphWrapper' ? <GraphWrapper depdetails={depdetails}/> : <GraphTable depdetails={depdetails} />}
        
        </div>
        
      </ThemeProvider>
   
  </>
  
  );
}

export default InvocationsPage;