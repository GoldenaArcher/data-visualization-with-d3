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

d3.json('data/buildings.json').then(data => {
    // Add an SVG to the #chart-area  div in the index.html file. Give it a width of 500px and a height of 500px.
    const svg = d3.select('#rect-area')
    .append('svg')
    .attr('height', 500)
    .attr('width', 500)

    // Write a forEach() loop for your data array to convert the height values from strings to numbers.
    data.forEach(el => {
        el.height = parseInt(el.height)
    });
    
    // Use a data join to add a rectangle for each building in the dataset to your SVG.
    const rects = svg.selectAll('rect').data(data);

    rects.enter()
    .append('rect')
    .attr('x', (_, i) => i * 70 + 50)
    .attr('y', 50)
    .attr('width', 50)
    .attr('height', d => d.height)
    .attr('fill', 'gray')
})