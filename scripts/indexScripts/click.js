var recuestJson = {};
$(document).ready(function () {
    $("#addItemInListBtn").click(function () {
        let item = $("#inputItemInList");
        let amount = $("#inputItemAmount");
        if (amount.val() == "") {
            alert("Enter Amount")
        } else if (!item.val() == "") {
            $("#productList").append('<li class="itemList" data-amount = \"' + amount.val() + '\" data-value=\"' + item.val() + '\">' + item.val() +
                '<span>' + amount.val() + '</span>' + ' qty' +
                '<sup><button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></sup></li>');
            item.val('');
            amount.val('');

        } else {
            alert("Enter the name of the product!")
        }
        if ($("#productList").children().length > 0) {
            $("#doneItemListBtn").show();
        }

        $(".btn-remove").click(function () {
            $(this).parents(".itemList").remove();
            if ($("#productList").children().length <= 0) {
                $("#doneItemListBtn").hide();
            }
        })
    });
    $("#doneItemListBtn").click(function () {
        let itemsList = $(".itemList");
        let items = {};
        let name;
        let amount;
        for (let i = 0; i < itemsList.length; i++) {
            name = itemsList[i].dataset.value;
            amount = itemsList[i].dataset.amount;
            items[name] = amount;
        }
        recuestJson = {
            location: {
                lng: longitude,
                lat: latitude
            },
            radius: 2.0,
            items
        };
    })

});
