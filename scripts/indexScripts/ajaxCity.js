$(document).ready(function () {
    var data = JSON.parse(sessionStorage.getItem("geoData"));
    $.ajax({url: "https://olimshelper.herokuapp.com/en/city"}).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let nameCity;
            let placeId;
            let latitude;
            let longitude;
            for (let key in response[i]) {
                if (key == "name") {
                    nameCity = response[i][key];
                } else if (key == "placeId") {
                    placeId = response[i][key];
                } else if (key == "latitude") {
                    latitude = response[i][key];
                } else if (key == "longitude") {
                    longitude = response[i][key];
                }
            }
            if (nameCity == "Tel Aviv" && sessionStorage.getItem("geoData") == null) {

                var $elem = $("#header").find('#selectCity');
                $elem.append("<option class='citys' selected value=\'" + nameCity + "\'" +
                    " data-placeId=\'" + placeId + "\' " +
                    "data-latitude=\'" + latitude + "\' " +
                    "data-longitude=\'" + longitude + "\'/" + nameCity + ">" + nameCity +"</option>");
                var geoPosition = {
                    location: {
                        lng: longitude,
                        lat: latitude,
                        cty: nameCity
                    }
                };
                geoPosition = JSON.stringify(geoPosition);
                sessionStorage.setItem("geoData", geoPosition);
            } else if(data !== null && data.location !== null && data.location.cty !== null && nameCity == data.location.cty) {


                var $elem = $("#header").find('#selectCity');
                $elem.append("<option class='citys' selected value=\'" + nameCity + "\'" +
                    " data-placeId=\'" + placeId + "\' " +
                    "data-latitude=\'" + latitude + "\' " +
                    "data-longitude=\'" + longitude + "\'/" + nameCity + ">"+ nameCity +"</option>")

            }else {
                var $elem = $("#header").find('#selectCity');
                $elem.append("<option class='citys' value=\'" + nameCity + "\'" +
                    " data-placeId=\'" + placeId + "\' " +
                    "data-latitude=\'" + latitude + "\' " +
                    "data-longitude=\'" + longitude + "\'/" + nameCity + ">"+ nameCity +"</option>")
            }

        }

    });


});