import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import output from '../scenes/line/StartvsEndData';

const StartvsEndScatterPlot = () => {
  const XsortedData = output
    .map(item => ({
      x: new Date(item.invocation_start_time_ms).toLocaleString(),
      y: new Date(item.workflowEndTime).toLocaleString(),
    }))
    .sort((a, b) => new Date(a.x) - new Date(b.x));

  const YsortedData = [...XsortedData].sort((a, b) => new Date(a.y) - new Date(b.y));

  // Create formatted data
  const formattedData = [{ id: 'invocations', data: XsortedData }];

  const startX = XsortedData[0].x;
  const endX = XsortedData[XsortedData.length - 1].x;
  const startY = YsortedData[0].y;
  const endY = YsortedData[YsortedData.length - 1].y;

  return (
    <ResponsiveScatterPlot
      data={formattedData}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'point' }}
      colors="lightblue"
      blendMode="normal"
      enableGridX={true}
      enableGridY={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        legend: 'Start Time',
        legendPosition: 'middle',
        legendOffset: 32,
        tickValues: [startX, endX],
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        legend: 'End Time',
        legendPosition: 'middle',
        legendOffset: -40,
        tickValues: [startY, endY],
      }}
      nodeSize={8}
      tooltip={({ node }) => (
        <div
          style={{
            background: 'white',
            padding: '9px 12px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <strong>Start Time: {node.data.x}</strong>
          <br />
          <strong>End Time: {node.data.y}</strong>
        </div>
      )}
      
    />
  );
};

export default StartvsEndScatterPlot;
