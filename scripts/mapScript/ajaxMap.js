var map;
var marker;
var infoWindow;
var popupContent;
$(document).ready(function () {


    $.ajax("https://easyshoptelran.herokuapp.com/user/stores").then(function (response) {
        console.log("Enter 3");
        for (var key in response.result) {
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
                popupContent = '<h3 class="content"/' + addres + '>';
                infoWindow = new google.maps.Marker({
                    content: popupContent
                });

            }

        }

    });

});

function initMap() {
    console.log("ENTER 2");
    popupContent = '<p class="content">You are here!</p>';
    var position = JSON.parse(sessionStorage.getItem("geoData"));
    if(position == null ){
        console.log("csddsa")
    }
    latitude = +position.location.lat;
    longitude = +position.location.lng;

    var coord = new google.maps.LatLng({lat: latitude, lng: longitude});
    console.log(coord);
    console.log("lat" + latitude + " " + "lng " + longitude);

    map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 15
    });

    marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
    infoWindow = new google.maps.InfoWindow({
        content: popupContent
    });
    infoWindow.open(map, marker);

}
