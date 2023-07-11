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
    "nodes": [],
    "edges": []
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

// const Wf = () => {
//   const [wfdetails,setWfdetails]=useState({"Nodes":{"L":[{"M":{"NodeId":{"S":"1"},"NodeName":{"S":"TaskA"},"Path":{"S":"examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"2"},"NodeName":{"S":"TaskB"},"Path":{"S":"examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"256"}}},{"M":{"NodeId":{"S":"3"},"NodeName":{"S":"TaskC"},"Path":{"S":"examples/smart-grid-fusion-aws/src/resnet_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"512"}}},{"M":{"NodeId":{"S":"4"},"NodeName":{"S":"TaskD"},"Path":{"S":"examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"5"},"NodeName":{"S":"TaskE"},"Path":{"S":"examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"256"}}},{"M":{"NodeId":{"S":"6"},"NodeName":{"S":"TaskF"},"Path":{"S":"examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"7"},"NodeName":{"S":"TaskG"},"Path":{"S":"examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"8"},"NodeName":{"S":"TaskH"},"Path":{"S":"examples/smart-grid-fusion-aws/src/resnet_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"512"}}},{"M":{"NodeId":{"S":"9"},"NodeName":{"S":"TaskI"},"Path":{"S":"examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"256"}}},{"M":{"NodeId":{"S":"10"},"NodeName":{"S":"TaskJ"},"Path":{"S":"examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"11"},"NodeName":{"S":"TaskK"},"Path":{"S":"examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"256"}}},{"M":{"NodeId":{"S":"12"},"NodeName":{"S":"TaskL"},"Path":{"S":"examples/smart-grid-fusion-aws/src/resnet_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"512"}}},{"M":{"NodeId":{"S":"13"},"NodeName":{"S":"TaskM"},"Path":{"S":"examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"14"},"NodeName":{"S":"TaskN"},"Path":{"S":"examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}},{"M":{"NodeId":{"S":"15"},"NodeName":{"S":"TaskO"},"Path":{"S":"examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"256"}}},{"M":{"NodeId":{"S":"16"},"NodeName":{"S":"TaskP"},"Path":{"S":"examples/smart-grid-fusion-aws/src/resnet_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"512"}}},{"M":{"NodeId":{"S":"17"},"NodeName":{"S":"TaskQ"},"Path":{"S":"examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"},"EntryPoint":{"S":"func.py"},"CSP":{"S":"Azure"},"MemoryInMB":{"N":"128"}}}]},"wf_id":{"S":"fdaff394-215c-40bb-8ca0-1affa6128a02"},"WorkflowName":{"S":"SmartGridFusionAWS"},"Edges":{"L":[{"M":{"TaskA":{"L":[{"S":"TaskB"}]}}},{"M":{"TaskB":{"L":[{"S":"TaskC"}]}}},{"M":{"TaskC":{"L":[{"S":"TaskD"},{"S":"TaskE"}]}}},{"M":{"TaskD":{"L":[{"S":"TaskM"}]}}},{"M":{"TaskE":{"L":[{"S":"TaskF"}]}}},{"M":{"TaskF":{"L":[{"S":"TaskG"},{"S":"TaskH"},{"S":"TaskI"}]}}},{"M":{"TaskG":{"L":[{"S":"TaskK"}]}}},{"M":{"TaskH":{"L":[{"S":"TaskK"}]}}},{"M":{"TaskI":{"L":[{"S":"TaskJ"}]}}},{"M":{"TaskJ":{"L":[{"S":"TaskK"}]}}},{"M":{"TaskK":{"L":[{"S":"TaskL"}]}}},{"M":{"TaskL":{"L":[{"S":"TaskP"}]}}},{"M":{"TaskM":{"L":[{"S":"TaskN"}]}}},{"M":{"TaskN":{"L":[{"S":"TaskO"}]}}},{"M":{"TaskO":{"L":[{"S":"TaskL"}]}}},{"M":{"TaskP":{"L":[{"S":"TaskQ"}]}}}]}});
//   const [alldep,setAlldep]=useState([])
//   const location=useLocation();
//   //console.log(location)
//   useEffect(()=>{
//     const params=new URLSearchParams(location.search);
//     const wfid=params.get("wfid");
//     axios.post("/api/workflowId",{"wfid":wfid}).then(response=>{
//       const resObj = JSON.parse(response.data);
//       console.log(resObj);
//       setWfdetails(resObj);

//     }).catch(error => {
//       console.error(error);
//     });
  
//   },[location]);

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
        <h3>Workflow Description:  </h3>
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
