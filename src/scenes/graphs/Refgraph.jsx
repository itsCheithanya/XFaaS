import React, { useState } from 'react';
import Graph  from 'react-graph-vis';

const GraphVisualization = ({ graphData }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  const options = {
    // Graph options configuration
    nodes: {
      // Customize node appearance based on selection
      color: {
        background: node => (node === selectedNode ? 'yellow' : 'green'),
      },
    },
  };

  const events = {
    // Handle node click event
    click: event => {
      if (event.nodes.length > 0) {
        const nodeId = event.nodes[0];
        const selectedNodeData = graphData.Nodes.find(node => node.NodeId === nodeId);
        setSelectedNode(selectedNodeData);
      }
    },
  };

  const graph = {
    nodes: graphData.Nodes.map(node => ({
      id: node.NodeId,
      label: node.IsFused ? `${node.NodeName} (Fused)` : node.NodeName,
    })),
    edges: graphData.Edges.map(edge => ({
      from: edge.src_node_id,
      to: edge.sink_node_id,
    })),
  };

  return (
    <div>
      <Graph graph={graph} options={options} events={events} style={{ height: '400px' }} />
      {selectedNode && (
        <div>
          <h2>Node Functions</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            {/* Display the node functions */}
            {/* { selectedNode.EntryPoint} */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GraphVisualization;
