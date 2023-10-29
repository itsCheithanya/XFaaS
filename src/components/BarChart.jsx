import React from 'react';
import { useTheme } from '@emotion/react';
import { ResponsiveBar } from '@nivo/bar';
import barData from '../scenes/bar/BarData';

const BarChart = () => {
  const data = Object.entries(barData[0].workflow_invocations).map(([time, { invocations }]) => ({
    time,
    invocations,
  }));

  const theme = useTheme();
  const colors = theme.palette.mode === 'dark' ? 'lightblue' : 'lightblue';

  return (
    <ResponsiveBar
      data={data}
      keys={['invocations']}
      indexBy="time"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={colors}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of Invocations',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e => `${e.time}: ${e.invocations} invocations`}
    />
  );
};

export default BarChart;
