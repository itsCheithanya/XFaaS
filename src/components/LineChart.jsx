import { ResponsiveLine } from '@nivo/line'
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import React, { useState } from 'react';


var testData=[
  {
    "id": "10",
    "color": "hsl(157, 70%, 50%)",
    "data": [
      { "x": "Sunday", "y": 140 },
      { "x": "Monday", "y": 177 },
      { "x": "Tuesday", "y": 140 },
      { "x": "Wednesday", "y": 256 },
      { "x": "Thursday", "y": 191 },
      { "x": "Friday", "y": 193 },
      { "x": "Saturday", "y": 55 },
      { "x": "Sunday", "y": 37 },
      { "x": "Monday", "y": 4 },
      { "x": "Tuesday", "y": 75 },
      { "x": "Wednesday", "y": 289 },
      { "x": "Thursday", "y": 223 }
    ]
  },
  {
    "id": "20",
    "color": "hsl(30, 70%, 50%)",
    "data": [
      { "x": "Sunday", "y": 39 },
      { "x": "Monday", "y": 259 },
      { "x": "Tuesday", "y": 176 },
      { "x": "Wednesday", "y": 72 },
      { "x": "Thursday", "y": 92 },
      { "x": "Friday", "y": 274 },
      { "x": "Saturday", "y": 253 },
      { "x": "Sunday", "y": 231 },
      { "x": "Monday", "y": 116 },
      { "x": "Tuesday", "y": 93 },
      { "x": "Wednesday", "y": 115 },
      { "x": "Thursday", "y": 273 }
    ]
  },
  {
    "id": "30",
    "color": "hsl(151, 70%, 50%)",
    "data": [
      { "x": "Sunday", "y": 200 },
      { "x": "Monday", "y": 269 },
      { "x": "Tuesday", "y": 31 },
      { "x": "Wednesday", "y": 182 },
      { "x": "Thursday", "y": 162 },
      { "x": "Friday", "y": 109 },
      { "x": "Saturday", "y": 173 },
      { "x": "Sunday", "y": 62 },
      { "x": "Monday", "y": 282 },
      { "x": "Tuesday", "y": 109 },
      { "x": "Wednesday", "y": 228 },
      { "x": "Thursday", "y": 207 }
    ]
  },
  {
    "id": "40",
    "color": "hsl(270, 70%, 50%)",
    "data": [
      { "x": "Sunday", "y": 60 },
      { "x": "Monday", "y": 163 },
      { "x": "Tuesday", "y": 183 },
      { "x": "Wednesday", "y": 221 },
      { "x": "Thursday", "y": 119 },
      { "x": "Friday", "y": 288 },
      { "x": "Saturday", "y": 112 },
      { "x": "Sunday", "y": 68 },
      { "x": "Monday", "y": 89 },
      { "x": "Tuesday", "y": 280 },
      { "x": "Wednesday", "y": 259 },
      { "x": "Thursday", "y": 185 }
    ]
  }
]


const LineChart = ({ invocationId }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const filteredData = testData.map((data) => {
    const filteredDataPoints = data.data.filter((point) => {
      if (startDate && endDate) {
        // Check if the point's x value (day) is within the selected date range
        return point.x >= startDate && point.x <= endDate;
      }
      return true; // Show all data points if no date range is selected
    });

    return {
      ...data,
      data: filteredDataPoints,
    };
  });

  
  const invocationData = filteredData.find((data) => data.id === invocationId);

  if (invocationId === null || !invocationData) {
    return null; // Render null only when the invocationId prop is null or not found in the testData
  }

  return (
    <div style={{ height: '500px' }}>
      <div style={{ display: 'flex', marginBottom: '10%', marginLeft: '10%' }}>
        <div>
          Start Date: <input type="date" onChange={(e) => handleDateRangeChange(e.target.value, endDate)} />
        </div>
        <div style={{ marginLeft: '10%' }}>
          End Date: <input type="date" onChange={(e) => handleDateRangeChange(startDate, e.target.value)} />
        </div>
      </div>
      <ResponsiveLine
        data={[invocationData]}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}

        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'no_of_invocations',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    )
  }
    
export default LineChart;