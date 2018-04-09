function initMap() {
    console.log('456');
    var coord={lat: latitude, lng: longitude};
    console.log("lat"+latitude+" "+"lng "+ longitude);
    var map = new google.maps.Map(document.getElementById("map"), {
        center: coord,
        zoom: 15
    });
    var marker =new google.maps.Marker({
        position: coord,
        map: map,
        draggable:true,

    });

}