const express = require("express")
const cors = require('cors');
const app = express()

// Enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

const data = [{
    "wfid": "WF001",
    "wfname": "Workflow 1",
    "executedTime": "2023-06-23 10:30:00",
    "graph": {
      "nodes": [
        { "id": 1, "label": "Node 1", "color": "41e0c9" },
        { "id": 2, "label": "Node 2", "color": "#41e0c9" },
        { "id": 3, "label": "Node 3", "color": "#41e0c9" },
        { "id": 4, "label": "Node 4", "color": "#41e0c9" },
        { "id": 5, "label": "Node 5", "color": "#41e0c9" }
      ],
      "edges": [
        { "from": 1, "to": 2 },
        { "from": 1, "to": 3 },
        { "from": 2, "to": 4 },
        { "from": 2, "to": 5 }
      ]
    }
  },
  {
    "wfid": "WF002",
    "wfname": "Workflow 2",
    "executedTime": "2023-06-23 12:45:00",
    "graph": {
      "nodes": [
        { "id": 1, "label": "Node A", "color": "41e0c9" },
        { "id": 2, "label": "Node B", "color": "#41e0c9" },
        { "id": 3, "label": "Node C", "color": "#41e0c9" },
        { "id": 4, "label": "Node D", "color": "#41e0c9" },
        { "id": 5, "label": "Node E", "color": "#41e0c9" }
      ],
      "edges": [
        { "from": 1, "to": 2 },
        { "from": 1, "to": 3 },
        { "from": 2, "to": 4 },
        { "from": 2, "to": 5 }
      ]
    }
  }  
  ]

app.get("/getAllwf",(req,res)=>{
    res.json(data)
})

app.post("/getwfdetails",(req,res)=>{
  console.log(req.body);
    res.json(data[1])
})

app.listen(5000,()=>{console.log("Server started at port 5000");})