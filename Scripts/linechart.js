/**
 * Rosa Brakkeee
 * DataProc Week 6
 *
 * This progam creates a barchart of the average income per month in NL
 *
 * Barchart was inspired by: http://bl.ocks.org/Jverma/887877fc5c2c2d99be10
 **/


function makeGraph2(data) {
  console.log("THE GRAPH2")
  var  data = [
     {"month":"January","currency":"8.254"},
     {"month":"Februari","currency":"8.334"},
     {"month":"Maart","currency":"8.344"},
     {"month":"April","currency":"8.354"},
     {"month":"Mei","currency":"8.354"},
     {"month":"Juni","currency":"8.364"},
     {"month":"Juli","currency":"8.324"},
     {"month":"August","currency":"8.334"},
     {"month":"September","currency":"8.344"},
     {"month":"Oktober","currency":"8.333"},
     {"month":"November","currency":"8.331"},
     {"month":"December","currency":"8.338"}
   ]
   console.log(data)


    // create canvas sizes
    var padding = {
          top: 100,
          right: 30,
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

        // Define the line
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.month); })
        .y(function(d) { return y(d.currency); });

    // create the SVG element to html page
    var svg2 = d3.select("#graph2")
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
            return Math.round(d.currency * 100) /100 + "<strong>mm</strong>"
        });

    //svg for loading the tooltip
    svg2.call(tip)

    data.forEach(function(d) {
        d.month = d.month;
        d.currency = d.currency;
    });

    // scale the axis's to the loaded data
    x.domain(data.map(function(d) {
        return d.month;
    }));
    y.domain([d3.min(data, function(d) {
       return (parseInt(d.currency))  }),
              d3.max(data, function(d) {
       return ((parseInt(d.currency) + 0.5))
    })]);

    // add title to the graph
    svg2.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (padding.top / 3))
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .text("Exchange rate EUR/BOB");

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
        .attr("y", -40)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("currency (mm)");


      // Add the valueline path.
      svg2.append("path")
          .attr("class", "line")
          .attr("d", valueline(data));

    // // Add the bars to the chart and add the mouse hover element
    // svg2.selectAll("barchart")
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("id", function(d) {
    //         return d.month
    //     })
    //     .attr("class", "barchart")
    //     .attr("x", function(d) {
    //         return x(d.month);
    //     })
    //     .attr("width", x.rangeBand())
    //     .attr("y", function(d) {
    //         return y(d.currency);
    //     })
    //     .attr("height", function(d) {
    //         return height - y(d.currency);
    //     })
    //     .on("mouseover", tip.show)
    //     .on("mouseout", tip.hide)
};
