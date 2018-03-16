$(document).ready(function () {
    console.log("done");
    $.ajax({url: "https://olimshelper.herokuapp.com/en/city"}).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let nameCity;
            let placeId;
            let latitude;
            let longitude;
            for (let key in response[i]) {
                if (key == "name") {
                    nameCity = response[i][key];
                }else if (key == "placeId") {
                    placeId = response[i][key];
                }else if (key == "latitude") {
                    latitude = response[i][key];
                }else if (key == "longitude") {
                    longitude = response[i][key];
                }
            }
            $("#selectCity").append("<option class='citys' value=\'"+nameCity+"\'" +
                " data-placeId=\'"+placeId+"\' " +
                "data-latitude=\'"+latitude+"\' " +
                "data-longitude=\'"+longitude+"\'>"+nameCity+"</option>")
        }

    })


});