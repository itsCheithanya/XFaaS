const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const records = require("./database")
const deployments=require("./deployments/workflow1/deployment.js")
const refractored=require("./deployments/workflow1/deployment")
const app = express();
const port = 8000;


  
//aws connectivity
var AWS = require('aws-sdk');
const { log } = require('console');
var SHARED_VARIABLE,DEPLOYMENT_VARIABLE,REFACTORED_VARIABLE, INVOCATION_VARIABLE;
// Set the region
const region = "ap-south-1";
AWS.config.update({ region });

// Create an instance of the DynamoDB class
const dynamodb = new AWS.DynamoDB();

// Call the listTables method to retrieve the table names
dynamodb.listTables({}, (err, data) => {
  if (err) {
    console.error('Error listing tables:', err);
    console.error('Error message:', err.message);
    
  } else {
    const tableCount = data.TableNames.length;
    console.log('Number of tables:', tableCount);

    // Iterate over each table
    
    data.TableNames.forEach((tableName, index) => {
      console.log(`Table name: ${tableName}`);
      // Perform a scan operation on the table
      const scanParams = {
        TableName: tableName,
      };
 
      dynamodb.scan(scanParams, (err, scanData) => {
        if (err) {
          console.error(`Error scanning table ${tableName}:`, err);
          console.error('Error message:', err.message);
        } else {
          if(tableName=="workflow_user_table"){
            SHARED_VARIABLE=scanData.Items;
       
          }
          if(tableName=="workflow_deployment_table"){
            DEPLOYMENT_VARIABLE=scanData.Items
          }
          if(tableName=="workflow_refactored_table"){
            REFACTORED_VARIABLE=scanData.Items
          
          }
          if(tableName=="workflow_invocation_table"){
            INVOCATION_VARIABLE=scanData.Items
          
         
          
          }
         
        }

      });
    
    });
  }

});
// Number of tables: 7
// Table name: Test-invocation-table
// Table name: test-instance-table-modified
// Table name: test-invocation-table-modified
// Table name: workflow_deployment_table
// Table name: workflow_invocation_table
// Table name: workflow_refactored_table
// Table name: workflow_user_table


app.use(cors());
app.use(express.json());


app.get("/api/allWorkflows",(req,res)=>{
  const workflowInfo = SHARED_VARIABLE.map((record) => {
    const workflowName = record.WorkflowName.S;
    const wfId = record.wf_id.S;
    return { workflowName, wfId };
  });

   res.json(workflowInfo);
})

app.post("/api/workflowId",(req,res)=>{

  const wfIdToFetch = req.body.wfid; 

  const input = SHARED_VARIABLE.find(
    (item) => item.wf_id.S == wfIdToFetch
  );
  var output = {
    "wfid": input.wf_id.S,
    "wfname": input.WorkflowName.S,
    "graphs": {
      "nodes": input.Nodes.L.map((node, index) => ({ "id": parseInt(node.M.NodeId.S), "label": node.M.NodeName.S })),
      "edges": input.Edges.L.map(edge => {
        var fromNode = Object.keys(edge.M)[0];
        var toNodes = edge.M[fromNode].L.map(ele => ele.S);
        return toNodes.map(toNode => ({
          "from": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === fromNode).M.NodeId.S),
          "to": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === toNode).M.NodeId.S)
        }));
      }).flat()
    }
  };
  res.json(JSON.stringify(output))
})

app.post("/api/workflowId/deployments", (req, res) => {
  
  const clickedId = req.body.wfid;
 // return res.json({"msg":clickedId});
  const input = DEPLOYMENT_VARIABLE.filter(item => item.wf_id.S === clickedId);


    var output = input.map(obj => {
    var wf_id = obj.wf_id.S ? obj.wf_id.S: "";
    var wf_refactored_id = obj.wf_refactored_id ? obj.wf_refactored_id.S : "";
    var wf_deployment_name = obj.wf_deployment_name.S ?  obj.wf_deployment_name.S : "";
    var wf_deployment_id = obj.wf_deployment_id.S ? obj.wf_deployment_id.S : "" ;
    var wf_deployment_time = obj.wf_deployment_time.S ? obj.wf_deployment_time.S:"";
    
    var wf_dc_config = {};
    Object.entries(obj.wf_dc_config.M).forEach(([key, value]) => {
      wf_dc_config[key] = {
        region: value.M.region.S,
        csp: value.M.csp.S
      };
    });
    
    var func_deployment_config = {};
    Object.entries(obj.func_deployment_config.M).forEach(([key, value]) => {
      if (value.M) {
        func_deployment_config[key] = {
          dc_config_id: value.M.dc_config_id.S,
          resource_id: value.M.resource_id.S,
          endpoint: value.M.endpoint.S
        };
      } else if (value.S) {
        func_deployment_config[key] = value.S;
      }
    });
    
    return {
      wf_id: wf_id,
      wf_refactored_id: wf_refactored_id,
      wf_deployment_name: wf_deployment_name,
      wf_deployment_id: wf_deployment_id,
      wf_deployment_time: wf_deployment_time,
      wf_dc_config: wf_dc_config,
      func_deployment_config: func_deployment_config
    };
  });
//console.log(output);
  return res.json(output)

  //return res.json({"HELLO":"WORLD"})
  

});


app.post("/api/workflowId/deployments/deploymentId/", (req, res) => {
  var clickedId = req.body.wf_deployment_id;
  var deployment=DEPLOYMENT_VARIABLE.find((item)=>item.wf_deployment_id.S==clickedId);
  console.log(deployment)
 var input=REFACTORED_VARIABLE.find((item)=> item.wf_refactored_id.S==deployment.wf_refacored_id.S)//"66f2476a-be44-4ca1-92a0-a0671e118652")
  // return res.json({"allworkflows":SHARED_VARIABLE,"deployment table":DEPLOYMENT_VARIABLE,"refactored table":REFACTORED_VARIABLE});

//console.log(REFACTORED_VARIABLE)
  const output = {
    //"Wf_id": input.wf_id.S ? input.wf_id.S:"",
    "RefactoredWorkflowId": input.wf_refactored_id.S,
    "WorkflowName": input.WorkflowName.S,
    "refactoring_strategy": input.refactoring_strategy.S,
    "wf_fusion_config":input.wf_fusion_config.S ? [
      {
        "fused_func_id":input.wf_fusion_config.S,
        "original_func_ids": input.wf_partitions.L[0].M.function_ids.L.map(func => func.S)
      }
    ]: "",
    "wf_partitions": input.wf_partitions? [
      {
        "partition_label": input.wf_partitions.L[0].M.partition_label.S,
        "func_ids": input.wf_partitions.L[0].M.function_ids.L.map(func => func.S)
      }
    ] :"",
   
    "graphs": {
      "nodes": input.Nodes.L.map(node => {
        const nodeData = node.M;
        const nodeId = parseInt(nodeData.NodeId.S);
        const nodeName = nodeData.NodeName.S;
        const csp = nodeData.CSP.S;
        let color = "";

        if (csp === "Azure") {
          color = "#0080FF";
        } else if (csp === "AWS") {
          color = "#FF9900";
        } else if (csp === "GCP") {
          color = "#00CC00";
        } else {
          color = "#FF9900"; // Default color if CSP is not defined
        }

        return {
          "id": nodeId,
          "label": nodeName,
          "color": color
        };
      }),
      "edges": input.Edges.L.map(edge => {
        const fromNode = Object.keys(edge.M)[0];
        const toNodes = edge.M[fromNode].L.map(ele => ele.S);
        return toNodes.map(toNode => ({
          "from": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === fromNode).M.NodeId.S),
          "to": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === toNode).M.NodeId.S)
        }));
      }).flat()

    },
    
  };

//console.log(input)
 return res.json(output);
});
//to get refractored wf details from depid/refid
app.post("/api/workflowId/refactoredID/",(req,res)=>{
  var clickedId = req.body.wf_deployment_id;
  var dep=DEPLOYMENT_VARIABLE.find((item)=>item.wf_deployment_id.S==clickedId);
  var input=REFACTORED_VARIABLE.find((item)=> item.wf_refactored_id.S==dep.wf_refacored_id.S)
   //console.log(input);
//console.log(REFACTORED_VARIABLE)
  const output = {
    //"Wf_id": input.wf_id.S ? input.wf_id.S:"",
    "RefactoredWorkflowId": input.wf_refactored_id.S,
    "WorkflowName": input.WorkflowName.S,
    "refactoring_strategy": input.refactoring_strategy.S,
    "wf_fusion_config":input.wf_fusion_config.S ? [
      {
        "fused_func_id":input.wf_fusion_config.S,
        "original_func_ids": input.wf_partitions.L[0].M.function_ids.L.map(func => func.S)
      }
    ]: "",
    "wf_partitions": input.wf_partitions? [
      {
        "partition_label": input.wf_partitions.L[0].M.partition_label.S,
        "func_ids": input.wf_partitions.L[0].M.function_ids.L.map(func => func.S)
      }
    ] :"", 
    "graphs": {
      "nodes": input.Nodes.L.map(node => {
        const nodeData = node.M;
        const nodeId = parseInt(nodeData.NodeId.S);
        const nodeName = nodeData.NodeName.S;
        const csp = nodeData.CSP.S;
        let color = "";

        if (csp === "Azure") {
          color = "#0080FF";
        } else if (csp === "AWS") {
          color = "#FF9900";
        } else if (csp === "GCP") {
          color = "#00CC00";
        } else {
          color = "#FF9900"; // Default color if CSP is not defined
        }

        return {
          "id": nodeId,
          "label": nodeName,
          "color": color
        };
      }),
      "edges": input.Edges.L.map(edge => {
        const fromNode = Object.keys(edge.M)[0];
        const toNodes = edge.M[fromNode].L.map(ele => ele.S);
        return toNodes.map(toNode => ({
          "from": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === fromNode).M.NodeId.S),
          "to": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === toNode).M.NodeId.S)
        }));
      }).flat()
    },

  };

  return res.json(output);
})

app.post("/api/deploymentId/invocations",(req,res)=>{
  const clickedId ="76154d98-a0d7-4fc7-8c3e-99c74d91e2ed"//req.body.wf_deployment_id;

  var input=INVOCATION_VARIABLE.filter((item)=>item.workflow_deployment_id.S==clickedId);
  return res.json({"workflow_deployment_id":clickedId,"no_of_invocations":input.length});
 
})

app.post("/api/deploymentId/invocations/workflowEndTime/",async(req,res)=>{
  const clickedId ="76154d98-a0d7-4fc7-8c3e-99c74d91e2ed"//req.body.wf_deployment_id;
  var inputArray=INVOCATION_VARIABLE.filter((item)=>item.workflow_deployment_id.S==clickedId);
  const temp = await inputArray.map((input) => {
   const functionKeys = Object.keys(input.functions.M);
   const functions = {};
 
   for (const key of functionKeys) {
     const func = input.functions.M[key].M;
     functions[key] = {
       start_delta_ms: parseInt(func.start_delta.N),
       end_delta_ms: parseInt(func.end_delta.N),
     };
   }
 
   return {
     workflow_deployment_id: input.workflow_deployment_id.S,
     workflow_invocation_id: input.workflow_invocation_id.S,
     client_request_time_ms: parseInt(input.client_request_time_ms.S),
     invocation_start_time_ms: parseInt(input.invocation_start_time_ms.S),
     functions,
   };
 });
var output=[]
  for (let i = temp.length - 1; i >= 0; i--) {
    const obj = temp[i];
    const functions = obj.functions;
    // Check if the function ID exists in the functions object.
    if (!functions["254"]) {
      return null;
    }
    //console.log(functions)
   // Get the previous function ID.
const previousFunctionId = Object.keys(functions)[Object.keys(functions).indexOf("254") - 1];

    // Get the previous function end time.

const invocation_start_time_ms=obj["invocation_start_time_ms"];
const workflowEndTime = functions[previousFunctionId].end_delta_ms+invocation_start_time_ms;

    output.push({
      workflowEndTime,
      invocation_start_time_ms,
    });
  }

  return res.json(output);
 
})

app.post("/api/deploymentId/listAllInvocations/",async(req,res)=>{
  const clickedId ="76154d98-a0d7-4fc7-8c3e-99c74d91e2ed";//req.body.wf_deployment_id;//"76154d98-a0d7-4fc7-8c3e-99c74d91e2ed"
 var inputArray=INVOCATION_VARIABLE.filter((item)=>item.workflow_deployment_id.S==clickedId);
 const output = await inputArray.map((input) => {
  const functionKeys = Object.keys(input.functions.M);
  const functions = {};

  for (const key of functionKeys) {
    const func = input.functions.M[key].M;
    functions[key] = {
      start_delta_ms: parseInt(func.start_delta.N),
      end_delta_ms: parseInt(func.end_delta.N),
    };
  }

  return {
    workflow_deployment_id: input.workflow_deployment_id.S,
    workflow_invocation_id: input.workflow_invocation_id.S,
    client_request_time_ms: parseInt(input.client_request_time_ms.S),
    invocation_start_time_ms: parseInt(input.invocation_start_time_ms.S),
    functions,
  };
});
  return res.json(output);
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



