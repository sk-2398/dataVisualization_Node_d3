import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !data.length) return;

    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Select the existing svg element using the ref
    const svg = d3.select(svgRef.current);

    svg.attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

    const chartGroup = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // D3 code to create the bar chart
    // Use data to draw the bars
    chartGroup
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => i * 30) // Dynamically position bars using the index
      .attr('y', (d) => height - d.intensity * 20) // Assuming intensity will determine the height of bars
      .attr('width', 20) // Assuming a constant width for bars
      .attr('height', (d) => d.intensity * 20)
      .attr('fill', 'steelblue'); // Set bar color to steel blue

    // Add x-axis label
    chartGroup
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + margin.bottom / 2)
      .attr('text-anchor', 'middle')
      .text('topic');

    // Add y-axis label
    chartGroup
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -margin.left / 2)
      .attr('text-anchor', 'middle')
      .text('intensity');
  }, [data]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
