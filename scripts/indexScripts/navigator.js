var latitude;
var longitude;
var city;
var geoPosition;
$(document).ready(function () {

    navigator.geolocation.getCurrentPosition(coordinates, errorMessages);
    console.log("ENTER Start")


});

function coordinates(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key=AIzaSyDnFUNDyjDUZmcEM21BT3tteHWDaEVST6Y&language=en&result_type=administrative_area_level_2")
        .then(function (response) {
            console.log("ENTER 1");
        city = response.results[0].address_components[0].long_name;
        geoPosition= {
            location: {
                lng: longitude,
                lat: latitude,
                cty: city
            }
        };

            geoPosition = JSON.stringify(geoPosition);
            sessionStorage.setItem("geoData",geoPosition);
    });


    initMap();
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
                var city = $("#selectCity option:selected").val();
                var geoPosition =  {
                    location: {
                        lng: longitude,
                        lat: latitude,
                        cty:city
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

