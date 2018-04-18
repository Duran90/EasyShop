var map;
var marker;
var infoWindow;
var popupContent;
var coord;
$(document).ready(function () {

    initMap()
});

function initMap() {
    console.log("ENTER 2");
    popupContent = '<p class="content">You are here!</p>';
    var position = JSON.parse(sessionStorage.getItem("geoData"));

    latitude = +position.location.lat;
    longitude = +position.location.lng;

    coord = new google.maps.LatLng({lat: latitude, lng: longitude});
    console.log(coord);

    map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 10
    });
    console.log(coord);

  markerShop();
    positionMarker();
}
function markerShop() {

    $.ajax("https://easyshoptelran.herokuapp.com/user/stores").then(function (response) {
        console.log("Enter 3");
        for (var key in response.result) {
            $("#mapFilters").append("<div class='checkShop redBackground whiteText '><span>"+key+"</span>" +
                "<input class='redBackground whiteText ' name=\'" + key + "\' value=\'" + key + "\' type='checkbox' /></div>");
            for (let i = 0; i < response.result[key].length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng({
                            lat: response.result[key][i].lat,
                            lng: response.result[key][i].lng
                        }),
                        map: map
                    }
                );
                let nameStore = key;
                let addres = response.result[key][i].address;
                popupContent = '<div><h4>'+nameStore+'</h4><p class="content">' + addres + '</p></div>';
                infoWindow = new google.maps.InfoWindow({
                    content: popupContent
                });
                infoWindow.open(map, marker);

            }

        }

    });
}
function positionMarker() {
    marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
    infoWindow = new google.maps.InfoWindow({
        content: popupContent
    });
    infoWindow.open(map, marker);
    marker.focus();

}
