$(document).ready(function () {
    let barcode;
    let amount;
    let name;
    if(sessionStorage.getItem("request")) {
        let list = JSON.parse(sessionStorage.getItem("request"));
        $.each(list.items,function (key,val) {
            barcode = key;
            $.each(list.items[key],function (key,val) {
                if(key == "amount"){
                    amount = val;
                }
                if(key == "name"){
                    name = val;
                }
            });
            $("#productList").append('<li class="itemList" data-barcode = \"' + barcode + '\" data-amount = \"' + amount + '\" data-value=\"' + name + '\"><span>' + name +
                '<span>' + amount + '</span><span class = "delItem">X</span></span></li>'
            );
        });
        if ($("#productList").children().length > 0) {
            $("#doneItemListBtn,#createItemListBtn").show();
        }

        $(".btn-remove").click(function () {
            $(this).parents(".itemList").remove();
            if ($("#productList").children().length <= 0) {
                $("#doneItemListBtn,#createItemListBtn").hide();
            }
        })

    }
});