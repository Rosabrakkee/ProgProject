# Design document


## Problem Statement
Over the last few years, South-America has become a popular traveling destination for many backpackers. Historical relics, architectural and natural wonders, a diverse range of foods and culture, vibrant and colorful cities, and stunning landscapes attract millions of tourists every year to South America. Because of widespread and diverse wonders South-America has to over, it might be hard and overwelming to plan your trip. There is lack of a clear overview and a suggestion on the best route for a backpacker that is dreaming of an adventure through South-America.

## Solution
This visualisation is going to be an interactive map of a popular route through South-America. This maps allows for interactive information on clicking a city / place on the route. The information will help a traveller make a desicion on the best time to visit the city, how much money to bring and how touristy the place is.


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
