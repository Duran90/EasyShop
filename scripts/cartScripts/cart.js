$(document).ready(function () {
    AjaxCart();
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
            if (main_object["status"] == "SUCCESS") {

                var stores = main_object["result"]["results"];
                var out = "";

                for (var key in stores) {
                    //проходит по всем магазинам (по айди), создает таблицу и вбивает название магазина в шапку таблицы
                    var tablesCounter = 0;
                    var total_price = 0;
                    out += "<div class='divTable'>" +
                        "<table class=\"table table-striped table-bordered table-hover table-condensed\">" +
                        "<th colspan='3'>" + stores[key]["name"] + "</th>";

                    for (var key2 in stores[key]["items"]) {
                        //проходит по итемам конкретного магазина(по штрихкоду), вбивает в таблицу все товары, цены и количество

                        out += "<tr>" +
                            "<td>" +
                            stores[key]["items"][key2]["name"] +
                            "</td>" +
                            "<td>" +
                            stores[key]["items"][key2]["price"] +
                            "</td>" +
                            "<td>" +
                            stores[key]["items"][key2]["amount"] +
                            "</td>" +
                            "</tr>";
                        total_price+= stores[key]["items"][key2]["price"]*stores[key]["items"][key2]["amount"];
                        tablesCounter++;
                    }
                    out+="<tr class='totalPriceRow'>" +
                        "<td colspan='3'>" + "Total price: " + total_price +
                        "</td>" +
                        "</tr>" +
                        "</table>" +
                        "</div>";
                    if(tablesCounter%3==0){
                        out+="<br>";
                    }

                    $("#economy").html(out);

                }


            } else {
                console.log("Cart is empty")
            }


        }

    })

}

