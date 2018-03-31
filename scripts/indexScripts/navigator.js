var latitude;
var longitude;
$(document).ready(function () {

    navigator.geolocation.getCurrentPosition(coordinates, errorMessages);


});

function coordinates(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var geoPosition = {
        location: {
            lng: longitude,
            lat: latitude
        }
    };
    geoPosition = JSON.stringify(geoPosition);
    sessionStorage.setItem("geoData",geoPosition);


    initMap();
    initMapCart();
}

function errorMessages(error) {
    switch (error.code) {
        //заперт на использование геолокации
        case error.PERMISSION_DENIED:
            if( sessionStorage.getItem("geoData")==null){
                alert("You have refused to provide your location. Our application may not work correctly! Please choose your сity!)");
            }
            $("#selectCity").change(function () {
                latitude = $("#selectCity option:selected").get(0).dataset.latitude;
                longitude = $("#selectCity option:selected").get(0).dataset.longitude;
                var geoPosition =  {
                    location: {
                        lng: longitude,
                        lat: latitude
                    }
                };
                geoPosition = JSON.stringify(geoPosition);
                sessionStorage.setItem("geoData",geoPosition);

            });
            initMap();
            initMapCart();
            break;
        //ошибка определения координат(в основнов в неподдерживаемых браузерах)
        case error.POSITION_UNAVAILABLE:
            alert("It's impossible to determine your location.");
            break;
        //    Привышен лимит времени
        case error.TIMEOUT:
            alert("server timeout exceeded");
            break;
        //    неизвестная ошибка
        case error.UNKNOWN_ERR:
            alert("Unknown error!")
    }
}

