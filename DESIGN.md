# Design document

![alt text](Doc/GeneralIdea.png "General Idea For Project Proposal")

## External sources
- Euro vs. foreign currencies: http://www.xe.com/currency/eur-euro
- Lng Lat: http://itouchmap.com/latlong.html

## Technical components
### Interactive components
- On click CITY in map -> activates an average temperature graph and euroconversion graph
- On toggle [temperature, rainfall] in average temperature graph -> changes the temperature graph in a rainfall graph
- On toggle [Euro, dollar] in euroconversion graph -> changes the euroconversion graph to a dollarconversion graph

### Functions:
- Get route on map, using google waypoints
- Create info window for every CITY
- Update 2 Graphs for every CITY

## Plugins
- google maps api
- google places api
- accu weather api
