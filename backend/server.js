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
var SHARED_VARIABLE;
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
            console.log(SHARED_VARIABLE);
          }
          // if(tableName=="workflow_deployment_table"){
          // //  DEPLYOMENT_VARIABLE=scanData
          // }
         
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
 console.log(output);
  res.json(JSON.stringify(output))
})

app.post("/api/workflowId/deployments", (req, res) => {
  const clickedId = req.body.wfid;
  const dep=deployments.deployments;
console.log(dep);
  return res.json(dep)
  

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



