$(document).ready(function () {
    console.log("done");
    $.ajax({url: "https://olimshelper.herokuapp.com/en/city"}).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            let nameCity;
            let placeId;
            let latitude;
            let longitude;
            for (let key in response[i]) {
                if (key == "name") {
                    nameCity = response[i][key];
                    console.log(nameCity)
                }else if (key == "placeId") {
                    placeId = response[i][key];
                    console.log(placeId)
                }else if (key == "latitude") {
                    latitude = response[i][key];
                    console.log(latitude)
                }else if (key == "longitude") {
                    longitude = response[i][key];
                    console.log(longitude)
                }
            }
            $("#selectCity").append("<option value=\'"+nameCity+"\' data-placeId=\'"+placeId+"\' data-latitude=\'"+latitude+"\' data-longitude=\'"+latitude+"\'>"+nameCity+"</option>")

        }
    })

});