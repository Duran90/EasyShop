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
                    var totalPrice = 0;
                    out += "<div class=\'tableWrap'\>" +
                        "<table class=\"table table-striped table-bordered table-hover table-condensed\">" +
                        "<th colspan='3'>" + stores[key]["name"] + "</th>"+
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
                        totalPrice+= stores[key]["items"][key2]["price"]*stores[key]["items"][key2]["amount"];
                        tablesCounter++;
                    }
                    out+="<tr class='totalPriceRow'>" +
                        "<td colspan='3'>" + "Total price: " + totalPrice.toFixed(1) + " ₪" +
                        "</td>" +
                        "</tr>" +
                        "</table>" +
                        "</div>";

                    $("#economy").html(out);

                }


            } else {
                console.log("Cart is empty")
            }


        }

    })

}

