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
          if(tableName==="workflow_user_table"){
         //   console.log(scanData);
            SHARED_VARIABLE=scanData.Items;
            // console.log(`Table ${tableName} contents:`, scanData.Items[0]);
            // console.log(`Table ${tableName} contents:`, scanData.Items[1]);
            // console.log(`Table ${tableName} contents:`, scanData.Items[2]);

          }
         
        }

      });
    
    });
  }

});



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

  const wfIdToFetch = req.body.wfid; // Replace with the desired wfId

  const fetchedObject = SHARED_VARIABLE.find(
    (item) => item.wf_id.S == wfIdToFetch
  );

  
  
  if (fetchedObject) {
    //console.log(fetchedObject);
  } else {
    console.log("Object not found.");
  }

  //resObj = records.records[parseInt(req.body.wfid.slice(-1), 10)-1]

  res.json(JSON.stringify(fetchedObject))
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
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



  // Read data from deployments.json file
//   fs.readFile(path.join(__dirname, 'samples', 'deployments.json'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
    
//     try {
//       const jsonData = JSON.parse(data);
      
//       // Find the specific data based on the clicked_id
//       const clickedData = jsonData.find(item => item.id === clickedId);
      
//       if (!clickedData) {
//         return res.status(404).json({ error: 'Data not found' });
//       }
      
//       return res.json(clickedData);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
//   });