var requestJson;
$(document).ready(function () {


    $("#addItemInListBtn").click(function () {
        let item = $("#inputItemInList");
        let amount = $("#inputItemAmount");
        if (amount.val() == "") {
            alert("Enter Amount")
        } else if (!item.val() == "") {
            var code;
            for (var bla in index) {
                if (bla == item.val()) {
                    code = index[bla];
                }
            }
            $("#productList").append('<li class="itemList" data-barcode = \"' + code + '\" data-amount = \"' + amount.val() + '\" data-value=\"' + item.val() + '\">' + item.val() +
                '<span>' + amount.val() + '</span>' + ' qty' +
                '<sup><button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></sup></li>');
            item.val('');
            amount.val('');


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
        if (permissionNav == false) {
            latitude = $("#selectCity option:selected").get(0).dataset.latitude;
            longitude = $("#selectCity option:selected").get(0).dataset.longitude;
        }
        requestJson = {
            location: {
                lng: longitude,
                lat: latitude
            },
            radius: 2.0,
            items
        };
        console.log(requestJson)
        requestJson = JSON.stringify(requestJson);
        sessionStorage.setItem("request", requestJson);

    });


});
