import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from "axios";
import { useLocation } from "react-router-dom";

const StartvsEndHistogram = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [execTime, setExecTimeList] = useState([]);
  const location = useLocation();

  const calculateExecutionTime = (startTime, endTime) => {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    return (end - start) / 1000; // Returns execution time in seconds
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const depid = params.get("wf_deployment_id");
    axios.post("/api/deploymentId/invocations/workflowEndTime/", { "wf_deployment_id": depid })
      .then(res => {
        const list = res.data;
        setExecTimeList(list);
      })
      .catch(err => console.error(err));
  }, [selectedFilter]);

  useEffect(() => {
    const filterData = () => {
      const currentDate = new Date();
      switch (selectedFilter) {
        case 'lastDay':
         setExecTimeList(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 24 * 60 * 60 * 1000; // 24 hours
            })
          );
          break;
        case 'lastMonth':
         setExecTimeList(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 30 * 24 * 60 * 60 * 1000; // 30 days
            })
          );
          break;
        case 'last6Months':
         setExecTimeList(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 6 * 30 * 24 * 60 * 60 * 1000; // 6 months
            })
          );
          break;
        case 'last12Months':
         setExecTimeList(
            execTime.filter(item => {
              const startTime = new Date(item.invocation_start_time_ms);
              return currentDate - startTime <= 12 * 30 * 24 * 60 * 60 * 1000; // 12 months
            })
          );
          break;
        case 'all':
        default:
         setExecTimeList(execTime);
          break;
      }
    };

    filterData(); 
  }, [selectedFilter]);
  const startTimeHistogramData = execTime.map(item => ({
    startTime: new Date(item.invocation_start_time_ms).toLocaleString(),
    executionTime: calculateExecutionTime(item.invocation_start_time_ms, item.workflowEndTime),
  }));

  return (
    <>
      <FormControl>
        <InputLabel id="filter-label">Filter</InputLabel>
        <br />
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

      <ResponsiveBar
        data={startTimeHistogramData}
        keys={['executionTime']}
        indexBy="startTime"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 50,
          legend: 'Start Time',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          legend: 'Execution Time (seconds)',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </>
  );
};

export default StartvsEndHistogram;
