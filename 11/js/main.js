const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "red");

const svg2 = d3
  .select("#rect-area")
  .append("svg")
  .attr("width", 500)
  .attr("height", 400);

svg2
  .append("line")
  .attr("x1", 5)
  .attr("y1", 5)
  .attr("x2", 25)
  .attr("y2", 395)
  .attr("stroke", "blue")
  .attr("stroke-width", 5);

svg2.append('rect')
.attr('x', 50)
.attr('y', 200)
.attr('width', 40)
.attr('height', 30)
.attr('fill', 'green')

svg2.append('ellipse')
.attr('cx', 200)
.attr('cy', 200)
.attr('rx', 50)
.attr('ry', 20)
.attr('fill', 'orange')