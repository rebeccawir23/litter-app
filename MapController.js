// JavaScript source code
var map;

function initMap(){
    var pos = {lat: 43.6016653, lng: -116.2106962};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 2, center: pos});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: pos, map: map});
}