import React, { useState, useEffect } from 'react';
import  Graph  from 'react-graph-vis';


const UserGraphs = () => {
  const [userGraphs, setUserGraphs] = useState({});
  const [unodes, setUnodes] = useState([]);
  const [uedges, setUedges] = useState([]);

  useEffect(() => {
    const fetchUserJson = async () => {
      try {
        //const response = await fetch('url'); // Replace 'url' with the actual URL you want to fetch data from
        //const json = await response.json();
          const json={
          "WorkflowOwner": "User123",
          "WorkflowId": "abcde12345",
          "WorkflowName": "ImageProcessing",
          "WorkflowDescription": "Workflow for image processing",
          "WorkflowVersion": "1.0",
          "PackageUrl": "https://example.com/package.zip",
          "Nodes": [
            {
              "NodeId": "node1",
              "NodeName": "Resize",
              "Path": "examples/image-processing/resize",
              "EntryPoint": "resize.py",
              "MemoryInMB": 512
            },
            {
              "NodeId": "node2",
              "NodeName": "Crop",
              "Path": "examples/image-processing/crop",
              "EntryPoint": "crop.py",
              "MemoryInMB": 512
            },
            {
              "NodeId": "node3",
              "NodeName": "Rotate",
              "Path": "examples/image-processing/rotate",
              "EntryPoint": "rotate.py",
              "MemoryInMB": 512
            }
          ],
          "Edges": [
            {
              "node1": ["node2", "node3"]
            },
            {
              "node2": ["node3"]
            }
          ]
        }
        setUserGraphs(json);
        setUnodes(json.Nodes);
        setUedges(json.Edges);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserJson();
  }, []);

  const graph = {
    nodes: unodes.map((node) => ({ id: node.NodeId, label: node.NodeName })),
    edges: uedges.map((edge) => ({
      from: Object.keys(edge)[0],
      to: edge[Object.keys(edge)[0]][0],
    })),
  }

 console.log(graph.nodes);
  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000000',
    },
    nodes: {
      color: '#FFFFFF',
      font: {
        color: '#000000',
      },
    },
  };

  return <> 
  <Graph graph={graph} options={options} style={{ height: '500px' }} /></>
 
};

export default UserGraphs;
