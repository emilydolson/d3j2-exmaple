//Selections are handy way to deal with large groups of DOM nodes
//They are the basic unit used in d3.js

var paragraph_selection = d3.selectAll("p")

var body_selection = d3.select("body")

//You can change the attributes of all elements of a selection at once
paragraph_selection.style("color", "green") //Now all the text is green!

//The text in a paragraph node is just an attribute...
paragraph_selection.text("d3 rocks!")

//Hmmm, making all of the text the same thing isn't that useful...
//It's time to learn about...

//Binding data! The crux of d3
paragraph_selection.data(["first paragraph", "second paragraph"])

//Now each <p> node has its own __data__ attribute
//This automatically gets passed into functions
//called on that node
paragraph_selection.text(function(d){return d})

//I promised you pretty visualizations, so let's do something more exciting
//than text! D3 has extensive SVG utilities.

//SVG elements should have an svg node as their parent
svg = body_selection.append("svg")
circle = svg.append("circle")

//What gives? There's no circle!
//It now exists in the DOM, it just isn't visible. Let's make it visible
circle.attr("cx", 5).attr("cy", 5).attr("r", 5)

//Now let's put it all together!
svg.selectAll("circle")
    .data([10,20,30,40,50,60,70,80])
    .enter() //Data actually returns three selections...back to the slides!
    .append("circle")
    .attr("cx", function(d){return d})
    .attr("cy", function(d){return d})
    .attr("r", function(d){return d/10})

//d3 makes transitions and interactions relatively easy!
d3.select("body").transition().duration(500)
    .style("background-color", "black");

d3.select("body").transition().duration(500)
    .style("background-color", "white");

d3.selectAll("circle").transition().duration(1000)
    .attr("cx", function(d){return d+100})

