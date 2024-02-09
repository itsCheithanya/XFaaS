// import './Wf.css';
// import  Graph  from 'react-graph-vis';
// import DeploymentTable from './DeployTable';
// import ResponsiveAppBar from './App-bar';
// import { useNavigate } from 'react-router-dom';
// import { useMode } from '../theme';
// import {ThemeProvider} from "@mui/material"
// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios, { all } from 'axios';


// const GraphWrapper = ({wfdetails}) => {
//  //const {wfdetails} =wfdetails
//  const graph={
//   nodes:wfdetails.graphs["nodes"],
//   edges:wfdetails.graphs["edges"]
//  }
//   const navigate = useNavigate();

//   const HandleNodeClick = (event) => {
//     const nodeId = event.nodes[0];
//     if (nodeId) {
//       navigate('/wf/CodeViewer');
//     }
//   };

//   const options = {
//     layout: {
//         hierarchical: {
//           enabled:true,
//           direction:'LR',
//         },
    
//       },
//       edges: {
//         arrows: 'to',
//       },
//       height: '400px',
//       interaction: {
//         zoomView: false, 
//         hover: true, 
//         hoverConnectedEdges: false,
//         selectConnectedEdges: true,
     
//       },
//       nodes: {
  
//       fixed:{
//         x:true,
//         y:true
//       },
//       opacity: 1,
  
//       shape:"square",
  
//       font: {
//         "size": 18,
//         "face": "ariel",
        
//       },
  
  
//     },
  
    
    
//   };


//   return (
//     <div className="graphcontainer">
//       <div className="graphbox">
//         <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
//       </div>
//     </div>
//   );
// };

// function createData(wf_deployment_id, wf_deployment_time, wf_deployment_name) {
//   return { wf_deployment_id, wf_deployment_time, wf_deployment_name };
// }

// const Wf = () => {
//   const [wfdetails,setWfdetails]=useState({
//     "wfid": "",
//     "wfname": "",
//     "executedTime": "",
//     "graphs":{
//     "nodes": [],
//     "edges": []
//     }
//   });
//   const [alldep,setAlldep]=useState([])
//   const location=useLocation();
//   //console.log(location)
//   useEffect(()=>{
//     const params=new URLSearchParams(location.search);
//     const wfid=params.get("wfid");
//     axios.post("/api/workflowId",{"wfid":wfid}).then(response=>{
//       const resObj = JSON.parse(response.data);

//       setWfdetails(resObj);

//     }).catch(error => {
//       console.error(error);
//     });
  
//   },[location]);


// var deployments=[]

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const wfid = params.get("wfid");
//   axios.post("/api/workflowId/deployments", { "wfid": wfid })
//   .then(response => {
//      console.log(response.data);
//     response.data.forEach((dep)=>{
//       deployments.push(createData(dep.wf_deployment_id, dep.wf_deployment_time, dep.wf_deployment_name));
//     })
//     const depArr = response.data;

//   // console.log(depArr);


//     setAlldep(depArr);
  
//   })
//   .catch(error => {
//     console.error(error);
//   });
//   }, [location]);
//    console.log(alldep);
//    console.log(deployments);


//   const [theme]=useMode();

//     return(

//     <ThemeProvider theme={theme}>
     
//     <div className="App">

//     <ResponsiveAppBar />


//     <body>
//     <div className ="box">
//         <h3>Workflow ID: </h3>
        
//         <div className='box'>{wfdetails.wfid}</div>
//       </div>

//       <div className="box">
//         <h3>Workflow Name:  </h3>
        
//         <div className='box'>{wfdetails.wfname}</div>
//       </div>

//       <div className="box">
//         <h3>Workflow Description:  </h3>
//         <div className='box'>{wfdetails.WorkflowDescription}</div>
//       </div>
//       <GraphWrapper wfdetails={wfdetails}/>
//       <DeploymentTable alldep={alldep} />
      
//     </body>
  
//   </div>
// </ThemeProvider>
//   );
// };

// export default Wf;

// import './Wf.css';
// import  Graph  from 'react-graph-vis';
// import DeploymentTable from './DeployTable';
// import ResponsiveAppBar from './App-bar';
// import { useNavigate } from 'react-router-dom';
// import { useMode } from '../theme';
// import {ThemeProvider} from "@mui/material"
// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios, { all } from 'axios';


// const GraphWrapper = ({wfdetails}) => {
//  //const {wfdetails} =wfdetails
//  const graph={
//   nodes:wfdetails.graphs["nodes"],
//   edges:wfdetails.graphs["edges"]
//  }
//   const navigate = useNavigate();

//   const HandleNodeClick = (event) => {
//     const nodeId = event.nodes[0];
//     if (nodeId) {
//       navigate('/wf/CodeViewer');
//     }
//   };

//   const options = {
//     layout: {
//         hierarchical: {
//           enabled:true,
//           direction:'LR',
//         },
    
//       },
//       edges: {
//         arrows: 'to',
//       },
//       height: '400px',
//       interaction: {
//         zoomView: false, 
//         hover: true, 
//         hoverConnectedEdges: false,
//         selectConnectedEdges: true,
     
//       },
//       nodes: {
  
//       fixed:{
//         x:true,
//         y:true
//       },
//       opacity: 1,
  
//       shape:"square",
  
//       font: {
//         "size": 18,
//         "face": "ariel",
        
//       },
  
  
//     },
  
    
    
//   };


//   return (
//     <div className="graphcontainer">
//       <div className="graphbox">
//         <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
//       </div>
//     </div>
//   );
// };

// function createData(wf_deployment_id, wf_deployment_time, wf_deployment_name) {
//   return { wf_deployment_id, wf_deployment_time, wf_deployment_name };
// }

// const Wf = () => {
//   const [wfdetails,setWfdetails]=useState({
//     "wfid": "",
//     "wfname": "",
//     "executedTime": "",
//     "graphs":{
//     "nodes": [],
//     "edges": []
//     }
//   });
//   const [alldep,setAlldep]=useState([])
//   const location=useLocation();
//   //console.log(location)
//   useEffect(()=>{
//     const params=new URLSearchParams(location.search);
//     const wfid=params.get("wfid");
//     axios.post("/api/workflowId",{"wfid":wfid}).then(response=>{
//       const resObj = JSON.parse(response.data);

//       setWfdetails(resObj);

//     }).catch(error => {
//       console.error(error);
//     });
  
//   },[location]);


// var deployments=[]

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const wfid = params.get("wfid");
//   axios.post("/api/workflowId/deployments", { "wfid": wfid })
//   .then(response => {
//      console.log(response.data);
//     response.data.forEach((dep)=>{
//       deployments.push(createData(dep.wf_deployment_id, dep.wf_deployment_time, dep.wf_deployment_name));
//     })
//     const depArr = response.data;

//   // console.log(depArr);


//     setAlldep(depArr);
  
//   })
//   .catch(error => {
//     console.error(error);
//   });
//   }, [location]);
//    console.log(alldep);
//    console.log(deployments);


//   const [theme]=useMode();

//     return(

//     <ThemeProvider theme={theme}>
     
//     <div className="App">

//     <ResponsiveAppBar />


//     <body>
//     <div className ="box">
//         <h3>Workflow ID: </h3>
        
//         <div className='box'>{wfdetails.wfid}</div>
//       </div>

//       <div className="box">
//         <h3>Workflow Name:  </h3>
        
//         <div className='box'>{wfdetails.wfname}</div>
//       </div>

//       <div className="box">
//         <h3>Workflow Description:  </h3>
//         <div className='box'>{wfdetails.WorkflowDescription}</div>
//       </div>
//       <GraphWrapper wfdetails={wfdetails}/>
//       <DeploymentTable alldep={alldep} />
      
//     </body>
  
//   </div>
// </ThemeProvider>
//   );
// };

// export default Wf;

import './Wf.css';
import DeploymentTable from './DeployTable';
import ResponsiveAppBar from './App-bar';
import { useMode } from '../theme';
import {ThemeProvider} from "@mui/material"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { all } from 'axios';
//import MermaidDiagram from './MermaidDiagram.jsx';
import mermaid from 'mermaid';
import './MermaidDiagram.css'

function createData(wf_deployment_id, wf_deployment_time, wf_deployment_name) {
  return { wf_deployment_id, wf_deployment_time, wf_deployment_name };
}

// const MermaidDiagram = ({ definition }) => {
//   useEffect(() => {
//     // Initialize Mermaid when the component mounts
//     mermaid.initialize({ startOnLoad: true });

//   }, [definition]);

//   return (
//     <div id="mermaid-diagram" className="mermaid">
//       {definition}
//     </div>
//   );
// };m


const MermaidDiagram = ({ definition }) => {
  const [mermaidInitialized, setMermaidInitialized] = useState(false);

  useEffect(() => {
    // Initialize Mermaid when the component mounts 
    mermaid.initialize({ startOnLoad: true });
    setMermaidInitialized(true);
  }, [definition]);

  // useEffect(() => {
  //   const reloadCount = sessionStorage.getItem('reloadCount');
    
  //   if (mermaidInitialized && (!reloadCount || parseInt(reloadCount) === 0)) {
  //     const timeout = setTimeout(() => {
  //       sessionStorage.setItem('reloadCount', '1'); // Set the flag to prevent further reloads
  //       window.location.reload();
  //     }, 100);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [mermaidInitialized]);

  return (
    <div className='mermaid-container'>
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

const Wf = () => {  
  const [wfdetails,setWfdetails]=useState({
    "wfid": "",
    "wfname": "",
    "executedTime": "",
    "graphs":{
    "nodes": [],
    "edges": []
    },
    "mermaidGraphDefinition": ""
  });
  

  const [alldep,setAlldep]=useState([])
  

  const location=useLocation();
  useEffect(()=>{
    const params=new URLSearchParams(location.search);
    const wfid=params.get("wfid");
      {axios.post("/api/workflowId",{"wfid":wfid}).then(response=>{
        const resObj = JSON.parse(response.data);
        sessionStorage.removeItem('reloadCount');
        setWfdetails(resObj);
      }).catch(error => {
        console.error(error);
      }); } 
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
    setAlldep(depArr);  
  })
  .catch(error => {
    console.error(error);
  });
  }, [location]);



  const [theme] = useMode();
  
  return( 
      <ThemeProvider theme={theme}>  
        <ResponsiveAppBar />
        <div className='wf'>
      
          <body>
            <div className='metaDataDiv'>
              <div>
                <h3>Workflow ID: {wfdetails.wfid}</h3>
              </div>
              <div>
                <h3>Workflow Name: {wfdetails.wfname}</h3>
              </div>
              <div>
                <h3>Workflow Description: {wfdetails.WorkflowDescription}</h3>
              </div>
            </div>

            <div className="mermaidGraphh">  
                <div className='mermaidGraphhHeading'>User Submitted Workflow<span className='caution'><span className='cautionMark'>!</span> If graph is not visible, please reload the page</span></div>
                
              
              <h2></h2>
              {wfdetails.mermaidGraphDefinition !== '' ? (
                  <MermaidDiagram definition={wfdetails.mermaidGraphDefinition} />
              ) : (
                  <p style={{ padding: '2rem', fontSize: '1.5rem' }}>No user submitted workflow found</p>
              )}
            </div>

            <DeploymentTable alldep={alldep} />   
          </body>  
        </div>
      </ThemeProvider>
  );
};

export default Wf;