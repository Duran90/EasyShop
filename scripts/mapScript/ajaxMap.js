function initMap() {
    var popupContent = '<p class="content">You are here!</p>';
    var cord1 = JSON.parse(sessionStorage.getItem("geoData"));

    latitude = +cord1.location.lat;
    longitude = +cord1.location.lng;

    var coord = new google.maps.LatLng({lat: latitude, lng: longitude});
    console.log("lat" + latitude + " " + "lng " + longitude);

    var map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        draggable: true
    });
    var infoWindow = new google.maps.InfoWindow({
        content: popupContent
    });
    infoWindow.open(map, marker);

    marker = new google.maps.Marker({
        position:new google.maps.LatLng({lat: 31.4324, lng: 34.5325}),
        map: map
    })


}
