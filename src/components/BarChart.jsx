import { useTheme } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";

import { tokens } from "../theme";

var testData=[
    {
      "country": "wf1",
      "hot dog": 5,
      "kebab": 198,
      "kebabColor": "hsl(343, 70%, 50%)",
    },
    {
      "country": "wf2",
      "hot dog": 21,
      "hot dogColor": "hsl(22, 70%, 50%)",
     
    },
    {
      "country": "wf3",
      "donut": 98,
      "donutColor": "hsl(145, 70%, 50%)"
    },
    {
      "country": "wf4",
      
      "fries": 197,
      "friesColor": "hsl(23, 70%, 50%)",
  
    },
    {
      "country": "wf5",
    
     
      "sandwich": 131,
      "sandwichColor": "hsl(82, 70%, 50%)",
     
    },
    {
      "country": "wf6",
      "donut": 759,
      "donutColor": "hsl(132, 70%, 50%)"
    },
    {
      "country": "wf7",
      "hot dog": 500,
      "hot dogColor": "hsl(278, 70%, 50%)",
     
    }
  ];



const BarChart =()=>{
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
 
     <ResponsiveBar
        data={testData}
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

        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}

        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'workflows',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'no_of-invocations',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />

       
    )
    
}
export default BarChart;
