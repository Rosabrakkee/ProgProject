var data = "Data/SantaCruz.json"

function updateGraph(graphType){
  queue()
      .defer(d3.json, data)
      // .defer(d3.json, "Data/inkomen.json")
      .await(makePage);

  function makePage(error, data1, graphType) {
        if (error) throw error;
  if (graphType = "rain"){
    makeRainGraph(data1)
  }
  if (graphType = "temp"){
    makeTempGraph(data1)
  }

}
}

function setCityInfo(name){
  data = "Data/" + name + ".json"
  // makeTempGraph(data)
      updateGraph("rain");
  };
