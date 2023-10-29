import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import "./MermaidDiagram.css";


function MermaidDiagram({ definition }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return <div className="mermaid">{definition}</div>;
}

export default MermaidDiagram;

