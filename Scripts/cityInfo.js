// var data = "Data/SantaCruz.json"

function updateGraph(data){
  queue()
      .defer(d3.json, data)
      // .defer(d3.json, "Data/inkomen.json")
      .await(makePage);

  function makePage(error, data1) {
        if (error) throw error;
  if (graphType = "rain"){
    makeRainGraph(data1)
  }
  if (graphType = "temp"){
    makeTempGraph(data1)
  }

}
}
