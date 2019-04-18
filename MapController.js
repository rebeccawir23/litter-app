// JavaScript source code
var map;

function initMap(){
    var pos = {lat: -116.2157089, lng: 43.6060238};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: pos});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: pos, map: map});
}