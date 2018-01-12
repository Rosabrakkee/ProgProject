/**
 * Rosa Brakkeee
 * DataProc Week 6
 *
 * This progam creates a barchart of the average income per month in NL
 *
 * Barchart was inspired by: http://bl.ocks.org/Jverma/887877fc5c2c2d99be10
 **/


function makeGraph(data) {
  console.log("THE GRAPH")
  var  data = [
     {"month":"January","rainfall":"170.0"},
     {"month":"Februari","rainfall":"130"},
     {"month":"Maart","rainfall":"120"},
     {"month":"April","rainfall":"80"},
     {"month":"Mei","rainfall":"100"},
     {"month":"Juni","rainfall":"70"},
     {"month":"Juli","rainfall":"60"},
     {"month":"August","rainfall":"60"},
     {"month":"September","rainfall":"60"},
     {"month":"Oktober","rainfall":"70"},
     {"month":"November","rainfall":"120"},
     {"month":"December","rainfall":"150"}
   ]
   console.log(data)


    // create canvas sizes
    var padding = {
          top: 100,
          right: 20,
          bottom: 100,
          left: 40
        },
        width = 600 - padding.left - padding.right,
        height = 400 - padding.top - padding.bottom;

    // set the ranges of the axis
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().range([height, 0]);

    // set the xAxis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")

    // set the yAxis with tickes of 10
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    // create the SVG element to html page
    var svg2 = d3.select("#graph1")
        .attr("id", "barchart")
        .attr("width", width + padding.left + padding.right)
        .attr("height", height + padding.top + padding.bottom)
        .append("g")
        .attr("transform",
            "translate(" + padding.left + "," + padding.top + ")");

    // create a tooltip with info for every bar
    var tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-8, 0])
        .html(function(d) {
            return Math.round(d.rainfall) + "<strong>mm</strong>"
        });

    //svg for loading the tooltip
    svg2.call(tip)

    data.forEach(function(d) {
        d.month = d.month;
        d.rainfall = d.rainfall;
    });

    // scale the axis's to the loaded data
    x.domain(data.map(function(d) {
        return d.month;
    }));
    y.domain([0, d3.max(data, function(d) {
       return parseInt(d.rainfall)
    })]);

    // add title to the graph
    svg2.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (padding.top / 3))
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .text("Average rainfall Santa Cruz, Bolivia");

    // add Xaxis with months rotated
    svg2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-60)");

    // add Yaxis with a name
    svg2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -35)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("rainfall (mm)");

    // Add the bars to the chart and add the mouse hover element
    svg2.selectAll("barchart")
        .data(data)
        .enter().append("rect")
        .attr("id", function(d) {
            return d.month
        })
        .attr("class", "barchart")
        .attr("x", function(d) {
            return x(d.month);
        })
        .attr("width", x.rangeBand())
        .attr("y", function(d) {
            return y(d.rainfall);
        })
        .attr("height", function(d) {
            return height - y(d.rainfall);
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)
};
