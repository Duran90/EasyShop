var requestJson;
$(document).ready(function () {
    console.log(latitude+" "+longitude)

    $("#addItemInListBtn").click(function () {
        let item = $("#inputItemInList").val();
        let amount = $("#inputItemAmount").val();
        if (amount == "") {
            alert("Enter Amount")
        } else if (!item == "") {
            var code;
            for (var bar in index) {
                if (bar == item) {
                    code = index[bar];
                }
            }
            if ($(".itemList").length == 0) {
                $("#productList").append('<li class="itemList" data-barcode = \"' + code + '\" data-amount = \"' + amount + '\" data-value=\"' + item + '\">' + item +
                    '<span>' + amount + '</span>' + ' qty' +
                    '<sup><button class="btn-remove redBackground whiteText" type="button" value="remove">x</button></sup></li>');
                $("#inputItemInList").val('');
                $("#inputItemAmount").val('');
            }
            else {
                for (let i = 0; i < $(".itemList").length; i++) {
                    if ($(".itemList").get(i).dataset.value == item) {
                        var doubleAmount = $(".itemList").get(i).dataset.amount;
                        amount = +amount + +doubleAmount;
                        $(".itemList").get(i).remove();
                    }
                }

                $("#productList").append('<li class="itemList" data-barcode = \"' + code + '\" data-amount = \"' + amount + '\" data-value=\"' + item + '\">' + item +
                    '<span>' + amount + '</span>' + ' qty' +
                    '<sup><button class="btn-remove redBackground whiteText" type="button" value="remove">x</button></sup></li>');
                $("#inputItemInList").val('');
                $("#inputItemAmount").val('');
            }

        } else {
            alert("Enter the name of the product!")
        }
        if ($("#productList").children().length > 0) {
            $("#doneItemListBtn,#createItemListBtn").show();
        }

        $(".btn-remove").click(function () {
            $(this).parents(".itemList").remove();
            if ($("#productList").children().length <= 0) {
                $("#doneItemListBtn,#createItemListBtn").hide();
            }
        })
    });

    $("#createItemListBtn").click(function () {
        sessionStorage.removeItem("request");
        $("#productList").children().remove();
        $("#doneItemListBtn,#createItemListBtn").hide();
    });
    $("#doneItemListBtn").click(function () {
        let itemsList = $(".itemList");
        let items = {};
        let barcode;
        let amount;
        let name;

        for (let i = 0; i < itemsList.length; i++) {
            barcode = itemsList[i].dataset.barcode;
            amount = itemsList[i].dataset.amount;
            name = itemsList[i].dataset.value;
            items[barcode] = {
                amount: amount,
                name: name
            };
        }

        requestJson = {
            location: {
                lng: longitude,
                lat: latitude
            },
            radius: 100.0,
            items
        };
        console.log(requestJson);
        requestJson = JSON.stringify(requestJson);
        sessionStorage.setItem("request", requestJson);

    });


});
