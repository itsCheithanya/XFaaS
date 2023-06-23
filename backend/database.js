let records = [
  {
    "wfid": "WF001",
    "wfname": "Workflow 1",
    "executedTime": "2023-06-23 12:45:00",
    "graphs": {
      "nodes": [
        { "id": 1, "label": "Node A", "color": "41e0c9" },
        { "id": 2, "label": "Node B", "color": "#41e0c9" },
        { "id": 3, "label": "Node C", "color": "#41e0c9" }
      ],
      "edges": [
        { "from": 1, "to": 2 },
        { "from": 1, "to": 3 },
      ]
    }
  },
    {
      "wfid": "WF002",
      "wfname": "Workflow 2",
      "executedTime": "2023-06-23 12:45:00",
      "graphs": {
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
    },
    {
      "wfid": "WF003",
      "wfname": "Workflow 3",
      "executedTime": "2023-06-23 13:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start", "color": "41e0c9" },
          { "id": 2, "label": "Step 1", "color": "#41e0c9" },
          { "id": 3, "label": "Step 2", "color": "#41e0c9" },
          { "id": 4, "label": "Step 3", "color": "#41e0c9" },
          { "id": 5, "label": "End", "color": "#41e0c9" }
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
      "executedTime": "2023-06-23 13:15:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start", "color": "41e0c9" },
          { "id": 2, "label": "Step 1", "color": "#41e0c9" },
          { "id": 3, "label": "Step 2", "color": "#41e0c9" },
          { "id": 4, "label": "Step 3", "color": "#41e0c9" },
          { "id": 5, "label": "End", "color": "#41e0c9" }
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
      "executedTime": "2023-06-23 13:30:00",
      "graphs": {
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
      "wfid": "WF006",
      "wfname": "Workflow 6",
      "executedTime": "2023-06-23 13:45:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start", "color": "41e0c9" },
          { "id": 2, "label": "Step 1", "color": "#41e0c9" },
          { "id": 3, "label": "Step 2", "color": "#41e0c9" },
          { "id": 4, "label": "Step 3", "color": "#41e0c9" },
          { "id": 5, "label": "End", "color": "#41e0c9" }
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
      "executedTime": "2023-06-23 14:00:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start", "color": "41e0c9" },
          { "id": 2, "label": "Step 1", "color": "#41e0c9" },
          { "id": 3, "label": "Step 2", "color": "#41e0c9" },
          { "id": 4, "label": "Step 3", "color": "#41e0c9" },
          { "id": 5, "label": "End", "color": "#41e0c9" }
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
      "executedTime": "2023-06-23 14:15:00",
      "graphs": {
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
    },
    {
      "wfid": "WF009",
      "wfname": "Workflow 9",
      "executedTime": "2023-06-23 14:30:00",
      "graphs": {
        "nodes": [
          { "id": 1, "label": "Start", "color": "41e0c9" },
          { "id": 2, "label": "Step 1", "color": "#41e0c9" },
          { "id": 3, "label": "Step 2", "color": "#41e0c9" },
          { "id": 4, "label": "Step 3", "color": "#41e0c9" },
          { "id": 5, "label": "End", "color": "#41e0c9" }
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
