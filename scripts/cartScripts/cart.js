$(document).ready(function () {
    if (sessionStorage.getItem("request") == null) {
        $('#left-part-of-cart').html("<br>");

        $("#right-part-of-cart").html("<img src='images/cart/cartIsEmpty.jpg'" +
            " style='width: 20vw; margin-top: 8%'><p style='margin: 0 0 2vw 0; font-size: 2vw'>Your cart is empty</p>" +
            "<a href=\'index.html'\ >" +
            "<button class=\"btn btn-default redBackground whiteText\" style='margin-bottom: 5vw'>" + "Add items to the cart" +
            "</button>" +
            "</a>")
    }

    $('#optimal').hide();
    $('#totalOptimal').hide();
    $('#yourEconomyOpacity').hide();
    $('#mapOptimal').hide();
    AjaxCart();
    // initMapEconomy();
    // initMapOptimal();
    console.log(sessionStorage.getItem("request"));
});

function AjaxCart() {
    var temp = sessionStorage.getItem("request");

    $.ajax({
            url: 'https://easyshoptelran.herokuapp.com/user/result',
            contentType: 'application/json',
            data: temp,
            type: 'POST',
            success: function (main_object) {
                console.log(main_object);
                if (main_object["result"]["optimal"]["items"] != null) {
                    if (main_object["status"] == "SUCCESS") {


                        var stores = main_object["result"]["results"];

                        var optimalItems = main_object["result"]["optimal"]["items"];
                        var out = "";
                        var outOptimal = "";
                        var totalAllTables = 0;

                        for (var key in stores) {
                            //проходит по всем магазинам (по айди), создает таблицу и вбивает название магазина в шапку таблицы
                            var tablesCounter = 0;
                            var totalPrice = 0;

                            out += "<div class=\'tableWrap'\>" +
                                "<table class=\"table table-striped table-bordered table-hover table-condensed\">" +
                                "<th colspan='3'>" + stores[key]["name"] + "</th>" +
                                "<tr class='tableBold'>" + "<td>" + "Item name" + "</td>" +
                                "<td class='centerTd'>" + "Price" + "</td>" +
                                "<td class='centerTd'>" + "Quantity" + "</td>" +
                                "</tr>";

                            for (var key2 in stores[key]["items"]) {
                                //проходит по items конкретного магазина(по штрихкоду), вбивает в таблицу все товары, цены и количество
                                out += "<tr>" +
                                    "<td>" +
                                    stores[key]["items"][key2]["name"] +
                                    "</td>" +
                                    "<td class=\'centerTd'\>" +
                                    stores[key]["items"][key2]["price"] +
                                    "</td>" +
                                    "<td class=\'centerTd'\>" +
                                    stores[key]["items"][key2]["amount"] +
                                    "</td>" +
                                    "</tr>";
                                totalPrice += stores[key]["items"][key2]["price"] * stores[key]["items"][key2]["amount"];
                                tablesCounter++;
                            }
                            out += "<tr class='totalPriceRow'>" +
                                "<td colspan='3'>" + "Total price: " + totalPrice.toFixed(1) + " ₪" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</div>";

                            totalAllTables += totalPrice;
                        }

                        out += "<div>" + "<a href=\'index.html'\>" +
                            "<button class=\"btn btn-default redBackground whiteText\">" + "Edit cart" +
                            "</button>" +
                            "</a>" +
                            "</div>";

                        $("#economy").html(out);

                        outOptimal += "<div class=\'tableWrap'\ style='width: 60%'>" +
                            "<table class=\"table table-striped table-bordered table-hover table-condensed\">" +
                            "<th colspan='3'>" + main_object["result"]["optimal"]["name"] + "</th>" +
                            "<tr class='tableBold'>" + "<td>" + "Item name" + "</td>" +
                            "<td class='centerTd'>" + "Price" + "</td>" +
                            "<td class='centerTd'>" + "Quantity" + "</td>" +
                            "</tr>";


                        var totalPriceOptimal = 0;

                        for (var key3 in optimalItems) {
                            //проходит по items магазина из поля optimal, вбивает в таблицу все товары, цены и количество
                            outOptimal += "<tr>" +
                                "<td>" +
                                optimalItems[key3]["name"] +
                                "</td>" +
                                "<td class=\'centerTd'\>" +
                                optimalItems[key3]["price"] +
                                "</td>" +
                                "<td class=\'centerTd'\>" +
                                optimalItems[key3]["amount"] +
                                "</td>" +
                                "</tr>";
                            totalPriceOptimal += optimalItems[key3]["price"] * optimalItems[key3]["amount"];
                        }

                        outOptimal += "<tr class='totalPriceRow'>" +
                            "<td colspan='3'>" + "Total price: " + totalPriceOptimal.toFixed(1) + " ₪" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</div>" +
                            "<div>" +
                            "<a href=\'index.html'\>" +
                            "<button class=\"btn btn-default redBackground whiteText\">" + "Edit cart" +
                            "</button>" +
                            "</a>" +
                            "</div>";

                        $("#optimal").html(outOptimal);


                        //заполнение total и yourEconomy в leftPart


                        $("#totalEconomy").html("<h4 style=\'margin: 0'\>TOTAL:</h4><br>" + "<h1 style='margin: 0'>₪" + totalAllTables.toFixed(1) + "</h1>");
                        $("#totalOptimal").html("<h4 style='margin: 0'>TOTAL:</h4><br>" + "<h1 style='margin: 0'>₪" + totalPriceOptimal.toFixed(1) + "</h1>");

                        $("#yourEconomy").html("<h4 style='margin: 0'>YOUR ECONOMY:</h4><br>" + "<h1 style='margin: 0'>₪" + (totalPriceOptimal - totalAllTables).toFixed(1) + "</h1>");
                        $("#yourEconomyOpacity").html("<h4 style='margin: 0'>YOUR POTENTIAL ECONOMY:</h4><br>" + "<h1 style='margin: 0'>₪" + (totalPriceOptimal - totalAllTables).toFixed(1) + "</h1>");

                        // MAP

                        var myGeo = JSON.parse(sessionStorage.getItem('geoData'));
                        var myLat = myGeo.location.lat;
                        var myLng = myGeo.location.lng;

                        // MAP economy

                        var economyMap = new google.maps.Map(document.getElementById('mapEconomy'), {
                            zoom: 15,
                            center: {lat: myLat, lng: myLng}

                        });

                        // var markerMyLocationEconomy = new google.maps.Marker;

                        var economyStoresLocations = {};
                        var counterEconomyStores = 0;

                        for (var key in stores) {
                            economyStoresLocations[counterEconomyStores] = {
                                lat: stores[key]["lat"],
                                lng: stores[key]["lng"]
                            };
                            counterEconomyStores++
                        }
                        console.log(economyStoresLocations);


                        for (var i = 0; i < economyStoresLocations.length; i++) {
                            var location = economyStoresLocations[i];
                            var marker = new google.maps.Marker({
                                position: {lat: location.lat, lng: location.lng},
                                map: economyMap
                            })
                        }


                        // MAP optimal

                        var optimalMap = new google.maps.Map(document.getElementById('mapOptimal'), {
                            zoom: 15,
                            center: {lat: myLat, lng: myLng}

                        });
                        var markerMyLocationOptimal = new google.maps.Marker({
                            position: {lat: myLat, lng: myLng},
                            map: optimalMap,
                            icon: {
                                url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                                anchor: new google.maps.Point(10, 10),
                                scaledSize: new google.maps.Size(10, 17)
                            }

                        });

                        var markerOptimalStore = new google.maps.Marker({
                            position: {lat: main_object.result.optimal.lat, lng: main_object.result.optimal.lng},
                            map: optimalMap,

                        })

                        // end MAP
                    }
                } else {
                    $('#left-part-of-cart').html("<br>");
                    $("#map").hide();
                    $("#right-part-of-cart").html("<img src='images/cart/cartIsEmpty.jpg'" +
                        " style='width: 20vw; margin-top: 8%'><p style='margin: 0 0 2vw 0; font-size: 2vw'>Your cart is empty</p>" +
                        "<a href=\'index.html'\ >" +
                        "<button class=\"btn btn-default redBackground whiteText\" style='margin-bottom: 5vw'>" + "Add items to the cart" +
                        "</button>" +
                        "</a>")
                }


            }

        }
    )

}

