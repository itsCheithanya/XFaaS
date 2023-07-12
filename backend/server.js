const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const records = require("./database")
const deployments=require("./deployments/workflow1/deployment.js")
const refractored=require("./deployments/workflow1/deployment")
const app = express();
const port = 5000;



//aws connectivity
var AWS = require('aws-sdk');
var SHARED_VARIABLE,DEPLOYMENT_VARIABLE;
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

  const input = DEPLOYMENT_VARIABLE.filter(item => item.wf_id.S === clickedId);
 console.log(input);

    var output = input.map(obj => {
    var wf_id = obj.wf_id.S ? obj.wf_id.S: "";
    var wf_refactored_id = obj.wf_refacored_id ? obj.wf_refacored_id.S : "";
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
console.log(output);
  return res.json(output)
  

});


app.post("/api/workflowId/deployments/deploymentId/", (req, res) => {
  const clickedId = req.body.wf_deployment_id;
//console.log(clickedId)
  const dep = deployments.deployments;
  const result = dep.find((obj) => obj.wf_deployment_id === clickedId);
  //console.log(result);
  return res.json(result);
});
//to get refractored wf details from depid/refid
app.post("/api/workflowId/refactoredID/",(req,res)=>{
  const clickedId = req.body.wf_deployment_id;
console.log(clickedId)
  const ref = refractored.refractored;
  const result = ref.find((obj) => obj["Refactored Workflow Id"] === clickedId);
  console.log(result);
  return res.json(result);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



