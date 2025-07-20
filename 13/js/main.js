/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

const data = [25, 20, 10, 12, 15];

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

const circles = svg.selectAll("circle").data(data);

circles
  .enter()
  .append("circle")
  .attr("cx", (_, i) => i * 50 + 50)
  .attr("cy", 250)
  .attr("r", (d) => d)
  .attr("fill", "red");
