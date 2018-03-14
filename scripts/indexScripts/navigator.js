var latitude;
var longitude;
$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(coordinates, errorMessages);
});

function coordinates(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

function errorMessages(error) {
    switch (error.code) {
        //заперт на использование геолокации
        case error.PERMISSION_DENIED:
            alert("You have refused to provide your location. Our application may not work correctly!");
            //TODO
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

