import React, { useState, useEffect } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from "axios";
import { useLocation } from "react-router-dom";

const StartvsEndScatterPlot = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  const [execTime,setExecTimeList]=useState([]);
  const location=useLocation();
  

  useEffect(() => {
    const params=new URLSearchParams(location.search);
  const depid=params.get("wf_deployment_id");
  axios.post("/api/deploymentId/invocations/workflowEndTime/",{"wf_deployment_id":depid}).then(res=>{
    const list=res.data
   
    setExecTimeList(list);
  
  }).catch(err=>
    console.error(err))
  },[selectedFilter])
  

  useEffect(() => {
    const filterData = () => {
      const currentDate = new Date();
      switch (selectedFilter) {
        case 'lastDay':
          setFilteredData(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 24 * 60 * 60 * 1000; // 24 hours
            })
          );
          break;
        case 'lastMonth':
          setFilteredData(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 30 * 24 * 60 * 60 * 1000; // 30 days
            })
          );
          break;
        case 'last6Months':
          setFilteredData(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 6 * 30 * 24 * 60 * 60 * 1000; // 6 months
            })
          );
          break;
        case 'last12Months':
          setFilteredData(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 12 * 30 * 24 * 60 * 60 * 1000; // 12 months
            })
          );
          break;
        case 'all':
        default:
          setFilteredData(execTime);
          break;
      }
    };

    filterData(); 
  }, [selectedFilter]);

  const XsortedData = filteredData
    .map(item => ({
      x: new Date(item.invocation_start_time_ms).toLocaleString(),
      y: new Date(item.workflowEndTime).toLocaleString(),
    }))
    .sort((a, b) => new Date(a.x) - new Date(b.x));

  const YsortedData = [...XsortedData].sort((a, b) => new Date(a.y) - new Date(b.y));

  const formattedData = [{ id: 'invocations', data: XsortedData }];

  const startX = XsortedData[0]?.x || '';
  const endX = XsortedData[XsortedData.length - 1]?.x || '';
  const startY = YsortedData[0]?.y || '';
  const endY = YsortedData[YsortedData.length - 1]?.y || '';

  return (
    <>
      <FormControl>
        <InputLabel id="filter-label">Filter</InputLabel>
        <br/>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="lastDay">Last Day</MenuItem>
          <MenuItem value="lastMonth">Last Month</MenuItem>
          <MenuItem value="last6Months">Last 6 Months</MenuItem>
          <MenuItem value="last12Months">Last 12 Months</MenuItem>
        </Select>
      </FormControl>
      
      <ResponsiveScatterPlot
        data={formattedData}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        xScale={{ 
          type: 'point',
          min: startX,
          max: endX,
         }}
        yScale={{ type: 'point', min: startY, max: endY }}
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
    </>
  );
};

export default StartvsEndScatterPlot;