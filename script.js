var mymap = L.map('mapid').setView([37.7,-122.4], 10);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
    maxZoom: 18
}).addTo(mymap);

var ratIcon = L.icon({
    iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
    iconSize: [50, 40]
});

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function (data) {
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: ratIcon });
        }
    }).addTo(mymap);
});
