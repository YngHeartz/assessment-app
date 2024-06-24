import React from 'react';

const SVGBarChart = ({ data }) => {
  const width = 300;
  const height = 200;
  const barWidth = width / data.length;

  const max = Math.max(...data);

  return (
    <>
    <h1>SVG Bar Chart</h1>
    <svg width={width} height={height}>
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * barWidth}
          y={height - (value / max) * height}
          width={barWidth - 1}
          height={(value / max) * height}
          fill="purple"
        />
      ))}
    </svg>
    </>
  );
};

export default SVGBarChart;