function initMap(){
  // Map options
  var options = {
    zoom:4,
    center:{lat:-17.7862900,lng:-63.1811700}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
    // addRoute();
  });

  // function addRoute(){
  //   function initialize() {
  //              directionsDisplay = new google.maps.DirectionsRenderer();
  //              var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  //              var myOptions = {
  //                  zoom: 6,
  //                  mapTypeId: google.maps.MapTypeId.ROADMAP,
  //                  center: chicago
  //              };
  //              map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  //              directionsDisplay.setMap(map);
  //              calcRoute();
  //          }
  //
  //          function calcRoute() {
  //              var first = new google.maps.LatLng(-19.03332,lng: -65.26274);
  //              var second = new google.maps.LatLng(42.496401, -124.413126);
  //
  //              var request = {
  //                  origin: "LIMA",
  //                  destination: "BOLIVIA",
  //                  waypoints: [{location: first, stopover: false},
  //                      {location: second, stopover: false}],
  //                  optimizeWaypoints: true,
  //                  travelMode: google.maps.DirectionsTravelMode.WALKING
  //              };
  //              directionsService.route(request, function (response, status) {
  //                  if (status == google.maps.DirectionsStatus.OK) {
  //                      directionsDisplay.setDirections(response);
  //                      var route = response.routes[0];
  //                      var summaryPanel = document.getElementById("directions_panel");
  //                      summaryPanel.innerHTML = "";
  //                      // For each route, display summary information.
  //                      // for (var i = 0; i < route.legs.length; i++) {
  //                      //     var routeSegment = i + 1;
  //                      //     summaryPanel.innerHTML += "<b>Route Segment: " + routeSegment + "</b><br />";
  //                      //     summaryPanel.innerHTML += route.legs[i].start_address + " to ";
  //                      //     summaryPanel.innerHTML += route.legs[i].end_address + "<br />";
  //                      //     summaryPanel.innerHTML += route.legs[i].distance.text + "<br /><br />";
  //                      }
  //                  } else {
  //                      alert("directions response " + status);
  //                  }
  //              });
  //          }
  // }
  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */

  // Array of markers
  var markers = [
    {
      coords:{lat:-17.7862900,lng:-63.1811700},
      // content:'<h1>Santa Cruz</h1>',
      content: '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>'
    },
    {
      coords:{lat:-19.03332,lng: -65.26274},
      content:'<h1>Sucre</h1>'
    },
    {
      coords:{lat:-16.500093,lng:-68.214684},
      content:'<h1>La Paz</h1>'
    },
    {
      coords:{lat:-20.4596,lng:-66.82503},
      content:'<h1>Uyuni</h1>'
    },
    {
      coords:{lat:-13.52264,lng:-71.96734},
      content:'<h1>Cusco</h1>'
    },
    {
      coords:{lat:-16.39889,lng:-71.535},
      content:'<h1>Arequipa</h1>'
    },
    {
      coords:{lat:-12.046374,lng:-77.042793},
      content:'<h1>Lima</h1>'
    }
  ];

  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }
    // Check for content
    if(props.contentString){

      var infoWindow = new google.maps.InfoWindow({
        content:props.content
        });
    }
    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}
