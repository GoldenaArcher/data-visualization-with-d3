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

d3.json("data/buildings.json").then((data) => {
  // Add an SVG to the #chart-area  div in the index.html file. Give it a width of 500px and a height of 500px.
  const svg = d3
    .select("#rect-area")
    .append("svg")
    .attr("height", 500)
    .attr("width", 500);

  // Write a forEach() loop for your data array to convert the height values from strings to numbers.
  data.forEach((el) => {
    el.height = parseInt(el.height);
  });

  const x = d3
    .scaleBand()
    .domain(data.map((el) => el.name))
    .range([0, 400])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const y = d3
    .scaleLinear()
    // .domain([0, Math.max(...data.map((d) => d.height))])
    .domain([0, d3.max(data, d => d.height)])
    .range([0, 400]);

  // Use a data join to add a rectangle for each building in the dataset to your SVG.
  const rects = svg.selectAll("rect").data(data);

  rects
    .enter()
    .append("rect")
    // .attr("x", (_, i) => i * 70 + 50)
    .attr('x', d => x(d.name))
    .attr("y", 50)
    .attr('width', x.bandwidth)
    // .attr("width", 50)
    .attr("height", (d) => y(d.height))
    .attr("fill", "gray");
});
