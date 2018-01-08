window.onload  = function(){
  d3.xml("Data/SouthAmericaMap.svg", "image/svg+xml", function(error, xml) {
      if (error) throw error;
      document.body.appendChild(xml.documentElement);

      var svg = d3.select("svg")
      // console.log(svg)
      console.log("test2")
      svgContainer = svg.selectAll("#All")
      svgContainer.style("fill", "red")
        .on("mouserover", onHover)
        // .on("click", onClick)

        // .on("mouseout", HoverOut)
      // console.log(path#6488)
      var test2 = d3.selectAll("path#path6488")


      // console.log(test2)
      var test = svgContainer.selectAll("#Suriname")
      d3.select(test).style("fill", "red")
      // console.log(test)
      // console.log(svgContainer[0])
      function onHover(){
        console.log("Test")
        d3.select(this).style("fill", "yellow")
      }
});
};
