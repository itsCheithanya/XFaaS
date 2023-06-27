let records = [
    {
      "wfid": "WF001",
      "wfname": "Workflow 1",
      "WorkflowDescription": "A worklfow for smart grid, smart grid is an electricity network allowing devices to communicate between suppliers to consumers, allowing them to manage demand, protect the distribution network, save energy and reduce costs",
      "executedTime": "2023-06-23 12:45:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Node A" },
          { "id": 2, "label": "Node B" },
          { "id": 3, "label": "Node C" },
          { "id": 4, "label": "Node D" },
          { "id": 5, "label": "Node E" }
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
      "WorkflowDescription": "Workflow 2 Description",
      "executedTime": "2023-06-23 12:45:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Node A" },
          { "id": 2, "label": "Node B" },
          { "id": 3, "label": "Node C" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 1, "to": 3 }
        ]
      }
    },
    {
      "wfid": "WF003",
      "wfname": "Workflow 3",
      "WorkflowDescription": "Workflow 3 Description",
      "executedTime": "2023-06-23 13:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF004",
      "wfname": "Workflow 4",
      "WorkflowDescription": "Workflow 4 Description",
      "executedTime": "2023-06-23 13:15:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF005",
      "wfname": "Workflow 5",
      "WorkflowDescription": "Workflow 5 Description",
      "executedTime": "2023-06-23 14:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF006",
      "wfname": "Workflow 6",
      "WorkflowDescription": "Workflow 6 Description",
      "executedTime": "2023-06-23 14:30:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF007",
      "wfname": "Workflow 7",
      "WorkflowDescription": "Workflow 7 Description",
      "executedTime": "2023-06-23 15:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF008",
      "wfname": "Workflow 8",
      "WorkflowDescription": "Workflow 8 Description",
      "executedTime": "2023-06-23 15:30:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF009",
      "wfname": "Workflow 9",
      "WorkflowDescription": "Workflow 9 Description",
      "executedTime": "2023-06-23 16:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    },
    {
      "wfid": "WF010",
      "wfname": "Workflow 10",
      "WorkflowDescription": "Workflow 10 Description",
      "executedTime": "2023-06-23 16:30:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start" },
          { "id": 2, "label": "Step 1" },
          { "id": 3, "label": "Step 2" },
          { "id": 4, "label": "Step 3" },
          { "id": 5, "label": "End" }
        ],
        "edges": [
          { "from": 1, "to": 2 },
          { "from": 2, "to": 3 },
          { "from": 3, "to": 4 },
          { "from": 4, "to": 5 }
        ]
      }
    }
  ];
    
    
  
  module.exports.records = records
