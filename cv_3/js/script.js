// Regular map
function regular_map() {
var var_location = new google.maps.LatLng(52.2241881, 21.0180055);

var var_mapoptions = {
center: var_location,
zoom: 16
};

var var_map = new google.maps.Map(document.getElementById("map-container"),
var_mapoptions);

var var_marker = new google.maps.Marker({
position: var_location,
map: var_map,
title: "Warzawa"
});
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);